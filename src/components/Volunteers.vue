<template>
    <q-layout class="volunteers black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-11 col-md-8 text-center">
                <h3>I'm Interested in Volunteering</h3>
                <hr color="red" class="hr">
            </div>
        </div>
        <div class="row wrap justify-center bot desktop-only sm-gutter">
            <div class="col-xs-4">
                <q-input v-model="name" float-label="Name" name="name" />
                <q-input v-model="email" float-label="Email" name="email" />
                <q-input v-model="phone" float-label="Phone" name="phone" />
                <q-input v-model="subject" float-label="Subject" name="subject" />
                <q-input v-model="message" type="textarea" name="message" float-label="Message" :max-height="100" :min-rows="5" />
                <q-btn @click="send">Send</q-btn>
            </div> 
            <div class="col-xs-7">
                <h6 class="light-paragraph text-center red">Thanks to all of you who are volunteering ---- we couldn't do this without you!</h6>
                <div id="bar" class="row wrap justify center">
                    <div v-for="pic in pictures" class="col-xs-6">
                        <img data-x="80" class="el test" :src="pic" alt="ride picture">
                    </div>
                </div>
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
                <q-gallery :src="pictures" class="el"></q-gallery>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import anime from "animejs";
    import { required, email, alpha, alphaNum } from "vuelidate/lib/validators";
    import { QLayout, QInput, QBtn, QGallery, Toast } from "quasar";
    export default {
        name: "Volunteers",
        data() {
            return {
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            };
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
                return this.$store.state.pictures;
            }
        },
        methods: {
            send() {
                this.$v.name.$touch();
                this.$v.email.$touch();
                this.$v.subject.$touch();
                this.$v.message.$touch();
                if (
                    this.$v.name.$error ||
                    this.$v.email.$error ||
                    this.$v.subject.$error ||
                    this.$v.message.$error
                ) {
                    Toast.create({
                        html:
                            "Something went wrong, please try again. Be sure to check all fields are filled out correctly.",
                        bgColor: "red"
                    });
                    return;
                }
                var obj = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    _subject: this.subject,
                    message: this.message
                };
                this.$store.dispatch("sendEmail", obj);
            },
            animate() {
                anime({
                    targets: "#bar .el",
                    translateX: function (el) {
                        return el.getAttribute('data-x');
                    },
                    translateY: function (el, i) {
                        return 50 + (-50 * i);
                    },
                    scale: function (el, i, l) {
                        return 1.2;
                    },
                    rotate: function () { return anime.random(-360, 360); },
                    duration: function () { return anime.random(500, 800); },
                    duration: function () { return anime.random(800, 1100); },
                    delay: function () { return anime.random(0, 500); },
                    direction: 'reverse'
                });
            }
        },
        mounted() {
            this.animate()
        }
    };
</script>

<style scoped>
    .bot{
        padding-top: 1rem;
    }
    .test {
        width: 20vw;
        padding-bottom: 1rem;
    }

    .red {
        color: rgb(212, 0, 0);
    }

    .volunteers {
        background-image: url("~statics/triangular.png");
    }
</style>