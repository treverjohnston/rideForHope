<template>
    <q-layout class="black">
        <div class="row wrap justify-center">
            <div class="col-xs-11 col-md-10 white-back shadow-24 text-center">
                <h3 class="desktop-only">Packet Pick Up</h3>
                <h4 class="mobile-only">Packet Pick Up</h4>
                <hr class="ihr">
                <!-- <h5>Check back later for 2019 Packet Pick Up times!</h5> -->
                <h5>
                    <b>Date: </b>Friday, June 7</h5>
                <h5>
                    <b>Time: </b>4pm-7pm</h5>
                <hr class="ihr">
                <h4>Meridian Cycles</h4>
                <h5>1203 N. Main St.</h5>
                <h5> Meridian, ID</h5>
                <h5>83642</h5>
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
</style>