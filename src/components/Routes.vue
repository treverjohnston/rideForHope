<template>
    <q-layout class="routes">
        <div class="promo text-center desktop-only">
            <h2 class="text-bold">2018 Route Maps Listed Below*</h2>
            <h4 class="text-bold">(Pending unforseen road construction)</h4>
            <h4 class="text-bold">(9.5 mile route will be added for 2018)</h4>
        </div>
        <div class="row wrap justify-center">
            <q-card v-for="card in routes" inline class="route col-xs-11 col-sm-5">
                <q-card-media>
                    <img :src="card.pic">
                </q-card-media>
                <q-card-title>
                    {{card.length}}
                </q-card-title>
                <q-card-actions>
                    <a :href="card.url" target="_blank">
                        <q-btn color="primary">Route Map</q-btn>
                    </a>
                </q-card-actions>
            </q-card>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QCard,
        QCardMain,
        QCardMedia,
        QCardTitle,
        QCardSeparator,
        QCardActions,
        QBtn
    } from 'quasar'
    export default {
        name: 'About',
        data() {
            return {
            }
        },
        components: {
            QLayout,
            QCard,
            QCardMain,
            QCardMedia,
            QCardTitle,
            QCardSeparator,
            QCardActions,
            QBtn
        },
        computed: {
            routes() {
                return this.$store.state.routes
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .route {
        /* margin: 0 1rem 0 1rem; */
    }

    .routes {
        background-color: rgb(0, 95, 95);
    }

    .promo {
        /* margin-top: -6rem; */
        padding: 0 2rem 0 2rem;
        background-color: rgba(2, 182, 182, 0.6);
    }
</style>