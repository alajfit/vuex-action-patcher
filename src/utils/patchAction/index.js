import utils from '../index'

export default function patchAction ({
    store,
    type,
    handler,
    local
}) {
    const entry = store._actions[type] || (store._actions[type] = [])

    if (entry.length > 0) entry.pop()

    entry.push(function wrappedActionHandler (payload, cb) {
        let res = handler({
            dispatch: local.dispatch,
            commit: local.commit,
            getters: local.getters,
            state: local.state,
            rootGetters: store.getters,
            rootState: store.state
        }, payload, cb)

        if (!utils.isPromise(res)) res = Promise.resolve(res)
        if (store._devtoolHook) {
            return res.catch(err => {
                store._devtoolHook.emit('vuex:error', err)
                throw err
            })
        } else {
            return res
        }
    })
}
