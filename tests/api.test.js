const {
  Stitch,
  AnonymousCredential,
} = require('mongodb-stitch-server-sdk');

test("call hello function", () => {
  const client = Stitch.initializeDefaultAppClient('foodlense-api-ctyle');
  client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    // console.log(user);
    client.callFunction("hello").then(result => {
      // console.log(`result`, result.data);
      expect(result).toBeTruthy();
    })
    client.close();
  }).catch(err => {
    console.log(err);
    client.close();
  })
});