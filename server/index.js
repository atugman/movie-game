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

mongoose.connect('mongodb://atugman:unc123@ds157529.mlab.com:57529/arcade')
//mongoose.connect('mongodb://localhost:27017/andrewtugman-arcade')
mongoose.Promise = global.Promise;

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
app.get('/existing',
  (req, res) => {console.log(req.user)
    res.json({user: req.user})
  }
);

app.get('/scores', (req, res) => {
  User.find({}, null, {sort: '-score'}, function(err, scores) {
    if(err)
      return res.send(err)
    res.json(scores)
  })
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
