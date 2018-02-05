<template>
    <q-layout class="sponsors">
        <div class="back">
        <div class="row wrap justify-center promo">
            <div class="col-xs-11 col-md-6 text-center">
                <h3 class="text-bold shadow">We Love Our Sponsors!</h3>
                <hr color="red" class="hr">
                <q-btn class="row wrap btn shadow-24" no-caps @click="$router.push('contact')">Sponsor Ride For Hope</q-btn>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center text-center">
            <div v-scroll-fire="animate" class="col-xs-12 col-md-10">
                <h2 class="text-bold shadow desktop-only">Veni Vidi Vici Sponsors ($2500+)</h2>
                <h4 class="text-bold shadow mobile-only">Veni Vidi Vici Sponsors ($2500+)</h4>
                <big class="text-italic">"I came. I saw. I conquered."</big>
                <hr color="red" class="hr">
                <div class="mid row wrap justify-center">
                    <div id="bar" class="col-xs-12 col-md-10">
                        <q-btn class="el" data-x="360" @click="launch('http://www.meridian-cycles.com/')">
                            <img class="responsive gold desktop-only" src="statics/meridian.png" alt="Meridian Cycles logo">
                            <img class="responsive gold-mobile mobile-only" src="~statics/meridian.png" alt="Meridian cycles">
                        </q-btn>
                    </div>
                </div>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center text-center">
            <div class="col-xs-10 col-md-8">
                <h2 class="text-bold shadow desktop-only">Semper Fidelis Sponsors ($1500)</h2>
                <h4 class="text-bold shadow mobile-only">Semper Fidelis Sponsors ($1500)</h4>
                <big class="text-italic">"Always Faithful"</big>
                <hr color="red" class="hr">
                <div class="mid row wrap justify-center">
                    <div class="col-xs-12 col-md-8">
                        <q-btn @click="launch('//10barrel.com/pub/boise/')">
                            <img class="responsive silver desktop-only" src="https://static.wixstatic.com/media/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png/v1/fill/w_158,h_63,al_c,usm_0.66_1.00_0.01/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png"
                                alt="10 Barrel BrewingCo.">
                            <img class="responsive silver-mobile mobile-only" src="https://static.wixstatic.com/media/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png/v1/fill/w_158,h_63,al_c,usm_0.66_1.00_0.01/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png"
                                alt="10 Barrel BrewingCo.">
                        </q-btn>
                    </div>
                </div>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center text-center">
            <div class="col-xs-12 col-md-8">
                <h2 class="text-bold shadow desktop-only">Carpe Diem Sponsors ($500)</h2>
                <h4 class="text-bold shadow mobile-only">Carpe Diem Sponsors ($500)</h4>
                <big class="text-italic">"Seize the Day"</big>
                <hr color="red" class="hr">
                <div class="mid row wrap justify-center">
                    <div class="col-xs-9 col-md-5 self-center">
                        <q-btn flat @click="launch('//www.firstinterstatebank.com/')">
                            <img class="responsive carp" src="statics/firstI.png" alt="1st Interstate Bank">
                        </q-btn>
                    </div>
                    <div class="col-xs-9 col-md-5 self-center">
                        <q-btn flat @click="launch('http://www.lylepearson.com/')">
                            <img class="responsive carp" src="statics/lyle.jpg" alt="Lyle Pearson">
                        </q-btn>
                    </div>
                    <div class="col-xs-9 col-md-5 self-center">
                        <q-btn flat @click="launch('http://www.raymondjames.com/boiseid/')">
                            <img class="responsive carp" src="https://static.wixstatic.com/media/a44970_97eca4f2e97749eaa2d64d293f5497c7~mv2.gif" alt="riverside associates">
                        </q-btn>
                    </div>
                    <div class="col-xs-9 col-md-5 self-center">
                        <q-btn flat @click="launch('//www.idahopower.com/')">
                            <img class="responsive carp" src="statics/power.png" alt="Idaho Power">
                        </q-btn>
                    </div>
                    <div class="col-xs-9 col-md-5 self-center">
                        <q-btn flat @click="launch('http://www.meatsroyaleidaho.com/')">
                            <img class="responsive carp" src="~statics/meats.jpg" alt="Meats Royale">
                        </q-btn>
                    </div>
                    <div class="col-xs-9 col-md-5 self-center">
                        <q-btn flat @click="launch('//www.sherwin-williams.com/')">
                            <img class="responsive carp" src="statics/sherwin.png" alt="Sherwin Williams">
                        </q-btn>
                    </div>



                </div>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center text-center">
            <div class="col-xs-8">
                <h2 class="text-bold shadow desktop-only">Virtutem Spei Sponsors (<$500)</h2>
                        <h4 class="text-bold shadow mobile-only">Virtutem Spei Sponsors (<$500)</h4>
                                <big class="text-italic">"Hope and Strength"</big>
                                <hr color="red" class="hr">
                                <div class="mid row wrap justify-center">

                                    <div class="col-xs-12 col-md-4 self-center last">
                                        <q-btn outline color="black" no-caps @click="launch('//franzbakery.com/')">
                                            <h5 class="black">Franz Bakery</h5>
                                            <!-- <img class="responsive" src="statics/franz.png" alt="Franz Bakery"> -->
                                        </q-btn>
                                    </div>
                                    <div class="col-xs-12 col-md-4 self-center last">
                                        <q-btn color="black" outline no-caps @click="launch('http://www.fallsbrand.com/')">
                                            <h5 class="black">Falls Brand</h5>
                                            <!-- <img class="responsive" src="statics/falls.png" alt="Falls Brand"> -->
                                        </q-btn>
                                    </div>
                                </div>
                                <hr color="red" class="hr">
            </div>
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
            }
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
    .back{
        background-color: rgba(224, 226, 226, 0.65);
        color: black;
    }
    .last {
        margin-bottom: .5rem;
    }

    .black {
        color: black;
    }

    .gold {
        height: 12rem;
    }

    .silver {
        height: 8rem;
    }
    .silver-mobile {
        height: 7rem;
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
        text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
color: black;
        /* color: white; */
    }


    .sponsors {
        background-image: url("https://res.cloudinary.com/treverscloud/image/upload/v1517856029/bw_icaeha.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        
        /* overflow: auto;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        left: 0; */
    }

    .red {
        color: rgb(212, 0, 0);
    }

    .hr {
        width: 80%;
    }
</style>