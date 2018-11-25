import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        location: ''
    },
    getters: {
        getLocation(state) {
            return state.location
        }
    },
    mutations: {
        updateLocation(state, location) {
            // State and local storage update
            state.location = location
            localStorage.setItem('location', location)
        },
        updateStateLocation(state, location) {
            // State only update
            state.location = location;
        }
    },
    actions: {
        setLocation({commit}, location) {
            commit("updateLocation", location)
        },
        loadLocation({commit}) {
            const location = localStorage.getItem('location')
            if (location === null) {
                return
            }
            commit("updateStateLocation", location)
        }
    }
})