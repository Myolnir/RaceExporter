const container = require('../boot');
// Require controller modules.
const stravaController = container.resolve('stravaController');
module.exports = (server) => {
  // STRAVA ACTIVITIES ROUTES //

  // Activities
  // POST backup all data
  server.post('/activities/backup', stravaController.backupData.bind(stravaController));
  // Get all activities
  server.get('/activities', stravaController.getData.bind(stravaController));
};
