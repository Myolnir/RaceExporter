const logger = require('../util/logger');
const httpStatusCodes = require('http-status-codes');
module.exports = class StravaController {

  constructor({database, stravaConnector, raceExporterService}) {
    this.database = database;
    this.stravaConnector = stravaConnector;
    this.raceExporterService = raceExporterService;
  }

  async backupData (request, response) {
    logger.info('Backing up strava data');
    try {
      const activities = await this.stravaConnector.retrieveAllActivities();
      await this.database.saveActivities(logger, activities);
      return request.end({});
    } catch (err){
      logger.error('Error', {err: err.message});
      return request.send(new Error(err.message));
    }
  }


  async getData (req, res) {
    logger.info('Getting all user data');
    try {
      const activities = await this.raceExporterService.retrieveAllActivities(logger);
      res.status(httpStatusCodes.OK);
      res.send({
        activities
      }).end();
    } catch (err) {
      console.log(err)
      logger.error('Error', {err: err.message});
      res.status(httpStatusCodes.SERVICE_UNAVAILABLE);
      res.send({
        error: err.message,
      }).end();
    }
  }
};