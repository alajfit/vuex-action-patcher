# Vuex Action Patcher (Adding Tools to Your Context)
[![Build Status](https://travis-ci.org/alajfit/vuex-action-patcher.svg?branch=master)](https://travis-ci.org/alajfit/vuex-action-patcher)
[![codecov](https://codecov.io/gh/alajfit/vuex-action-patcher/branch/master/graph/badge.svg)](https://codecov.io/gh/alajfit/vuex-action-patcher)
[![npm](https://img.shields.io/npm/v/vuex-action-patcher.svg) ![npm](https://img.shields.io/npm/dm/vuex-action-patcher.svg)](https://www.npmjs.com/package/vuex-action-patcher)

> Add tools to your Vuex action context

<p align="center">
    <img width="200" height="200" src="./docs/assets/vue.svg" />
    <img width="150" height="160" src="./docs/assets/action.png" />
</p>

## Motivation

I found making tools available to the Vuex action context could be handy for numerous reasons. The library is designed for you to pass the same toolset to all actions from within the context.

* add tools to all actions
* add tools to actions within registered modules
* keep consistent tooling across all actions

## Install

```bash
npm install vuex-action-patcher --save
```

## Usage

### Use in a Vue App
```js
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuexActionPatcher from 'vuex-action-patcher'
import { name } from '../package.json'
import moment from 'moment'

Vue.use(Vuex)

const tools = vuexActionPatcher(Vuex, { moment })

const store = new Vuex.Store({
  state: {
    name
  },
  actions: {
    getTime ({ moment }) {
      console.log(moment().calendar())
    }
  },
  plugins: [tools]
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```

### Use with Dynamic Modules
> main.js
```js
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuexActionPatcher from 'vuex-action-patcher'
import { name } from '../package.json'
import moment from 'moment'

Vue.use(Vuex)

const tools = vuexActionPatcher(Vuex, { moment })

const store = new Vuex.Store({
  plugins: [tools]
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```

> later.js
```js
store.registerModule('myModule', {
  state: {
    name: 'myModule'
  },
  actions: {
    getTime ({ moment }) {
      console.log(moment().calendar())
    }
  }
})
```

### Use in a Nuxt App
> Under `store/index.js`
```js
import Vuex from 'vuex'
import vuexActionPatcher from 'vuex-action-patcher'
import moment from 'moment'

const vuexActionPatch = vuexActionPatcher(Vuex, { moment })

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    actions: {
        getDate ({ moment }) {
            console.log(moment().calendar())
        }
    },
    plugins: [vuexActionPatch]
  })
}

export default createStore
```