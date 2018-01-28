<template>
    <q-layout class="sponsors">
        <div class="row wrap justify-center promo">
            <div class="col-xs-11 col-md-6 text-center">
                <h3 class="text-bold shadow">We Love Our Sponsors!</h3>
                <hr color="red" class="hr">
                <q-btn class="row wrap btn shadow-24" no-caps @click="$router.push('contact')">Sponsor Ride For Hope</q-btn>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center text-center">
            <div class="col-xs-11 col-md-10">
                <h2 class="text-bold shadow desktop-only">Veni Vidi Vici Sponsors</h2>
                <h3 class="text-bold shadow mobile-only">Veni Vidi Vici Sponsors</h3>
                <hr color="red" class="hr">
                <div class="mid row wrap justify-center">
                    <div class="col-xs-12 col-md-6">
                        <img @click="launch('http://www.meridian-cycles.com/')" class="responsive gold" src="~statics/meridian.png" alt="Meridian cycles">
                    </div>
                </div>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center text-center">
            <div class="col-xs-8">
                <h2 class="text-bold shadow desktop-only">Semper Fidelis Sponsors</h2>
                <h3 class="text-bold shadow mobile-only">Semper Fidelis Sponsors</h3>
                <hr color="red" class="hr">
                <div class="mid row wrap justify-center">
                    <div class="col-xs-12 col-md-4">
                        <img @click="launch('http://www.meatsroyaleidaho.com/')" class="responsive silver" src="~statics/meats.jpg" alt="Meats Royale">
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <img @click="launch('https://10barrel.com/pub/boise/')" class="responsive silver" src="https://static.wixstatic.com/media/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png/v1/fill/w_158,h_63,al_c,usm_0.66_1.00_0.01/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png"
                            alt="10 Barrel BrewingCo.">
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <img class="responsive silver" src="https://static.wixstatic.com/media/a44970_97eca4f2e97749eaa2d64d293f5497c7~mv2.gif" alt="riverside associates">
                    </div>

                </div>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center text-center">
            <div class="col-xs-8">
                <h2 class="text-bold shadow desktop-only">Carpe Diem Sponsors</h2>
                <h3 class="text-bold shadow mobile-only">Carpe Diem Sponsors</h3>
                <hr color="red" class="hr">
                <div class="mid row wrap justify-center">

                    <div class="col-xs-12 col-md-4">
                        <img class="responsive" src="statics/sherwin.png" alt="Sherwin Williams">
                    </div>
                </div>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center text-center">
            <div class="col-xs-8">
                <h2 class="text-bold shadow desktop-only">Virtutem Spei Sponsors</h2>
                <h3 class="text-bold shadow mobile-only">Virtutem Spei Sponsors</h3>
                <hr color="red" class="hr">
                <div class="mid row wrap justify-center">

                    <div class="col-xs-12 col-md-4">
                        <img class="responsive" src="statics/lyle.jpg" alt="Lyle Pearson">
                    </div>
                </div>
                <hr color="red" class="hr">
            </div>
        </div>

    </q-layout>
</template>

<script>
    import {
        QLayout,
        QInput,
        QBtn,
        QGallery,
        openURL
    } from 'quasar'
    export default {
        name: 'Sponsors',
        data() {
            return {
            }
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

        }
    }
</script>

<style scoped>
    .gold {
        height: 12rem;
    }
    .silver{
        /* width: 28rem */
    }

    .btn {
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
        padding: 1rem 1rem 1rem 1rem;
        margin: 1rem 0 1rem 0;
    }

    .mid {
        background-color: rgba(224, 226, 226, 0.6);
        padding: 1rem;
    }

    .responsive {
        padding: 1rem;
    }

    .shadow {
        text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
        color: white;
    }


    .sponsors {
        background-image: url("~statics/ride/IMG_9025.JPG.jpg");
        background-size: cover;
        overflow: auto;
        background-attachment: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .red {
        color: rgb(212, 0, 0);
    }

    .hr {
        width: 80%;
    }
</style>