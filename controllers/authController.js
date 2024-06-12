const jwt = require('jsonwebtoken');
const { results } = require('../models/agentes');

exports.authenticateAgent = (req, res) => {
  const { email, password } = req.body;
  const agent = results.find(cred => cred.email === email && cred.password === password);

  if (agent) {
    const token = jwt.sign({ email: agent.email }, process.env.SECRET_KEY, { expiresIn: '2m' });
    res.json({ token, email: agent.email });
  } else {
    res.status(401).send('Unauthorized');
  }
};

exports.restrictedRoute = (req, res) => {
  res.json({ message: `Bienvenido, ${req.email}` });
};
