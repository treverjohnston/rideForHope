<template>
    <q-layout class="metric black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12">
                <q-parallax src="statics/road.jpg" :speed=".7" :height="200">
                    <div slot="loading"><h2 class="headline text-center">Metric Century Ride</h2>
                        <hr color="red" class="hr"></div>
                    <h2 class="headline text-center black red-back">Metric Century Ride</h2>
                    <!-- <hr color="red" class="hr"> -->
                </q-parallax>
            </div>
        </div>
        <div class="row wrap justify-center">
            <h6 class="top text-italic light-paragraph text-justify col-xs-11 col-md-8">
                A shortish description of the race, see <a href="https://wackybikeride.com/routes/12-mile-family-ride/" target="_blank">https://wackybikeride.com/routes/12-mile-family-ride/</a> for inspiration
            </h6>
        </div>
        <div class="row wrap justify-center">
            <p>Distance: 62.8 Miles</p>
        </div>
        <div class="row wrap justify-center">
            <p>Elevation: +1606ft</p>
        </div>
        <div class="row wrap justify-center">
            <q-card class="route col-xs-11 col-md-8 shadow-24">
                <q-transition appear enter="zoomIn" leave="fadeOut">
                    <div>
                        <q-card-media>
                            <img src="http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/62.8_obydkx.jpg" alt="18-mile preview">
                        </q-card-media>
                        <q-card-actions align="center">
                            <a href="http://www.mapmyride.com/routes/view/981667107" target="_blank">
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
    .q-card-actions{
        background-image: url("~statics/binding_dark.png");
    }
</style>