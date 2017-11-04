<template>
    <q-layout class="sponsors">
        <div class="row wrap justify-center promo">
            <div class="col-xs-11 col-md-8 text-center">
                <h3 class="text-bold shadow">We Love Our Sponsors!</h3>
                <hr color="red" class="hr">
                <div class="mid row wrap">
                    <div class="col-xs-12 col-md-4">
                        <img @click="launch('https://10barrel.com/pub/boise/')" class="responsive" src="https://static.wixstatic.com/media/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png/v1/fill/w_158,h_63,al_c,usm_0.66_1.00_0.01/a44970_7743f2c5985f46479ec37070bf3361fd~mv2.png"
                            alt="10 Barrel BrewingCo.">
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <img @click="launch('http://www.meridian-cycles.com/')" class="responsive" src="https://static.wixstatic.com/media/a44970_2ceddec734c0451dbee6fad6f95a6616~mv2_d_2304_2304_s_2.png/v1/crop/x_520,y_514,w_1256,h_1270/fill/w_151,h_139,al_c,usm_0.66_1.00_0.01/a44970_2ceddec734c0451dbee6fad6f95a6616~mv2_d_2304_2304_s_2.png"
                            alt="Meridian cycles">
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <img class="responsive" src="https://static.wixstatic.com/media/a44970_97eca4f2e97749eaa2d64d293f5497c7~mv2.gif" alt="riverside associates">
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <img @click="launch('http://www.meatsroyaleidaho.com/')" class="responsive" src="https://static.wixstatic.com/media/a44970_bd0f73ab3a3940a5af09f6afff708aad~mv2.jpg/v1/crop/x_5,y_6,w_286,h_64/fill/w_265,h_57,al_c,q_80,usm_0.66_1.00_0.01/a44970_bd0f73ab3a3940a5af09f6afff708aad~mv2.webp"
                            alt="Meats Royale">
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <img class="responsive" src="https://static.wixstatic.com/media/a44970_15c5ef847488461f8da005b8556c6c5b~mv2.jpeg/v1/fill/w_215,h_73,al_c,q_80,usm_0.66_1.00_0.01/a44970_15c5ef847488461f8da005b8556c6c5b~mv2.webp"
                            alt="Sherwin Williams">
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <img class="responsive" src="https://static.wixstatic.com/media/a44970_07b2037ca46a41ce8452f8e8a9817b49~mv2.jpeg/v1/fill/w_232,h_68,al_c,q_80,usm_0.66_1.00_0.01/a44970_07b2037ca46a41ce8452f8e8a9817b49~mv2.webp"
                            alt="Lyle Pearson">
                    </div>
                </div>
                <hr color="red" class="hr">
                <q-btn class="btn shadow-24" no-caps>Sponsor Ride For Hope</q-btn>
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

    .promo {
        background-color: rgba(0, 128, 128, 0.6);
        background-size: cover;
        margin-top: 5rem;

    }

    .sponsors {
        background-image: url("~statics/riders3.jpg");
        background-size: cover;
        overflow: auto;
        will-change: transform;
        /* z-index: -500; */
        position: fixed;
        width: 100%;
        height: 100%;
        top: 10;
        left: 0;
    }

    .red {
        color: rgb(212, 0, 0);
    }

    .hr {
        width: 80%;
    }
</style>