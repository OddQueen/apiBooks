const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books.router');
const usersRouter = require('./routes/users.router');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', booksRouter);
app.use('/api', usersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
