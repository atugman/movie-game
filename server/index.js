const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const cookieParser = require('cookie-parser');
const {BasicStrategy} = require('passport-http');

const passport = require('passport');

const mongoose = require('mongoose');

const {User} = require('./models/users')

//mongoose.connect('mongodb://atugman:unc123@ds157529.mlab.com:57529/arcade')
//mongoose.connect('mongodb://localhost:27017/andrewtugman-arcade')
mongoose.connect('mongodb://atugman:HeyWhatsUpHello@ds127983.mlab.com:27983/movie-game')
mongoose.Promise = global.Promise;

//const {PORT, DATABASE_URL} = require('./config');

app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json());
//app.use(jsonParser);
app.use(express.static('public'));

//auth
const basicStrategy = new BasicStrategy((username, password, callback) => {
  let user;
  User
    .findOne({username: username})
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, {message: 'Incorrect username'});
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        return callback(null, false, {message: 'Incorrect password'});
      }
      else {
        return callback(null, user)
      }
    })
    .catch(err => console.log('Invalid username or password'))
});

app.use(require('express-session')({
  secret: 'something something',
  resave: false,
  saveUninitialized: false
}));

passport.use(basicStrategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('ID:', id);
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

function isAuthenticated (req, res, next) {
  if (req.user) {
    next()
  } else {
    res.json({redirect: '/login-page.html', message: 'Please log in'})
  }
}

// API endpoints
app.get('/api/existing',
  (req, res) => {console.log(req.user)
    res.json({user: req.user})
  }
);

//get and display scores working
app.get('/api/users', (req, res) => {
  User.find({}, null, {sort: '-score'}, function(err, users) {
    if(err)
      return res.send(err)
    res.json({users: users.map((user) => user.apiRepr())})
  })
})

//login working
app.get('/api/login',
  passport.authenticate('basic'),
  (req, res) => {
    res.json({user: req.user})
  }
);

//logout
//response working
app.get('/api/logout', (req, res) => {
   req.session.destroy((err) => {
      if(err) {
        res.send(err)
      }
      res.json({loggedOut: true});
    });
});

//update user profile with new score ON GAME OVER
//working
app.patch('/api/users/:score',
  //passport.authenticate('basic', {session: false}),
  (req, res) => {
    User.findByIdAndUpdate(req.user._id, {score: req.params.score, currentScore: 0}, {new: true},
  (err, updatedItem) => {
    if (err) {
      res.json(err)
    }
    res.json(updatedItem)
  })
});

//update current score ON SAVE BUTTON
app.patch('/api/currentScore/:score',
  //passport.authenticate('basic', {session: false}),
  (req, res) => {
    User.findByIdAndUpdate(req.user._id, {currentScore: req.params.score}, {new: true},
  (err, updatedItem) => {
    if (err) {
      res.json(err)
    }
    res.json(updatedItem)
  })
});

//ON GAME OVER, erase users current score first
app.patch('/api/eraseCurrentScore',
  //passport.authenticate('basic', {session: false}),
  (req, res) => {
    User.findByIdAndUpdate(req.user._id, {currentScore: 0}, {new: true},
  (err, updatedItem) => {
    if (err) {
      res.json(err)
    }
    res.json(updatedItem)
  })
});

//load score button should populate game with current score
app.get('/api/loadScore',
  //passport.authenticate('basic', {session: false}),
  (req, res) => {
    User.findById(req.user._id,
      (err, item) => {
        if (err) {
          res.json(err)
        }
        res.json(item)
        })
    })

//create user working
app.post('/api/users', (req, res) => {
  console.log('hey yall ', req.body);
  if (!req.body) {
    return res.json({message: 'No request body'});
  }

  if (!('username' in req.body)) {
    return res.json({message: 'Missing field: username'});
  }

  let {username, password, firstName, lastName} = req.body;

  if (typeof username !== 'string') {
    return res.json({message: 'Incorrect field type: username'});
  }

  username = username.trim();

  if (username === '') {
    return res.json({message: 'Incorrect field length: username'});
  }

  if (!(password)) {
    return res.json({message: 'Missing field: password'});
  }

  if (typeof password !== 'string') {
    return res.json({message: 'Incorrect field type: password'});
  }

  password = password.trim();

  if (password === '') {
    return res.json({message: 'Incorrect field length: password'});
  }

  // check for existing user
  return User
    .find({username})
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.json({message: "That username is already taken, why don't you try another?"});
      }
      // if no existing user, hash password
      return User.hashPassword(password)
    })
    .then(hash => {
      return User
        .create({
          username: username,
          password: hash,
          firstName: firstName,
          lastName: lastName,
          score: 0
        })
    })
    .then(user => {
      return res.json(user.apiRepr());
    })
    .catch(err => {
      res.json({message: 'Internal server error'})
    });
});

//should return user profile only when logged in
//working
app.get('/api/userProfile', isAuthenticated, (req, res) => {
  res.json({user: req.user.apiRepr()})
})

app.get('/api/checkScore', (req, res) => {
  res.json({user: req.user})
})

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
