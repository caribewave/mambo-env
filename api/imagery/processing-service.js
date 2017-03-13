const fs = require('fs');
const unzip = require('unzip');
const path = require('path');
const fstream = require('fstream');

var processImagery = (archive) => {
  console.log('Will process imagery archive');
  var parser = unzip.Parse();
  console.log('Unzipping...');
  fs.createReadStream(archive.path)
    .pipe(parser)
    .on('entry', function (entry) {
      var fileName = entry.path;
      var type = entry.type; // 'Directory' or 'File'
      var size = entry.size;
      var ext = path.extname(fileName).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        entry.pipe(fstream.Writer('/opt/hot-board/imagery/images/' + fileName));
      } else {
        entry.autodrain();
      }
    });
  parser.on('close',() => {
    console.log('Done!');
    fs.unlink(archive.path);
    console.log('Starting Orthophoto import process...');
    fs.writeFile("/opt/hot-board/imagery/orthophoto/trigger.lck", Date.now(), (err, data) => {
      console.log('Lock file created!');
    });
  });
}

module.exports = {
  processImagery: processImagery
}
