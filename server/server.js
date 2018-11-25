const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// require db//
const db = require('./models/index');
// const User = require('./config/api/users/routes');

//====================================================
///////MIDDLE-WARE////////////////////////////////////
//====================================================

//Require use of Express CORS middle ware//
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  // Express Body Parser Middleware
  app.use(express.urlencoded({extended: false}));
  app.use(express.json());


//====================================================
///////REQUIRE API////////////////////////////////////
//====================================================

//Users//
const userRouter = require('./config/api/users/routes');

//Sched Tour//
const tourRouter = require('./config/api/tours/routes');

//Plan type//
const planRouter = require('./config/api/plans/routes');

//====================================================
///////API-ENDPOINTS-ROUTES//////////////////////////////////
//====================================================
app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);
app.use('/api/plans', planRouter);
// app.use('/api/uploads', userRouter);
app.use(express.static('/api/users/'));
app.use(express.static(__dirname + '/api/users/'));
app.use(express.static(__dirname + '/public/'));
app.use(express.static('/public/'));
app.use(express.static('http://localhost:4000/public/images/'));

// app.use('/user', User);


//====================================================
///////SANITY CHECK//////////////////////////////////
//====================================================
app.get('/', (req, res) => {
    res.send('<h1>&#128372; Moonwalking Micheal Jackson style...</h1>');
});



//====================================================
///////START SERVER///////////////////////////////////
//====================================================
app.listen(port, () => console.log(`Server moonwalking like Mike J. on port ${port}`));

