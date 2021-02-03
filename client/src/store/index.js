import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timestamp: '',
    rows: 0,
    currentPath: '',
    getStordcData() {
      console.log('Service:', 'stordc')
      return Api().get('/')
    },
    getIntmovData() {
      console.log('Service:', 'intmov')
      return Api().get('/intmov')
    },
    getLavData() {
      console.log('Service:', 'lav')
      return Api().get('/lav')
    }
  },
  mutations: {
    updateTimestamp(state, timestamp) {
      state.timestamp = timestamp
    },
    updateRowsCount(state, rows) {
      state.rows = rows
    },
    updateCurrentPath(state, currentPath) {
      state.currentPath = currentPath
    }
  },
  actions: {
  },
  modules: {
  }
})
