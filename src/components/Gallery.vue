<template>
    <q-layout class="gallery">
        <q-gallery-carousel infinite autoplay handle-arrow-keys fullscreen :src="pictures"></q-gallery-carousel>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QGalleryCarousel

    } from 'quasar'
    export default {
        name: 'Gallery',
        data() {
            return {}
        },
        components: {
            QLayout,
            QGalleryCarousel
        },
        computed:{
            pictures(){
                return this.$store.state.pictures
            }
        }
    }
</script>

<style scoped>
    .gallery{
        background-color: black;
    }
    .pics{
        max-height: 100vh;
    }
</style>