const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const multer = require('multer');
// const axios = require('axios');
const path = require('path');

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

//Plan type//
const avatarRouter = require('./config/api/avatar/routes');

//====================================================
///////API-ENDPOINTS-ROUTES//////////////////////////////////
//====================================================
app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);
app.use('/api/plans', planRouter);
app.use('/api/avatar', avatarRouter);

// app.use('/public', userRouter);

// other routes...
// app.get('/avatar/:imagename', (req, res) => {
//     res.sendFile('public/uploads/' + req.params.imagename, { root: __dirname });
// })
app.get('/public', (req, res) => {
    console.log('working');
});


//====================================================
/////// STATIC-ROUTES//////////////////////////////////
//====================================================

app.use(express.static(__dirname + '/api/users/'));
app.use(express.static(__dirname + '/public/'));
const publicPath = path.join(__dirname, '../server/public');
app.use(express.static(publicPath));
app.use('/public/images', express.static('Images'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
    if(req.method === 'OPTIONS') {
        res.end();
    }
    else {
        next();
    }
});

//====================================================
/////// MULTER -- USER Avatar uploads //////////////////////////////////
//====================================================

// configuring Multer to use files directory for storing files
// this is important because later we'll need to access file path
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename(req, file, cb) {
      cb(null, file.filename + '-' + Date().toLocaleString().slice(0,10) + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });
  
//   express route where we receive files from the client
//   passing multer middleware
app.post('/public', upload.single('file'), (req, res) => {
   const file = req.file; // file passed from client
   const meta = req.body; // all other values passed from the client, like name, etc..
   console.log(file, 'success!')

   res.end();
  })

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

