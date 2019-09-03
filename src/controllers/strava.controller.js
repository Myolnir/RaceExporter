const logger = require('../util/logger');
const httpStatusCodes = require('http-status-codes');
const {get} = require('lodash');
module.exports = class StravaController {

  constructor ({database, stravaConnector, raceExporterService}) {
    this.database = database;
    this.stravaConnector = stravaConnector;
    this.raceExporterService = raceExporterService;
  }

  async backupData (req, res) {
    logger.info('Backing up strava data');
    try {
      await this.raceExporterService.backupAllActivities(logger);
      res.status(httpStatusCodes.NO_CONTENT);
      res.send().end();
    } catch (err) {
      logger.error('Error', {err: err.message});
      res.status(httpStatusCodes.SERVICE_UNAVAILABLE);
      res.send({
        error: err.message,
      }).end();
    }
  }


  async getData (req, res) {
    logger.info('Getting all user data');
    const {after, size, before} = req.query && req.query.page ? req.query.page : '';
    const sort = get(req, 'query.sort');
    try {
      const activities = await this.raceExporterService.retrieveAllActivities({logger}, {after, before, size: Number(size)}, sort);
      res.status(httpStatusCodes.OK);
      res.set('Content-Range', activities.meta.pagination.total);
      res.send(activities).end();
    } catch (err) {
      console.log(err);
      logger.error('Error', {err: err.message});
      res.status(httpStatusCodes.SERVICE_UNAVAILABLE);
      res.send({
        error: err.message,
      }).end();
    }
  }
};
