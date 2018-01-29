<template>
    <q-layout class="contact black">
        <!-- <div class="row wrap justify-center promo">
                <div class="col-xs-12 text-center">
                    <q-card-media class="header desktop-only" overlay-position="full">
                        <q-parallax src="./statics/road.jpg" :speed=".8" :height="200">
                            <div slot="loading">
                                <h3>Rules of the Road</h3>
                                <hr color="red" class="hr">
                            </div>
                        </q-parallax>
                                <q-card-title slot="overlay" class="text-center">
                                    <h3 class="red-back">Rules of the Road</h3>
                                </q-card-title>
                    </q-card-media>
                    <q-parallax class="mobile-only" src="statics/road.jpg" :speed=".8" :height="200">
                        <div slot="loading">
                            <h3>Rules of the Road</h3>
                            <hr color="red" class="hr">
                        </div>
                        <h3 class="red-back">Rules of the Road</h3>
                    </q-parallax>
                </div>
            </div> -->
        <div class="row wrap justify-center">
            <!-- <div class="col-xs-6 desktop-only">
                    <img src="statics/ride/ride1.jpg" class="responsive img" alt="RFH Logo">
                </div> -->
            <div class="col-xs-11 col-md-8 text-center">
                <h3 class="desktop-only">Rules of the Road</h3>
                <h4 class="mobile-only">Rules of the Road</h4>
                <hr class="ihr">
                <h4 class="desktop-only text-italic">
                    Be Predictable
                </h4>
                <h5 class="mobile-only text-italic">
                    Be Predictable
                </h5>
                <p>Make your intentions clear to everyone on the road. Ride in a straight line and don’t swerve between parked
                    cars. Signal turns, and check behind you well before turning or changing lanes.</p>
                <hr class="ihr">
                <h4 class="desktop-only text-italic">
                    Be Conspicuous
                </h4>
                <h5 class="mobile-only text-italic">
                    Be Conspicuous
                </h5>
                <p>Ride where people can see you and wear bright clothing. Use a front white light, red rear light and reflectors
                    when visibility is poor. Make eye contact with others and don’t ride on sidewalks.
                </p>
                <hr class="ihr">
                <h4 class="desktop-only text-italic">
                    Think Ahead
                </h4>
                <h5 class="mobile-only text-italic">
                    Think Ahead
                </h5>
                <p>Anticipate what drivers, pedestrians, and other people on bikes will do next. Watch for turning vehicles
                    and ride outside the door zone of parked cars. Look out for debris, potholes, and other road hazards.
                    Cross railroad tracks at right angles.
                </p>
                <hr class="ihr">
                <h4 class="desktop-only text-italic">
                    Ride Ready
                </h4>
                <h5 class="mobile-only text-italic">
                    Ride Ready
                </h5>
                <p>Check that your tires are sufficiently inflated, brakes are working, chain runs smoothly, and quick release
                    levers are closed. Carry tools and supplies that are appropriate for your ride. Wear a helmet.
                </p>
                <hr class="ihr">

            </div>


        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QInput,
        QBtn,
        Toast,
        QParallax,
        openURL,
        QCardMedia,
        QCardTitle
    } from 'quasar'
    export default {
        name: 'Ride',
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        },

        components: {
            QLayout,
            QInput,
            QBtn,
            Toast,
            QParallax,
            QCardMedia,
            QCardTitle
        },
        methods: {
            launch(url) {
                openURL(url);
            },

        }
    }
</script>

<style scoped>
    .frame {
        width: 100%;
        height: 80vh;
    }

    .img {
        height: 60vh;
        margin-top: 3rem;
        border: 5px solid black;

    }

    .bot {
        margin: 3rem 0 0 0;
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);
    }

    .ihr {
        width: 90%;
    }

    .hr {
        width: 20%
    }

    .contact {
        background-image: url("~statics/triangular.png")
    }
</style>