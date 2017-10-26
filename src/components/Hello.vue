<template>
  <q-layout ref="layout" class="back" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar class="head glossy" slot="header">
      <q-btn class="mobile-only" flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Ride For Hope
        <!-- <div slot="subtitle">Running on Quasar v{{$q.version}}</div> -->
      </q-toolbar-title>
    </q-toolbar class="head desktop-only">
    <div class="top-logo">
      <img class="ride" src="statics/tLogo.png" alt="ride for hope logo">
    </div>
    <q-tabs glossy align="center" class="shadow-2">
      <q-tab class="tab" slot="title" label="Home" name="home" />
      <q-tab class="tab" slot="title" label="About" name="about" />
      <q-tab class="tab" slot="title" label="Register" name="register" />
      <q-tab class="tab" slot="title" label="Routes" name="routes" />
      <q-tab class="tab" slot="title" label="Donate" name="donate" />
      <q-tab class="tab" slot="title" label="Raffle Items" name="raffle" />
      <q-tab class="tab" slot="title" label="Get Involved" name="involved" />
      <q-tab class="tab" slot="title" label="Photo Gallery" name="gallery" />
      <q-tab class="tab" slot="title" label="Contact" name="contact" />
    </q-tabs>

    <div class="mobile-only" slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list class="mobile-only" no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <q-parallax :speed="1" src="./statics/cover.jpg">
      <!-- Dom elements to display while loading image -->
      <div slot="loading">Loading...</div>

      <div class="promo text-center">
        <h5 class="light-paragraph">SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED</h5>
        <h2 class="text-bold">2018 Event Date: Saturday, June 23</h2>
        <h2 class="text-bold">Kuna, ID</h2>
      </div>
    </q-parallax>
    <div class="spacer">
      <img class="ride" src="statics/tLogo.png" alt="ride for hope logo">
    </div>
    <q-parallax :speed="1" src="./statics/cover2.jpg">
      <div slot="loading">Loading...</div>

      <div class="row options">
        <q-card class="card">
          <q-card-title>
            <hr>
            <q-btn class="cbtn shadow-24">Register Now</q-btn>
            <hr>
          </q-card-title>
        </q-card>
        <q-card class="card">
          <q-card-title>
            <hr>
            <q-btn class="cbtn shadow-24">Donate Now</q-btn>
            <hr>
          </q-card-title>
        </q-card>
        <q-card class="card">
          <q-card-title>
            <hr>
            <q-btn class="cbtn shadow-24">Buy Raffle Tickets</q-btn>
            <hr>
          </q-card-title>
        </q-card>
      </div>
    </q-parallax>
    <q-toolbar glossy class="footer text-center text-italic" slot="footer">
      <q-toolbar-title>
        Thank you for supporting Ride for Hope! </q-toolbar-title>
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
    QCardMain
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
      QCardMain
    },
    data() {
      return {
      }
    },
    computed: {

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

<style>
  .fb {
    color: rgb(59, 89, 152)
  }

  .footer {
    background-color: rgb(39, 34, 34);
    color: rgb(0, 128, 128);
  }

  .spacer {
    padding: .5rem 0 .5rem 0;
    background-color: black;
    display: flex;
    justify-content: center;

  }

  .cbtn {
    background-color: rgba(17, 17, 17, 0.705);
    color: white;
  }

  .card {
    background-color: rgba(197, 7, 7, 0.8);
    padding: 2rem 2rem 2rem 2rem;
  }

  .options {
    display: flex;
    justify-content: space-around;
    background-color: rgba(17, 17, 17, 0.705);
    padding: 3rem 5rem 3rem 5rem;
    /* justify-content: center; */
  }

  .ride {
    margin: 1rem 0 1rem 0;
  }

  .top-logo {
    background-color: rgba(17, 17, 17, 0.705);
    display: flex;
    justify-content: center;
  }

  .promo {
    /* margin-top: -6rem; */
    padding: 0 2rem 0 2rem;
    background-color: rgba(0, 128, 128, 0.6);
  }

  .head {
    background-color: rgba(17, 17, 17, 0.705);
    /* color: rgba(17, 17, 17, 0.705); */
  }

  .q-tabs-head {
    background: rgba(8, 8, 8, 0.705);
  }

  .tab {
    text-transform: none;
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