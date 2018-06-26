<template>
    <q-layout class="black">
        <div class="row justify-center">
            <div class="col-xs-11 col-md-10 black-back shadow-24">
                <div class="row wrap justify-center">
                    <div class="col-xs-12">
                        <div class="row justify-center">
                            <div class="col-xs-12 text-center">
                                <h2 class="headline text-center black">31 Mile Ride</h2>
                                <h5 class="headline text-center black">Carpe Diem - "Seize The Day"</h5>
                                <hr class="hr">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-center">
                    <div class="col-xs-12 col-lg-4 r-links">
                        <div class="row wrap justify-center">
                            <div class="col-xs-11 text-center r-links">
                                <q-btn no-caps class="btn" @click="$router.push('/register')">Register Now
                                </q-btn>
                                <!-- LIVE REGISTRATION -->
                                <!-- <q-btn no-caps class="btn" @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D67623%26fQuery%3D%26z%3D1522016197284')">Register Now
                                </q-btn> -->
                            </div>
                        </div>
                        <div class="row wrap justify-center">
                            <div class="light-paragraph text-center col-xs-11 col-md-11 r-links">
                                <p>Registration opens at 5:00 AM</p>
                                <hr class="ihr">
                                <h4>31 Mile Start Time</h4>
                                <h5>10:00 AM*</h5>
                                <hr class="ihr">
                                <p>*Please be at the start line ready to ride at least 15 minutes before posted start time.</p>
                            </div>
                        </div>
                        <div class="row wrap justify-center">
                            <h6 class="top light-paragraph text-center col-xs-11 col-md-11 r-links">
                                Destination route to Melba and then back to Kuna. Gentle rolling hills through farmland. This is a course that will delight
                                those who want to establish a new 40k personal best. But you surely didn’t train all that
                                time to come to Ride For Hope Idaho just to get it over with as fast as you can; did you?!
                                Stop and smell the roses, converse with your riding partners, and don’t forget to experience
                                a fancy porta-john at one of the three rest stops you will encounter along the route!
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
                    <div class="col-xs-12 col-lg-8 top-marg">
                        <div class="row wrap justify-center">
                            <q-card class="route col-xs-11 col-md-11 shadow-24">
                                <q-transition appear enter="zoomIn" leave="fadeOut">
                                    <div>
                                        <q-card-media>
                                                <iframe id="mapmyfitness_route" src="//snippets.mapmycdn.com/routes/view/embedded/1478990992?width=400&height=300&&line_color=E6ff8f49&rgbhex=498fff&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-06-18T21:12:41-07:00&show_marker_every=3" height="360px" width="100%" frameborder="0"></iframe>
                                                                                                         
                                            <!-- <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517598418/31_MILE_2018_ynauc9.jpg" alt="31-mile preview"> -->
                                        </q-card-media>
                                        <div align="center" class="white-text" label="View More Map Options">
                                            <q-btn class="btn blue-back" @click="launch('//www.mapmyride.com/routes/view/1478990992')" no-caps>Map My Ride</q-btn>
                                            <q-btn class="btn blue-back" @click="launch('//www.strava.com/routes/3647308')" no-caps>Strava</q-btn>
                                            <q-btn class="btn blue-back" @click="launch('https://connect.garmin.com/modern/course/19154808')" no-caps>Garmin</q-btn>
                                            <q-btn class="btn blue-back" @click="launch('//ridewithgps.com/routes/26451284')" no-caps>Ride With GPS</q-btn>
                                            <q-btn class="btn blue-back" @click="launch('./statics/map/31.pdf')" no-caps>PDF Printout</q-btn>

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
                            <div class="col-xs-12 text-center bot-link">
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
        mounted() {
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
    .blue-back{
     background-color: rgba(73, 143, 255, 0.898);
    }

    .route {
        border: 5px solid black;
    }

    .hr {
        width: 30%;
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);

    }
</style>