module.exports = {
  "defaultLayers": {
    "jawg-vector": { "default": true, "label": "Jawg Streets - Vector", "type": "proxy", "vector": true, "source": "https://tile.jawg.io/jawg-streets.json?access-token=community" },
    "jawg": { "label": "Jawg Streets", "type": "proxy", "retina": true, "source": "http://tile.jawg.io/jawg-streets/{z}/{x}/{y}@2x.png?access-token=community" },
    "osm": {"label": "OpenStreetMap", "type": "proxy", "retina": false, "source": "http://tile.openstreetmap.org/{z}/{x}/{y}.png"},
    "hot": {"label": "OpenStreetMap HOT", "type": "proxy", "retina": false, "source": "http://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png"}
  },
  "dataPath": "/opt/mambo/tiles",
  "assetsDataPath": "/opt/mambo/assets",
  "protocol": "http",
  "host": "mambo.jawg.io.local:8081"
};