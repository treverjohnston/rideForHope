<template>
    <q-layout class="black">
        <div class="row justify-center">
            <div class="col-xs-11 col-md-10 white-back shadow-24">
                <div class="row wrap justify-center">
                    <div class="col-xs-12 text-center">
                        <h3>Contact Us</h3>
                        <hr class="hr">
                        <h5 class="desktop-only">Please contact us anytime with any questions or inquiries!</h5>
                        <h6 class="mobile-only">Please contact us anytime with any questions or inquiries!</h6>
                    </div>
                </div>
                <div class="row justify-center bot desktop-only xs-gutter">
                    <div class="col-xs-5 self-center space">
                        <img src="statics/logos/RFHIdahoLogo.png" class="responsive img" alt="Ride for hope idaho logo">
                    </div>
                    <div class="col-xs-5 self-center">
                        <q-input v-model="name" float-label="Name" name="name" type="text" />
                        <q-input v-model="email" float-label="Email" name="email" type="email" />
                        <q-input v-model="phone" float-label="Phone" name="phone" type="tel" />
                        <q-input v-model="subject" float-label="Subject" name="subject" type="text" />
                        <q-input v-model="message" type="textarea" name="message" float-label="Message"
                            :max-height="100" :min-rows="5" />
                        <q-btn @click="sendEmail" outline color="black">Send</q-btn>
                        <div class="hidden">
                            <input type="text" name="name" v-model="name">
                            <input type="email" name="_replyto" v-model="email">
                            <input type="tel" name="phone" v-model="phone">
                            <input type="text" name="subject" v-model="subject">
                            <input type="textarea" name="message" v-model="message">
                        </div>
                    </div>
                </div>
                <div class="row wrap justify-center mobile-only">
                    <div class="col-xs-11">
                        <q-input v-model="name" float-label="Name" name="name" />
                        <q-input v-model="email" float-label="Email" name="email" />
                        <q-input v-model="phone" float-label="Phone" name="phone" />
                        <q-input v-model="subject" float-label="Subject" name="subject" />
                        <q-input v-model="message" type="textarea" name="message" float-label="Message"
                            :max-height="100" :min-rows="5" />
                        <q-btn @click="sendEmail" outline color="black">Send</q-btn>
                        <div class="hidden">
                            <input type="text" name="name" v-model="name">
                            <input type="email" name="_replyto" v-model="email">
                            <input type="tel" name="phone" v-model="phone">
                            <input type="text" name="subject" v-model="subject">
                            <input type="textarea" name="message" v-model="message">
                        </div>
                    </div>
                    <div class="col-xs-10 bot">
                        <img src="statics/logos/RFHIdahoLogo.png" class="responsive img" alt="Ride for hope idaho logo">
                    </div>
                </div>
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
            name: { required },
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
            sendEmail() {
                this.$v.name.$touch()
                this.$v.email.$touch()
                this.$v.subject.$touch()
                this.$v.message.$touch()
                if (this.$v.name.$error || this.$v.email.$error || this.$v.subject.$error || this.$v.message.$error) {
                    Toast.create({
                        html: 'Something went wrong, please try again. Be sure to check all fields are filled out correctly.',
                        bgColor: 'red'
                    })
                    return
                }
                var obj = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    subject: this.subject,
                    message: this.message,
                    from: "rfhi"
                }
                this.$store.dispatch('sendEmail', obj)
            }
        }
    }
</script>

<style scoped>
    .space {
        padding-right: 3rem;
    }

    .img {
        border: 5px solid black;
    }

    .bot {
        margin: 3rem 0 3rem 0;
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);
    }

    .hr {
        width: 20%
    }
</style>