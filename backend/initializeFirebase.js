var admin = require("firebase-admin");

var serviceAccount = require("./webhunt2022-6b371-firebase-adminsdk-44j2l-f4d206d589.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});