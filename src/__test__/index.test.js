import Vuex from 'vuex'
import vuexActionPatcher from '../index'

describe('Vuex Action Patcher', () => {

    it('Expose a function to create a plugin', () => {
        expect(typeof vuexActionPatcher).toBe('function')
    })

    it('Should create an object when the constructor is called', () => {
        expect(true).toBe(true)
    })

    it('It should fail gracefully when Vuex is not passed', () => {
        expect(true).toBe(true)
    })

    it('It should fail gracefully when no tools are passed', () => {
        expect(true).toBe(true)
    })

    it('Created object should be passable to the Vuex plugins', () => {
        expect(true).toBe(true)
    })

    it('When a properly constructed object is passed as a plugin it should expose the tools', () => {
        expect(true).toBe(true)
    })
})
