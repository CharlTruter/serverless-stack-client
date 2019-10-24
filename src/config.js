export default {
    MAX_ATTACHMENT_SIZE: 5000000,
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