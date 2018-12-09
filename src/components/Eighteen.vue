<template>
  <q-layout class="black">
    <div class="row justify-center">
      <div class="col-xs-11 col-md-10 black-back shadow-24">
        <div class="row wrap justify-center">
          <div class="col-xs-12">
            <div class="row justify-center">
              <div class="col-xs-12 text-center">
                <h2 class="headline text-center black">{{route.length}} Ride</h2>
                <h5 class="headline text-center black">
                  {{route.headline}}
                </h5>
                <hr class="hr" />
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-xs-12 col-lg-4 r-links">
            <div class="row wrap justify-center">
              <div class="col-xs-11 text-center spacers">
                <q-btn no-caps class="btn" @click="$router.push('/register')">Register Now
                </q-btn>
                <!-- LIVE REGISTRATION -->
                <!--
                  <q-btn no-caps class="btn" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623%26fQuery%3D%26z%3D1522016197284')">Register Now
                  </q-btn>
                -->
              </div>
            </div>
            <div class="row wrap justify-center">
              <div class="light-paragraph text-center col-xs-11 col-md-11 spacers">
                <p>Ride Day Registration opens at 5:00 AM</p>
                <hr class="ihr" />
                <h4>{{route.length}} Start Time</h4>
                <h5>{{route.startTime}}</h5>
                <hr class="ihr" />
                <p>
                  *Please be at the start line ready to ride at least 15 minutes
                  before posted start time.
                </p>
              </div>
            </div>
            <!-- <div class="row wrap justify-center">
              <h6 class="light-paragraph text-center col-xs-11 spacers description text-justify">
                {{route.description}}
              </h6>
            </div> -->
            <div class="row justify-center">
              <div class="col-xs-11 col-md-11 text-center border spacers">
                <div class="row justify-center">
                  <div class="col-xs-4">
                    <img class="responsive rest" src="https://res.cloudinary.com/treverscloud/image/upload/v1517598415/Bathroom_sign_xybmya.jpg"
                      alt="rest stop" />
                  </div>
                  <div class="col-xs-12 self-center">
                    <h5>Rest Stops</h5>
                    <hr class="hr" />
                  </div>
                  <div class="col-xs-12 self-center" v-for="stop in route.restStops">
                    <h6>{{stop}}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-center desktop-only">
              <div class="col-xs-11 text-center spacers">
                <div class="row justify-center">
                  <h5 class="col-xs-12">Quick Links To Other Routes</h5>
                  <div class="col-xs-12">
                    <hr class="ihr">
                  </div>
                  <q-btn v-for="otherRoute in routes" v-if="otherRoute.length != route.length" class="col-xs-4 r-btn"
                    @click="$router.push(otherRoute.url.trim('/'))" no-caps>{{otherRoute.length}}</q-btn>
                </div>
              </div>
            </div>
            <div class="row wrap justify-center desktop-only last">
              <div class="col-xs-11 text-center spacers">
                <q-btn class="btn" @click="$router.push('climbs')" no-caps>Information About Climbs</q-btn>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-7 top-marg">
            <div class="row wrap justify-center">
              <q-card class="route col-xs-11 col-md-11 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                  <div>
                    <q-card-media class="desktop-only">
                      <iframe id="mapmyfitness_route" :src="route.frame" height="650px" width="100%" frameborder="0"></iframe>
                    </q-card-media>
                    <q-card-media class="mobile-only">
                      <iframe id="mapmyfitness_route" :src="route.frameMobile" height="650px" width="100%" frameborder="0"></iframe>
                    </q-card-media>
                    <div align="center" class="white small" label="View More Map Options">
                      <q-btn v-for="link in route.otherMaps" :class="route.btnClass" @click="launch(link.link)" no-caps>{{link.title}}</q-btn>
                    </div>
                  </div>
                </q-transition>
              </q-card>
            </div>
            <div class="row wrap justify-center">
              <h6 class="white text-center col-xs-11 spacers description text-justify">
                {{route.description}}
              </h6>
            </div>
            <div class="row justify-center mobile-only">
              <div class="col-xs-11 text-center spacers white">
                <div class="row justify-center white">
                  <h5 class="col-xs-12 text-center">Quick Links To Other Routes</h5>
                  <div class="col-xs-12">
                    <hr class="ihr">
                  </div>
                  <q-btn v-for="otherRoute in routes" v-if="otherRoute.length != route.length" class="col-xs-4 r-btn"
                    @click="$router.push(otherRoute.url.trim('/'))" no-caps>{{otherRoute.length}}</q-btn>
                </div>
              </div>
            </div>
            <div class="row wrap justify-center mobile-only">
              <div class="col-xs-11 text-center spacers bot-link">
                <q-btn class="btn" @click="$router.push('climbs')" no-caps>Information About Climbs</q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
  import {
    QLayout,
    QInput,
    QBtn,
    QGallery,
    openURL,
    QTransition,
    QCard,
    QCardMedia,
    QCardActions,
    QParallax,
    QCollapsible,
    QItem,
    QItemSide,
    QItemMain,
    QListHeader
  } from "quasar";
  export default {
    name: "Nineteen",
    data() {
      return { route: [] };
    },
    components: {
      QLayout,
      QInput,
      QBtn,
      QGallery,
      QTransition,
      QCard,
      QCardMedia,
      QCardActions,
      QParallax,
      QCollapsible,
      QItem,
      QItemSide,
      QItemMain,
      QListHeader
    },
    mounted() {
      this.$store.state.routes.forEach(route => {
        if (route.url == this.$route.path) {
          return this.route = route;
        }
      });
    },
    computed: {
      pictures() {
        return this.$store.state.pictures;
      },
      routes() {
        return this.$store.state.routes;
      }
    },
    methods: {
      launch(url) {
        openURL(url);
      }
    }
  };
</script>

<style scoped>
  .last {
    margin-bottom: 1rem;
  }

  .rest {
    max-height: 3rem;
  }

  .top {
    padding-top: 1rem;
  }

  .btn {
    margin: 0.5rem 0.5rem 0.5rem 0;
    background-color: rgba(197, 7, 7, 0.8);
    color: white;
  }

  .yellow {
    background-color: rgba(253, 237, 0, 0.939);
    color: black;
  }

  .small {
    font-size: 0.5rem;
  }

  .white-text {
    color: white;
  }

  .map {
    height: 90vh;
    width: 100%;
  }

  .headline {
    /* text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); */
  }

  .promo {
    background-color: rgba(0, 128, 128, 0.6);
  }
</style>