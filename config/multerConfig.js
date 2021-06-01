const multer = require('multer');

const storageConfig = multer.diskStorage({
   destination: (req, file, cb) => {
        cb(null, 'data/tmp');
   },
   filename: (req, file, cb) => {
       cb(null, file.originalname)
   }
});

exports.upload = multer({ storage: storageConfig }).single('image');