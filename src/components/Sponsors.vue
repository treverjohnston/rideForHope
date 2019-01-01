<template>
    <q-layout class="">
        <div class="row justify-center">
            <div class="col-xs-12 col-md-10 shadow-24 black-back">
                <div class="row wrap justify-center promo">
                    <div class="col-xs-11 col-md-6 text-center">
                        <h3 class="text-bold shadow">We Love Our Sponsors!</h3>
                        <hr color="red" class="hr">
                        <q-btn class="row wrap btn shadow-24" no-caps @click="$router.push('contact')">Sponsor Ride For
                            Hope</q-btn>
                        <hr color="red" class="hr">
                    </div>
                </div>

                <!-- <div class="row wrap justify-center text-center">
                    <div v-scroll-fire="animate" class="col-xs-12 col-md-12">
                        <h2 class="text-bold shadow desktop-only">Veni Vidi Vici Sponsors</h2>
                        <h2 class="text-bold shadow desktop-only">($2500+)</h2>
                        <h4 class="text-bold shadow mobile-only">Veni Vidi Vici Sponsors</h4>
                        <h4 class="text-bold shadow mobile-only">($2500+)</h4>
                        <big class="text-italic">"I came. I saw. I conquered."</big>
                        <hr color="red" class="hr">
                        <div class="mid row wrap justify-center">
                            <div id="bar" class="col-xs-12 col-md-12">
                                <q-btn flat class="el" data-x="360" @click="launch('http://www.meridian-cycles.com/')">
                                    <img class="responsive gold desktop-only" src="statics/logos/meridian.png" alt="Meridian Cycles logo">
                                    <img class="responsive gold-mobile mobile-only" src="~statics/logos/meridian.png" alt="Meridian cycles">
                                </q-btn>
                            </div>
                        </div>
                        <hr color="red" class="hr">
                    </div>
                </div>
                <div class="row wrap justify-center text-center">
                    <div class="col-xs-12 col-md-12">
                        <h2 class="text-bold shadow desktop-only">Semper Fidelis Sponsors</h2>
                        <h2 class="text-bold shadow desktop-only">($1500-$2499)</h2>
                        <h4 class="text-bold shadow mobile-only">Semper Fidelis Sponsors</h4>
                        <h4 class="text-bold shadow mobile-only">($1500-$2499)</h4>
                        <big class="text-italic">"Always Faithful"</big>
                        <hr color="red" class="hr">
                        <div class="mid row wrap justify-center">
                            <div class="col-xs-6 col-md-6 self-center">
                                <q-btn flat @click="launch('http://www.lylepearson.com/')">
                                    <img class="responsive silver silver-space desktop-only" src="statics/sponsors/lyle.jpg" alt="Lyle Pearson">
                                    <img class="responsive silver-mobile mobile-only" src="statics/sponsors/lyle.jpg" alt="Lyle Pearson">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-6 self-center">
                                <q-btn flat @click="launch('//10barrel.com/pub/boise/')">
                                    <img class="responsive silver silver-space desktop-only" src="https://static.wixstatic.com/media/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png/v1/fill/w_158,h_63,al_c,usm_0.66_1.00_0.01/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png"
                                        alt="10 Barrel BrewingCo.">
                                    <img class="responsive silver-mobile mobile-only" src="https://static.wixstatic.com/media/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png/v1/fill/w_158,h_63,al_c,usm_0.66_1.00_0.01/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png"
                                        alt="10 Barrel BrewingCo.">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-6 self-center">
                                <q-btn flat @click="launch('https://www.villagercreative.com/')">
                                    <img class="responsive silver silver-space desktop-only" src="https://res.cloudinary.com/treverscloud/image/upload/v1518848726/VillagerLogo_youxql.png"
                                        alt="Villager Creative">
                                    <img class="responsive silver-mobile mobile-only" src="https://res.cloudinary.com/treverscloud/image/upload/v1518848726/VillagerLogo_youxql.png"
                                        alt="Villager Creative">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-6 self-center silver-space">
                                <q-btn flat color="black" no-caps>
                                    <h5 class="black silver-text">R__B Ranch</h5>
                                </q-btn>
                            </div>
                        </div>
                        <hr color="red" class="hr">
                    </div>
                </div>
                <div class="row wrap justify-center text-center">
                    <div class="col-xs-12">
                        <h2 class="text-bold shadow desktop-only">Carpe Diem Sponsors</h2>
                        <h2 class="text-bold shadow desktop-only">($500-$1499)</h2>
                        <h4 class="text-bold shadow mobile-only">Carpe Diem Sponsors</h4>
                        <h4 class="text-bold shadow mobile-only">($500-$1499)</h4>
                        <big class="text-italic">"Seize the Day"</big>
                        <hr color="red" class="hr">
                        <div class="mid row wrap justify-center">
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('//www.firstinterstatebank.com/')">
                                    <img class="responsive carp" src="statics/sponsors/firstI.png" alt="1st Interstate Bank">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('https://www.raymondjames.com/boiseid/dmcquesten.htm')">
                                    <img class="responsive carp" src="https://static.wixstatic.com/media/a44970_97eca4f2e97749eaa2d64d293f5497c7~mv2.gif" alt="riverside associates">
                                </q-btn>
                                <small class="desktop-only">Dan McQuesten--208-850-6672</small>
                                <small class="mobile-only">Dan McQuesten</small>
                                <small class="mobile-only">208-850-6672</small>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('//www.idahopower.com/')">
                                    <img class="responsive carp" src="statics/sponsors/power.png" alt="Idaho Power">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('http://www.meatsroyaleidaho.com/')">
                                    <img class="responsive carp" src="~statics/sponsors/meats.jpg" alt="Meats Royale">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('//www.sherwin-williams.com/')">
                                    <img class="responsive carp" src="statics/sponsors/sherwin.png" alt="Sherwin Williams">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('http://www.mycoffeestudios.com/')">
                                    <img class="responsive carp" src="statics/sponsors/coffee.jpg" alt="Coffee Studio">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('http://www.summitcancercenters.com/contact-us/summit-locations/boise-cancer-treatment/')">
                                    <img class="responsive carp" src="https://res.cloudinary.com/treverscloud/image/upload/v1518848308/SummitBoise-logo-jpeg_rwizxi.jpg"
                                        alt="Summit Cancer Center">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('https://www.tamarackgrove.com/')">
                                    <img class="responsive carp" src="statics/sponsors/tamarack.jpg" alt="Tamarack Grove Engineering">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('https://www.westmark.org/index.shtml')">
                                    <img class="responsive carp" src="statics/sponsors/westmark.gif" alt="Westmark Credit Union">
                                </q-btn>
                            </div>
                            <div class="col-xs-6 col-md-3 self-center">
                                <q-btn flat @click="launch('http://www.mcdrealestategroup.com/')">
                                    <img class="responsive carp" src="statics/sponsors/sign.jpg" alt="McDonough Real Estate Group">
                                </q-btn>
                            </div>
                        </div>
                        <hr color="red" class="hr">
                    </div>
                </div>
                <div class="row wrap justify-center text-center">
                    <div class="col-xs-12">
                        <h2 class="text-bold shadow desktop-only">Virtutem Spei Sponsors</h2>
                        <h2 class="text-bold shadow desktop-only">(
                            <$500)</h2>
                                <h4 class="text-bold shadow mobile-only">Virtutem Spei Sponsors</h4>
                                <h4 class="text-bold shadow mobile-only">(
                                    <$500)</h4>
                                        <big class="text-italic">"Hope and Strength"</big>
                                        <hr color="red" class="hr">
                                        <div class="mid row wrap justify-center">

                                            <div class="col-xs-6 col-md-6 self-center last">
                                                <q-btn outline color="black" no-caps @click="launch('//franzbakery.com/')">
                                                    <h5 class="black desktop-only">Franz Bakery</h5>
                                                    <h6 class="black mobile-only">Franz Bakery</h6>
                </q-btn>
            </div>
            <div class="col-xs-6 col-md-6 self-center last">
                <q-btn color="black" outline no-caps @click="launch('http://www.fallsbrand.com/')">
                    <h5 class="black desktop-only">Falls Brand</h5>
                    <h6 class="black mobile-only">Falls Brand</h6>
                </q-btn>
            </div>
        </div>
        <hr color="red" class="hr">
        </div>
        </div> -->
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
    .silver-space {
        margin-top: .5rem;
    }

    .silver-text {
        font-size: 3.5rem;
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
        height: 19rem;
    }

    .gold-mobile {
        height: 11rem;
    }

    .silver {
        min-height: 9rem;
    }

    .silver-mobile {
        height: 6rem;
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
        width: 80%;
    }
</style>