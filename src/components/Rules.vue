<template>
        <q-layout class="contact black">
            <div class="row wrap justify-center promo">
                <div class="col-xs-12 text-center">
                    <q-card-media class="header desktop-only" overlay-position="full">
                        <q-parallax src="./statics/road.jpg" :speed=".8" :height="200">
                            <div slot="loading">
                                <h3>Ride Day Information</h3>
                                <hr color="red" class="hr">
                            </div>
                            <!-- <h3 class="red-back">Ride Day Information</h3> -->
                        </q-parallax>
                                <q-card-title slot="overlay" class="text-center">
                                    <h3 class="red-back">Ride Day Information</h3>
                                </q-card-title>
                        <!-- <img src="statics/ride/IMG_8932.JPG.jpg" class="responsive" alt="picture"> -->
                    </q-card-media>
                    <q-parallax class="mobile-only" src="statics/road.jpg" :speed=".8" :height="200">
                        <div slot="loading">
                            <h3>Ride Day Information</h3>
                            <hr color="red" class="hr">
                        </div>
                        <h3 class="red-back">Ride Day Information</h3>
                    </q-parallax>
                </div>
            </div>
            <div class="row wrap justify-center xs-gutter">
                <div class="col-xs-6 desktop-only">
                    <img src="statics/ride/ride1.jpg" class="responsive img" alt="RFH Logo">
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
                        I can add as many of these sections as you want. You could put anything you like here, such as packet pickup information
                        or lunch information
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
            QCardTitle
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
                QParallax,
                QCardMedia,
                QCardTitle
            },
            methods: {
                launch(url) {
                    openURL(url);
                },
    
            }
        }
    </script>
    
    <style scoped>
        .frame {
            width: 100%;
            height: 80vh;
        }
    
        .img {
            height: 60vh;
            margin-top: 3rem;
            border: 5px solid black;
    
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