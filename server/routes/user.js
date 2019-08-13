const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuthStrategy;

const models = require("../models/index");
require("dotenv").config();

const router = express.Router();

passport.use(
  new GoogleStrategy(
    {
      consumerKey: process.env.GOOGLE_APP_ID,
      consumerSecret: process.env.GOOGLE_API_SECRET,
      callbackURL: process.env.CALLBACK_URL
    },
    function(token, tokenSecret, profile, done) {
      models.User.findOrCreate(
        { googleId: profile.id, name: profile.name, email: profile.email },
        function(err, user) {
          return done(err, user);
        }
      );
    }
  )
);

module.exports = router;
