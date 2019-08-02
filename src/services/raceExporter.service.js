module.exports = class RaceExporterService {
  constructor ({config, database}) {
    this.config = config;
    this.database = database;
  }

  /**
     * Gets all user activities from its own database instead of from the provider.
     * @param {*} logger
     */
  async retrieveAllActivities (logger) {
    logger.info('Retrieving all activities from db');
    const activities = await this.database.getAllActivities(logger);
    return activities;
  }
};
