<template>
    <q-layout class="metric black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12">
                <q-parallax src="statics/road.jpg" :speed=".7" :height="200">
                    <div slot="loading">
                        <h2 class="headline text-center">Metric Century Ride</h2>
                        <hr color="red" class="hr">
                    </div>
                    <div class="row justify-center">
                            <div class="col-xs-12 text-center red-back">
                                <h2 class="headline text-center black desktop-only">Metric Century Ride</h2>
                                <h4 class="headline text-center black mobile-only">Metric Century Ride</h4>
                                <h5 class="headline text-center black">Semper Fidelis - "Always Faithful"</h5>
                                <!-- <big class="headline text-center black">"Always Faithful"</big> -->
                            </div>
                        </div>                    
                </q-parallax>
            </div>
        </div>
        <div class="row wrap justify-center">
            <h6 class="top light-paragraph text-justify col-xs-11 col-md-8">
                62.8 miles long (because 62.9 would just be CRAZY!). Completely redesigned course for 2018. This is a ride for true bikers
                (i.e. no longer embarrassed to wear spandex). The route Includes rolling hills, scenic overlooks, vineyards
                and 4 rest stops. The course meets up with the last half of the Century route (so you will have additional
                riders to share your challenge with along the way). You will continue northwest toward Marsing and then turn
                back toward Kuna and pedal, pedal, pedal, to Lake Shore Drive skirting Lake Lowell on your way back to the
                finish line where festivities and food await, (if you are fast enough!). Just remember, Humpty Dumpty had wall issues
                too but he overcame; so can you!
            </h6>
            <div class="col-xs-11 col-md-8 text-center">
                    <h5>
                        Metric Century Rest Stops:
                    </h5>
                    <h6>
                        Bowmont - 12.5 Miles
                    </h6>
                    <h6>
                        Gun Range- 28 Miles
                    </h6>
                    <h6>
                        Lake Shore Dr. - 42.5 Miles
                    </h6>
                    <h6>
                        Bowmont - 54.5 Miles
                    </h6>
                </div>
        </div>
        <div class="row wrap justify-center">
            <q-card class="route col-xs-11 col-md-8 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                    <div>
                        <q-card-media>
                            <img src="http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/62.8_obydkx.jpg" alt="metric century preview">
                        </q-card-media>
                        <q-card-actions class="desktop-only" align="center">
                            <q-collapsible class="white-text" label="View More Map Options">
                                <q-btn class="r-btn" @click="launch('//www.mapmyride.com/routes/view/981667107')" no-caps>Map My Ride</q-btn>
                                <q-btn class="r-btn" @click="launch('//www.strava.com/routes/4093800')" no-caps>Strava</q-btn>
                                <q-btn class="r-btn" @click="launch('//connect.garmin.com/modern/course/16760339')" no-caps>Garmin</q-btn>
                                <q-btn class="r-btn" @click="launch('//ridewithgps.com/routes/26451173')" no-caps>Ride With GPS</q-btn>
                            </q-collapsible>
                        </q-card-actions>
                        <div align="center" class="white-text mobile-only" label="View More Map Options">
                            <q-btn class="btn" @click="launch('//www.mapmyride.com/routes/view/981667107')" no-caps>Map My Ride</q-btn>
                            <q-btn class="btn" @click="launch('//www.strava.com/routes/4093800')" no-caps>Strava</q-btn>
                            <q-btn class="btn" @click="launch('//connect.garmin.com/modern/course/16760339')" no-caps>Garmin</q-btn>
                            <q-btn class="btn" @click="launch('//ridewithgps.com/routes/26451173')" no-caps>Ride With GPS</q-btn>

                        </div>
                    </div>
                </q-transition>
            </q-card>
        </div>
        <div class="row wrap justify-center">
            <q-card class="route col-xs-11 col-md-8 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                    <div>
                        <q-card-media>
                            <img src="http://res.cloudinary.com/treverscloud/image/upload/v1517248679/Metric_Century_Elevation_Chart_Only_kwxpn6.jpg"
                                alt="metric century elevation profile">
                        </q-card-media>

                    </div>
                </q-transition>
            </q-card>
        </div>
        <div class="row wrap justify-center">
            <q-card class="route col-xs-11 col-md-8 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                    <div>
                        <q-card-media>
                            <img src="http://res.cloudinary.com/treverscloud/image/upload/v1517248679/Metric_Century_Climb_Details_jobfsy.jpg" alt="metric century climb profile">
                        </q-card-media>

                    </div>
                </q-transition>
            </q-card>
        </div>
        <div class="row wrap justify-center">
                <div class="col-xs-12 text-center">
                    <q-btn class="btn" @click="$router.push('climbs')" no-caps>Information About Climbs</q-btn>
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
        name: 'metric',
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
    .top{
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

    .metric {
        background-image: url("~statics/triangular.png");
    }
</style>