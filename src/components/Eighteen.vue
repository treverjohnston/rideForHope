<template>
    <q-layout class="eighteen black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12">
                <q-parallax src="statics/road.jpg" :speed=".1" :height="200">
                    <div slot="loading">
                        <h2 class="headline text-center">18 Mile Ride</h2>
                        <hr color="red" class="hr">
                    </div>
                    <div class="row justify-center">
                        <div class="col-xs-12 text-center red-back">
                            <h2 class="headline text-center black">18 Mile Ride</h2>
                            <h5 class="headline text-center black">Virtutem Spei - "Hope and Strength"</h5>
                        </div>
                    </div>
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
                <div class="row wrap justify-center r-links">
                    <h6 class="light-paragraph text-center col-xs-11 col-md-11">
                        Flat and mellow ride through farmland with one rest stop half-way through course. Race with the bumble bees, fly wth the
                        birds and burn up the road with with human powered speed! This is a “honey” of a course and flat
                        as a pancake; except for one little blueberry bump on top that is too small to categorize. No blackberries,
                        huckleberries or strawberry mountains on this course!
                    </h6>
                </div>
                <div class="row justify-center r-links">
                    <div class="col-xs-12 col-md-12 text-center border">
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
                <div class="row justify-center r-links desktop-only">
                    <div class="col-xs-11 text-center">
                        <h5>Quick Links To Other Routes</h5>
                        <q-btn class="r-btn" @click="$router.push('/31-mile')" no-caps>31 Mile</q-btn>
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
            <div class="col-xs-12 col-md-8">
                <div class="row wrap justify-center">
                    <q-card class="route col-xs-11 col-md-11 shadow-24">
                        <q-transition appear enter="zoomIn" leave="fadeOut">
                            <div>
                                <q-card-media>
                                    <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517598417/18_MILE_2018_keltgt.jpg" alt="18-mile preview">
                                </q-card-media>
                                <q-card-actions class="desktop-only" align="center">
                                    <q-collapsible class="white-text" label="View More Map Options">
                                        <q-btn class="r-btn" @click="launch('//www.mapmyride.com/routes/view/996049745')" no-caps>Map My Ride</q-btn>
                                        <q-btn class="r-btn" @click="launch('//www.strava.com/routes/4176344')" no-caps>Strava</q-btn>
                                        <q-btn class="r-btn" @click="launch('//connect.garmin.com/modern/course/16760460')" no-caps>Garmin</q-btn>
                                        <q-btn class="r-btn" @click="launch('//ridewithgps.com/routes/12352336')" no-caps>Ride With GPS</q-btn>
                                    </q-collapsible>
                                </q-card-actions>
                                <div align="center" class="white-text mobile-only small" label="View More Map Options">
                                    <q-btn class="btn" @click="launch('//www.mapmyride.com/routes/view/996049745')" no-caps>Map My Ride</q-btn>
                                    <q-btn class="btn" @click="launch('//www.strava.com/routes/4176344')" no-caps>Strava</q-btn>
                                    <q-btn class="btn" @click="launch('//connect.garmin.com/modern/course/16760460')" no-caps>Garmin</q-btn>
                                    <q-btn class="btn" @click="launch('//ridewithgps.com/routes/12352336')" no-caps>Ride With GPS</q-btn>
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
                    <div class="col-xs-12 text-center r-links">
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
    .last{
        margin-bottom: 1rem;
    }
    .r-links {
        margin-top: 3rem;
        background-color: rgba(224, 226, 226, 0.65);
        padding: .5rem;
        border-radius: 15px;
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
        text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);

    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);

    }

    .eighteen {
        background-image: url("~statics/triangular.png");
    }
</style>