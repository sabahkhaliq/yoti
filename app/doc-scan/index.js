require('dotenv').config();

const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const controllers = require('./src/controllers');
const Sequelize = require('./models/index').sequelize;
const doc = require('./models/index').doc;

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.use(session({
  secret: 'some-secret',
  resave: false,
  saveUninitialized: true,
}));

const router = express.Router();

router.get('/', controllers.indexController);
router.get('/success', controllers.successController);
router.get('/media', controllers.mediaController);
router.get('/error', controllers.errorController);
router.get('/signup', controllers.signupController);
router.post('/processSignup', controllers.processSingupController);
router.get('/login', controllers.signinController);
router.post('/processLogin', controllers.processLoginController);
router.get('/privacy-policy', async (req, res) => res.render('pages/privacy-policy'));

app.use('/', router);s

https.createServer({
  key: fs.readFileSync(path.join(__dirname, '../keys', 'server-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../keys', 'server-cert.pem')),
}, app).listen(port, async () => {
  try {
    await Sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Technical Test - Yoti Doc Scan listening at https://host:${port}`);
});
