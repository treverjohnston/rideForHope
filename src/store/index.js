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
                pic: 'statics/9.5.png'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/996049745',
                length: 22,
                pic: 'statics/22.png'
            },
            {
                url:'http://www.mapmyride.com/routes/view/1478990992',
                length: 31,
                pic: 'statics/31.png'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/1478877649',
                length: 50,
                pic: 'statics/50.png'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/981667107',
                length: 65,
                pic: 'statics/65.png'
            },
            {
                url: 'http://www.mapmyride.com/routes/view/1462908562',
                length: 100,
                pic: 'statics/100.png'
            }
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