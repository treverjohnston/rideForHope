<template>
    <q-layout class="routes row">
        <div class="promo text-center text-italic text-bold desktop-only col-xs-12">
            <q-parallax src="statics/riders4.jpg" :height="300">
                <div slot="loading">
                    <h2>2018 Routes</h2>
                    <q-btn @click="launch('https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf')" class="maps shadow-24"
                        big no-caps>Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS</q-btn>
                </div>
                <h2>2018 Routes</h2>
                <q-btn @click="launch('https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf')" class="maps shadow-24"
                    big no-caps>Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS</q-btn>
            </q-parallax>
        </div>
        <div class="promo text-center text-italic text-bold mobile-only col-xs-12">
            <q-parallax src="statics/riders.jpg" :height="200">
                <div slot="loading">
                    <h4>2018 Routes</h4>
                    <q-btn @click="launch('https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf')" class="maps shadow-24"
                        big no-caps>Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS</q-btn>
                </div>
                <h4>2018 Routes</h4>
                <q-btn @click="launch('https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf')" class="maps shadow-24"
                    big no-caps>Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS</q-btn>
            </q-parallax>
        </div>
        <div class="row wrap justify-center">
            <q-card v-for="card in routes" inline class="route col-xs-11 col-sm-5 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                    <div>
                        <q-card-media>
                            <img :src="card.pic">
                        </q-card-media>
                        <q-card-actions align="center">
                            <a :href="card.url" target="_blank">
                                <q-btn class="r-btn" no-caps>{{card.length}} Mile Route Map</q-btn>
                            </a>
                        </q-card-actions>
                    </div>
                </q-transition>
            </q-card>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QCard,
        QCardMain,
        QCardMedia,
        QCardTitle,
        QCardSeparator,
        QCardActions,
        QBtn,
        openURL,
        QTransition,
        QParallax
    } from 'quasar'
    export default {
        name: 'About',
        data() {
            return {
            }
        },
        components: {
            QLayout,
            QCard,
            QCardMain,
            QCardMedia,
            QCardTitle,
            QCardSeparator,
            QCardActions,
            QBtn,
            QTransition,
            QParallax
        },
        computed: {
            routes() {
                return this.$store.state.routes
            }
        },
        methods: {
            launch(url) {
                openURL(url)
            },
        }
    }
</script>

<style scoped>
    .r-btn{
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
    }
    .maps {
        /* color: rgb(194, 0, 0); */
        color: white;
        margin-bottom: 1rem;
        background-color: rgba(197, 7, 7, 0.8);
    }

    .route {
        border: 5px solid black;
    }

    .routes {
        background-color: rgb(206, 201, 201);
    }

    .promo {
        /* padding: 0 2rem 0 2rem; */
        /* background-color: rgba(2, 182, 182, 0.6); */
        /* color: white; */
        text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
    }
</style>