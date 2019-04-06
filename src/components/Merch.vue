<template>
    <q-layout class="raffle">
        <div class="row wrap justify-center desktop-only">
            <q-transition appear enter="fadeIn" leave="fadeOut">
                <div class="col-lg-8 top text-center">
                    <hr color="red" class="hr">
                    <h2 class="headline text-bold">Merchandise</h2>
                    <hr color="red" class="hr">
                    <!-- <h4 class="fancy">Check back soon for merchandise</h4> -->
                </div>
            </q-transition>
        </div>
        <div class="row wrap justify-center mobile-only">
            <q-transition appear enter="fadeIn" leave="fadeOut">
                <div class="col-xs-11 top text-center">
                    <hr color="red" class="hr">
                    <h4 class="headline text-bold">Merchandise</h4>
                    <hr color="red" class="hr">
                    <!-- <h5 class="fancy">Check back soon for merchandise</h5> -->
                </div>
            </q-transition>
        </div>
        <q-transition appear enter="fadeIn" leave="fadeOut">
            <div class="row wrap justify-center pics desktop-only">
                <q-card v-for="merchandi in merchandise" flat align="center" class="col-xs-12 col-md-7">
                    <q-card-media @click="launch('https://www.cuore.ch/teamshop/us/en/Ride-For-Hope-19/')">
                        <img :src="merchandi.src" class="responsive" alt="Jersey">
                    </q-card-media>
                    <q-card-title class="black-text">
                        {{merchandi.title}} </q-card-title>
                    <q-card-main>
                        <q-btn no-caps @click="launch('https://www.cuore.ch/teamshop/us/en/Ride-For-Hope-19/')"
                            class="cbtn shadow-24"><img src="statics/merch/cuore-logo.jpg" alt="Cuore Logo"
                                class="btn-img">
                        </q-btn>
                    </q-card-main>
                </q-card>
            </div>
        </q-transition>
        <div class="row wrap justify-center pics-mobile mobile-only">
            <q-card v-for="merchandi in merchandise" flat align="center" class="col-xs-11">
                <q-card-media @click="launch('https://www.cuore.ch/teamshop/us/en/Ride-For-Hope-19/')">
                    <img :src="merchandi.src" class="responsive" alt="Jersey">
                </q-card-media>
                <q-card-title class="black-text">
                    {{merchandi.title}}</q-card-title>
                <q-card-main>
                    <q-btn no-caps @click="launch('https://www.cuore.ch/teamshop/us/en/Ride-For-Hope-19/')"
                        class="cbtn shadow-24"><img src="statics/merch/cuore-logo.jpg" alt="Cuore Logo" class="btn-img">
                    </q-btn>
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
        QTransition,
        openURL,
        BackToTop,
        Ripple,
        QFixedPosition,
        QIcon
    } from 'quasar'
    export default {
        name: 'Merch',
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
            merchandise() {
                return this.$store.state.merchandise
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
    .btn-img {
        max-width: 7rem;
    }

    .back {
        background-color: transparent;
    }

    .cbtn {
        /* background-color: rgba(218, 0, 0, 0.699); */
        background-color: white;
        color: white;
        padding: 0 2rem 0 2rem;
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

    .black-text {
        color: black;
    }

    .raffle {
        background-image: url("~statics/road.jpg");
        background-size: cover;
        overflow: auto;
        background-attachment: fixed;
        width: 100%;
        height: 100%;
        top: 0;
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