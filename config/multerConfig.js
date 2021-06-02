const multer = require('multer');

const storageConfig = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'data/tmp');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
    onError: function (err, next) {
        console.log('error', err);
        next(err);
    }
});

exports.upload = multer({ storage: storageConfig }).single('image');