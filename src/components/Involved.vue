<template>
    <q-layout class="involved">
        <div class="row wrap">

            <div class="col-xs-12 col-sm-6 text-center left">
                <q-parallax :speed="1" :height="500" src="./statics/riders3.jpg">
                    <div slot="loading">Loading...</div>
                    <h2 class="headline text-bold">Volunteer</h2>
                    <q-btn @click="$router.push('volunteers')" class="btn">More Info</q-btn>
                </q-parallax>
            </div>
            <div class="col-xs-12 col-sm-6 text-center right">
                <q-parallax :speed="1" :height="500" src="./statics/riders2.jpg">
                    <div slot="loading">Loading...</div>
                    <h2 class="headline text-bold">Sponsor Ride For Hope</h2>
                    <q-btn @click="$router.push('sponsors')" class="btn">More Info</q-btn>
                </q-parallax>
            </div>
            <div class="col-xs-12 col-sm-12 text-center bottom">
                <q-parallax :speed="1" :height="500" src="./statics/riders4.jpg">
                    <div slot="loading">Loading...</div>
                    <h2 class="headline text-bold">Ride For Hope</h2>
                    <h2 class="headline text-bold">Ride For Fun!</h2>
                    <q-btn @click="$router.push('gallery')" class="btn">Photo Gallery</q-btn>
                </q-parallax>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QBtn,
        QParallax
    } from 'quasar'
    export default {
        name: 'Involved',
        data() {
            return {}
        },
        components: {
            QLayout,
            QBtn,
            QParallax
        }
    }
</script>

<style scoped>
    .btn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
        margin: 1rem 0 1rem 0;
    }

    .headline {
        text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
    }

    .bottom {
        color: white;
    }
    .left {
        color: white;
    }
    .right {
        color: white;
    }
</style>