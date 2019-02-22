// import isPromise from './utils/isPromise'
// import patchAction from './utils/patchAction'
// import patchModule from './utils/patchModule'

/**
 * @name vuexActionPatcher
 * @desc Patch the main state and all registered submodules
 * @param tools An { object | array } of tools to be added to the Vuex context
 */
export default function vuexActionPatcher (tools) {
    return store => {
        // Patch the original store
        console.log(store)
        // Augment the registerModule to add tools
        console.log(tools)
    }
}