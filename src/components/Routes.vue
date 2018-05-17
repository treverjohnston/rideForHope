<template>
    <q-layout class="routes black">
        <div class="row wrap justify-center ">

            <div class="promo text-center text-italic text-bold desktop-only col-xs-12">
                    <q-card-media class="header" overlay-position="full">
                            <img src="statics/road.jpg" class="responsive" alt="picture">
                            <q-card-title slot="overlay" class="text-center">
                                    <h2>2018 Routes</h2>
                                    <q-btn @click="launch('https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf')" class="maps shadow-24"
                                        big no-caps>Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS</q-btn>
        
                            </q-card-title>
                        </q-card-media>
                <!-- <q-parallax src="statics/ride/IMGP9819.JPG.jpg" :height="300">
                    <div slot="loading">
                        <h2>2018 Routes</h2>
                        <q-btn @click="launch('https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf')" class="maps shadow-24"
                            big no-caps>Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS</q-btn>
                    </div>
                    <h2>2018 Routes</h2>
                    <q-btn @click="launch('https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf')" class="maps shadow-24"
                        big no-caps>Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS</q-btn>
                </q-parallax> -->
            </div>

            <div class="promo text-center text-italic text-bold mobile-only col-xs-12">
                <q-parallax src="statics/road.jpg" :height="200">
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
        </div>
        <div class="row wrap justify-center">
            <q-card v-for="card in routes" class="route col-xs-11 col-sm-5 shadow-24">
                <div>
                    <q-card-media>
                        <img :src="card.pic">
                    </q-card-media>
                    <q-card-actions align="center">
                            <q-btn @click="$router.push(`${card.url}`)" class="r-btn" no-caps>{{card.length}} Route Map</q-btn>
                    </q-card-actions>
                </div>
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
    .r-btn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
    }

    .maps {
        color: white;
        margin-bottom: 1rem;
        background-color: rgba(197, 7, 7, 0.8);
    }

    .route {
        border: 5px solid black;
    }

    .promo {
        text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
    }
</style>