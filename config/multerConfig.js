const multer = require('multer');

const storageConfig = multer.diskStorage({
   destination: function(req, file, cb) {
        cb(null, 'data/tmp');
   },
   filename: function(req, file, cb) {
       cb(null, file.originalname)
   }
});

exports.upload = multer({ storage: storageConfig }).single('image');