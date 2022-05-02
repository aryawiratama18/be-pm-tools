const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const membersRouter = require('./app/api/members/routes');
const projectsRouter = require('./app/api/projects/routes');
const projectOwnersRouter = require('./app/api/projectOwners/routes');
const projectTracksRouter = require('./app/api/projectTracks/routes');

const URL = "/api/v1";
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.json({
      message: "Welcome to api project management tools",
      version: "1.0",
    });
  });

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  })

app.use(`${URL}`, membersRouter);
app.use(`${URL}`, projectsRouter);
// app.use(`${URL}`, projectOwnersRouter);
// app.use(`${URL}`, projectTracksRouter);

app.use((req,res,next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})

app.use((err, req,res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500).json({message: err.message});
})

module.exports = app;
