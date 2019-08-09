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
  async retrieveAllActivities (logger) {
    logger.info('Retrieving all activities from db');
    const activities = await this.database.getAllActivities(logger);
    return activities;
  }

  async backupAllActivities (logger) {
    logger.info('Backing up strava data');
    console.log('backup init')
    const activities = await this.stravaConnector.retrieveAllActivities();
    await this.database.saveActivities(logger, activities);
    if (this.config.twilio.messagingActive) {
      await this.twilioConnector.sendMessage(logger, 'Your strava code is OK')
    }
    logger.info('Backing up strava data finished');
    console.log('backup end');
  }
};
