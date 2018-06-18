import vue from 'vue'
import axios from 'axios'
import $ from 'jquery'
import vuex from 'vuex'
import router from '../router'
import { Toast } from 'quasar'

// var production = !window.location.host.includes('localhost');
// var baseUrl = production ? '//inspireq.herokuapp.com/' : '//localhost:3000/';

vue.use(vuex)
import VueAnalytics from 'vue-analytics'

vue.use(VueAnalytics, {
    id: 'UA-120904325-1',
    checkDuplicatedScript: true,
    router
})

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
            {
                link: './statics/raffle/IMG_1576.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1671.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1672.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1673.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1674.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1675.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1676.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1677.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1678.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1679.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1680.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1681.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1682.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1683.png',
                donator: '',
                description: ''
            },
            {
                link: './statics/raffle/IMG_1684.png',
                donator: '',
                description: ''
            },
        ],
        pictures: [
            'statics/ride/IMG_8884.JPG.jpg',
            'statics/ride/IMG_8882.JPG.jpg',
            'statics/ride/IMG_8818.JPG.jpg',
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
                var url = `//res.cloudinary.com/treverscloud/image/upload/c_crop/v${pic.version}/${pic.public_id}.${pic.format}`
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