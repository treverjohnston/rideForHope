<template>
    <q-layout class="eighteen black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12">
                <q-parallax src="statics/road.jpg" :speed=".1" :height="200">
                    <div slot="loading"><h2 class="headline text-center">18 Mile Ride</h2>
                        <hr color="red" class="hr"></div>
                    <h2 class="headline text-center black red-back">18 Mile Ride</h2>
                    <!-- <hr color="red" class="hr"> -->
                </q-parallax>
            </div>
        </div>
        <div class="row wrap justify-center">
            <h6 class="light-paragraph text-justify col-xs-11 col-md-8">
                Flat and mellow ride through farmland with one rest stop half-way through course. Race with
                the bumble bees, fly with the birds and burn up the road with human powered speed!
            </h6>
        </div>
        <div class="row wrap justify-center">
            <p>Distance: 18 Miles</p>
        </div>
        <div class="row wrap justify-center">
            <p>Elevation: +281ft</p>
        </div>
        <!-- <div class="row wrap justify-center">
            <div class="col-xs-11 shadow-24">
                <iframe src="http://www.mapmyride.com/routes/fullscreen/996049745/"  class="map"></iframe>
            </div>
        </div> -->
        <div class="row wrap justify-center">
            <q-card class="route col-xs-11 col-md-8 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                    <div>
                        <q-card-media>
                            <img src="http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/18_mrihcr.jpg" alt="18-mile preview">
                        </q-card-media>
                        <q-card-actions align="center">
                            <a href="http://www.mapmyride.com/routes/view/996049745" target="_blank">
                                <q-btn class="r-btn" no-caps>Route Map</q-btn>
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
        QInput,
        QBtn,
        QGallery,
        openURL,
        QTransition,
        QCard,
        QCardMedia,
        QCardActions,
        QParallax
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
            QParallax
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
    .map{
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
    .q-card-actions{
        background-image: url("~statics/binding_dark.png");
    }
</style>