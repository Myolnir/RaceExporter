const {DEFAULT_ACTIVITIES_PAGINATION_LIMIT} = require('../constants');
const {first, last} = require('lodash');
module.exports = class RaceExporterService {
  constructor ({config, database, stravaConnector, twilioConnector}) {
    this.config = config;
    this.database = database;
    this.stravaConnector = stravaConnector;
    this.twilioConnector = twilioConnector;
  }

  /**
     * Gets all user activities from its own database instead of from the provider.
     * @param {*} logger
     */
  async retrieveAllActivities ({logger}, {after, before, size = DEFAULT_ACTIVITIES_PAGINATION_LIMIT}, sort) {
    logger.info('Retrieving all activities from db');
    const totalActivities = await this.database.countActivities({logger});
    let sortQuery = {_id: 1};
    if (sort) {
      sortQuery = {
        [sort['field']]: sort['order'] === 'DESC' ? -1 : 1,
      };
    }
    const activities = await this.database.getAllActivities({logger}, {after, before, size}, sortQuery);
    return {
      activities,
      meta: {
        pagination: {
          total: totalActivities,
          last_in_page: activities && activities.length > 0 ? last(activities)._id.toString() : after,
          first_in_page: activities && activities.length > 0 ? first(activities)._id.toString() : before,
        },
      },
    };
  }

  async backupAllActivities (logger) {
    logger.info('Backing up strava data');
    console.log('backup init');
    const activities = await this.stravaConnector.retrieveAllActivities();
    await this.database.saveActivities(logger, activities);
    if (this.config.twilio.messagingActive) {
      await this.twilioConnector.sendMessage(logger, 'Your strava code is OK');
    }
    logger.info('Backing up strava data finished');
    console.log('backup end');
  }
};
