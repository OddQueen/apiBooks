const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'CodeQu33#',
  database: 'appbooks'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});

app.post('/register', (req, res) => {
  const { name, last_name, email, photo, password } = req.body;
  const sql = 'INSERT INTO user (name, last_name, email, photo, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, last_name, email, photo, password], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM user WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send({ message: 'User not found or invalid credentials' });

    const user = results[0];
    delete user.password; 
    res.send(user);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
