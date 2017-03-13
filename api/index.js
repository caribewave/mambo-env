// Imports
var express = require('express');
var multer  = require('multer');
var processingService = require('./imagery/processing-service');

// Middleware init
var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
var upload = multer({ storage: storage });
var app = express();


// API

/**
 * Post drone images
 */
app.post('/drone/imagery', upload.single('images'), function (req, res, next) {
  if (!req.file) {
    res.status(400).send();
    return;
  }
  switch (req.file.mimetype) {
    case 'application/gzip':
    case 'application/x-gzip':
    case 'application/x-tgz':
    case 'application/x-gtar':
      console.log('Received gzip file');
      processingService.processImagery(req.file);
      res.send();
      break;
    case 'application/zip':
      console.log('Received zip file');
      processingService.processImagery(req.file);
      res.send();
      break;
    default:
      console.log('Received file of wrong type : ' + req.file.mimetype);
      res.status(415).send();
  }
})

app.listen(3000, function () {
  console.log('Hot-Board-Api now running on port 3000!');
});
