<template>
    <q-layout class="donate">
        <div class="row wrap">
            <div class="mid offset-xs-1 col-xs-10">
                <div class="row wrap">
                    <div class="fancy col-xs-12">
                        <div class="row wrap desktop-only">
                            <h2 class="font text-center offset-xs-1 col-xs-10">
                                Why Ride For Hope?
                            </h2>
                            <h4 class="light-paragraph text-center offset-xs-1 col-xs-10">
                                SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED
                            </h4>
                        </div>
                        <div class="row wrap mobile-only">
                            <h4 class="font text-center offset-xs-1 col-xs-10">
                                Why Ride For Hope?
                            </h4>
                            <h6 class="light-paragraph text-center offset-xs-1 col-xs-10">
                                SUPPORTING HEALTHCARE FOR THE MEDICALLY UNDERSERVED
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="row wrap">
                    <div class="col-xs-12 text-center">
                        <q-btn @click="launch('https://www.bikereg.com/ride-for-hope0')" class="cbtn shadow-24">Donate Here</q-btn>
                    </div>
                </div>
                <div class="row wrap justify-center desktop-only">
                    <div class="col-xs-4">
                        <img class="grow responsive" src="statics/riders4.jpg">
                    </div>
                    <div class="col-xs-4">
                        <img class="grow responsive" src="statics/riders5.jpg">
                    </div>
                    <div class="col-xs-4">
                        <img class="grow responsive" src="statics/riders3.jpg">
                    </div>
                    <div class="col-xs-4">
                        <img class="grow responsive" src="statics/riders2.jpg">
                    </div>
                </div>
                <div class="row wrap justify-center mobile-only">
                    <!-- <div class="col-xs-11 img">
                        <img class="responsive" src="statics/riders4.jpg">
                    </div> -->
                    <div class="col-xs-11 img">
                        <img class="responsive" src="statics/riders5.jpg">
                    </div>
                    <!-- <div class="col-xs-11">
                        <img class="responsive" src="statics/riders3.jpg">
                    </div> -->
                    <div class="col-xs-11">
                        <img class="responsive" src="statics/riders2.jpg">
                    </div>
                </div>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QBtn,
        openURL
    } from 'quasar'
    export default {
        name: 'Donate',
        data() {
            return {}
        },
        components: {
            QLayout,
            QBtn
        },
        computed: {
            routes() {
                return this.$store.state.routes
            }
        },
        methods: {
            launch(url) {
                openURL(url)
            },
        }
    }
</script>

<style scoped>
    .img {
        margin-top: 1rem;
    }

    .grow {
        transition: all .35s ease-in-out;
        max-height: 25rem;
    }

    .grow:hover {
        transform: scale(2.0);
    }

    .cbtn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
        padding: 1rem 1rem 1rem 1rem;
        margin: 1rem 0 1rem 0;
    }

    .donate {
        background-image: url("~statics/triangular.png")
    }

    .font {
        font-family: 'Lobster', cursive;
        color: black;
    }

    .fancy {
        background-color: rgba(202, 202, 202, 0.808);
        margin-top: 2rem;
        /* margin: 2rem 0rem 0 0rem; */
    }

    .mid {
        background-color: white;
        /* height: 100vh; */
    }
</style>