<template>
    <q-layout class="black">
        <div class="row wrap justify-center">
            <div class="col-xs-11 col-md-10 black-back shadow-24 text-center">
                <hr class="ihr">
                <h3 class="desktop-only">Registration opens January 1, 2019</h3>
                <h4 class="mobile-only">Registration opens January 1, 2019</h4>
                <hr class="ihr">
                <h5>In the meantime, check out our routes!</h5>
                <hr class="ihr">
                <!-- <div class="row justify-center margin">
                    <div v-for="route in routes" class="col-xs-12 col-md-6 text-center">
                        <q-btn class="r-btn mobile-only mob" @click="$router.push(route.url)" no-caps>{{route.length}}</q-btn>
                        <q-btn class="r-btn desktop-only" @click="$router.push(route.url)" no-caps>{{route.length}}</q-btn>
                    </div>
                </div> -->
                <div class="row justify-center">
                    <div class="col-xs-12 col-sm-6 col-md-5 border desktop-only self-center" v-for="route in routes">
                        <q-card-title class="text-center card-container shadow-24">
                            <q-btn class="route-btn" @click="$router.push(route.url.trim('/'))" outline color="red">
                                <h4>{{route.length}}</h4>
                            </q-btn>
                            <h6 class="white text-justify" slot="subtitle">
                                {{route.shortDescription}}</h6>
                        </q-card-title>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-5 mobile-border mobile-only" v-for="route in routes">
                        <q-card-title class="text-center card-container shadow-24">
                            <q-btn class="route-btn" @click="$router.push(route.url.trim('/'))" outline color="red">
                                <h4>{{route.length}}</h4>
                            </q-btn>
                            <h6 class="white text-justify" slot="subtitle">
                                {{route.shortDescription}}</h6>
                        </q-card-title>
                    </div>
                </div>
                <!-- <h5>Check back later for 2019 Packet Pick Up times!</h5> -->
                <!-- <h5>
                        <b>Date: </b>Friday, June 22</h5>
                    <h5>
                        <b>Time: </b>2pm-8pm</h5>
                    <hr class="ihr">
                    <h4>Meridian Cycles</h4>
                    <h5>1203 N Main</h5>
                    <h5> Meridian, ID</h5>
                    <h5>83642</h5> -->
            </div>


        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QBtn,
        QCardTitle
    } from 'quasar'
    export default {
        name: 'Register',
        data() {
            return {
            }
        },
        computed: {
            routes() {
                return this.$store.state.routes;
            }
        },
        components: {
            QLayout,
            QBtn,
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
    .mob {
        margin-bottom: 1rem;
    }

    .margin {
        margin: 2.5rem 0 2.5rem 0;
    }

    .ihr {
        width: 90%;
    }

    .hr {
        width: 20%
    }
</style>