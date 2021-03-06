var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

 var expressValidator = require('express-validator');
 console.log(typeof(expressValidator));

var indexRouter = require('./routes/index');
var testRouter =  require('./routes/test');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var isloggedRouter = require('./routes/islogged')
var expressSession = require('express-session');
var app = express();
const cors = require('cors');
//'https://heuristic-khorana-f3628c.netlify.app/'
//app.use('https://heuristic-khorana-f3628c.netlify.app');

app.use(cors())
var corsOptions = {
  origin: 'https://heuristic-khorana-f3628c.netlify.app/',
  optionsSuccessStatus: 200 // For legacy browser support
}

// app.use(cors(corsOptions));
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({secret:"Abude" , saveUninitialized:false , resave : false}))

if(process.env.NODE_ENV==='production'){
app.use(express.static(path.join(__dirname, '../../build')));

app.get('*',(res,req) => {
  res.sendFile(path.resolve(__dirname,'../../','/build','index.html'));
});

}


app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/test', testRouter);
app.use('/islogged',isloggedRouter);
 


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   res.header({"Access-Control-Allow-Origin": "*"});
//   next();
//   //next(createError(404));
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
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
