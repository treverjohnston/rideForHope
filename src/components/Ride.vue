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

                        <iframe class="frame shadow-24 route"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.5433875895037!2d-116.42479598427386!3d43.49099867092171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae450dcbf391f9%3A0xd8cf41e894d3c343!2sCity%20of%20Kuna%20-%20City%20Hall!5e0!3m2!1sen!2sus!4v1571621456128!5m2!1sen!2sus"
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