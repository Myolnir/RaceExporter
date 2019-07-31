const express = require('express');
const router = express.Router();
const container = require('../boot');

// Require controller modules.
const stravaController = container.resolve('stravaController');

// STRAVA ROUTES //

// POST backup all data
router.post('/backupAll', stravaController.backupData.bind(stravaController));

module.exports = router;