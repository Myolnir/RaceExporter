module.exports = {
  name: 'StravaActivitiesApi',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,
  mongo: {
    url: process.env.MONGO_URL,
  },
  strava: {
    access_token: process.env.STRAVA_ACCESS_TOKEN,
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    code: process.env.STRAVA_CODE,
    redirect_uri: 'localhost',
    activitiesPerPage: 200,
    urls: {
      oauth: 'https://www.strava.com/oauth/token',
      activities: 'https://www.strava.com/api/v3/athlete/activities',
    },
    backupTime: process.env.STRAVA_BACKUP_INTERVAL,
  },
  twilio: {
    messagingActive: process.env.TWILIO_MESSAGING_ACTIVE,
    accountSid: process.env.TWILIO_ACCOUNT_SSID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    sender: process.env.TWILIO_SENDER,
    destination: process.env.TWILIO_DESTINATION,
  },
};
