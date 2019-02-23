import utils from './utils'

/**
 * @name vuexActionPatcher
 * @desc Patch the main state and all registered submodules
 * @param tools An { object | array } of tools to be added to the Vuex context
 */
export default function vuexActionPatcher (Vuex, tools) {
    return store => {
        // Patch the original store
        utils.patchModule({
            store,
            path: [],
            module: store._modules.root,
            hot: null
        })
        // Augment the registerModule to add tools
        const orig = Vuex.Store.prototype.registerModule
        Vuex.Store.prototype.registerModule = function registerModule (path, rawModule) {
            orig.call(this, path, rawModule)
            utils.patchModule(this, [].concat(path), this._modules.get([path]))
        }
    }
}
