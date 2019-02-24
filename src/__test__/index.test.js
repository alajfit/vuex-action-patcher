import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import vuexActionPatcher from '../index'

process.env.HARU_DEV = true
process.env.VUE_ENV = 'server'

const MockComponent = { template: '<div></div>' }
const localVue = createLocalVue()

describe('Vuex Action Patcher', () => {

    describe('Setup Tests', () => {
        it('Expose a function to create a plugin', () => {
            expect(typeof vuexActionPatcher).toBe('function')
        })
    
        it('Should create a function when the constructor is called', () => {
            const vuexActionPatch = vuexActionPatcher(Vuex, { moment })
            expect(typeof vuexActionPatch).toBe('function')
        })
    
        it('It should fail gracefully when Vuex is not passed', () => {
            const vuexActionPatch = vuexActionPatcher({ moment })
            expect(typeof vuexActionPatch).toBe('function')
        })
    
        it('It should fail gracefully when no tools are passed', () => {
            const vuexActionPatch = vuexActionPatcher(Vuex)
            expect(typeof vuexActionPatch).toBe('function')
        })
    
        it('Created object should be passable to the Vuex plugins', () => {
            Vue.use(Vuex)
            const vuexActionPatch = vuexActionPatcher(Vuex, { moment })
            const store = new Vuex.Store({
                state: { name: 'test' },
                plugins: [vuexActionPatch]
            })
            expect(typeof store).toBe('object')
        })
    })

    describe('Mounted Test', () => {
        let comp
        localVue.use(Vuex)

        const vuexActionPatch = vuexActionPatcher(Vuex, { moment })
        const store = new Vuex.Store({
            state: { name: 'test', time: null },
            actions: { 
                time({ moment }) {
                    console.log(moment().startOf('day').fromNow())
                }
            },
            plugins: [vuexActionPatch]
        })

        beforeEach(() => {
            comp = shallowMount(MockComponent, {
                localVue,
                store
            })
        })

        it('When a properly constructed object is passed as a plugin it should expose the tools', () => {
            comp.vm['$store']._actions.time[0]()
            expect(global.console.log).toBeCalled()
        })

        it('Should expose tools on modules added later', () => {
            store.registerModule('other', {
                state: { name: 'other', time: null },
                actions: { 
                    otherTime({ moment }) {
                        console.log(moment().subtract(1, 'days').calendar())
                    }
                }
            })

            comp.vm['$store']._actions.otherTime[0]()
            expect(global.console.log).toBeCalled()
        })
    })
})
