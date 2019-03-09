import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Feature from 'ol/Feature.js';
import Circle from 'ol/geom/Circle.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { Fill, Stroke, Style } from 'ol/style.js';

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

const vectorSource = new VectorSource({
  features: [new Feature(new Circle([0, 0], 2000000))]
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: new Style({
    stroke: new Stroke({
      color: 'black',
      width: 2
    }),
    fill: new Fill({
      color: 'rgba(255, 0, 0, 0.4)'
    })
  })
});
map.addLayer(vectorLayer);
