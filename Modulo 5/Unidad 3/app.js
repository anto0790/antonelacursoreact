var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var pool = require('./models/bd');

//Select
pool.query('select * from empleados').then(function(resultados){
  console.log(resultados);
});

//Insert
var object={
  nombre: 'Lucía',
  apellido: 'Dott',
  trabajo: 'Programadora',
  edad: 25,
  salario:150000,
  mail: 'asd@gmail.com'
}

pool.query('insert into empleados set ?', [object]).then(function(resultados){
  console.log(resultados);
});

//Update
var id= 19;
var object2={
  salario:250000
}

pool.query('update empleados set ? where id_emp=?', [object2,id]).then(function(resultados){
  console.log(resultados);
});

//Delete
var id= 15;

pool.query('delete from empleados where id_emp=?', [id]).then(function(resultados){
  console.log(resultados);
});

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
