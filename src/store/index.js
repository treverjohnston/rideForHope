import vue from 'vue'
import axios from 'axios'
import $ from 'jquery'
import vuex from 'vuex'
import router from '../router'
import { Toast } from 'quasar'

// var production = !window.location.host.includes('localhost');
// var baseUrl = production ? '//inspireq.herokuapp.com/' : '//localhost:3000/';

vue.use(vuex)

var store = new vuex.Store({
    state: {
        routes: [
            {
                url: '/18-mile',
                length: '18 Mile',
                pic: '//res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/18_mrihcr.jpg'
            },
            {
                url: '/31-mile',
                length: '30 Mile',
                pic: '//res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/31_lst8ag.jpg'
            },
            {
                url: '/metric',
                length: 'Metric Century',
                pic: '//res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/62.8_obydkx.jpg'
            },
            {
                url: '/Century',
                length: 'Century',
                pic: '//res.cloudinary.com/treverscloud/image/upload/v1510899777/Ride/100_wi51xj.jpg'
            }

        ],
        raffles: [
            // {
            //     link: 'https://static.wixstatic.com/media/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.jpg/v1/fill/w_413,h_218,al_c,q_80,usm_0.66_1.00_0.01/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.webp',
            //     donator: 'Meridian Cycles',
            //     description: '(Starlite Lazer 20 Youth Bike (Made to Order: Girls or Boys, various colors available)'
            // },
            {
                link: 'https://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/light.jpg',
                donator: 'George\'s Cycles',
                description: '(NightRider Headlight/Tail Light)'
            },
            {
                link: 'https://res.cloudinary.com/treverscloud/image/upload/v1511556284/Ride/cycle2.jpg',
                donator: 'Anonymous',
                description: '(Woman\'s Del Sol 3spd Deluxe Cruiser)'
            },
            {
                link: 'https://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/fitbit.jpg',
                donator: 'Anonymous',
                description: '(FitBit Charge 2)'
            },
            {
                link: 'https://res.cloudinary.com/treverscloud/image/upload/v1511556284/Ride/pump.jpg',
                donator: 'Reed Cycle',
                description: '(Blackburn Bike Pump)'
            },
            {
                link: 'https://res.cloudinary.com/treverscloud/image/upload/v1511556284/Ride/reed.jpg',
                donator: 'Reed Cycle',
                description: '($50 Gift Certificate)'
            },
            {
                link: 'https://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/shirt.jpg',
                donator: 'Reed Cycle',
                description: '(Smith Sweatshirt & Dakine Bage)'
            },
            {
                link: 'https://res.cloudinary.com/treverscloud/image/upload/v1511556283/Ride/spud.jpg',
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
            'statics/ride/IMG_8884.JPG.jpg',
            'statics/ride/IMG_8882.JPG.jpg',
            // 'statics/ride/IMG_8815.JPG.jpg',
            'statics/ride/IMG_8818.JPG.jpg',
            // 'statics/ride/IMG_8876.JPG.jpg',
            'statics/ride/IMG_8894.JPG.jpg'
        ],
        gallery: []
    },
    mutations: {
        handleError(state, err) {
            console.error(err)
            // state.error = err
        },
        setPics(state, pics) {
            var arr = []
            for (let i = 0; i < pics.length; i++) {
                const pic = pics[i];
                var url = `//res.cloudinary.com/treverscloud/image/upload/v${pic.version}/${pic.public_id}.${pic.format}`
                arr.unshift(url)
            }
            state.gallery = arr
        }

    },
    actions: {
        getPictures({ commit, dispatch }) {
            // cl.imageTag('rfh.json', { type: "list" }).toHtml();
            axios.get('https://res.cloudinary.com/treverscloud/image/list/rfh.json')
                .then((res) => {
                    var pics = res.data.resources
                    commit('setPics', pics)
                })
                .catch(err => {
                    commit('handleError', err)
                })

        },
        sendEmail({ commit, dispatch }, obj) {
            console.log('email obj', obj)
            $.ajax({
                url: "https://formspree.io/rideforhopeidaho@gmail.com",
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