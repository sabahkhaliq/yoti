const indexController = require('./index.controller');
const successController = require('./success.controller');
const mediaController = require('./media.controller');
const errorController = require('./error.controller');
const signupController = require('./signup.controller');
const signinController = require('./signin.controller');
const processSingupController = require('./processSingup.controller');
const processLoginController = require('./processLogin.controller');

module.exports = {
  indexController,
  successController,
  mediaController,
  errorController,
  signupController,
  processSingupController,
  signinController,
  processLoginController,
};
