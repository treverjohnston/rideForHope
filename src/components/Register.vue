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
                <div class="row justify-center margin">
                    <div class="col-xs-5 col-md-3 text-center">
                        <q-btn class="r-btn mobile-only mob" @click="$router.push('/18-mile')" no-caps>18 Mile</q-btn>
                        <q-btn class="r-btn desktop-only" @click="$router.push('/18-mile')" no-caps>18 Mile</q-btn>
                    </div>
                    <div class="col-xs-5 col-md-3 text-center ">
                        <q-btn class="r-btn mobile-only mob" @click="$router.push('/31-mile')" no-caps>31 Mile</q-btn>
                        <q-btn class="r-btn desktop-only" @click="$router.push('/31-mile')" no-caps>31 Mile</q-btn>
                    </div>
                    <div class="col-xs-5 col-md-3 text-center">
                        <q-btn class="r-btn" @click="$router.push('/metric')" no-caps>Metric Century</q-btn>
                    </div>
                    <div class="col-xs-5 col-md-3 text-center">
                        <q-btn class="r-btn" @click="$router.push('/Century')" no-caps>Century</q-btn>
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
        QBtn
    } from 'quasar'
    export default {
        name: 'Register',
        data() {
            return {
            }
        },

        components: {
            QLayout,
            QBtn
        },
        methods: {
            launch(url) {
                openURL(url);
            },

        }
    }
</script>

<style scoped>
    .mob{
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