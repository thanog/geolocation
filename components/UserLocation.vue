<template>
  <div>
    <br />
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Vancouver to start before geolocating to an accurate location
      center: { lat: 49.281783, lng: -123.116985 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    addMarker(place) {
      if (place) {
        const marker = {
          lat: place.lat,
          lng: place.lng
        };
        this.markers.push({ position: marker });
        this.places.push(place);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.addMarker(this.center);
      });
    }
  }
};
</script>