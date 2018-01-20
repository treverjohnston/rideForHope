<template>
    <q-layout class="contact black">
        <div class="row wrap justify-center promo">
            <div class="col-xs-12 text-center">
                <q-parallax src="statics/riders3.jpg" :height="200">
                    <div slot="loading">
                        <h3>Ride Day Information</h3>
                        <hr color="red" class="hr">
                    </div>
                    <h3 class="red-back">Ride Day Information</h3>
                    <!-- <hr color="red" class="hr"> -->
                </q-parallax>
            </div>
        </div>
        <div class="row wrap justify-center xs-gutter">
            <div class="col-xs-6 desktop-only">
                <img src="~/statics/RFHIdahoLogo.png" class="responsive img" alt="RFH Logo">
            </div>
            <div class="col-xs-11 col-md-5 text-center">
                <h3 class="desktop-only">Ride Day Information</h3>
                <h4 class="mobile-only">Ride Day Information</h4>
                <p>Registration opens at ----</p>
                <hr class="ihr">
                <h5>Metric Century/Century Start Time</h5>
                <p>7:00 AM</p>
                <h5>18/31 Mile Start Time</h5>
                <p>8:00 AM</p>
            </div>
            <div class="col-xs-10 text-center">
                <h3 class="desktop-only">Additional Ride Day Information</h3>
                <h4 class="mobile-only">Additional Ride Day Information</h4>
                <hr class="ihr">
                <p>
                    I can add as many of these sections as you want. You could put anything you like here, such as packet pickup information or lunch information
                </p>
            </div>
            <div class="col-xs-10 text-center">
                <h3 class="desktop-only">Rules of the Road</h3>
                <h4 class="mobile-only">Rules of the Road</h4>
                <hr class="ihr">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eaque quibusdam aliquid, blanditiis, dolorem vitae minus neque,
                    tenetur repudiandae architecto provident ipsam eligendi unde ipsa obcaecati hic facere debitis omnis
                    ducimus enim ad cupiditate temporibus recusandae! Rem quia qui dignissimos obcaecati facere. </p>
            </div>
            <div class="col-xs-10">
                    <h3 class="desktop-only text-center">Directions to Race Start (Kuna City Hall)</h3>
                    <h4 class="mobile-only text-center">Directions to Race Start (Kuna City Hall)</h4>

                    <iframe class="frame" src="//www.google.com/maps/embed/v1/place?q=Kuna%20City%20Hall
                    &zoom=13
                    &attribution_source=Google+Maps+Embed+API
                    &attribution_web_url=https://developers.google.com/maps/documentation/embed/
                    &key=AIzaSyBLaoSdXeLvOkN5Tp5YkPZ35gXfi5-LhsI" allowfullscreen>
                </iframe>
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
        openURL
    } from 'quasar'
    export default {
        name: 'Ride',
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
            Toast,
            QParallax
        },
        methods: {
            launch(url) {
                openURL(url);
            },

        }
    }
</script>

<style scoped>
    .frame{
        width: 100%;
        height: 80vh;
    }
    .img {
        height: 60vh;
    }

    .bot {
        margin: 3rem 0 0 0;
    }

    .promo {
        background-color: rgba(0, 128, 128, 0.6);
    }

    .ihr {
        width: 90%;
    }

    .hr {
        width: 20%
    }

    .contact {
        background-image: url("~statics/triangular.png")
    }
</style>