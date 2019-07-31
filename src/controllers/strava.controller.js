const logger = require('../util/logger');
module.exports = class StravaController {

  constructor(deps) {
    this.database = deps.database;
    this.stravaConnector = deps.stravaConnector;
  }

  async backupData (request) {
    logger.info('Backing up strava data');
    try {
      const activities = await this.stravaConnector.retrieveAllActivities();
      await this.database.saveActivities(logger, activities);
    } catch (err){
      logger.error('Error', {err: err.message});
      return {
        statusCode: 500,
      }
    }
  }
};