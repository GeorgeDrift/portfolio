
const jwt = require('jsonwebtoken');
// In a real app, use a secret from environment variables
const JWT_SECRET = 'a-very-secret-key-that-should-be-in-env';

exports.login = (req, res) => {
  const { username, password } = req.body;

  // In a real app, you would look up the user in a database and check a hashed password
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ id: 'admin-user' }, JWT_SECRET, {
      expiresIn: '24h', // Token expires in 24 hours
    });
    res.status(200).send({ token });
  } else {
    res.status(401).send({ message: 'Invalid credentials!' });
  }
};
