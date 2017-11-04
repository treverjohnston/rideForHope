<template>
    <q-layout class="contact">
        <div class="row wrap justify-center promo">
            <div class="col-xs-8 text-center">
                <h3>Contact Us</h3>
                <hr color="red" class="hr">
                <h5 class="light-paragraph">Please contact us anytime with any question, or other inquiries.</h5>
            </div>
        </div>
        <div class="row wrap justify-center">
            <div class="offset-xs-1 col-xs-5">
                <img src="https://static.wixstatic.com/media/a44970_3bf0ccf89baf43a18b95b6d32d4c045d~mv2_d_2448_3264_s_4_2.jpg/v1/crop/x_387,y_554,w_1933,h_2697/fill/w_334,h_468,al_c,q_80,usm_0.66_1.00_0.01/a44970_3bf0ccf89baf43a18b95b6d32d4c045d~mv2_d_2448_3264_s_4_2.webp"
                    alt="Picture of Margo">
            </div>
            <div class="col-xs-5">
                <q-input v-model="text" float-label="Name"/>
                <q-input v-model="email" float-label="Email"/>
                <q-input v-model="phone" float-label="Phone"/>
                <q-input v-model="subject" float-label="Subject"/>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QInput
    } from 'quasar'
    export default {
        name: 'Contact',
        data() {
            return {
                Name: '',
                Email: '',
                Phone: '',
                Subject: '',
            }
        },
        components: {
            QLayout,
            QInput
        }
    }
</script>

<style scoped>
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