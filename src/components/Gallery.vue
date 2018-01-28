<template>
    <q-layout class="gallery">
        <q-gallery-carousel ref="gallery" class="pics" infinite handle-arrow-keys fullscreen :src="pictures"></q-gallery-carousel>
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
                return this.$store.state.gallery
            }
        },
        mounted(){
            // this.$refs.gallery.toggleQuickView()
            this.$store.dispatch('getPictures')
        }
    }
</script>

<style scoped>
    .gallery{
        background-color: black;

    }
    .pics{
        height: 85vh;
    }
</style>