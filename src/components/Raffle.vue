<template>
    <q-layout class="raffle">
        <div class="row wrap justify-center desktop-only">
            <q-transition appear enter="fadeIn" leave="fadeOut">
                <div class="col-sm-8 top text-center">
                    <hr color="red" class="hr">
                    <h2 class="headline text-bold">RAFFLE ITEMS</h2>
                    <h4 class="fancy">2018 raffle items coming soon</h4>
                    <q-btn class="btn" no-caps>Purchase Raffle Tickets</q-btn>
                    <hr color="red" class="hr">
                    <h4 class="text-italic">
                        Congratulations to 2017 Raffle item winners!!!
                    </h4>
                    <h4 class="text-italic">
                        2017 Raffle Items were Donated By:
                    </h4>
                </div>
            </q-transition>
        </div>
        <div class="row wrap justify-center mobile-only">
            <div class="col-xs-11 top text-center">
                <hr color="red" class="hr">
                <h4 class="headline text-bold">RAFFLE ITEMS</h4>
                <h5 class="fancy">2018 raffle items coming soon</h5>
                <q-btn class="btn shadow-24" no-caps>Purchase Raffle Tickets</q-btn>
                <hr color="red" class="hr">
                <h6 class="text-italic">
                    Congratulations to 2017 Raffle item winners!!!
                </h6>
                <h6 class="text-italic">
                    2017 Raffle Items were Donated By:
                </h6>
            </div>
        </div>
        <q-transition appear enter="fadeIn" leave="fadeOut">
            <div class="row wrap justify-center pics desktop-only">
                <q-card flat align="center" class="col-xs-12 col-sm-6">
                    <q-card-media>
                        <img src="https://static.wixstatic.com/media/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.jpg/v1/fill/w_413,h_218,al_c,q_80,usm_0.66_1.00_0.01/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.webp"
                            class="img" alt="Raffle item picture">
                    </q-card-media>
                    <q-card-title>
                        Meridian Cycles
                    </q-card-title>
                    <q-card-main>
                        <p>(Starlite Lazer 20 Youth Bike (Made to Order: Girls or Boys, various colors available)</p>
                    </q-card-main>
                </q-card>
            </div>
        </q-transition>
        <div class="row wrap justify-center pics desktop-only">
            <q-card v-for="item in items" flat align="center" class="col-xs-12 col-sm-3">
                <q-card-media>
                    <img :src="item.link" class="img" alt="Raffle item picture">
                </q-card-media>
                <q-card-title>
                    {{item.donator}}
                </q-card-title>
                <q-card-main>
                    <p>{{item.description}}</p>
                </q-card-main>
            </q-card>
        </div>
        <div class="row wrap justify-center mobile-only">
            <q-card align="center" class="col-xs-11 col-sm-3 pics-mobile">
                <q-card-media>
                    <img src="https://static.wixstatic.com/media/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.jpg/v1/fill/w_413,h_218,al_c,q_80,usm_0.66_1.00_0.01/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.webp"
                        class="img" alt="Raffle item picture">
                </q-card-media>
                <q-card-title>
                    Meridian Cycles
                </q-card-title>
                <q-card-main>
                    <p>(Starlite Lazer 20 Youth Bike (Made to Order: Girls or Boys, various colors available)</p>
                </q-card-main>
            </q-card>
        </div>
        <div class="row wrap justify-center mobile-only">
            <q-card v-for="item in items" align="center" class="col-xs-11 col-sm-3 pics-mobile">
                <q-card-media>
                    <img :src="item.link" alt="Raffle item picture">
                </q-card-media>
                <q-card-title>
                    {{item.donator}}
                </q-card-title>
                <q-card-main>
                    <p>{{item.description}}</p>
                </q-card-main>
            </q-card>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QCard,
        QCardTitle,
        QCardMain,
        QCardMedia,
        QBtn,
        QTransition
    } from 'quasar'
    export default {
        name: 'Raffle',
        data() {
            return {}
        },
        components: {
            QLayout,
            QCard,
            QCardTitle,
            QCardMain,
            QCardMedia,
            QBtn,
            QTransition
        },
        computed: {
            items() {
                return this.$store.state.raffles
            }
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

    .fancy {
        font-family: 'Niconne', cursive;

    }

    .headline {
        text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
    }

    .hr {
        width: 80%;
    }

    .top {
        background-color: rgba(160, 160, 160, 0.507);
        margin: 3rem 0 3rem 0;
        padding: 2rem 0 1rem 0;
    }

    .img {
        max-height: 20rem;
    }

    /* .raffle {
        background-image: url("~statics/woodback.jpeg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
    } */

    .raffle {
        background-image: url("~statics/woodback.jpeg");
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

    .pics {
        background-color: rgba(160, 160, 160, 0.507);
        margin: 0 10rem 0 10rem;
        padding-top: 2rem;
    }

    .pics-mobile {
        background-color: rgba(160, 160, 160, 0.507);
    }
</style>