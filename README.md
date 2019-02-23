# Vuex Action Patcher (Adding Tools to Your Context)
> Add tools to your Vuex action context

[![Build Status](https://travis-ci.org/alajfit/vuex-action-patcher.svg?branch=master)](https://travis-ci.org/alajfit/vuex-action-patcher)
[![codecov](https://codecov.io/gh/alajfit/vuex-action-patcher/branch/master/graph/badge.svg)](https://codecov.io/gh/alajfit/vuex-action-patcher)

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

```
npm install vuex-action-patcher --save
```