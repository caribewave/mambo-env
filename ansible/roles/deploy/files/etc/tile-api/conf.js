module.exports = {
  "db": {
    "host": "db",
    // ENABLED IF SPECIFIC port
    //"port": 27017,
    // ENABLE IF AUTHENTICATION ENABLED
    //"username": null,
    //"password": null,
    "database": "tile"
  },
  "defaultLayers": {
    "jawg": {
      "label": "Jawg Streets",
      "type": "proxy",
      "retina": true,
      "source": "http://tile.jawg.io/jawg-streets/{z}/{x}/{y}@2x.png?access-token=community"
    },
    "osm": {
      "label": "OpenStreetMap",
      "type": "proxy",
      "retina": false,
      "source": "http://tile.openstreetmap.org/{z}/{x}/{y}.png"
    },
    "hot": {
      "label": "OpenStreetMap HOT",
      "type": "proxy",
      "retina": false,
      "source": "http://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    }
  },
  "dataPath": "tiles",
  "assetsDataPath": "assets",
  "protocol": "http",
  "host": "mambo.jawg.io:8081"
};