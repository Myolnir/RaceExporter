const container = require('./boot');
const config = container.resolve('config');
const cron = require('node-cron');
const raceExporterService = container.resolve('raceExporterService');
const logger = require('./util/logger');
const restify = require('restify');
const restifyPlugins = require('restify-plugins');
const route_catalog = require('./routes/index');

// To backup the activityes daily
cron.schedule(config.strava.backupTime, async () => {
  console.log('Updating Strava Activities');
  await raceExporterService.backupAllActivities(logger);
});

const server = restify.createServer({
  name: config.name,
  version: config.version,
});
/**
  * Middleware
  */
server.use(restifyPlugins.jsonBodyParser({mapParams: true}));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({mapParams: true}));
server.use(restifyPlugins.fullResponse());
server.listen(config.port, () => {
  console.log('%s listening at %s', server.name, server.address().port);
  route_catalog(server);
});
