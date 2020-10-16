const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const eventsRouter = require('./routes/events.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/events', eventsRouter);




// THIS IS DEAD CODE AT THE MOMENT
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'no file uploaded' });
  }

  const file = req.imageSrc; //.file is tacos

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.err(err);
      return res.status(500).send(err)
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});



// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
