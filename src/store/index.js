import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation_types'

Vue.use(Vuex)

const state = {
    count: 0
}

const actions = {
    increment ({ commit }, playload) {
        commit( 'increment' )
    },
    decrement ({ commit }, playload) {
        commit( types.DECREMENT )
    }
}

const mutations = {
    'increment' (state, playload) {
        state.count += playload.step
    },
    [types.DECREMENT] (state, playload) {
        state.count -= playload
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})