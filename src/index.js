const logger = require('./util/logger');
const request = require('request-promise');
const {STRAVA} = require('./constants');
let database = require('./repository/database');

async function main () {
    logger.info('App initiated');

    const data = {
        uri: 'https://www.strava.com/api/v3/athlete/activities',
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${STRAVA.access_token}`,
        },
        json: true,
    };

    try {
        const result = await request(data);
        database = new database();
        await database.saveActivities(logger, result);
        logger.info('Finished activities saving');
    } catch (err) {
        logger.error('Error getting athlete info', {err});
        console.log(err);
        //throw new Error(err);
    }
}

main();

