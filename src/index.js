const logger = require('./util/logger');
const request = require('request-promise');
const {STRAVA} = require('./constants');
let database = require('./repository/database');

async function main () {
    logger.info('App initiated');
    const baseUri = `https://www.strava.com/api/v3/athlete/activities?per_page=${STRAVA.activitiesPerPage}&page=`;
    const data = {
        uri: '',
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${STRAVA.access_token}`,
        },
        json: true,
    };

    try {
        let activities = [];

        database = new database();
        for (let i = 1; i<10000; i++) {
            logger.info(`Pagina ${i}`);
            data.uri = baseUri + i;
            const result = await request(data);
            if (result && result.length !== 0) {
                activities = activities.concat(result);
            } else {
                break;
            }
        }
        await database.saveActivities(logger, activities);
        logger.info('Finished activities saving');
    } catch (err) {
        logger.error('Error getting athlete info', {err});
        console.log(err);
        //throw new Error(err);
    }
}

main();

