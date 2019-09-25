const appInsights = require("applicationinsights");
// application insights
if (process.env.APP_INSIGHTS_KEY) {
  appInsights.setup(process.env.APP_INSIGHTS_KEY);
  appInsights.start();
  // applicaiton insights client
}

exports.client = appInsights.defaultClient

