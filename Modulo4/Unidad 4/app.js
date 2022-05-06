var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

/*var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/
var redRouter=require('./routes/red');
var blueRouter=require('./routes/blue');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.get('/', function(req,res){
  var dato= Boolean(req.session.color);

  res.render('index', {
    title:'Sesiones en express',
    datoIngresado: dato,
    colorIngresado: req.session.color,
  });
});

app.get('/red', function(req,res){
  var dato= Boolean(req.session.color);

  res.render('red', {
    title:'Sesiones en express',
    colorIngresado: req.session.color,
  }); 
});

app.get('/blue', function(req,res){
  var dato= Boolean(req.session.color);

  res.render('blue', {
    title:'Sesiones en express',
    colorIngresado: req.session.color,
  }); 
});


app.post('/ingresar', function(req,res){
  if(req.body.color){
    req.session.color=req.body.color;
  }
  
  if(req.session.color=='red')
    res.redirect('/red');
    else if(req.session.color=='blue')
      res.redirect('/blue');

  res.redirect('/')
})

app.get('/volver', function(req,res){
  req.session.destroy();
  res.redirect('/');
})

/*app.use('/', indexRouter);
app.use('/users', usersRouter);*/
app.use('/red', redRouter);
app.use('/blue', blueRouter);


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
