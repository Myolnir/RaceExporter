const mongoClient = require('mongodb').MongoClient;
const config = require('../config');
module.exports = class Database {

  async saveActivities(logger, activities) {
    logger.info(`Inserting ${activities.length} activities`);
    const dbClient = await mongoClient.connect(config.mongo.url, {useNewUrlParser: true});
    await dbClient.db('race_exporter').collection('activities').insertMany(activities)
    dbClient.close();
    logger.info('End inserting activities into database');
  }

};