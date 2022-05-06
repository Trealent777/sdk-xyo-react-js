const { tryParseInt, getEnvFromAws } = require('@xylabs/sdk-api-express-ecs');
const { metaServer } = require('../dist/cjs/index.js');

(async () => {
  const port = tryParseInt(process.env.PORT) || 8083
  // If an AWS ARN was supplied for Secrets Manager
  const awsEnvSecret = process.env.AWS_ENV_SECRET_ARN
  if (awsEnvSecret) {
    console.log('Bootstrapping ENV from AWS')
    // Merge the values from AWS into the current ENV
    // with AWS taking precedence
    const awsEnv = await getEnvFromAws(awsEnvSecret)
    Object.assign(process.env, awsEnv)
  }
  metaServer(port)
})()