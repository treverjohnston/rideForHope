<template>
    <q-layout class="contact">
        <div class="row wrap justify-center promo">
            <div class="col-xs-11 col-md-8 text-center">
                <h3>Contact Us</h3>
                <hr color="red" class="hr">
                <h5 class="light-paragraph desktop-only">Please contact us anytime with any question, or other inquiries.</h5>
                <h6 class="light-paragraph mobile-only">Please contact us anytime with any question, or other inquiries.</h6>
            </div>
        </div>
        <div class="row wrap justify-center bot desktop-only xs-gutter">
            <div class="offset-xs-1 col-xs-5">
                <img src="https://static.wixstatic.com/media/a44970_3bf0ccf89baf43a18b95b6d32d4c045d~mv2_d_2448_3264_s_4_2.jpg/v1/crop/x_387,y_554,w_1933,h_2697/fill/w_334,h_468,al_c,q_80,usm_0.66_1.00_0.01/a44970_3bf0ccf89baf43a18b95b6d32d4c045d~mv2_d_2448_3264_s_4_2.webp"
                    class="responsive img" alt="Picture of Margo">
                <h6>**Or contact Margo, (208) 608-2527</h6>
            </div>
            <div class="col-xs-5">
                <q-input v-model="name" float-label="Name" name="name" />
                <q-input v-model="email" float-label="Email" name="email" />
                <q-input v-model="phone" float-label="Phone" name="phone" />
                <q-input v-model="subject" float-label="Subject" name="_subject" />
                <q-input v-model="message" type="textarea" name="message" float-label="Message" :max-height="100" :min-rows="5" />
                <q-btn @click="send">Send</q-btn>
            </div>
        </div>
        <div class="row wrap justify-center mobile-only">
            <div class="col-xs-11">
                <q-input v-model="name" float-label="Name" name="name" />
                <q-input v-model="email" float-label="Email" name="email" />
                <q-input v-model="phone" float-label="Phone" name="phone"/>
                <q-input v-model="subject" float-label="Subject" name="_subject" />
                <q-input v-model="message" type="textarea" name="message" float-label="Message" :max-height="100" :min-rows="5" />
                <q-btn @click="send" class="full-width">Send</q-btn>
            </div>
            <div class="col-xs-11 bot">
                <h6 class="text-center">**Or contact Margo, (208) 608-2527</h6>
                <img src="https://static.wixstatic.com/media/a44970_3bf0ccf89baf43a18b95b6d32d4c045d~mv2_d_2448_3264_s_4_2.jpg/v1/crop/x_387,y_554,w_1933,h_2697/fill/w_334,h_468,al_c,q_80,usm_0.66_1.00_0.01/a44970_3bf0ccf89baf43a18b95b6d32d4c045d~mv2_d_2448_3264_s_4_2.webp"
                    class="responsive img" alt="Picture of Margo">
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QInput,
        QBtn
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
        components: {
            QLayout,
            QInput,
            QBtn
        },
        methods:{
            send(){
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