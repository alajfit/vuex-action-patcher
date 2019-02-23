import Vuex from 'vuex'
import { name } from '../../../../package.json'
import vuexActionPatcher from 'vuex-action-patcher'
import moment from 'moment'

const tools = vuexActionPatcher({moment})

export default function () {
    return new Vuex.Store({
        state: {
            name
        },
        plugins: [tools]
    })
}
