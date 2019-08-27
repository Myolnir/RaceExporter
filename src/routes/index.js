/* Routes catalog home page. */
const activities = require('./activities');
module.exports = (server) => {

  // Activities routes
  activities(server);
};
