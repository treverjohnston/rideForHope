<template>
  <q-layout ref="layout" class="back" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar class="head">
      <q-btn class="mobile-only" flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-btn @click="$router.push('/')">
        <img src="statics/RFHIdahoLogo.png" alt="logo" class="mini">
      </q-btn>
      <q-toolbar-title class="desktop-only">
        Ride For Hope Idaho
      </q-toolbar-title>
      <span class="desktop-only">Join Team Ride For Hope Idaho on Strava!
        <q-transition appear enter="lightSpeedIn" leave="fadeOut">
          <q-btn @click="launch('https://www.strava.com/clubs/302822')">
            <img class="strava-top" src="statics/strava2.png" alt="strava logo">
          </q-btn>
        </q-transition>
      </span>
      <q-transition class="desktop-only" appear enter="lightSpeedIn" leave="fadeOut">
        <q-btn class="desktop-only" @click="launch('http://www.meridian-cycles.com/')">
          <img class="meridian desktop-only" src="statics/meridian.png" alt="Meridian Cycles logo">
        </q-btn>
      </q-transition>
      <q-transition appear enter="lightSpeedIn" leave="fadeOut">
        <q-btn outline color="red" @click="launch('https://legacy.imathlete.com/events/rideforhopeidaho')">Donate Now
        </q-btn>
      </q-transition>
      <a class="mobile-only absolute-right" href="http://www.meridian-cycles.com/" target="_blank">
        <q-btn>
          <img class="meridian-mobile" src="statics/meridian.png" alt="Meridian Cycles logo">
        </q-btn>
      </a>
    </q-toolbar>
    <q-tabs slot="header" align="center" class="shadow-2 desktop-only tabs">
      <q-route-tab class="tab" slot="title" label="Home" name="home" to="/" />
      <q-route-tab class="tab" slot="title" label="About" name="about" to="about" />
      <q-route-tab class="tab" slot="title" label="Register" name="register" to="register" />
      <q-tab class="tab involved" slot="title" label="Routes" name="routes">
        <q-popover fit ref="popoverRoutes">
          <q-item-main>
            <q-route-tab class="tab" @click="collapse" slot="title" label="All Routes" name="routes" to="routes" />
          </q-item-main>
          <q-item-main>
            <q-route-tab class="tab" @click="collapse" slot="title" label="18 Mile" name="18" to="18-mile" />
          </q-item-main>
          <q-item-main>
            <q-route-tab class="tab" @click="collapse" slot="title" label="31 Mile" name="31" to="31-mile" />
          </q-item-main>
          <q-item-main>
            <q-route-tab class="tab" @click="collapse" slot="title" label="Metric Century" name="62.8" to="metric" />
          </q-item-main>
          <q-item-main>
            <q-route-tab class="tab" @click="collapse" slot="title" label="Century" name="100" to="Century" />
          </q-item-main>
        </q-popover>
      </q-tab>
      <!-- <q-route-tab class="tab" slot="title" label="Donate" name="donate" to="donate" /> -->
      <!-- <q-route-tab class="tab" slot="title" label="Raffle Items" name="raffle" to="raffle" /> -->
      <q-tab class="tab involved" slot="title" label="Merchandise" name="marchandise">
        <q-popover fit ref="popover" class="involved">
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Raffle Items" name="raffle" to="raffle" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Merchandise" name="merchandise" to="merchandise" />
          </q-item-main>

        </q-popover>
      </q-tab>
      <q-route-tab class="tab" slot="title" label="Volunteer" name="volunteers" to="volunteers" />
      <q-route-tab class="tab" slot="title" label="Sponsors" name="sponsors" to="sponsors" />
      <!-- <q-tab class="tab involved" slot="title" label="Get Involved" name="involved">
        <q-popover fit ref="popover" class="involved">
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Get Involved" name="involved" to="involved" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Volunteers" name="volunteers" to="volunteers" />
          </q-item-main>
          <q-item-main>
            <q-route-tab @click="collapse" class="tab" slot="title" label="Sponsors" name="sponsors" to="sponsors" />
          </q-item-main>
        </q-popover>
      </q-tab> -->
      <q-route-tab class="tab" slot="title" label="Photo Gallery" name="gallery" to="gallery" />
      <q-route-tab class="tab" slot="title" label="Contact" name="contact" to="contact" />
    </q-tabs>

    <div class="mobile-only left-tab" slot="left">
      <q-list class="mobile-only" no-border link inset-delimiter>
        <q-side-link to="/">
          <q-item-main class="side" label="Home" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="about">
          <q-item-main class="side" label="About" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="register">
          <q-item-main class="side" label="Register" />
          <hr class="tabhr">
        </q-side-link>
        <q-collapsible class="side-collapse" label="Routes">
          <q-side-link to="routes">
            <q-item-main class="small-side" label="All Routes" />
          </q-side-link>
          <hr class="tabhr">
          <q-side-link to="18-mile">
            <q-item-main class="small-side" label="18 Mile" />
          </q-side-link>
          <hr class="tabhrs">
          <q-side-link to="31-mile">
            <q-item-main class="small-side" label="31 Mile" />
          </q-side-link>
          <hr class="tabhrs">
          <q-side-link to="metric">
            <q-item-main class="small-side" label="Metric Century" />
          </q-side-link>
          <hr class="tabhrs">
          <q-side-link to="century">
            <q-item-main class="small-side" label="Century" />
          </q-side-link>
        </q-collapsible>
        <hr class="tabhr">
        <!-- <q-side-link to="donate">
          <q-item-main class="side" label="Donate" />
          <hr class="tabhr">
        </q-side-link> -->
        <q-collapsible class="side-collapse" label="Merchandise">
          <q-side-link to="raffle" class="left">
            <q-item-main class="small-side" label="Raffle Items" />
          </q-side-link>
          <hr class="tabhrs">

          <q-side-link to="merchandise" class="left">
            <q-item-main class="small-side" label="Merchandise" />
          </q-side-link>
        </q-collapsible>
                <hr class="tabhr">
        <!-- <q-side-link to="raffle">
          <q-item-main class="side" label="Raffle Items" />
          <hr class="tabhr">
        </q-side-link> -->
        <q-side-link to="volunteers">
          <q-item-main class="side" label="Volunteer" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="sponsors">
          <q-item-main class="side" label="Sponsors" />
          <hr class="tabhr">
        </q-side-link>
        <!-- <q-collapsible class="side-collapse" label="Get Involved">
          <q-side-link to="involved" class="left">
            <q-item-main class="small-side" label="General Information" />
          </q-side-link>
          <hr class="tabhrs">
          <q-side-link to="volunteers">
            <q-item-main class="small-side" label="Volunteers" />
          </q-side-link>
          <hr class="tabhrs">
          <q-side-link to="sponsors">
            <q-item-main class="small-side" label="Sponsors" />
          </q-side-link>
        </q-collapsible> -->
        <!-- <hr class="tabhr"> -->
        <q-side-link to="gallery">
          <q-item-main class="side" label="Photo Gallery" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="contact">
          <q-item-main class="side" label="Contact" />
          <hr class="tabhr">
        </q-side-link>
      </q-list>
    </div>
    <router-view />
    <div v-if="home">
      <q-parallax :speed="1" :height="500" src="./statics/cover.jpg">
        <div slot="loading">Loading...</div>
        <q-transition appear enter="slideInUp" leave="fadeOut">
          <div class="promo text-center desktop-only">
            <h5 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h5>
            <h2 class="text-bold">2018 Event Date: Saturday, June 23</h2>
            <h2 class="text-bold">Kuna, ID</h2>
          </div>
        </q-transition>
        <div class="promo text-center mobile-only">
          <h6 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h6>
          <h3 class="text-bold">2018 Event Date: Saturday, June 23</h3>
          <h3 class="text-bold">Kuna, ID</h3>
        </div>
      </q-parallax>
      <div class="spacer row wrap">
        <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text" data-x="80">
          <b>Ride For Hope</b> is a charity bicycle event with the firm belief that quality healthcare should be accessible
          to everyone. We support the holistic approach to healthcare where true healing focuses not only on symptoms, but
          the underlying root cause of disease.
        </h6>
        <div class="text-center col-xs-12 col-md-4">
          <img class="ride self-center xs-gutter" src="statics/RFHIdahoLogo.png" alt="ride for hope logo">
        </div>
        <h6 class="text-italic text-center light-paragraph col-xs-10 col-md-4 self-center text" data-x="80">
          <b>Ride For Hope</b> is committed to ensuring that 100% of participant fees and donations go directly to charity.
          This unique commitment is made possible by charitable contributions from local sponsors which cover the entire
          cost of the event.
        </h6>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->
      <div class="row wrap">
        <div class="col-xs-12">
          <q-card-media overlay-position="full">
            <q-parallax :speed="1" :height="500" src="./statics/gray.png">
              <div slot="loading">Loading...</div>
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <div class="row justify-around">
                <div class="col-xs-12 text-center">
                  <q-card-title>
                    <h2>Routes</h2>
                  </q-card-title>
                  <hr class="routeshr">
                </div>
                <div class="col-xs-12 col-md-4 self-center">
                  <q-card-main class="text-center">
                    <span slot="subtitle">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quis labore illo. Amet et, iure veniam ab molestias
                      repellendus non optio! Velit ducimus cumque dolorum perferendis, in nobis non adipisci quia placeat
                      perspiciatis voluptatum, voluptate repellendus laudantium iusto maiores? Qui quas vero repellendus
                      quae accusantium porro ex quibusdam eius possimus.
                    </span>
                  </q-card-main>
                </div>
                <div class="col-xs-12 col-md-3 text-center self-center">
                  <q-btn @click="$router.push('routes')" class="cbtnm shadow-24 text-center mobile-only">View All Routes</q-btn>
                  <q-card class="card-routes text-center desktop-only">
                    <q-card-main>
                      <hr>
                      <q-btn@click="$router.push('routes')" class="cbtn shadow-24">View All Routes</q-btn>
                        <hr>
                    </q-card-main>
                  </q-card>
                </div>
              </div>
            </div>
          </q-card-media>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 border">
          <q-card-media overlay-position="full">
            <!-- <img src="~statics/cover2.jpg"> -->
            <q-parallax :speed="1" :height="460" src="./statics/gray.png">
              <div slot="loading">Loading...</div>
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <q-card-title class="text-center">
                <h2>18 Mile</h2>
                <span slot="subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quis labore illo. Amet et, iure veniam ab molestias
                  repellendus non optio! Velit ducimus cumque dolorum perferendis, in nobis non adipisci quia placeat perspiciatis
                  voluptatum, voluptate repellendus laudantium iusto maiores? Qui quas vero repellendus quae accusantium
                  porro ex quibusdam eius possimus.
                </span>
              </q-card-title>
              <q-card-actions align="center">
                <q-btn @click="$router.push('18-mile')" class="cbtnm shadow-24 text-center align-center">View Route</q-btn>
              </q-card-actions>
            </div>
          </q-card-media>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 border">
          <q-card-media overlay-position="full">
            <!-- <img src="~statics/cover2.jpg"> -->
            <q-parallax :speed="1" :height="460" src="./statics/gray.png">
              <div slot="loading">Loading...</div>
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <q-card-title class="text-center">
                <h2>30 Mile</h2>
                <span slot="subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quis labore illo. Amet et, iure veniam ab molestias
                  repellendus non optio! Velit ducimus cumque dolorum perferendis, in nobis non adipisci quia placeat perspiciatis
                  voluptatum, voluptate repellendus laudantium iusto maiores? Qui quas vero repellendus quae accusantium
                  porro ex quibusdam eius possimus.
                </span>
              </q-card-title>
              <q-card-actions align="center">
                <q-btn @click="$router.push('31-mile')" class="cbtnm shadow-24 text-center align-center">View Route</q-btn>
              </q-card-actions>
            </div>
          </q-card-media>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 border">
          <q-card-media overlay-position="full">
            <!-- <img src="~statics/cover2.jpg"> -->
            <q-parallax :speed="1" :height="460" src="./statics/gray.png">
              <div slot="loading">Loading...</div>
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <q-card-title class="text-center">
                <h2 class="ellipsis-2-lines">Metric Century</h2>
                <span slot="subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quis labore illo. Amet et, iure veniam ab molestias
                  repellendus non optio! Velit ducimus cumque dolorum perferendis, in nobis non adipisci quia placeat perspiciatis
                  voluptatum, voluptate repellendus laudantium iusto maiores? Qui quas vero repellendus quae accusantium
                  porro ex quibusdam eius possimus.
                </span>
              </q-card-title>
              <q-card-actions align="center">
                <q-btn @click="$router.push('metric')" class="cbtnm shadow-24 text-center align-center">View Route</q-btn>
              </q-card-actions>
            </div>
          </q-card-media>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 border">
          <q-card-media overlay-position="full">
            <!-- <img src="~statics/cover2.jpg"> -->
            <q-parallax :speed="1" :height="460" src="./statics/gray.png">
              <div slot="loading">Loading...</div>
              <q-transition appear enter="slideInUp" leave="fadeOut">
                <div class="black-back">
                </div>
              </q-transition>
            </q-parallax>
            <div slot="overlay">
              <q-card-title class="text-center">
                <h2>Century</h2>
                <span slot="subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quis labore illo. Amet et, iure veniam ab molestias
                  repellendus non optio! Velit ducimus cumque dolorum perferendis, in nobis non adipisci quia placeat perspiciatis
                  voluptatum, voluptate repellendus laudantium iusto maiores? Qui quas vero repellendus quae accusantium
                  porro ex quibusdam eius possimus.
                </span>
              </q-card-title>
              <q-card-actions align="center">
                <q-btn @click="$router.push('Century')" class="cbtnm shadow-24 text-center align-center">View Route</q-btn>
              </q-card-actions>
            </div>
          </q-card-media>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <q-parallax class="desktop-only" :speed="1" :height="500" src="./statics/cover2.jpg">
          <div slot="loading">Loading...</div>

          <div class="row options">
            <q-card class="card">
              <q-card-main>
                <hr>
                <q-btn @click="launch('https://legacy.imathlete.com/events/rideforhopeidaho')" class="cbtn shadow-24">Register Now</q-btn>
                <hr>
              </q-card-main>
            </q-card>
            <q-card class="card">
              <q-card-main>
                <hr>
                <q-btn @click="launch('https://legacy.imathlete.com/events/rideforhopeidaho')" class="cbtn shadow-24">Donate Now</q-btn>
                <hr>
              </q-card-main>
            </q-card>
            <q-card class="card">
              <q-card-main>
                <hr>
                <q-btn @click="launch('https://legacy.imathlete.com/events/rideforhopeidaho')" class="cbtn shadow-24">Buy Raffle Tickets</q-btn>
                <hr>
              </q-card-main>
            </q-card>
          </div>
        </q-parallax>
        <q-parallax class="mobile-only" :speed="1" :height="500" src="./statics/cover2.jpg">
          <div slot="loading">Loading...</div>

          <div class="row options">
            <q-card class="card-mobile col-xs-12 text-center">
              <q-card-main>
                <hr>
                <q-btn @click="launch('https://legacy.imathlete.com/events/rideforhopeidaho')" class="cbtn shadow-24">Register Now</q-btn>
                <hr>
              </q-card-main>
            </q-card>
            <q-card class="card-mobile col-xs-12 text-center">
              <q-card-main>
                <hr>
                <q-btn @click="launch('https://legacy.imathlete.com/events/rideforhopeidaho')" class="cbtn shadow-24">Donate Now</q-btn>
                <hr>
              </q-card-main>
            </q-card>
            <q-card class="card-mobile col-xs-12 text-center">
              <q-card-main>
                <hr>
                <q-btn @click="launch('https://legacy.imathlete.com/events/rideforhopeidaho')" class="cbtn shadow-24">Buy Raffle Tickets</q-btn>
                <hr>
              </q-card-main>
            </q-card>
          </div>
        </q-parallax>
      </div>
    </div>
    <!--  -->
    <div class="footer text-center text-bold" slot="footer">
      <div class="row justify-center">
        <div class="col-xs-12">
          <h3 class="text-center desktop-only">
            Thank you for supporting Ride for Hope!
          </h3>
          <h6 class="text-center mobile-only">
            Thank you for supporting Ride for Hope!
          </h6>
        </div>
        <div class="col-xs-12">
          <div class="row justify-center">
            <div class="col-xs-6 col-md-3">
              <q-btn flat @click="launch('https://www.strava.com/clubs/302822')" flat>
                <img class="strava" src="statics/strava.png" alt="strava logo">
              </q-btn>
            </div>
            <div class="col-xs-6 col-md-3 mobile-only">
              <q-btn flat @click="launch('https://www.facebook.com/rideforhopeidaho/')" flat>
                <q-icon class="fb" size="5.75rem" name="fa-facebook-square" />
              </q-btn>
            </div>
            <div class="col-md-3" id="bar">
              <hr class="hr">
              <h5 class="text-bold text-italic">Veni Vidi Vici Sponsors</h5>
              <q-btn flat data-x="360" class="el" @click="launch('http://www.meridian-cycles.com/')">
                <img class="meridian-big" src="statics/meridian.png" alt="Meridian Cycles logo">
              </q-btn>
            </div>
            <div class="col-md-3 desktop-only">
              <q-btn flat @click="launch('https://www.facebook.com/rideforhopeidaho/')" flat>
                <q-icon class="fb" size="5.75rem" name="fa-facebook-square" />
              </q-btn>
            </div>
          </div>
        </div>
      </div>
      <div v-scroll-fire="animate" class="row justify-center">
        <div class="col-xs-12 col-md-12">
          <div class="row justify-center">
            <div class="col-xs-12">
              <hr class="hr">
              <h5 class="text-bold text-italic">Semper Fidelis Sponsors</h5>
            </div>
            <div class="col-xs-6 col-md-3">
              <q-btn flat @click="launch('http://www.meatsroyaleidaho.com/')">
                <img @click="launch('http://www.meatsroyaleidaho.com/')" class="responsive silver" src="~statics/meats.jpg" alt="Meats Royale">
              </q-btn>
            </div>
            <div class="col-xs-6 col-md-3">
              <q-btn flat @click="launch('https://www.sherwin-williams.com/homeowners')">
                <img class="responsive silver" src="statics/sherwin.png" alt="Sherwin Williams">
              </q-btn>
            </div>
            <div class="col-xs-6 col-md-3">
              <q-btn flat @click="launch('https://10barrel.com/pub/boise/')">
                <img @click="launch('https://10barrel.com/pub/boise/')" class="responsive silver" src="https://static.wixstatic.com/media/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png/v1/fill/w_158,h_63,al_c,usm_0.66_1.00_0.01/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png"
                  alt="10 Barrel BrewingCo.">
              </q-btn>
            </div>
            <hr class="hr">
          </div>
        </div>
        <!-- <div class="col-xs-12 col-md-5">
          <h5 class="text-bold text-italic">Carpe Diem Sponsors</h5>
          <q-btn @click="launch('http://www.raymondjames.com/boiseid/')">
            <h6>Riverside Associates</h6>
          </q-btn>
          <hr class="hr">
        </div>
        <div class="col-xs-12 col-md-5">
          <h5 class="text-bold text-italic">Virtitem Spei Sponsors</h5>
          <q-btn @click="launch('http://www.lylepearson.com/')">
            <h6>Lyle Pearson</h6>
          </q-btn>
          <hr class="hr">
        </div> -->
      </div>
    </div>
    </div>
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn round v-back-to-top.animate="{offset: 200, duration: 200}" class="animate-pop back">
        <q-icon name="keyboard_arrow_up" />
      </q-btn>
    </q-fixed-position>
  </q-layout>
</template>

<script>
  import anime from "animejs"
  import {
    dom,
    event,
    openURL,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QTab,
    QTabs,
    QParallax,
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QRouteTab,
    QTransition,
    QSideLink,
    QPopover,
    QCollapsible,
    BackToTop,
    Ripple,
    QFixedPosition,
    ScrollFire,
    QCardMedia,
    QCardActions
  } from 'quasar'



  export default {
    name: 'index',
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain,
      QTab,
      QTabs,
      QParallax,
      QCard,
      QCardTitle,
      QCardSeparator,
      QCardMain,
      QRouteTab,
      QTransition,
      QSideLink,
      QPopover,
      QCollapsible,
      QFixedPosition,
      QCardMedia,
      QCardActions
    },
    data() {
      return {
      }
    },
    computed: {
      home() {
        if (this.$route.path == '/') {
          return true;
        }
        else {
          return false;
        }
      }
    },
    methods: {
      launch(url) {
        openURL(url)
      },
      collapse() {
        this.$refs.popover.close()
        this.$refs.popoverRoutes.close()
      },
      animate() {
        // console.log('running')
        anime({
          targets: "#bar .el",
          translateX: function (el) {
            // return el.getAttribute('data-x');
            return 0
          },
          translateY: function (el, i) {
            // return 50 + (-50 * i);
            return 0
          },
          scale: function (el, i, l) {
            return 1.25;
          },
          // rotate: function () { return anime.random(-360, 360); },
          duration: function () { return anime.random(500, 800); },
          duration: function () { return anime.random(800, 1100); },
          delay: function () { return anime.random(0, 500); },
          direction: 'reverse'
        });
      }
    },
    directives: {
      BackToTop,
      Ripple,
      ScrollFire
    },
    mounted() {
      this.$refs.layout.toggleLeft()

    },
    beforeDestroy() {
    }
  }
</script>

<style scoped>
  .routeshr {
    width: 90%;
    margin-bottom: 3rem;
  }

  .black-back {
    background: rgba(29, 29, 29, 0.329);
    height: 100%;
    width: 100%;
  }

  .border {
    border: 1px white solid;
  }

  .text {
    padding: 1rem;
  }

  .silver {
    /* max-width: 20vw; */
    padding: 1rem;
  }

  .back {
    background-color: rgba(0, 0, 0, 0.589);
    color: white;
  }

  .hr {
    width: 80%;
  }

  .route-tab-cont {
    margin-bottom: .75rem;
  }

  .route-tab {
    color: white;
  }

  .top-title {
    margin-left: .5rem;
  }

  .strava-top {
    max-width: 4.5rem;
    /* height: 4rem; */
  }

  .meridian {
    max-width: 9rem;
    /* height: 4rem; */
  }

  .meridian-mobile {
    height: 4rem;
    /* max-width: 7.5rem; */
    margin-top: .5rem;
  }

  .strava {
    width: 10rem;
  }

  .q-item-link:hover {
    background: rgba(255, 255, 255, .7);
  }

  .q-list-highlight {
    background: rgba(255, 255, 255, .7);
    color: black;
    font-weight: 400;
  }

  .q-popover {
    background-color: rgba(17, 17, 17, 0.88);
    color: white;
  }

  .tabhr {
    border-color: black;
    width: 100%;
  }

  .tabhrs {
    border-color: black;
    width: 100%;
  }

  .left-tab {
    text-align: left;
    padding-left: 1rem;
  }

  .small-side {
    font-weight: 400;
    color: black;
    font-size: 1.5rem;
  }

  .side {
    font-weight: 400;
    color: black;
    font-size: 2rem;
  }

  .small {
    font-size: .7rem;
  }

  .mini {
    height: 4rem;
  }

  .top-promo {
    color: rgb(255, 255, 0);
  }

  .q-btn {
    text-transform: none;
  }

  .fb {
    color: rgb(59, 89, 152);
    width: 10rem;
  }

  .footer {
    background-color: rgb(17, 17, 17);
    /* background-image: url("~statics/dark-triangles.png"); */
    color: rgb(180, 0, 0);
    padding-bottom: 3rem;
    /* margin-top: 15rem; */
  }

  .spacer {
    padding: .5rem 0 .5rem 0;
    background-color: black;
    display: flex;
    justify-content: center;

  }

  .cbtnm {
    background-color: rgba(218, 0, 0, 0.699);
    color: white;
    padding: 0 2rem 0 2rem;
    margin-top: 1rem;
  }

  .cbtn {
    background-color: rgba(17, 17, 17, 0.88);
    color: white;
    padding: 0 2rem 0 2rem;
  }

  .card-routes {
    background-color: rgba(255, 0, 0, 0.644);
    padding: 2rem 2rem 2rem 2rem;
  }

  .card {
    background-color: rgba(197, 7, 7, 0.8);
    padding: 2rem 2rem 2rem 2rem;
  }

  .card-mobile {
    background-color: rgba(197, 7, 7, 0.8);
    /* padding: 2rem 2rem 2rem 2rem; */
  }

  .options {
    display: flex;
    justify-content: space-around;
    background-color: rgba(17, 17, 17, 0.88);
    padding: 3rem 5rem 3rem 5rem;
    /* background-image: url("~statics/cover2.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover; */
    /* justify-content: center; */
  }

  .ride {
    margin: 1rem 0 1rem 0;
    max-height: 13rem;
  }

  .top-logo {
    background-color: rgba(17, 17, 17, 0.88);
    display: flex;
    justify-content: center;
  }

  .promo {
    /* margin-top: -6rem; */
    padding: 0 2rem 0 2rem;
    background-color: rgba(0, 128, 128, 0.6);
    color: black;
  }

  .bot-promo {
    /* margin-top: -6rem; */
    padding: 0 2rem 0 2rem;
    background-color: rgba(0, 0, 0, 0.829);
    color: rgb(134, 2, 2);
  }

  .head {
    background-color: rgba(17, 17, 17, 0.88);
    /* color: rgba(17, 17, 17, 0.705); */
  }



  .tab {
    text-transform: none;
    /* background: rgba(8, 8, 8, 0.705); */
  }

  .logo-container {

    width: 255px;
    height: 242px;
    perspective: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .logo {
    position: absolute;
    transform-style: preserve-3d;
  }

  .back {
    /* background-image: url("~assets/cover.jpg"); */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>