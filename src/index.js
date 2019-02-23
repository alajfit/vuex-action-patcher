import utils from './utils'

/**
 * @name vuexActionPatcher
 * @desc Patch the main state and all registered submodules
 * @param tools An { object } of tools to be added to the Vuex context
 */
export default function vuexActionPatcher (Vuex, tools = {}) {
    return store => {
        // Taking a copy of the original registerModule function
        const copyRegisterModule = Vuex.Store.prototype.registerModule

        // Patch the Core Module
        utils.patchModule({
            store,
            path: [],
            module: store._modules.root,
            tools
        })

        // Patch Modules registered later
        Vuex.Store.prototype.registerModule = function registerModule (path, rawModule) {
            copyRegisterModule.call(this, path, rawModule)
            utils.patchModule({
                store: this,
                path: [].concat(path),
                module: this._modules.get([path]),
                tools
            })
        }
    }
}
