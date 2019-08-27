const config = require('../config');
const twilio = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

module.exports = class TwilioConnector {

  async sendMessage (logger, body) {
    try {
      const message = await twilio.messages.create({
        to: `whatsapp:${config.twilio.destination}`,
        from: `whatsapp:${config.twilio.sender}`,
        body,
      });
      console.log(`Message SID ${message.sid}`);
      logger.info(`Message SID ${message.sid}`);
    } catch (err) {
      console.log(err);
      logger.error('Something went wrong...', {err: err.message});
    }
  }
};
