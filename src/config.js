const dev = {
    STRIPE_KEY: "pk_test_NMudDcf26jqcNN3ofINOfa1s00AnqtNkVz",
    s3: {
      REGION: "eu-west-2",
      BUCKET: "notes-armi-uploads"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://fozuqs5x7j.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_AaZorCH6G",
      APP_CLIENT_ID: "3sq6hgb2b9848dv1vta99og1l7",
      IDENTITY_POOL_ID: "eu-west-2:c7ce893a-152d-4701-900f-1034fc82538c"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_NMudDcf26jqcNN3ofINOfa1s00AnqtNkVz",
    s3: {
      REGION: "eu-west-2",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-b9kox5iun8qg"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://90u5r1m4s8.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_shR694Wh3",
      APP_CLIENT_ID: "3htkc43sp97gkj6c2n7tm4iq8v",
      IDENTITY_POOL_ID: "eu-west-2:375cacd1-4ea3-4007-a29c-dcf725523ba4"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };