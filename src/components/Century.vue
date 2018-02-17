<template>
    <q-layout class="century black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12">
                <q-parallax src="statics/road.jpg" :speed=".4" :height="200">
                    <div slot="loading">
                        <h2 class="headline text-center">Century Ride</h2>
                        <hr color="red" class="hr">
                    </div>
                    <div class="row justify-center">
                        <div class="col-xs-12 text-center red-back">
                            <h2 class="headline text-center black">Century Ride</h2>
                            <h5 class="headline text-center black">Veni Vidi Vici - "I Came. I Saw. I Conquered."</h5>
                            <!-- <big class="headline text-center black">"I Came. I Saw. I Conquered."</big> -->
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
                <div class="row wrap justify-center">
                    <h6 class="top  light-paragraph text-center col-xs-11 col-md-11 r-links">
                        100 mile course. Over hill, over dale while avoiding the dusty mountain bike trail. This route is for those who believe toenails
                        are for sissys and blisters are braille for success. There are 6 rest stops with ample opportunity
                        to visit your favorite porta-john. The course has a little of everything including short climbs,
                        rolling hills, and flats. You will trek southward and dip onto the Snake River Scenic Byway before
                        returning to Melba and then on toward Marsing. With your fat cells crying (aka sweating) you will
                        ride through vineyards, orchards and past scenic overlooks. You will skirt Lake Lowell as you head
                        toward the finish line with your riding buddies; who will know more about your bodily functions than
                        your significant other by the time you reach Kuna. </h6>
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
                                    W. Dickman - 18.7 Miles
                                </h6>
                                <h6>
                                    Melba - 32.2 Miles
                                </h6>
                                <h6>
                                    Bowmont - 49.6 Miles
                                </h6>
                                <h6>
                                    Gun Range - 64.9 Miles
                                </h6>
                                <h6>
                                    Lake Shore Dr. - 79.8 Miles
                                </h6>
                                <h6>
                                    Bowmont - 91.9 Miles
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-center r-links desktop-only">
                        <div class="col-xs-11 text-center">
                            <h5>Quick Links To Other Routes</h5>
                            <q-btn class="r-btn" @click="$router.push('/18-mile')" no-caps>18 Mile</q-btn>
                            <q-btn class="r-btn" @click="$router.push('/31-mile')" no-caps>31 Mile</q-btn>
                            <q-btn class="r-btn" @click="$router.push('/metric')" no-caps>Metric Century</q-btn>
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
                                    <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517598416/CENTURY_2018_gj2tra.jpg" alt="century preview">
                                </q-card-media>
                                <q-card-actions class="desktop-only" align="center">
                                    <q-collapsible class="white-text" label="View Map Options">
                                        <q-btn class="r-btn" @click="launch('//www.mapmyride.com/routes/view/1462908562')" no-caps>Map My Ride</q-btn>
                                        <q-btn class="r-btn" @click="launch('//www.strava.com/routes/7741956')" no-caps>Strava</q-btn>
                                        <q-btn class="r-btn" @click="launch('//connect.garmin.com/modern/course/16760220')" no-caps>Garmin</q-btn>
                                        <q-btn class="r-btn" @click="launch('//ridewithgps.com/routes/26451231')" no-caps>Ride With GPS</q-btn>
                                    </q-collapsible>
                                </q-card-actions>
                                <div align="center" class="white-text mobile-only" label="View More Map Options">
                                    <q-btn class="btn" @click="launch('//www.mapmyride.com/routes/view/1462908562')" no-caps>Map My Ride</q-btn>
                                    <q-btn class="btn" @click="launch('//www.strava.com/routes/7741956')" no-caps>Strava</q-btn>
                                    <q-btn class="btn" @click="launch('//connect.garmin.com/modern/course/16760220')" no-caps>Garmin</q-btn>
                                    <q-btn class="btn" @click="launch('//ridewithgps.com/routes/26451231')" no-caps>Ride With GPS</q-btn>
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
                                    <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517248679/Century_Elevation_Profile_Only_i9lr2i.jpg" alt="century elevation profile">
                                </q-card-media>

                            </div>
                        </q-transition>
                    </q-card>
                </div>
                <div class="row wrap justify-center">
                    <q-card class="route col-xs-11 col-md-11 shadow-24">
                        <q-transition appear enter="zoomIn" leave="fadeOut">
                            <div>
                                <q-card-media>
                                    <img src="https://res.cloudinary.com/treverscloud/image/upload/v1517248680/Century_Climb_Details_yhmkjr.jpg" alt="century climb profile">
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
        name: 'century',
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

    .century {
        background-image: url("~statics/triangular.png");
    }
</style>