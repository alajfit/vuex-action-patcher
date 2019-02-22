import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import createStore from './store'

Vue.use(Vuex)

const store = createStore()

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
