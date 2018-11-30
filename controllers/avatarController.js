const db = require('../models');
const Avatar = db.Avatar;

///////////////////////////////////////////////////
///////INDEX- get /api/avatars////////////////////////////

const index = (req, res) => {
    Avatar.find({})
        .populate('avatar')
        .exec((err, getAvatars) => {
            if (err) {
                console.log(err)
                return;
            }
            res.json(getAvatars);
        });
}

///////////////////////////////////////////////////
///////SHOW- get /api/avatars/:user_id///////////////////
const show = (req, res) => {
    let id = req.params.user_id;
    Avatar.find({user: id}, (err, getAvatar) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(getAvatar);
        });
    };


///////////////////////////////////////////////////
///////create, POST///////////////////
// const create = (req, res) => {
//     upload(req, res, (err) => {
//         if (err) throw err;
//             console.log("requested file here->", req.file); 
//             // create new profile image
//             let newAvatar = new db.Avatar({
//                 user: req.params.user_id,
//                 name: req.file.filename,
//                 mimetype: req.file.mimetype,
//             });
//             newAvatar.save();
//             res.json(newAvatar)
//         })  
//     }


/////////////////////////////////////////////////////////////////
///////// MULTER STUFF //////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const create = (req, res) => {
const storage = multer.diskStorage({
    destination: './public/uploads',
    // destination: '/api/avatar/:id/uploads',
    filename(req, file, cb) {
    //   cb(null, file.fieldname + '-' + Date().toLocaleString().slice(0,10) + path.extname(file.originalname));
    cb(null, file.filename + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ 
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  })

    // Check File Type
  function checkFileType(file, cb){
    //Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    //Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
  }
  
//   express route where we receive files from the client
//   passing multer middleware
// app.post('/api/avatar/:id/upload', upload.single('file'), (req, res) => {
app.post('/public', upload.single('file'), (req, res) => {
   const file = req.file; // file passed from client
   const meta = req.body; // all other values passed from the client, like name, etc..
   console.log(file, 'success!')

   res.end();
  })
}


module.exports = {
    index, show, create
}