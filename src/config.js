module.exports = {
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
      activities: 'https://www.strava.com/api/v3/athlete/activities'
    },
  }
};