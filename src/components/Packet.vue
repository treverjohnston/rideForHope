<template>
    <q-layout class="ride-back">
        <div class="row wrap justify-center">
            <div class="col-xs-11 col-md-10 black-back shadow-24 text-center">
                <h3 class="desktop-only">Packet Pick Up</h3>
                <h4 class="mobile-only">Packet Pick Up</h4>
                <hr class="ihr">
               <p>Check back soon for information about Packet Pick Up</p>
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