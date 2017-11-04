import vue from 'vue'
// import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

// var production = !window.location.host.includes('localhost');
// var baseUrl = production ? '//inspireq.herokuapp.com/' : '//localhost:3000/';

vue.use(vuex)

var store = new vuex.Store({
    state: {
        routes:[
            {
                url: 'http://www.mapmyride.com/routes/view/1647707687',
                length: 9.5,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1509736164/Ride/9.5.png'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/996049745',
                length: 22,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1509736164/Ride/22.png'
            },
            {
                url:'http://www.mapmyride.com/routes/view/1478990992',
                length: 31,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1509736163/Ride/31.png'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/1478877649',
                length: 50,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1509736164/Ride/50.png'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/981667107',
                length: 65,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1509736164/Ride/65.png'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/1462908562',
                length: 100,
                pic: 'http://res.cloudinary.com/treverscloud/image/upload/v1509736164/Ride/100.png'
            }
        ],
        raffles:[
            // {
            //     link: 'https://static.wixstatic.com/media/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.jpg/v1/fill/w_413,h_218,al_c,q_80,usm_0.66_1.00_0.01/a44970_f74796a9307f49fcb7522d98ce8d751e~mv2.webp',
            //     donator: 'Meridian Cycles',
            //     description: '(Starlite Lazer 20 Youth Bike (Made to Order: Girls or Boys, various colors available)'
            // },
            {
                link: 'https://static.wixstatic.com/media/a44970_883d45dfde1b44ac9c19d52c258f1d27~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_211,h_286,al_c,q_80,usm_0.66_1.00_0.01/a44970_883d45dfde1b44ac9c19d52c258f1d27~mv2_d_3024_4032_s_4_2.webp',
                donator: 'George\'s Cycles',
                description: '(NightRider Headlight/Tail Light)'
            },
            {
                link: 'https://static.wixstatic.com/media/a44970_be03e48599af45c9a4b0c038a8bcdd6d~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_379,h_286,al_c,q_80,usm_0.66_1.00_0.01/a44970_be03e48599af45c9a4b0c038a8bcdd6d~mv2_d_4032_3024_s_4_2.webp',
                donator: 'Anonymous',
                description: '(Woman\'s Del Sol 3spd Deluxe Cruiser)'
            },
            {
                link: 'https://static.wixstatic.com/media/a44970_31439f9dacb244e8907a48d1a9c2f3e1~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_210,h_284,al_c,q_80,usm_0.66_1.00_0.01/a44970_31439f9dacb244e8907a48d1a9c2f3e1~mv2_d_3024_4032_s_4_2.webp',
                donator: 'Anonymous',
                description: '(FitBit Charge 2)'
            },
            {
                link: 'https://static.wixstatic.com/media/a44970_6e3bf354a2384fb6a7615eb5ea130dc8~mv2_d_3024_4032_s_4_2.jpg/v1/crop/x_0,y_0,w_2968,h_4032/fill/w_214,h_291,al_c,q_80,usm_0.66_1.00_0.01/a44970_6e3bf354a2384fb6a7615eb5ea130dc8~mv2_d_3024_4032_s_4_2.webp',
                donator: 'Reed Cycle',
                description: '(Blackburn Bike Pump)'
            },
            {
                link: 'https://static.wixstatic.com/media/a44970_f16843e2341e411f86be98ce1fe8b1a6~mv2_d_1275_1650_s_2.jpg/v1/fill/w_228,h_294,al_c,q_80,usm_0.66_1.00_0.01/a44970_f16843e2341e411f86be98ce1fe8b1a6~mv2_d_1275_1650_s_2.webp',
                donator: 'Reed Cycle',
                description: '($50 Gift Certificate)'
            },
            {
                link: 'https://static.wixstatic.com/media/a44970_415791afdc594e19a8dfe234ebb02852~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_216,h_287,al_c,q_80,usm_0.66_1.00_0.01/a44970_415791afdc594e19a8dfe234ebb02852~mv2_d_3024_4032_s_4_2.webp',
                donator: 'Reed Cycle',
                description: '(Smith Sweatshirt & Dakine Bage)'
            },
            {
                link: 'https://static.wixstatic.com/media/a44970_54f38368f2ff47af9246b49778c76499~mv2_d_4029_3021_s_4_2.jpg/v1/fill/w_211,h_158,al_c,q_80,usm_0.66_1.00_0.01/a44970_54f38368f2ff47af9246b49778c76499~mv2_d_4029_3021_s_4_2.webp',
                donator: 'Idaho Candy Company',
                description: '(24 Idaho Spud Bars)'
            },
            {
                link: 'https://static.wixstatic.com/media/a44970_a8eed31add7e419995034cd868029ac8~mv2.png/v1/fill/w_167,h_167,al_c,lg_1/a44970_a8eed31add7e419995034cd868029ac8~mv2.png',
                donator: 'Jack In The Box',
                description: '(50 Free Meals, raffled in 10 meal increments)'
            },
        ],
        pictures:[
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
        
    }
})


export default store