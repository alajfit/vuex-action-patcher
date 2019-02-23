import Vuex from 'vuex'
import { name } from '../../../../package.json'
import vuexActionPatcher from '../../../../src'
import moment from 'moment'

const tools = vuexActionPatcher(Vuex, {moment})

export default function () {
    return new Vuex.Store({
        state: {
            name,
            timeSinceStartOfDay: null
        },
        actions: {
            setTime ({ commit, moment }) {
                const timeSSOD = moment().startOf('day').fromNow()
                commit('setTime', timeSSOD)
            }
        },
        mutations: {
            setTime (state, payload) {
                state.timeSinceStartOfDay = payload
            }
        },
        plugins: [tools]
    })
}
