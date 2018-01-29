<template>
        <q-layout class="thirty black">
            <div class="row wrap justify-center promo">
                <div class="col-xs-12">
                        <q-parallax src="statics/road.jpg" :speed=".5" :height="200">
                            <div slot="loading"><h2 class="headline text-center">31 Mile Ride</h2>
                                <hr color="red" class="hr"></div>
                            <h2 class="headline text-center black red-back">31 Mile Ride</h2>
                            <!-- <hr color="red" class="hr"> -->
                        </q-parallax>
                </div>
            </div>
            <div class="row wrap justify-center">
                <h6 class="top light-paragraph text-justify col-xs-11 col-md-8">
                        Destination route to Melba and then back to Kuna. Gentle rolling hills through farmland.
                        This is a course that will delight those who want to establish a new 40k personal best. But you surely didn’t train all that time to come to Ride For Hope Idaho just to get it over with as fast as you can; did you?! Stop and smell the roses, converse with your riding partners,  and don’t forget to experience a fancy porta-john at one of the three rest stops you will encounter along the route!
                                   </h6>
            </div>
            <div class="row wrap justify-center">
                <q-card class="route col-xs-11 col-md-8 shadow-24">
                    <q-transition appear enter="zoomIn" leave="fadeOut">
                        <div>
                            <q-card-media>
                                <img src="http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/31_lst8ag.jpg" alt="31-mile preview">
                            </q-card-media>
                            <q-card-actions class="desktop-only" align="center">
                                    <q-collapsible class="white-text" label="View More Map Options">
                                        <q-btn class="r-btn" @click="launch('http://www.mapmyride.com/routes/view/1478990992')" no-caps>Map My Ride</q-btn>
                                        <q-btn class="r-btn" @click="launch('http://www.strava.com/routes/3647308')" no-caps>Strava</q-btn>
                                        <q-btn class="r-btn" @click="launch('https://connect.garmin.com/modern/course/16760417')" no-caps>Garmin</q-btn>
                                        <q-btn class="r-btn" @click="launch('https://ridewithgps.com/routes/26451284')" no-caps>Ride With GPS</q-btn>
                                    </q-collapsible>
                                </q-card-actions>
                                <div align="center" class="white-text mobile-only" label="View More Map Options">
                                        <q-btn class="btn" @click="launch('http://www.mapmyride.com/routes/view/1478990992')" no-caps>Map My Ride</q-btn>
                                        <q-btn class="btn" @click="launch('http://www.strava.com/routes/3647308')" no-caps>Strava</q-btn>
                                        <q-btn class="btn" @click="launch('https://connect.garmin.com/modern/course/16760417')" no-caps>Garmin</q-btn>
                                        <q-btn class="btn" @click="launch('https://ridewithgps.com/routes/26451284')" no-caps>Ride With GPS</q-btn>
</div>
                        </div>
                    </q-transition>
                </q-card>
            </div>
            <div class="row wrap justify-center">
                    <q-card class="route col-xs-11 col-md-8 shadow-24">
                        <q-transition appear enter="zoomIn" leave="fadeOut">
                            <div>
                                <q-card-media>
                                    <img src="http://res.cloudinary.com/treverscloud/image/upload/v1517248679/31_Mile_Elevation_Profile_Only_oztpv1.jpg" alt="31-mile elevation profile">
                                </q-card-media>
                                
                            </div>
                        </q-transition>
                    </q-card>
                </div>
        </q-layout>
    </template>
    
    <script>
        import {
            QLayout,
            QInput,
            QBtn,
            QGallery,
            openURL,
            QTransition,
            QCard,
            QCardMedia,
            QCardActions,
            QParallax,
            QCollapsible
        } from 'quasar'
        export default {
            name: 'thirty',
            data() {
                return {
                }
            },
            components: {
                QLayout,
                QInput,
                QBtn,
                QGallery,
                QTransition,
                QCard,
                QCardMedia,
                QCardActions,
                QParallax,
                QCollapsible
            },
            computed: {
                pictures() {
                    return this.$store.state.pictures
                }
            },
            methods: {
                launch(url) {
                    openURL(url)
                },
    
            }
        }
    </script>
    
    <style scoped>
        .btn {
        margin: .5rem .5rem .5rem 0;
        background-color: rgba(197, 7, 7, 0.8);
        color: white;
    }
        .route {
            border: 5px solid black;
        }
    
        .hr {
            width: 30%;
        }
    
        .headline {
            text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
    
        }
    
        .promo {
            background-color: rgba(0, 128, 128, 0.6);
    
        }
    
        .thirty {
            background-image: url("~statics/triangular.png");
        }
    </style>