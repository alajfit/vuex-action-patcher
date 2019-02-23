import utils from '../index'

export default function patchAction ({
    store,
    type,
    handler,
    local,
    tools
}) {
    const entry = store._actions[type] || (store._actions[type] = [])

    if (entry.length > 0) entry.pop()

    entry.push((payload, cb) => {
        let context = Object.assign({
            dispatch: local.dispatch,
            commit: local.commit,
            getters: local.getters,
            state: local.state,
            rootGetters: store.getters,
            rootState: store.state
        }, tools)
        let res = handler(context, payload, cb)

        if (!utils.isPromise(res)) res = Promise.resolve(res)
        return store._devtoolHook
            ? res.catch(err => {
                store._devtoolHook.emit('vuex:error', err)
                throw err
            })
            : res
    })
}
