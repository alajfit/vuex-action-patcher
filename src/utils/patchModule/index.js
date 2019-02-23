import utils from '../index'

/**
 * @name patchModule
 * @description Used Initiate the patching of Actions and patching of sub modules
 * @param {*} param0
 */
export default function patchModule ({
    store,
    path,
    module,
    tools
}) {
    const namespace = store._modules.getNamespace(path)
    const local = module.context

    // Patch the current Actions context for this module
    module.forEachAction((action, key) => utils.patchAction({
        store,
        type: (namespace + key),
        handler: action,
        local,
        tools
    }))

    // Setup child modules for action patch
    module.forEachChild((child, key) => patchModule({
        store,
        path: path.concat(key),
        module: child,
        tools
    }))
}
