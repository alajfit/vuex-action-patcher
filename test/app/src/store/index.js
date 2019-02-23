import Vuex from 'vuex'
import { name } from '../../../../package.json'
import vuexActionPatcher from '../../../../src'
import moment from 'moment'

const tools = vuexActionPatcher(Vuex, {moment})

export default function () {
    return new Vuex.Store({
        state: {
            name,
            lastTime: null
        },
        actions: {
            SETTIME ({ commit }) {
                console.log(commit)
            }
        },
        mutations: {

        },
        plugins: [tools]
    })
}
