const request = require('request-promise');
const {STRAVA} = require('../constants');
const logger = require('../util/logger');

module.exports = class StravaConnector {
  constructor(deps){

  }

  async updateToken() {
    const data = {
      uri: 'https://www.strava.com/oauth/token',
      method: 'POST',
      json: true,
      body: {
        client_id: STRAVA.client_id,
        client_secret: STRAVA.client_secret,
        code: STRAVA.code,
        grant_type: 'authorization_code',
      }
    };

    try {
       const result = await request(data);
       return result.access_token;
    } catch (err) {
      logger.error('Error getting auth token', {err: err.message});
    }

  }

  async retrieveAllActivities () {
    logger.info('App initiated');
    const access_token = await this.updateToken();
    const baseUri = `https://www.strava.com/api/v3/athlete/activities?per_page=${STRAVA.activitiesPerPage}&page=`;
    const data = {
      uri: '',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
      json: true,
    };

    try {
      let activities = [];
      //database = new database();
      for (let i = 1; i<10000; i++) {
        data.uri = baseUri + i;
        const result = await request(data);
        if (result && result.length !== 0) {
          activities = activities.concat(result);
        } else {
          break;
        }
      }
      logger.info('Finished activities getting');
      return activities;
    } catch (err) {
      logger.error('Error getting athlete info', {err: err.message});
      throw new Error(err);
    }
  }
}