require('dotenv').config();
const {createContainer, asClass, asValue} = require('awilix');

// Controllers
const stravaController = require('./controllers/strava.controller');

// Repository
const database = require('./repository/database');

// Connectors
const stravaConnector = require('./connectors/strava.connector');
const twilioConnector = require('./connectors/twilio.connector');

// services
const raceExporterService = require('./services/raceExporter.service');

const config = require('./config');

const container = createContainer();

module.exports = container.register({
  stravaController: asClass(stravaController).singleton(),
  database: asClass(database).singleton(),
  stravaConnector: asClass(stravaConnector).singleton(),
  config: asValue(config),
  raceExporterService: asClass(raceExporterService).singleton(),
  twilioConnector: asClass(twilioConnector).singleton(),
});
