const mongoClient = require('mongodb').MongoClient;
module.exports = class Database {

  constructor({config}) {
    this.config = config;
  }

  async saveActivities(logger, activities) {
    logger.info(`Inserting ${activities.length} activities`);
    const dbClient = await mongoClient.connect(this.config.mongo.url, {useNewUrlParser: true});
    await dbClient.db('race_exporter').collection('activities').insertMany(activities)
    dbClient.close();
    logger.info('End inserting activities into database');
  }

};