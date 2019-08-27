const express = require('express');
const router = express.Router();
const container = require('../boot');

// Require controller modules.
const stravaController = container.resolve('stravaController');

// STRAVA ROUTES //

// Activities
// POST backup all data
router.post('/activities/backup', stravaController.backupData.bind(stravaController));

// Get all activities
router.get('/activities', stravaController.getData.bind(stravaController));
module.exports = router;
