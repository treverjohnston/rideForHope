<template>
    <q-layout class="registration">
        <q-parallax :speed="1" :height="500" src="./statics/riders2.jpg">
            <div slot="loading">Loading...</div>

            <div class="text-center">
                <h2 class="text-bold">Registration for 2018 will open January 1, 2018</h2>
            </div>
            <q-btn @click="launch('https://www.bikereg.com/ride-for-hope0')" class="cbtn shadow-24">Register</q-btn>s
        </q-parallax>
        <div class="spacer">
            <img class="ride" src="statics/tLogo.png" alt="ride for hope logo">
        </div>
        <q-parallax :speed="1" :height="500" src="./statics/riders3.jpg">
            <div slot="loading">Loading...</div>
            <div class="text-center">
                <h2 class="text-bold">Proposed Routes Pending Road Construction</h2>
                <q-btn @click="$router.push('routes')" class="cbtn shadow-24">Routes</q-btn>
            </div>

        </q-parallax>
    </q-layout>
</template>

<script>
    import {
        openURL,
        QLayout,
        QGallery,
        QGalleryCarousel,
        QParallax,
        QBtn
    } from 'quasar'
    export default {
        name: 'About',
        data() {
            return {
                secondSlider: [
                    'statics/riders2.jpg',
                    'statics/riders3.jpg'
                ]
            }
        },
        components: {
            QLayout,
            QGalleryCarousel,
            QGallery,
            QParallax,
            QBtn
        },
        methods: {
            launch(url) {
                openURL(url)
            },
        }
    }
</script>

<style scoped>
    .ride {
        height: 7rem;
        /* margin: 1rem 0 1rem 0; */
    }

    .cbtn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
        padding: 1rem 1rem 1rem 1rem;
        text-shadow: none;
    }

    .spacer {
        padding: .5rem 0 .5rem 0;
        background-color: black;
        display: flex;
        justify-content: center;

    }


    .registration {
        background-color: rgb(206, 201, 201);
    }

    .caro {
        background-color: rgb(206, 201, 201);

    }

    .headline {
        color: black;
    }
</style>