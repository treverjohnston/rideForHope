<template>
    <q-layout class="thirty black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12">
                <q-parallax src="statics/road.jpg" :speed=".5" :height="200">
                    <div slot="loading">
                        <h2 class="headline text-center">31 Mile Ride</h2>
                        <hr color="red" class="hr">
                    </div>
                    <div class="row justify-center">
                        <div class="col-xs-12 text-center red-back">
                            <h2 class="headline text-center black">31 Mile Ride</h2>
                            <h5 class="headline text-center black">Cerpe Diem - "Seize The Day"</h5>
                            <!-- <big class="headline text-center black">"Seize The Day"</big> -->
                        </div>
                    </div>
                    <!-- <hr color="red" class="hr"> -->
                </q-parallax>
            </div>
        </div>
        <div class="row justify-center">
            <div class="col-xs-12 col-md-4">
                    <div class="row wrap r-links justify-center">
                            <div class="col-xs-11 text-center">
                                <q-btn no-caps class="btn" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventReg%2FEventReg_SelectType.aspx%3FfEID%3D67623%26fNew%3D1%26fsource%3DimAEOverview')">Register Now
                                </q-btn>
                            </div>
                        </div>
                <div class="row wrap justify-center">
                    <h6 class="top light-paragraph text-center col-xs-11 col-md-11 r-links">
                        Destination route to Melba and then back to Kuna. Gentle rolling hills through farmland. This is a course that will delight
                        those who want to establish a new 40k personal best. But you surely didn’t train all that time to
                        come to Ride For Hope Idaho just to get it over with as fast as you can; did you?! Stop and smell
                        the roses, converse with your riding partners, and don’t forget to experience a fancy porta-john
                        at one of the three rest stops you will encounter along the route!
                    </h6>
                    <div class="col-xs-11 col-md-11 text-center r-links">
                        <div class="row justify-center">
                            <div class="col-xs-4">
                                <img class="responsive rest" src="https://res.cloudinary.com/treverscloud/image/upload/v1517598415/Bathroom_sign_xybmya.jpg"
                                    alt="rest stop">
                            </div>
                            <div class="col-xs-12">
                                <h5>
                                    Rest Stops
                                </h5>
                            </div>
                            <div class="col-xs-12">
                                <h6>
                                    W. Dickman - 9.7 Miles
                                </h6>
                                <h6>
                                    Melba - 14 Miles
                                </h6>
                                <h6>
                                    Bowmont - 22.6 Miles
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-center r-links desktop-only">
                        <div class="col-xs-11 text-center">
                            <h5>Quick Links To Other Routes</h5>
                            <q-btn class="r-btn" @click="$router.push('/18-mile')" no-caps>18 Mile</q-btn>
                            <q-btn class="r-btn" @click="$router.push('/metric')" no-caps>Metric Century</q-btn>
                            <q-btn class="r-btn" @click="$router.push('/Century')" no-caps>Century</q-btn>
                        </div>
                    </div>
                    <div class="row wrap r-links justify-center desktop-only last">
                        <div class="col-xs-11 text-center">
                            <q-btn class="btn" @click="$router.push('climbs')" no-caps>Information About Climbs</q-btn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-8">

                <div class="row wrap justify-center">
                    <q-card class="route col-xs-11 col-md-11 shadow-24">
                        <q-transition appear enter="zoomIn" leave="fadeOut">
                            <div>
                                <q-card-media>
                                    <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517598418/31_MILE_2018_ynauc9.jpg" alt="31-mile preview">
                                </q-card-media>
                                <q-card-actions class="desktop-only" align="center">
                                    <q-collapsible class="white-text" label="View More Map Options">
                                        <q-btn class="r-btn" @click="launch('//www.mapmyride.com/routes/view/1478990992')" no-caps>Map My Ride</q-btn>
                                        <q-btn class="r-btn" @click="launch('//www.strava.com/routes/3647308')" no-caps>Strava</q-btn>
                                        <q-btn class="r-btn" @click="launch('//connect.garmin.com/modern/course/16760417')" no-caps>Garmin</q-btn>
                                        <q-btn class="r-btn" @click="launch('//ridewithgps.com/routes/26451284')" no-caps>Ride With GPS</q-btn>
                                    </q-collapsible>
                                </q-card-actions>
                                <div align="center" class="white-text mobile-only" label="View More Map Options">
                                    <q-btn class="btn" @click="launch('//www.mapmyride.com/routes/view/1478990992')" no-caps>Map My Ride</q-btn>
                                    <q-btn class="btn" @click="launch('//www.strava.com/routes/3647308')" no-caps>Strava</q-btn>
                                    <q-btn class="btn" @click="launch('//connect.garmin.com/modern/course/16760417')" no-caps>Garmin</q-btn>
                                    <q-btn class="btn" @click="launch('//ridewithgps.com/routes/26451284')" no-caps>Ride With GPS</q-btn>
                                </div>
                            </div>
                        </q-transition>
                    </q-card>
                </div>
                <div class="row wrap justify-center">
                    <q-card class="route col-xs-11 col-md-11 shadow-24">
                        <q-transition appear enter="zoomIn" leave="fadeOut">
                            <div>
                                <q-card-media>
                                    <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517248679/31_Mile_Elevation_Profile_Only_oztpv1.jpg" alt="31-mile elevation profile">
                                </q-card-media>

                            </div>
                        </q-transition>
                    </q-card>
                </div>
                <div class="row wrap justify-center mobile-only">
                    <div class="col-xs-12 text-center">
                        <q-btn class="btn" @click="$router.push('climbs')" no-caps>Information About Climbs</q-btn>
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
        QCollapsible
    } from 'quasar'
    export default {
        name: 'thirty',
        data() {
            return {
            }
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
            QCollapsible
        },
        computed: {
            pictures() {
                return this.$store.state.pictures
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
    .last{
        margin-bottom: 1rem;
    }
    .top {
        padding-top: 1rem;
    }

    .btn {
        margin: .5rem .5rem .5rem 0;
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
    }

    .route {
        border: 5px solid black;
    }

    .hr {
        width: 30%;
    }

    .headline {
        text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);

    }

    .thirty {
        background-image: url("~statics/triangular.png");
    }
</style>