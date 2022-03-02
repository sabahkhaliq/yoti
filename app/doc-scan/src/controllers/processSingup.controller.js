require('dotenv').config();

const userModel = require('../../models/index').user;

module.exports = async (req, res) => {
  const data = req.body;
  try {
    // Register a new user
    await userModel.create({
      email: data.email,
      username: data.username,
      password: Buffer.from(`${data.email}:${data.password}`).toString('base64'),
    }).then(() => {
      console.log('User registered.');
      res.status(200).send({ message: 'User registered.' });
    }).catch((err) => {
      console.log(err);
      res.status(400).send('Error registering user. Please try different email.');
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Unknown error.' });
  }
};
