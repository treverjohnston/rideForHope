<template>
    <q-layout class="black">
        <div class="row wrap justify-center xs-gutter">
            <div class="col-xs-11 shadow-24 white-back">
                <div class="row justify-center">
                    <div class="col-xs-6 desktop-only self-center">
                        <img src="statics/ride/ride1.jpg" class="responsive img" alt="RFH Logo">
                    </div>
                    <div class="col-xs-11 col-md-5 text-center self-center">
                        <h3 class="desktop-only">Ride Day Information</h3>
                        <h4 class="mobile-only">Ride Day Information</h4>
                        <p>Registration opens at 6:00 AM</p>
                        <!-- <p>*Please be at the start line ready to ride at least 15 minutes before posted start time.</p> -->
                        <hr class="ihr">
                        <span v-for="route in routes">
                            <h5>{{route.length}} Start Time</h5>
                            <p>{{route.startTime}}</p>
                        </span>
                        <hr class="ihr">
                        <p>*Please be at the start line ready to ride at least 15 minutes before posted start time.</p>
                    </div>
                    <div class="col-xs-10">
                        <h3 class="desktop-only text-center">Directions (Kuna City Hall)</h3>
                        <h4 class="mobile-only text-center">Directions (Kuna City Hall)</h4>

                        <iframe class="frame shadow-24 route" src="//www.google.com/maps/embed/v1/place?q=Kuna%20City%20Hall
                    &zoom=13
                    &attribution_source=Google+Maps+Embed+API
                    &attribution_web_url=https://developers.google.com/maps/documentation/embed/
                    &key=AIzaSyBLaoSdXeLvOkN5Tp5YkPZ35gXfi5-LhsI"
                            allowfullscreen>
                        </iframe>
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
        computed: {
            routes() {
                return this.$store.state.routes;
            },
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
</style>