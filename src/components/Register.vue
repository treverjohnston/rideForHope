<template>
  <q-layout class="registration black">
    <div class="row wrap">
      <div class="col-xs-12">
        <q-parallax :speed="1" :height="500" src="./statics/riders2.jpg">
          <div slot="loading">Loading...</div>
          <div class="text-center">
            <h2 class="text-bold">Registration for 2018 will be opening in the near future, check back soon!</h2>
          </div>
          <q-btn @click="launch('https://legacy.imathlete.com/events/rideforhopeidaho')" class="cbtn shadow-24">Register</q-btn>
        </q-parallax>
      </div>
      <div class="col-xs-12">
        <div class="spacer">
          <img class="ride" src="statics/RFHIdahoLogo.png" alt="ride for hope logo">
        </div>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card-media overlay-position="full">
          <q-parallax :speed="1" :height="350" src="./statics/gray.png">
            <div slot="loading">Loading...</div>
            <div class="black-back">
            </div>
          </q-parallax>
          <div slot="overlay">
            <q-card-title class="text-center">
              <h3>18 Mile/31 Mile</h3>
              <hr>
            </q-card-title>
            <q-card-title class="text-center">
              <p slot="subtitle">
                Register before July 1, 2018: $55
              </p>
            </q-card-title>
            <q-card-title class="text-center">
              <p slot="subtitle">
                Regular Registration: $65
              </p>
            </q-card-title>
          </div>
        </q-card-media>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card-media overlay-position="full">
          <q-parallax :speed="1" :height="350" src="./statics/gray.png">
            <div slot="loading">Loading...</div>
            <div class="black-back">
            </div>
          </q-parallax>
          <div slot="overlay">
            <q-card-title class="text-center">
              <h3>Metric Century/Century</h3>
              <hr>
            </q-card-title>
            <q-card-title class="text-center">
              <p slot="subtitle">
                Register before July 1, 2018: $65
              </p>
            </q-card-title>
            <q-card-title class="text-center">
              <p slot="subtitle">
                Regular Registration: $75
              </p>
            </q-card-title>
          </div>
        </q-card-media>
      </div>
    </div>
  </q-layout>
</template>

<script>
  import {
    openURL,
    QLayout,
    QGallery,
    QGalleryCarousel,
    QParallax,
    QBtn,
    QCard,
    QCardMain,
    QCardMedia,
    QCardTitle,
    QCardActions
  } from "quasar";
  export default {
    name: "About",
    data() {
      return {
        secondSlider: ["statics/riders2.jpg", "statics/riders3.jpg"]
      };
    },
    components: {
      QLayout,
      QGalleryCarousel,
      QGallery,
      QParallax,
      QBtn,
      QCard,
      QCardMain,
      QCardMedia,
      QCardTitle,
      QCardActions
    },
    methods: {
      launch(url) {
        openURL(url);
      }
    }
  };
</script>

<style scoped>
  .cbtnm {
    background-color: rgba(218, 0, 0, 0.699);
    color: white;
    padding: 0 2rem 0 2rem;
    margin-top: 1rem;
  }

  .ride {
    height: 7rem;
  }

  .cbtn {
    background-color: rgba(197, 7, 7, 0.8);
    color: white;
    padding: 1rem 1rem 1rem 1rem;
    text-shadow: none;
  }

  .spacer {
    padding: 0.5rem 0 0.5rem 0;
    background-color: black;
    display: flex;
    justify-content: center;
  }

  .registration {
    background-color: rgb(206, 201, 201);
  }

  .caro {
    background-color: rgb(206, 201, 201);
  }

  .headline {
    color: black;
  }
</style>