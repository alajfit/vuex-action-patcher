import Vuex from 'vuex'
import { name } from '../../../../package.json'

export default function () {
    return new Vuex.Store({
        state: {
            name
        }
    })
}
