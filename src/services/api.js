export default class OpenLayers {
  constructor(userLocation, selector) {
    this.selector = selector;
    this.userLocation = userLocation;
  }

  load() {
    const { ol } = window;
    const userLocationLat = this.userLocation.latitude || null;
    const userLocationLon = this.userLocation.longitude || null;

    const inputs = {
      target: this.selector,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([userLocationLon, userLocationLat]),
        zoom: 16,
      }),
    };

    const map = new ol.Map(inputs);

    return map;
  }
}
