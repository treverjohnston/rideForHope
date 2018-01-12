<template>
    <q-layout class="raffle">
        <div class="row wrap justify-center desktop-only">
            <q-transition appear enter="fadeIn" leave="fadeOut">
                <div class="col-lg-8 top text-center">
                    <hr color="red" class="hr">
                    <h2 class="headline text-bold">Merchandise</h2>
                    <h4 class="fancy">Check back soon for merchandise</h4>
                </div>
            </q-transition>
        </div>
        <div class="row wrap justify-center mobile-only">
            <q-transition appear enter="fadeIn" leave="fadeOut">
                <div class="col-xs-11 top text-center">
                    <hr color="red" class="hr">
                    <h4 class="headline text-bold">Merchandise</h4>
                    <h5 class="fancy">Check back soon for merchandise</h5>
                </div>
            </q-transition>
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
                // in this example, when the `<div>` comes into view,
                // we bounce it for 2 seconds
                // we add helper `nimate-bounce` Quasar CSS class
                element.classList.add('animate-bounce')
                setTimeout(() => {
                    // we make sure the node is still in DOM
                    // (user hasn't navigated away from the Vue component
                    // rendering our `<div>`)
                    // so we don't generate an error
                    if (document.body.contains(element)) {
                        // then remove the helper class to
                        // stop bouncing
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