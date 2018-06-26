<template>
    <q-layout class="black">
        <div class="row justify-center">
            <div class="col-xs-11 col-md-10 black-back shadow-24">
                <div class="row wrap justify-center">
                    <div class="col-xs-12">
                        <div class="row justify-center">
                            <div class="col-xs-12 text-center">
                                <h2 class="headline text-center black">18 Mile Ride</h2>
                                <h5 class="headline text-center black">Virtutem Spei - "Hope and Strength"</h5>
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
                                <h4>18 Mile Start Time</h4>
                                <h5>10:30 AM*</h5>
                                <hr class="ihr">
                                <p>*Please be at the start line ready to ride at least 15 minutes before posted start time.</p>
                            </div>
                        </div>
                        <div class="row wrap justify-center">
                            <h6 class="light-paragraph text-center col-xs-11 col-md-11 r-links">
                                Flat and mellow ride through farmland with one rest stop half-way through course. Race with the bumble bees, fly wth the
                                birds and burn up the road with with human powered speed! This is a “honey” of a course and
                                flat as a pancake; except for one little blueberry bump on top that is too small to categorize.
                                No blackberries, huckleberries or strawberry mountains on this course!
                            </h6>
                        </div>
                        <div class="row justify-center">
                            <div class="col-xs-11 col-md-11 text-center border r-links">
                                <div class="row justify-center">
                                    <div class="col-xs-4">
                                        <img class="responsive rest" src="https://res.cloudinary.com/treverscloud/image/upload/v1517598415/Bathroom_sign_xybmya.jpg"
                                            alt="rest stop">
                                    </div>
                                    <div class="col-xs-12 self-center">
                                        <h5>
                                            Rest Stops
                                        </h5>
                                    </div>
                                    <div class="col-xs-12 self-center">
                                        <h6>
                                            Bowmont - 9.7 Miles
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-center desktop-only">
                            <div class="col-xs-11 text-center r-links">
                                <h5>Quick Links To Other Routes</h5>
                                <q-btn class="r-btn" @click="$router.push('/31-mile')" no-caps>31 Mile</q-btn>
                                <q-btn class="r-btn" @click="$router.push('/metric')" no-caps>Metric Century</q-btn>
                                <q-btn class="r-btn" @click="$router.push('/Century')" no-caps>Century</q-btn>
                            </div>
                        </div>
                        <div class="row wrap justify-center desktop-only last">
                            <div class="col-xs-11 text-center r-links">
                                <q-btn class="btn" @click="$router.push('climbs')" no-caps>Information About Climbs</q-btn>
                            </div>
                        </div>

                    </div>
                    <div class="col-xs-12 col-lg-7 top-marg">
                        <div class="row wrap justify-center">
                            <q-card class="route col-xs-11 col-md-11 shadow-24">
                                <q-transition appear enter="zoomIn" leave="fadeOut">
                                    <div>
                                        <q-card-media>
                                                <iframe id="mapmyfitness_route" src="//snippets.mapmycdn.com/routes/view/embedded/996049745?width=400&height=300&&line_color=E600ecfd&rgbhex=fdec00&distance_markers=0&unit_type=imperial&map_mode=ROADMAP&last_updated=2018-06-18T21:21:14-07:00" height="360px" width="100%" frameborder="0"></iframe>
                                                                                                          
                                            <!-- <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517598417/18_MILE_2018_keltgt.jpg" alt="18-mile preview"> -->
                                        </q-card-media>
                                        <div align="center" class="white-text small" label="View More Map Options">
                                            <q-btn class="btn yellow" @click="launch('//www.mapmyride.com/routes/view/996049745')" no-caps>Map My Ride</q-btn>
                                            <q-btn class="btn yellow" @click="launch('//www.strava.com/routes/4176344')" no-caps>Strava</q-btn>
                                            <q-btn class="btn yellow" @click="launch('https://connect.garmin.com/modern/course/19154844')" no-caps>Garmin</q-btn>
                                            <q-btn class="btn yellow" @click="launch('//ridewithgps.com/routes/12352336')" no-caps>Ride With GPS</q-btn>
                                            <q-btn class="btn yellow" @click="launch('./statics/map/18.pdf')" no-caps>PDF Printout</q-btn>
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
                                            <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517248679/18_Mile_Elevation_Profile_Only_a0jjur.jpg" alt="18-mile elevation profile">
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
        QCollapsible,
        QItem,
        QItemSide,
        QItemMain,
        QListHeader
    } from 'quasar'
    export default {
        name: 'Eighteen',
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
            QCollapsible,
            QItem,
            QItemSide,
            QItemMain,
            QListHeader
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
        margin: .5rem .5rem .5rem 0;
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
    }
    .yellow{
        background-color: rgba(253, 237, 0, 0.939);
        color: black;
    }

    .small {
        font-size: .5rem;
    }

    .white-text {
        color: white;
    }

    .map {
        height: 90vh;
        width: 100%;
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