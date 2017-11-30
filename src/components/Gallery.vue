<template>
    <q-layout class="gallery">
        <q-gallery-carousel ref="gallery" class="pics" infinite autoplay handle-arrow-keys fullscreen :src="pictures"></q-gallery-carousel>
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
        },
        mounted(){
            this.$refs.gallery.toggleQuickView()
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