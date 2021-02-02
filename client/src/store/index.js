import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timestamp: '',
    rows: 0
  },
  mutations: {
    updateTimestamp(state, timestamp) {
      state.timestamp = timestamp
    },
    updateRowsCount(state, rows) {
      state.rows = rows
    }
  },
  actions: {
  },
  modules: {
  }
})
