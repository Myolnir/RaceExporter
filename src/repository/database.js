const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
module.exports = class Database {

  constructor ({config}) {
    this.config = config;
  }

  async countActivities ({logger}) {
    const dbClient = await mongoClient.connect(this.config.mongo.url, {useNewUrlParser: true});
    return dbClient.db('race_exporter').collection('activities').estimatedDocumentCount();
  }

  async saveActivities (logger, activities) {
    const dbClient = await mongoClient.connect(this.config.mongo.url, {useNewUrlParser: true});
    logger.info('Deleting all previous activities');
    await dbClient.db('race_exporter').collection('activities').deleteMany({});
    logger.info(`Inserting ${activities.length} activities`);
    await dbClient.db('race_exporter').collection('activities').insertMany(activities);
    dbClient.close();
    logger.info('End inserting activities into database');
  }

  async getAllActivities ({logger}, pagination, sort) {
    const dbClient = await mongoClient.connect(this.config.mongo.url, {useNewUrlParser: true});
    logger.info('Getting all user activities');
    const query = {};
    if (pagination.after) {
      query._id = ({$gt: ObjectID(pagination.after)});
    }
    if (pagination.before) {
      query._id = ({$lt: ObjectID(pagination.before)});
    }
    const activities = await dbClient.db('race_exporter')
      .collection('activities')
      .find(query)
      .sort(sort)
      .limit(pagination.size)
      .toArray();
    dbClient.close();
    logger.info('End getting user activities');
    return activities;
  }

};
