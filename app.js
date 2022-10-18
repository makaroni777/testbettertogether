const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const contractRoutes = require('./routes/contractRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://mstancik:test1234@cluster0.scxv8lm.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('options'));
app.get('/form', requireAuth, (req, res) => res.render('form'));
app.use(authRoutes);
app.use(contractRoutes);