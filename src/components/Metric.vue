<template>
    <q-layout class="black">
        <div class="row justify-center">
            <div class="col-xs-11 col-md-10 shadow-24 black-back">
                <div class="row wrap justify-center">
                    <div class="col-xs-12">
                        <div class="row justify-center">
                            <div class="col-xs-12 text-center">
                                <h2 class="headline text-center black desktop-only">Metric Century Ride</h2>
                                <h4 class="headline text-center black mobile-only">Metric Century Ride</h4>
                                <h5 class="headline text-center black">Semper Fidelis - "Always Faithful"</h5>
                                <hr class="hr">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-center">
                    <div class="col-xs-12 col-lg-4 r-links">
                        <div class="row wrap justify-center">
                            <div class="col-xs-11 r-links text-center">
                                <q-btn no-caps class="btn" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623%26fQuery%3D%26z%3D1522016197284')">Register Now
                                </q-btn>
                            </div>
                        </div>
                        <div class="row wrap justify-center">
                                <div class="light-paragraph text-center col-xs-11 col-md-11 r-links">
                                    <p>Registration opens at 5:00 AM</p>
                                    <hr class="ihr">
                                    <h4>Metric Century Start Time</h4>
                                    <h5>8:00 AM*</h5>
                                    <hr class="ihr">
                                    <p>*Please be at the start line ready to ride at least 15 minutes before posted start time.</p>
                                </div>
                            </div>
                        <div class="row wrap justify-center">
                            <h6 class="top light-paragraph text-center col-xs-11 col-md-11 r-links">
                                62.8 miles long (because 62.9 would just be CRAZY!). Completely redesigned course for 2018. This is a ride for true bikers
                                (i.e. no longer embarrassed to wear spandex). The route Includes rolling hills, scenic overlooks,
                                vineyards and 4 rest stops. The course meets up with the last half of the Century route (so
                                you will have additional riders to share your challenge with along the way). You will continue
                                northwest toward Marsing and then turn back toward Kuna and pedal, pedal, pedal, to Lake
                                Shore Drive skirting Lake Lowell on your way back to the finish line where festivities and
                                food await, (if you are fast enough!). Just remember, Humpty Dumpty had wall issues too but
                                he overcame; so can you!
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
                                            Bowmont - 12.5 Miles
                                        </h6>
                                        <h6>
                                            Gun Range- 27.9 Miles
                                        </h6>
                                        <h6>
                                            Lake Shore Dr. - 42.5 Miles
                                        </h6>
                                        <h6>
                                            Bowmont - 54.5 Miles
                                        </h6>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-11 text-center desktop-only r-links">
                                <h5>Quick Links To Other Routes</h5>
                                <q-btn class="r-btn" @click="$router.push('/18-mile')" no-caps>18 Mile</q-btn>
                                <q-btn class="r-btn" @click="$router.push('/31-mile')" no-caps>31 Mile</q-btn>
                                <q-btn class="r-btn" @click="$router.push('/Century')" no-caps>Century</q-btn>
                            </div>

                            <div class="row wrap r-links justify-center desktop-only last">
                                <div class="col-xs-11 text-center">
                                    <q-btn class="btn" @click="$router.push('climbs')" no-caps>Information About Climbs</q-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-lg-8 top-marg">
                        <div class="row wrap justify-center">
                            <q-card class="route col-xs-11 col-md-11 shadow-24">
                                <q-transition appear enter="zoomIn" leave="fadeOut">
                                    <div>
                                        <q-card-media>
                                            <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517598417/METRIC_CENTURY_2018_xc3agh.jpg" alt="metric century preview">
                                        </q-card-media>
                                        <div align="center" class="white-text" label="View More Map Options">
                                            <q-btn class="btn" @click="launch('//www.mapmyride.com/routes/view/981667107')" no-caps>Map My Ride</q-btn>
                                            <q-btn class="btn" @click="launch('//www.strava.com/routes/4093800')" no-caps>Strava</q-btn>
                                            <q-btn class="btn" @click="launch('https://connect.garmin.com/modern/course/19154726')" no-caps>Garmin</q-btn>
                                            <q-btn class="btn" @click="launch('//ridewithgps.com/routes/26451173')" no-caps>Ride With GPS</q-btn>
                                            <q-btn class="btn" @click="launch('./statics/map/Metric.pdf')" no-caps>PDF Printout</q-btn>

                                        </div>
                                    </div>
                                </q-transition>
                            </q-card>
                            <q-card class="route col-xs-11 col-md-11 shadow-24">
                                <q-transition appear enter="zoomIn" leave="fadeOut">
                                    <div>
                                        <q-card-media>
                                            <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517248679/Metric_Century_Elevation_Chart_Only_kwxpn6.jpg"
                                                alt="metric century elevation profile">
                                        </q-card-media>

                                    </div>
                                </q-transition>
                            </q-card>
                            <q-card class="route col-xs-11 col-md-11 shadow-24">
                                <q-transition appear enter="zoomIn" leave="fadeOut">
                                    <div>
                                        <q-card-media>
                                            <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517248679/Metric_Century_Climb_Details_jobfsy.jpg" alt="metric century climb profile">
                                        </q-card-media>

                                    </div>
                                </q-transition>
                            </q-card>
                            <div class="col-xs-12 text-center mobile-only bot-link">
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
            constructionSwal() {
                return swal({
                    title: 'Route Changes',
                    text: 'Due to construction, ride-day routes may vary from those currently posted.  Check back soon for updated routes.',
                    buttons: {
                        dismiss: { text: "Dismiss", value: "dismiss" }
                    }
                })
                    .then((value) => {
                        switch (value) {
                            case 'dismiss':
                                break;
                        }
                    })
            }
        },
        mounted(){
            // this.constructionSwal();
        }
    }
</script>

<style scoped>
    .last {
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
        /* text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); */
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);

    }

</style>