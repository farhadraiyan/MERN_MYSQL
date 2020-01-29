var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//request to make http call
//var request = require('request');

//all other modules
const dbPool=require("./database/DB")

//all router modules
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const scrapperRouter = require('./routes/scrapData')

var app = express();

dbPool.query('SELECT * FROM `Admin_User`', function (error, results, fields) {
  // error will be an Error if one occurred during the query
  console.log("error:", error);
  // results will contain the results of the query
  console.log("Result:", results);
  // fields will contain information about the returned results fields (if any)
  console.log("Fields: ", fields);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/datascrapper', scrapperRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
