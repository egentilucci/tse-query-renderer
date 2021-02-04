import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/Api'
import Timestamp from '@/services/Timestamp.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sqlData: {
      recordset: [],
      headers: [],
      rows: 0,
      timestamp: ''
    },
  },
  mutations: {
    SAVE_SQL_DATA(state, sqlData) {
      // clear object before use
      state.sqlData.recordset = []
      state.sqlData.headers = []
      state.sqlData.rows = 0
      state.sqlData.timestamp = ''

      state.sqlData.recordset = JSON.parse(JSON.stringify(sqlData.recordset).replace(/T00:00:00.000Z/g, ''))
      state.sqlData.rows = sqlData.rowsAffected[0]
      for (const property in sqlData.recordset[0]) {
        state.sqlData.headers.push({
          text: property,
          value: property,
          align: 'start'
        })
      }
      state.sqlData.timestamp = Timestamp()
      console.log('VUEX -> updated sqlData ', state.sqlData.timestamp)
    }
  },
  actions: {
    loadStordcData({ commit }) {
      Api().get('/').then(result => {
        commit('SAVE_SQL_DATA', result.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    loadIntmovData({ commit }) {
      Api().get('/intmov').then(result => {
        commit('SAVE_SQL_DATA', result.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    loadLavData({ commit }) {
      Api().get('/lav').then(result => {
        commit('SAVE_SQL_DATA', result.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
  },
  modules: {
  }
})
