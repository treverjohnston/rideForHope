<template>
    <q-layout class="contact black">
        <!-- <div class="row wrap justify-center promo">
                <div class="col-xs-12 text-center">
                    <q-card-media class="header desktop-only" overlay-position="full">
                        <q-parallax src="./statics/road.jpg" :speed=".8" :height="200">
                            <div slot="loading">
                                <h3>Team Ride For Hope Idaho</h3>
                                <hr color="red" class="hr">
                            </div>
                        </q-parallax>
                                <q-card-title slot="overlay" class="text-center">
                                    <h3 class="red-back">Team Ride For Hope Idaho</h3>
                                </q-card-title>
                    </q-card-media>
                    <q-parallax class="mobile-only" src="statics/road.jpg" :speed=".8" :height="200">
                        <div slot="loading">
                            <h3>Team Ride For Hope Idaho</h3>
                            <hr color="red" class="hr">
                        </div>
                        <h3 class="red-back">Team Ride For Hope Idaho</h3>
                    </q-parallax>
                </div>
            </div> -->
        <div class="row wrap justify-center xs-gutter">
            <div class="col-xs-6 desktop-only">
                <img src="statics/ride/rfh.jpg" class="responsive img" alt="RFH Riders">
            </div>
            <div class="col-xs-11 col-md-5 text-center">
                <h3 class="desktop-only">Team Ride For Hope Idaho</h3>
                <h4 class="mobile-only">Team Ride For Hope Idaho</h4>
                <p>Interested in joining Team Ride For Hope Idaho?</p>
                <hr class="ihr">
                <p>You Can Look at our club on Strava or view our Facebook page</p>
                <div class="row justify-about">
                    <div class="col-xs-6">
                        <q-btn flat @click="launch('https://www.strava.com/clubs/302822')" flat>
                            <img class="strava responsive" src="statics/strava2.png" alt="strava logo">
                        </q-btn>
                    </div>
                    <div class="col-xs-6 self-center">
                        <q-btn flat @click="launch('https://www.facebook.com/rideforhopeidaho/')" flat>
                            <q-icon class="fb" size="10rem" name="fa-facebook-square" />
                        </q-btn>
                    </div>
                    <div class="col-xs-12">
                        <p>For more information, call David Marsey at (720)-474-5507</p>
                    </div>
                </div>
            </div>

            <div class="col-xs-10 text-center">
                <h3 class="desktop-only">Team Ride For Hope Idaho Requirements</h3>
                <h4 class="mobile-only">Team Ride For Hope Idaho Requirements</h4>
                <hr class="ihr">
                <p>
                    You must attend every Saturday training ride. (Begins March 3 -- We leave from Meridian Cycles)
                </p>
                <p>You must commit to another charity ride. (i.e. Cycle for Independence)</p>
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
        QCardTitle,
        QIcon
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
            QCardTitle,
            QIcon
        },
        methods: {
            launch(url) {
                openURL(url);
            },

        }
    }
</script>

<style scoped>
    .fb {
    color: rgb(59, 89, 152);
    width: 10rem;
  }
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