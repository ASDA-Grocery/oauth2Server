'use strict'

const express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , request = require("request");

var google = require('googleapis')
  , plus = google.plus('v1')
  , OAuth2 = google.auth.OAuth2
  , oauth2Client = new OAuth2(
  '691098961139-vii844i3lpk864qhf8r7jpkab1tv3j8h.apps.googleusercontent.com',
  'bIYU4h5RL1r-02kqLD8eJr2m',
  'https://oauth-redirect.googleusercontent.com/r/natasha-deb33'
);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: 'foo'
});

app.get('/getAuthUrl', function(req, res){
  res.send(url);
});

app.get('/getTokenUrl', function(req, res){
//     console.log('Code --> ', req,query.code)
//     console.log('Params -->', req.params.code)
//     res.send('Working on it')
});

app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
