<template>
    <q-layout class="eighteen black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12">
                <q-parallax src="statics/road.jpg" :speed=".1" :height="200">
                    <div slot="loading">
                        <h2 class="headline text-center">18 Mile Ride</h2>
                        <hr color="red" class="hr">
                    </div>
                    <h2 class="headline text-center black red-back">18 Mile Ride</h2>
                    <!-- <hr color="red" class="hr"> -->
                </q-parallax>
            </div>
        </div>
        <div class="row wrap justify-center">
            <h6 class="light-paragraph text-justify col-xs-11 col-md-8">
                Flat and mellow ride through farmland with one rest stop half-way through course. Race with the bumble bees, fly wth the
                birds and burn up the road with with human powered speed! This is a “honey” of a course and flat as a pancake;
                except for one little blueberry bump on top that is too small to categorize. No blackberries, huckleberries
                or strawberry mountains on this course!
            </h6>
        </div>
        <!-- <div class="row wrap justify-center">
            <p>Distance: 18 Miles</p>
        </div>
        <div class="row wrap justify-center">
            <p>Elevation: +281ft</p>
        </div> -->
        <div class="row wrap justify-center">
            <q-card class="route col-xs-11 col-md-8 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                    <div>
                        <q-card-media>
                            <img src="http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/18_mrihcr.jpg" alt="18-mile preview">
                        </q-card-media>
                        <q-card-actions align="center">
                                <q-collapsible class="white-text" label="View More Map Options">
                                    <q-btn class="r-btn" @click="launch('http://www.mapmyride.com/routes/view/996049745')" no-caps>Map My Ride</q-btn>
                                    <q-btn class="r-btn" @click="launch('http://www.strava.com/routes/4176344')" no-caps>Strava</q-btn>
                                    <q-btn class="r-btn" @click="launch('https://connect.garmin.com/modern/course/16760460')" no-caps>Garmin</q-btn>
                                    <q-btn class="r-btn" @click="launch('https://ridewithgps.com/routes/12352336')" no-caps>Ride With GPS</q-btn>
                                </q-collapsible>
                            </q-card-actions>
                    </div>
                </q-transition>
            </q-card>
        </div>
        <div class="row wrap justify-center">
            <q-card class="route col-xs-11 col-md-8 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                    <div>
                        <q-card-media>
                            <img src="http://res.cloudinary.com/treverscloud/image/upload/v1517248679/18_Mile_Elevation_Profile_Only_a0jjur.jpg" alt="18-mile elevation profile">
                        </q-card-media>
                        
                    </div>
                </q-transition>
            </q-card>
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
    .white-text{
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

    .q-card-actions {
        /* background-image: url("~statics/binding_dark.png"); */
    }
</style>