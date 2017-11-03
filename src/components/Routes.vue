<template>
    <q-layout class="routes row">
        <div class="promo text-center text-italic desktop-only col-xs-12">
            <h2>2018 Route Maps Listed Below*</h2>
            <h4>(*Pending unforseen road construction)</h4>
            <h4>(*9.5 mile route will be added for 2018)</h4>
        </div>
        <div class="promo text-center text-italic mobile-only col-xs-12">
            <h4>2018 Route Maps Listed Below*</h4>
            <h6>(*Pending unforseen road construction)</h6>
            <h6>(*9.5 mile route will be added for 2018)</h6>
        </div>
        <div class="row wrap justify-center">
            <q-card v-for="card in routes" inline class="route col-xs-11 col-sm-5 shadow-24">
                <q-card-media>
                    <img :src="card.pic">
                </q-card-media>
                <q-card-actions align="center">
                    <a :href="card.url" target="_blank">
                        <q-btn color="secondary" glossy no-caps>{{card.length}} Mile Route Map</q-btn>
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
    .route{
        border: 5px solid black;
    }
    .routes {
        background-color: rgb(0, 95, 95);
    }

    .promo {
        /* padding: 0 2rem 0 2rem; */
        background-color: rgba(2, 182, 182, 0.6);
    }
</style>