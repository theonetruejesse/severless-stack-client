const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-jl17",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://e7dhfxyrjj.execute-api.us-east-1.amazonaws.com",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_jdZ60bnCF",
      APP_CLIENT_ID: "3rujblg2l8pqd4d010a6db2t4l",
      IDENTITY_POOL_ID: "us-east-1:cefe9ae4-92de-422e-ab54-7ee80f8fbb0c",
    },
  };
  
  export default config;