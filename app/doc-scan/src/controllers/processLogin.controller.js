require('dotenv').config();

const userModel = require('../../models/index').user;

module.exports = async (req, res) => {
  const data = req.body;
  try {
    // Find user details
    await userModel.findAll({
      where: { email: data.email },
    }, { raw: true })
      .then((user) => {
        console.log('User found.');
        const userPass = Buffer.from(`${data.email}:${data.password}`).toString('base64');
        // verify the password
        if (user[0].password === userPass) {
          req.session.email = data.email;
          console.log('User authenticated.');
          res.status(200).send({
            status: 'success',
            message: 'User authenticated.',
          });
        } else {
          res.status(403).send('Invalid credentials.');
        }
      }).catch((err) => {
        console.log(err);
        res.status(400).send('No account found, please consider signing up with us first.');
      });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Unknown error.' });
  }
};
