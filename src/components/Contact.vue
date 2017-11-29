<template>
    <q-layout class="contact black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12 text-center">
                <q-parallax src="statics/riders3.jpg" :height="200">
                    <div slot="loading">
                        <h3>Contact Us</h3>
                        <hr color="red" class="hr">
                        <h5 class="desktop-only">Please contact us anytime with any questions, or other inquiries.</h5>
                        <h6 class="mobile-only">Please contact us anytime with any questions, or other inquiries.</h6>
                    </div>
                    <h3>Contact Us</h3>
                    <hr color="red" class="hr">
                    <h5 class="desktop-only">Please contact us anytime with any questions, or other inquiries.</h5>
                    <h6 class="mobile-only">Please contact us anytime with any questions, or other inquiries.</h6>
                </q-parallax>
            </div>
        </div>
        <div class="row wrap justify-center bot desktop-only xs-gutter">
            <div class="offset-xs-1 col-xs-5">
                <img src="http://res.cloudinary.com/treverscloud/image/upload/v1511556284/Ride/margo.jpg"
                    class="responsive img" alt="Picture of Margo">
                <h6>**Or contact Margo, (208) 608-2527</h6>
            </div>
            <div class="col-xs-5">
                <q-input v-model="name" float-label="Name" name="name" type="text" />
                <q-input v-model="email" float-label="Email" name="email" type="email" />
                <q-input v-model="phone" float-label="Phone" name="phone" type="tel" />
                <q-input v-model="subject" float-label="Subject" name="subject" type="text" />
                <q-input v-model="message" type="textarea" name="message" float-label="Message" :max-height="100" :min-rows="5" />
                <q-btn @click="send">Send</q-btn>
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
            <div class="col-xs-10 bot">
                <h6 class="text-center">**Or contact Margo, (208) 608-2527</h6>
                <img src="https://static.wixstatic.com/media/a44970_3bf0ccf89baf43a18b95b6d32d4c045d~mv2_d_2448_3264_s_4_2.jpg/v1/crop/x_387,y_554,w_1933,h_2697/fill/w_334,h_468,al_c,q_80,usm_0.66_1.00_0.01/a44970_3bf0ccf89baf43a18b95b6d32d4c045d~mv2_d_2448_3264_s_4_2.webp"
                    class="responsive img" alt="Picture of Margo">
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
        Toast,
        QParallax
    } from 'quasar'
    export default {
        name: 'Contact',
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
            Toast,
            QParallax
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
    .img {
        border: 5px solid black;
    }

    .bot {
        margin: 3rem 0 0 0;
    }

    .promo {
        /* padding: 0 2rem 0 2rem; */
        background-color: rgba(0, 128, 128, 0.6);
    }

    .hr {
        width: 20%
    }

    .contact {
        background-color: rgb(206, 201, 201);
    }
</style>