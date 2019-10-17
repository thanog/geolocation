import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCe_DfpoduUcd4btzxslJgxvSFxokvwoCI",
    libraries: "places"
  }
});
