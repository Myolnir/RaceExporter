const logger = require('../util/logger');
module.exports = class StravaController {

  constructor({database, stravaConnector}) {
    this.database = database;
    this.stravaConnector = stravaConnector;
  }

  async backupData (request, response) {
    logger.info('Backing up strava data');
    try {
      const activities = await this.stravaConnector.retrieveAllActivities();
      await this.database.saveActivities(logger, activities);
    } catch (err){
      logger.error('Error', {err: err.message});
      return response.send(new Error(err.message));
    }
  }
};