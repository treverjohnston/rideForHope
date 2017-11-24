import vue from 'vue'
import axios from 'axios'
import $ from 'jquery'
import vuex from 'vuex'
import router from '../router'
import {Toast} from 'quasar'

// var production = !window.location.host.includes('localhost');
// var baseUrl = production ? '//inspireq.herokuapp.com/' : '//localhost:3000/';

vue.use(vuex)

var store = new vuex.Store({
    state: {
        routes: [
            {
                url: 'http://www.mapmyride.com/routes/view/996049745',
                length: 18,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/18_mrihcr.jpg'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/1478990992',
                length: 31,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/31_lst8ag.jpg'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/981667107',
                length: 62.8,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/62.8_obydkx.jpg'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/1462908562',
                length: 100,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/100_wi51xj.jpg'
            }
            
        ],
        raffles: [
            // {
            //     link: 'https://static.wixstatic.com/media/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.jpg/v1/fill/w_413,h_218,al_c,q_80,usm_0.66_1.00_0.01/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.webp',
            //     donator: 'Meridian Cycles',
            //     description: '(Starlite Lazer 20 Youth Bike (Made to Order: Girls or Boys, various colors available)'
            // },
            {
                link: 'http://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/light.jpg',
                donator: 'George\'s Cycles',
                description: '(NightRider Headlight/Tail Light)'
            },
            {
                link: 'http://res.cloudinary.com/treverscloud/image/upload/v1511556284/Ride/cycle2.jpg',
                donator: 'Anonymous',
                description: '(Woman\'s Del Sol 3spd Deluxe Cruiser)'
            },
            {
                link: 'http://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/fitbit.jpg',
                donator: 'Anonymous',
                description: '(FitBit Charge 2)'
            },
            {
                link: 'http://res.cloudinary.com/treverscloud/image/upload/v1511556284/Ride/pump.jpg',
                donator: 'Reed Cycle',
                description: '(Blackburn Bike Pump)'
            },
            {
                link: 'http://res.cloudinary.com/treverscloud/image/upload/v1511556284/Ride/reed.jpg',
                donator: 'Reed Cycle',
                description: '($50 Gift Certificate)'
            },
            {
                link: 'http://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/shirt.jpg',
                donator: 'Reed Cycle',
                description: '(Smith Sweatshirt & Dakine Bage)'
            },
            {
                link: 'http://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/spud.jpg',
                donator: 'Idaho Candy Company',
                description: '(24 Idaho Spud Bars)'
            },
            {
                link: 'https://static.wixstatic.com/media/a44970_a8eed31add7e419995034cd868029ac8~mv2.png/v1/fill/w_167,h_167,al_c,lg_1/a44970_a8eed31add7e419995034cd868029ac8~mv2.png',
                donator: 'Jack In The Box',
                description: '(50 Free Meals, raffled in 10 meal increments)'
            },
        ],
        pictures: [
            'statics/cover.jpg',
            'statics/cover2.jpg',
            'statics/riders2.jpg',
            'statics/riders3.jpg',
            'statics/riders4.jpg',
            'statics/riders5.jpg',
        ]
    },
    mutations: {
        handleError(state, err) {
            console.error(err)
            // state.error = err
        },

    },
    actions: {
        sendEmail({ commit, dispatch }, obj) {
            console.log('email obj', obj)
            $.ajax({
                url: "https://formspree.io/treverj1029@gmail.com",
                method: "POST",
                data: {
                    name: obj.name,
                    _email: obj.email,
                    phone: obj.phone,
                    _subject: obj._subject,
                    message: obj.message
                },
                dataType: "json"
            });
            Toast.create('Message Sent')
        }
    }
})


export default store