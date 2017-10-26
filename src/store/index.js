import vue from 'vue'
// import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//inspireq.herokuapp.com/' : '//localhost:3000/';

vue.use(vuex)

var store = new vuex.Store({
    state: {
        
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