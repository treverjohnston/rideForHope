<template>
  <q-layout ref="layout" class="back" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar class="head" slot="header">
      <q-btn class="mobile-only" flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <img src="statics/tLogo.png" alt="logo" class="mini">
      <q-toolbar-title>
        Ride For Hope
      </q-toolbar-title>
      <q-transition appear enter="lightSpeedIn" leave="fadeOut">
        <span class="top-promo mobile-hide" slot="subtitle">
          2017 Ride For Hope raised $12,500 which was donated to charity. Thanks to everyone who helped make this happen!!
        </span>
      </q-transition>

    </q-toolbar class="head desktop-only">
    <!-- IF LOGO IS WANTED ON TOP -->
    <!-- <div class="top-logo">
      <img class="ride" src="statics/tLogo.png" alt="ride for hope logo">
    </div> -->
    <q-tabs glossy align="center" class="shadow-2 desktop-only tabs">
      <q-route-tab class="tab" slot="title" label="Home" name="home" to="/" />
      <q-route-tab class="tab" slot="title" label="About" name="about" to="about" />
      <q-route-tab class="tab" slot="title" label="Register" name="register" to="register" />
      <q-route-tab class="tab" slot="title" label="Routes" name="routes" to="routes" />
      <q-route-tab class="tab" slot="title" label="Donate" name="donate" to="donate" />
      <q-route-tab class="tab" slot="title" label="Raffle Items" name="raffle" to="raffle" />
      <q-route-tab class="tab" slot="title" label="Get Involved" name="involved" to="involved" />
      <q-route-tab class="tab" slot="title" label="Photo Gallery" name="gallery" to="gallery" />
      <q-route-tab class="tab" slot="title" label="Contact" name="contact" to="contact" />
    </q-tabs>

    <div class="mobile-only left-tab" slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list class="mobile-only" no-border link inset-delimiter>
        <!-- <q-list-header>Ride For Hope</q-list-header> -->
        <q-side-link to="/">
          <!-- <q-item-side icon="school" /> -->
          <q-item-main class="side" label="Home" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="about">
          <!-- <q-item-side icon="record_voice_over" /> -->
          <q-item-main class="side" label="About" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="register">
          <!-- <q-item-side icon="chat" /> -->
          <q-item-main class="side" label="Register" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="routes">
          <!-- <q-item-side icon="rss feed" /> -->
          <q-item-main class="side" label="Routes" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="donate">
          <!-- <q-item-side icon="rss feed" /> -->
          <q-item-main class="side" label="Donate" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="raffle">
          <!-- <q-item-side icon="rss feed" /> -->
          <q-item-main class="side" label="Raffle Items" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="involved">
          <!-- <q-item-side icon="rss feed" /> -->
          <q-item-main class="side" label="Get Involved" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="gallery">
          <!-- <q-item-side icon="rss feed" /> -->
          <q-item-main class="side" label="Photo Gallery" />
          <hr class="tabhr">
        </q-side-link>
        <q-side-link to="contact">
          <!-- <q-item-side icon="rss feed" /> -->
          <q-item-main class="side" label="Contact" />
        </q-side-link>
      </q-list>
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <router-view />
    <!--  -->
    <div v-if="home">
      <q-parallax :speed="1" :height="500" src="./statics/cover.jpg">
        <div slot="loading">Loading...</div>

        <div class="promo text-center desktop-only">
          <h5 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h5>
          <h2 class="text-bold">2018 Event Date: Saturday, June 23</h2>
          <h2 class="text-bold">Kuna, ID</h2>
        </div>
        <div class="promo text-center mobile-only">
          <h6 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h6>
          <h3 class="text-bold">2018 Event Date: Saturday, June 23</h3>
          <h3 class="text-bold">Kuna, ID</h3>
        </div>
      </q-parallax>
      <div class="spacer">
        <img class="ride" src="statics/tLogo.png" alt="ride for hope logo">
      </div>

      <q-parallax class="desktop-only" :speed="1" :height="500" src="./statics/cover2.jpg">
        <div slot="loading">Loading...</div>

        <div class="row options">
          <q-card class="card">
            <q-card-main>
              <hr>
              <q-btn class="cbtn shadow-24">Register Now</q-btn>
              <hr>
            </q-card-main>
          </q-card>
          <q-card class="card">
            <q-card-main>
              <hr>
              <q-btn class="cbtn shadow-24">Donate Now</q-btn>
              <hr>
            </q-card-main>
          </q-card>
          <q-card class="card">
            <q-card-main>
              <hr>
              <q-btn class="cbtn shadow-24">Buy Raffle Tickets</q-btn>
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
              <q-btn class="cbtn shadow-24">Register Now</q-btn>
              <hr>
            </q-card-main>
          </q-card>
          <q-card class="card-mobile col-xs-12 text-center">
            <q-card-main>
              <hr>
              <q-btn class="cbtn shadow-24">Donate Now</q-btn>
              <hr>
            </q-card-main>
          </q-card>
          <q-card class="card-mobile col-xs-12 text-center">
            <q-card-main>
              <hr>
              <q-btn class="cbtn shadow-24">Buy Raffle Tickets</q-btn>
              <hr>
            </q-card-main>
          </q-card>
        </div>
      </q-parallax>
      
    </div>
    <!--  -->
    <q-toolbar  glossy class="footer text-center text-italic" slot="footer">
      <q-toolbar-title>
        <h6 class="desktop-only">
          Thank you for supporting Ride for Hope!
        </h6>
        <small class="small mobile-only">
          Thank you for supporting Ride for Hope!
        </small>
      </q-toolbar-title>
      <a href="https://www.facebook.com/rideforhopeidaho/" target="_blank">
        <q-btn flat>
          <q-icon class="fb" name="fa-facebook-square" />
        </q-btn>
      </a>
    </q-toolbar>
  </q-layout>
</template>

<script>
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
    QSideLink
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
      QSideLink
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

    },
    mounted() {
      this.$refs.layout.toggleLeft()

    },
    beforeDestroy() {
    }
  }
</script>

<style scoped>
  .tabhr {
    border-color: black;
    width: 80%;
  }

  .left-tab {
    background-color: teal;
    text-align: center;
  }

  .side {
    font-weight: 100;
    color: white;
    font-size: 2rem;
  }

  .small {
    font-size: .7rem;
  }

  .mini {
    height: 3rem;
  }

  .top-promo {
    color: rgb(255, 255, 0);
  }

  .q-btn {
    text-transform: none;
  }

  .fb {
    color: rgb(59, 89, 152)
  }

  .footer {
    background-color: rgb(17, 17, 17);
    color: rgb(0, 128, 128);
    /* margin-top: 15rem; */
  }

  .spacer {
    padding: .5rem 0 .5rem 0;
    background-color: black;
    display: flex;
    justify-content: center;

  }

  .cbtn {
    background-color: rgba(17, 17, 17, 0.88);
    color: white;
    padding: 0 2rem 0 2rem;
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