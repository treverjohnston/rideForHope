<template>
    <q-layout class="registration">
        <!-- <div class="layout-padding row justify-center"> -->
            <!-- <div style="width: 500px; max-width: 90vw;"> -->
                <q-gallery-carousel dots infinite :src="secondSlider"></q-gallery-carousel>
            <!-- </div> -->
        <!-- </div> -->
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QGallery,
        QGalleryCarousel
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
            QGallery
        }
    }
</script>

<style>
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