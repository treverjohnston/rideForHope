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
                <q-input v-model="name" float-label="Name" name="name" />
                <q-input v-model="email" float-label="Email" name="email" />
                <q-input v-model="phone" float-label="Phone" name="phone" />
                <q-input v-model="subject" float-label="Subject" name="subject" />
                <q-input v-model="message" type="textarea" name="message" float-label="Message" :max-height="100" :min-rows="5" />
                <q-btn @click="send">Send</q-btn>
            </div>
            <div class="offset-xs-1 col-xs-5">
                <h6 class="light-paragraph text-center red">Thanks to all of you who are volunteering ---- we couldn't do this without you!</h6>
                <q-gallery :src="pictures"></q-gallery>
                <h6>**Or contact Margo, (208) 608-2527 and she will help coordinate which areas we need you most to help in.</h6>
            </div>
        </div>
        <div class="row wrap justify-center mobile-only">
            <div class="col-xs-11">
                <q-input v-model="name" float-label="Name" name="name" />
                <q-input v-model="email" float-label="Email" name="email" />
                <q-input v-model="phone" float-label="Phone" name="phone" />
                <q-input v-model="subject" float-label="Subject" name="subject" />
                <q-input v-model="message" type="textarea" name="message" float-label="Message" :max-height="100" :min-rows="5" />
                <q-btn @click="send" class="full-width">Send</q-btn>
            </div>
            <div class="col-xs-11 bot">
                <h6 class="text-center">**Or contact Margo, (208) 608-2527 and she will help coordinate which areas we need you most to help in.</h6>
                <q-gallery :src="pictures"></q-gallery>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import { required, email, alpha, alphaNum } from 'vuelidate/lib/validators'
    import {
        QLayout,
        QInput,
        QBtn,
        QGallery,
        Toast
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
        validations: {
            name: { required, alpha },
            email: { required, email },
            subject: { required },
            message: { required }
        },
        components: {
            QLayout,
            QInput,
            QBtn,
            QGallery,
            Toast
        },
        computed: {
            pictures() {
                return this.$store.state.pictures
            }
        },
        methods: {
            send() {
                this.$v.name.$touch()
                this.$v.email.$touch()
                this.$v.subject.$touch()
                this.$v.message.$touch()
                if (this.$v.name.$error || this.$v.email.$error || this.$v.subject.$error || this.$v.message.$error) {
                    // console.log(this.$v.name.$error)
                    // console.log(this.$v.email.$error)
                    // console.log(this.$v.subject.$error)
                    // console.log(this.$v.message.$error)
                    Toast.create({
                        html: 'Something went wrong, please try again. Be sure to check all fields are filled out correctly.',
                        bgColor: 'red'
                    })
                    return
                }
                // else {
                //     Toast.create('Message Sending')
                // }
                var obj = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    _subject: this.subject,
                    message: this.message
                }
                this.$store.dispatch('sendEmail', obj)
            }
        }
    }
</script>

<style scoped>
    .red {
        color: rgb(212, 0, 0);
    }
</style>