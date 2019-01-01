<template>
    <q-layout class="black">
        <div class="row justify-center xs-gutter brm-video">
            <div class="col-xs-11 col-sm-10 black-back">
                <div class="row justify-center">

                    <div class="col-xs-10 text-center">
                        <big>Learn More About Genesis Community Health</big>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <iframe src="https://player.vimeo.com/video/214745227" width="100%" height="300" frameborder="0"
                            webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div class="col-xs-12 text-center self-center mobile-only">
                        <hr class="s">
                        <h6>Genesis Community</h6>
                        <h6> Healthcare Overview</h6>
                        <hr class="s">
                    </div>
                    <div class="col-xs-10 col-md-4 text-center self-center">
                        <q-card-media @click="launch('//www.ktvb.com/news/health/free-primary-health-clinic-wants-to-take-on-more-patients/482912341')"
                            class="mobile-only" overlay-postion="full">
                            <img src="~statics/video_pics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
                        </q-card-media>
                        <q-btn flat @click="launch('//www.ktvb.com/news/health/free-primary-health-clinic-wants-to-take-on-more-patients/482912341')"
                            class="shadow-24 two desktop-only ">
                            <img src="~statics/video_pics/ktvb.jpg" alt="Genesis Info Video" class="responsive">
                            <!-- <div class="otwo desktop-only">
                                <h5>Genesis Community Healthcare Overview</h5>
                            </div> -->
                        </q-btn>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <iframe src="https://player.vimeo.com/video/217763499" width="100%" height="300" frameborder="0"
                            webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
                <div class="row justify-center xs-gutter video">
                    <div class="col-xs-10 text-center self-center">
                        <big>Learn More About Boise Rescue Mission</big>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center self-center">
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/xH7_FBH2oiU?rel=0"
                            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center self-center">
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/SQRwGpdWsRQ?rel=0"
                            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QInput,
        QBtn,
        Toast,
        QParallax,
        openURL,
        QCardMedia,
        QCardTitle,
        QCard,
        QTransition
    } from 'quasar'
    export default {
        name: 'Ride',
        data() {
            return {
            }
        },

        components: {
            QLayout,
            QInput,
            QBtn,
            Toast,
            QParallax,
            QCardMedia,
            QCardTitle,
            QCard,
            QTransition
        },
        methods: {
            launch(url) {
                openURL(url);
            },

        }
    }
</script>

<style scoped>
</style>