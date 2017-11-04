<template>
    <q-layout class="volunteers">
        <div class="row wrap justify-center promo">
            <div class="col-xs-11 col-md-8 text-center">
                <h3>I'm Interested in Volunteering</h3>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center bot desktop-only xs-gutter">
            <div class="col-xs-5">
                <q-input v-model="name" float-label="Name" />
                <q-input v-model="email" float-label="Email" />
                <q-input v-model="phone" float-label="Phone" />
                <q-input v-model="subject" float-label="Subject" />
                <q-input v-model="message" type="textarea" float-label="Message" :max-height="100" :min-rows="5" />
                <q-btn>Send</q-btn>
            </div>
            <div class="offset-xs-1 col-xs-5">
                <h6 class="light-paragraph text-center red">Thanks to all of you who are volunteering ---- we couldn't do this without you!</h6>
                <q-gallery :src="pictures"></q-gallery>
                <h6>**Or contact Margo, (208) 608-2527 and she will help coordinate which areas we need you most to help in.</h6>
            </div>
        </div>
        <div class="row wrap justify-center mobile-only">
            <div class="col-xs-11">
                <q-input v-model="name" float-label="Name" />
                <q-input v-model="email" float-label="Email" />
                <q-input v-model="phone" float-label="Phone" />
                <q-input v-model="subject" float-label="Subject" />
                <q-input v-model="message" type="textarea" float-label="Message" :max-height="100" :min-rows="5" />
                <q-btn class="full-width">Send</q-btn>
            </div>
            <div class="col-xs-11 bot">
                <h6 class="text-center">**Or contact Margo, (208) 608-2527 and she will help coordinate which areas we need you most to help in.</h6>
                <q-gallery :src="pictures"></q-gallery>
                
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QInput,
        QBtn,
        QGallery
    } from 'quasar'
    export default {
        name: 'Volunteers',
        data() {
            return {

                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
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
        }
    }
</script>

<style scoped>
    .red {
        color: rgb(212, 0, 0);
    }
</style>