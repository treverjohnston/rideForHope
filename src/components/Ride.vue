<template>
    <q-layout class="contact black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12 text-center">
                <q-parallax src="statics/riders3.jpg" :height="200">
                    <div slot="loading">
                        <h3>Ride With Us!</h3>
                        <hr color="red" class="hr">
                    </div>
                    <h3>Ride With Us!</h3>
                    <hr color="red" class="hr">
                    <!-- <h5 class="desktop-only">Please contact us anytime with any questions, or other inquiries.</h5>
                    <h6 class="mobile-only">Please contact us anytime with any questions, or other inquiries.</h6> -->
                </q-parallax>
            </div>
        </div>
        <div class="row wrap justify-center xs-gutter">
            <div class="col-xs-11 col-md-9 text-center">
                <h4>Join the Ride For Hope Idaho club on Strava to ride with us throughout the year!</h4>
            </div>
            <q-btn flat @click="launch('https://www.strava.com/clubs/302822')">
                <div class="col-xs-6 desktop-only">
                    <img src="~/statics/RFHIdahoLogo.png" class="responsive img" alt="RFH Logo">
                </div>
                <div class="col-xs-12 col-sm-6">
                    <img src="~/statics/strava2.png" class="responsive img" alt="Strava Logo">
                </div>
            </q-btn>
        </div>
    </q-layout>
</template>

<script>
    import { required, email, alpha, alphaNum } from 'vuelidate/lib/validators'
    import {
        QLayout,
        QInput,
        QBtn,
        Toast,
        QParallax,
        openURL
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
        validations: {
            name: { required, alpha },
            email: { required, email },
            subject: { required },
            message: { required }
        },
        components: {
            QLayout,
            QInput,
            QBtn,
            Toast,
            QParallax
        },
        methods: {
            launch(url) {
                openURL(url);
            },

        }
    }
</script>

<style scoped>
    .img {
        /* border: 5px solid black; */
        /* width: 40vw; */
        height: 60vh;
    }

    .bot {
        margin: 3rem 0 0 0;
    }

    .promo {
        /* padding: 0 2rem 0 2rem; */
        background-color: rgba(0, 128, 128, 0.6);
    }

    .hr {
        width: 20%
    }

    .contact {
        background-image: url("~statics/triangular.png")
    }
</style>