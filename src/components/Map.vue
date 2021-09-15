<template>
  <div
    class='Map__Container'
  >
    <div
      id='map'
      class='Map__Target'
    />
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    transitLine: {
      type: Number,
      default: () => null,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.loadMap();
    });
  },
  methods: {
    loadMap: (config) => {
      const { ol } = window;
      const inputs = config ?? {
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM(),
          }),
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4,
        }),
      };

      const map = new ol.Map(inputs);

      return map;
    },
  },
};
</script>

<style scss scoped>
.Map__Target {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
