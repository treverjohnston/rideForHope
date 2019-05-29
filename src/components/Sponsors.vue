<template>
    <q-layout class="">
        <div class="row justify-center">
            <div class="col-xs-12 col-md-10 shadow-24 white-back">
                <!-- <div class="row wrap justify-center promo">
                    <div class="col-xs-11 col-md-6 text-center">
                        <h3 class="text-bold shadow">We Love Our Sponsors!</h3>
                        <hr color="red" class="hr">
                        <q-btn class="row wrap btn shadow-24" no-caps @click="$router.push('contact')">Sponsor Ride For
                            Hope</q-btn>
                    </div>
                </div> -->
                <div class="row wrap justify-center text-center">
                    <div v-scroll-fire="animate" class="col-xs-11 col-md-8 spacers">
                        <h2 class="text-bold shadow desktop-only">Veni Vidi Vici Sponsors</h2>
                        <!-- <h2 class="text-bold shadow desktop-only">($5000+)</h2> -->
                        <h4 class="text-bold shadow mobile-only">Veni Vidi Vici Sponsors</h4>
                        <!-- <h4 class="text-bold shadow mobile-only">($5000+)</h4> -->
                        <big class="text-italic">"I came. I saw. I conquered."</big>
                        <hr color="red" class="hr">
                        <!-- <h3>Become a Premier Sponsor</h3> -->
                        <q-btn class="row wrap btn shadow-24" no-caps @click="$router.push('contact')">Become a
                            Premier Ride For
                            Hope Sponsor</q-btn>
                        <div v-for="sponsor in l1" class="mid row wrap justify-center">
                            <div id="bar" class="col-xs-12 col-md-12">
                                <q-btn flat class="el" data-x="360" @click="launch(sponsor.link)">
                                    <img class="responsive gold desktop-only" :src="sponsor.logo" alt="sponsor.name">
                                    <img class="responsive gold-mobile mobile-only" :src="sponsor.logo"
                                        alt="sponsor.name">
                                </q-btn>
                            </div>
                        </div>
                        <!-- <hr color="red" class="hr"> -->
                    </div>
                </div>
                <div class="row wrap justify-center text-center">
                    <div class="col-xs-11 col-md-8 spacers">
                        <h2 class="text-bold shadow desktop-only">Omnes Spem Sponsors</h2>
                        <!-- <h2 class="text-bold shadow desktop-only">($2500-$4999)</h2> -->
                        <h4 class="text-bold shadow mobile-only">Omnes Spem Sponsors</h4>
                        <!-- <h4 class="text-bold shadow mobile-only">($2500-$4999)</h4> -->
                        <big class="text-italic">"Hope Conquers All"</big>
                        <hr color="red" class="hr">
                        <div class="mid row wrap justify-center">
                            <!-- <div id="bar" class="col-xs-12 col-md-10">
                                <q-btn flat class="el" data-x="360" @click="launch('https://www.lylepearson.com/')">
                                    <img class="responsive silver-big desktop-only" src="~/statics/sponsors/lyle.jpg"
                                        alt="Lyle Pearson">
                                    <img class="responsive silver-big-mobile mobile-only"
                                        src="~/statics/sponsors/lyle.jpg" alt="Lyle Pearson">
                                </q-btn>
                            </div> -->

                            <div v-for="sponsor in l2" class="col-xs-12 col-md-9 self-center">
                                <q-btn v-if="sponsor.logo != ''" flat @click="launch(sponsor.link)">
                                    <img class="responsive silver silver-space desktop-only" :src="sponsor.logo"
                                        :alt="sponsor.name">
                                    <img class="responsive silver-big-mobile mobile-only" :src="sponsor.logo"
                                        :alt="sponsor.name">
                                </q-btn>
                            </div>
                        </div>
                        <!-- <hr color="red" class="hr"> -->
                    </div>
                </div>
                <div class="row wrap justify-center text-center">
                    <div class="col-xs-11 col-md-8 spacers">
                        <h2 class="text-bold shadow desktop-only">Virtutem Spei Sponsors</h2>
                        <!-- <h2 class="text-bold shadow desktop-only">($1500-$2499)</h2> -->
                        <h4 class="text-bold shadow mobile-only">Virtutem Spei Sponsors</h4>
                        <!-- <h4 class="text-bold shadow mobile-only">($1500-$2499)</h4> -->
                        <big class="text-italic">"Hope And Strength"</big>
                        <hr color="red" class="hr">
                        <div class="mid row wrap justify-center">
                            <div v-for="sponsor in l3" class="col-xs-8 col-md-6 self-center">
                                <q-btn v-if="sponsor.logo != ''" flat @click="launch(sponsor.link)">
                                    <img class="responsive carp" :src="sponsor.logo" :alt="sponsor.name">
                                </q-btn>
                                <q-btn flat color="black" no-caps v-else>
                                    <h6 class="black silver-text">R__B Ranch
                                    </h6>
                                </q-btn>
                            </div>
                        </div>
                        <!-- <hr color="red" class="hr"> -->
                    </div>
                </div>
                <div class="row wrap justify-center text-center ">
                    <div class="col-xs-11 col-md-8 spacers">
                        <h2 class="text-bold shadow desktop-only">Carpe Diem Sponsors</h2>
                        <!-- <h2 class="text-bold shadow desktop-only">($500-$1499)</h2> -->
                        <h4 class="text-bold shadow mobile-only">Carpe Diem Sponsors</h4>
                        <!-- <h4 class="text-bold shadow mobile-only">($500-$1499)</h4> -->
                        <big class="text-italic">"Seize The Day"</big>
                        <hr color="red" class="hr">
                        <!-- <div class="mid row wrap justify-center">

                            <div v-for="sponsor in l4" class="col-xs-6 col-md-6 self-center last margin">
                                <q-btn outline color="white" no-caps @click="launch(sponsor.link)">
                                    <h5 class="white desktop-only">{{sponsor.name}}</h5>
                                    <h6 class="white mobile-only">{{sponsor.name}}</h6>
                                </q-btn>
                            </div>
                        </div> -->
                        <div class="mid row wrap justify-center">
                            <div v-for="sponsor in l4" class="col-xs-6 col-md-4 self-center">
                                <q-btn flat>
                                    <img class="responsive carp" :src="sponsor.logo" :alt="sponsor.name">
                                </q-btn>
                            </div>
                        </div>
                        <!-- <hr color="red" class="hr"> -->
                    </div>
                </div>
                <div class="top-marg"></div>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import anime from "animejs";
    import {
        QLayout,
        QInput,
        QBtn,
        QGallery,
        openURL,
        ScrollFire,

    } from 'quasar'
    export default {
        name: 'Sponsors',
        data() {
            return {
            }
        },
        directives: {
            ScrollFire
        },
        components: {
            QLayout,
            QInput,
            QBtn,
            QGallery
        },
        computed: {
            pictures() {
                return this.$store.state.pictures
            },
            l1() {
                return this.$store.state.lvl1;
            },
            l2() {
                return this.$store.state.lvl2;
            },
            l3() {
                return this.$store.state.lvl3;
            },
            l4() {
                return this.$store.state.lvl4;
            },
        },
        methods: {
            launch(url) {
                openURL(url)
            },
            animate() {
                anime({
                    targets: "#bar .el",
                    translateX: function (el) {
                        return 0;
                    },
                    translateY: function (el, i) {
                        return 0;
                    },
                    scale: function (el, i, l) {
                        return 1.25;
                    },
                    duration: function () {
                        return anime.random(500, 800);
                    },
                    duration: function () {
                        return anime.random(800, 1100);
                    },
                    delay: function () {
                        return anime.random(0, 500);
                    },
                    direction: "reverse"
                });
            }
        }
    }
</script>

<style scoped>
    .silver-space {
        margin-top: .5rem;
    }

    .silver-text {
        font-size: 2.5rem;
        font-family: "Niconne", cursive;
    }

    .back {
        background-color: rgba(138, 138, 138, 0.905);
        color: black;
    }

    .last {
        margin-bottom: .5rem;
    }

    .black {
        color: black;
    }

    .gold {
        height: 14rem;
    }

    .gold-mobile {
        height: 11rem;
    }

    .silver {
        height: 13rem;
    }

    .silver-mobile {
        height: 6rem;
    }

    .silver-big {
        min-height: 12rem;
    }

    .silver-big-mobile {
        height: 9rem;
    }

    .btn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
        padding: 1rem 1rem 1rem 1rem;
        margin: 1rem 0 1rem 0;
    }

    .mid {
        /* background-color: rgba(224, 226, 226, 0.6); */
        padding: 1rem;
    }

    .responsive {
        padding: 1rem;
    }

    .shadow {
        /* text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); */
        text-shadow: 0 0 5px #fff;
        color: black;
        /* color: white; */
    }


    .sponsors {
        background-image: url("https://res.cloudinary.com/treverscloud/image/upload/v1517856029/bw_icaeha.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    .red {
        color: rgb(212, 0, 0);
    }

    .hr {
        width: 60%;
    }

    .margin {
        margin: 1rem 0;
    }
</style>