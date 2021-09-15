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
import OpenLayers from '../services/api';

export default {
  name: 'Map',
  props: {
    transitLine: {
      type: Number,
      default: () => null,
    },
  },
  mounted() {
    this.$nextTick(() => this.loadChart());
  },
  methods: {
    fetchUserLocation() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    },
    loadChart() {
      this.fetchUserLocation()
        .then((location) => {
          const map = new OpenLayers(location.coords, 'map');
          map.load();
        });
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
