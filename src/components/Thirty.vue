<template>
        <q-layout class="thirty black">
            <div class="row wrap justify-center promo">
                <div class="col-xs-12">
                        <q-parallax src="statics/cover2.jpg" :height="200">
                            <div slot="loading"><h2 class="headline text-center">31 Mile Ride</h2>
                                <hr color="red" class="hr"></div>
                            <h2 class="headline text-center black">31 Mile Ride</h2>
                            <hr color="red" class="hr">
                        </q-parallax>
                </div>
            </div>
            <div class="row wrap justify-center">
                <h6 class="top text-italic light-paragraph text-justify col-xs-11 col-md-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nostrum, rem libero neque doloremque quasi fugiat ut earum culpa provident aspernatur obcaecati magni corrupti est necessitatibus quisquam laborum expedita quas asperiores eum dignissimos eaque odio. Ipsam ipsa vitae pariatur eligendi, ab magni quasi reiciendis reprehenderit possimus deserunt soluta quis ut.
                </h6>
            </div>
            <div class="row wrap justify-center">
                    <p>Distance: 31 Miles</p>
                </div>
                <div class="row wrap justify-center">
                    <p>Elevation: +501ft</p>
                </div>
            <div class="row wrap justify-center">
                <q-card class="route col-xs-11 col-md-8 shadow-24">
                    <q-transition appear enter="zoomIn" leave="fadeOut">
                        <div>
                            <q-card-media>
                                <img src="http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/31_lst8ag.jpg" alt="18-mile preview">
                            </q-card-media>
                            <q-card-actions align="center">
                                <a href="http://www.mapmyride.com/routes/view/1478990992" target="_blank">
                                    <q-btn class="r-btn" no-caps>Route Map</q-btn>
                                </a>
                            </q-card-actions>
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
            QParallax
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
                QParallax
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
        .q-card-actions{
            background-image: url("~statics/binding_dark.png");
        }
    </style>