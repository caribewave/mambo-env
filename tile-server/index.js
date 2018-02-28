const express = require('express');
const tilestrata = require('tilestrata');
const disk = require('tilestrata-disk');
const mapnik = require('tilestrata-mapnik');
const dependency = require('tilestrata-dependency');
const sharp = require('tilestrata-sharp');

const app = express();
const strata = tilestrata();

// define layers
strata.layer('basemap')
    .route('*@2x.png')
    .use(disk.cache({dir: 'test/basemap'}))
    // .use(mapnik({
    //   pathname: '/path/to/map.xml',
    //   tileSize: 512,
    //   scale: 2
    // }))
    .route('*.png')
    .use(disk.cache({dir: 'test/basemap'}))
    .use(dependency('basemap', 'tile@2x.png'))
    .use(sharp((image, sharp) => {
      return image.resize(256);
    }));


app.use(tilestrata.middleware({
  server: strata,
  prefix: '/map'
}));


app.get('/test', (req, res) => {
  strata.layer('map')
    .route('*.png')
    .use(disk.cache({dir: 'test/map'}));
  res.send('OK');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));

