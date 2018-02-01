<template>
    <q-layout class="raffle">
        <div class="row wrap justify-center desktop-only">
            <q-transition appear enter="fadeIn" leave="fadeOut">
                <div class="col-lg-8 top text-center">
                    <hr color="red" class="hr">
                    <h2 class="headline text-bold">RAFFLE ITEMS</h2>
                    <h4 class="fancy">2018 raffle items coming soon</h4>
                    <q-btn class="btn shadow-24" no-caps @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventStore.aspx%3FfEID%3D67623%26mSource%3DimAOverview')">Purchase Raffle Tickets</q-btn>
                    <hr color="red" class="hr">
                    <!-- <h4 class="text-italic">
                        Congratulations to 2017 Raffle item winners!!!
                    </h4>
                    <h4 class="text-italic">
                        2017 Raffle Items were Donated By:
                    </h4> -->
                </div>
            </q-transition>
        </div>
        <div class="row wrap justify-center mobile-only">
            <div class="col-xs-11 top text-center">
                <hr color="red" class="hr">
                <h4 class="headline text-bold">RAFFLE ITEMS</h4>
                <h5 class="fancy">2018 raffle items coming soon</h5>
                <q-btn class="btn shadow-24" no-caps @click="launch('https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventStore.aspx%3FfEID%3D67623%26mSource%3DimAOverview')">Purchase Raffle Tickets</q-btn>
                <hr color="red" class="hr">
                <!-- <h6 class="text-italic">
                    Congratulations to 2017 Raffle item winners!!!
                </h6>
                <h6 class="text-italic">
                    2017 Raffle Items were Donated By:
                </h6> -->
            </div>
        </div>
        <!-- <q-transition appear enter="fadeIn" leave="fadeOut">
            <div class="row wrap justify-center pics desktop-only">
                <q-card flat align="center" class="col-xs-12 col-lg-6">
                    <q-card-media>
                        <img src="http://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/cycle.jpg"
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
            <q-card v-for="item in items" flat align="center" class="col-xs-12 col-lg-3">
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
            <q-card align="center" class="col-xs-11 col-sm-8 col-lg-3 pics-mobile">
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
            <q-card v-for="item in items" align="center" class="col-xs-11 col-sm-8 col-lg-3 pics-mobile">
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
        </div> -->
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
        QTransition,
        openURL,
        BackToTop,
        Ripple,
        QFixedPosition,
        QIcon
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
            QTransition,
            QFixedPosition,
            QIcon
        },
        computed: {
            items() {
                return this.$store.state.raffles
            }
        },
        directives: {
            BackToTop,
            Ripple
        },
        methods: {
            launch(url) {
                openURL(url)
            },
            bounceImage(element) {
                element.classList.add('animate-bounce')
                setTimeout(() => {
                    if (document.body.contains(element)) {
                        element.classList.remove('animate-bounce')
                    }
                }, 2000)
            }
        }
    }
</script>

<style scoped>
    .back {
        background-color: transparent;
    }

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

    .raffle {
        background-image: url("~statics/road.jpg");
        background-size: cover;
        overflow: auto;
        background-attachment: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;    }

    .pics {
        background-color: rgba(160, 160, 160, 0.507);
        margin: 0 10rem 0 10rem;
        padding-top: 2rem;
    }

    .pics-mobile {
        background-color: rgba(160, 160, 160, 0.507);
    }
</style>