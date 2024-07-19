const User = require('../models/User');

let users = [];

function registerUser(req, res) {
  const { name, last_name, email, photo, password } = req.body;
  const newUser = new User(users.length + 1, name, last_name, email, photo, password);
  users.push(newUser);
  res.send({ error: false, codigo: 201, data: newUser });
}

function loginUser(req, res) {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user; // Exclude password from response
    res.send({ error: false, codigo: 200, data: userWithoutPassword });
  } else {
    res.send({ error: true, codigo: 401, mensaje: 'Invalid email or password' });
  }
}

module.exports = { registerUser, loginUser };
