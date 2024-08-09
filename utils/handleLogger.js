
const { IncomingWebhook } = require("@slack/webhook");
const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK);

const loggerStream = {
    write: message => {
        (async () => {
            await webhook.send({
              text: message,
            });
          })();
        console.log('Capturando el LOG', message);
      // do anything - emit to websocket? send message somewhere? log to cloud?
    },
  };

  module.exports = loggerStream