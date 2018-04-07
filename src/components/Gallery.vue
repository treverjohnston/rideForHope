<template>
    <q-layout class="gallery">
        <div class="row">
            <gallery :images="pictures" :index="index" @close="index = null"></gallery>
            <div class="image" v-for="image, imageIndex in pictures" @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"></div>
        </div>
    </q-layout>
</template>

<script>
    import VueGallery from 'vue-gallery';
    import {
        QLayout,
        // QGalleryCarousel

    } from 'quasar'
    export default {
        name: 'Gallery',
        data() {
            return {
                index: null
            }
        },
        components: {
            QLayout,
            // QGalleryCarousel,
            'gallery': VueGallery
        },
        computed: {
            pictures() {
                return this.$store.state.gallery
            }
        },
        mounted() {
            // this.$refs.gallery.toggleQuickView()
            this.$store.dispatch('getPictures')
        }
    }
</script>

<style scoped>
    .gallery {
        background-color: black;
        padding: 1rem 0 1rem 2.5%;
        /* align-items: center;
       align-content: center; */
    }

    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
    }
</style>