import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/Api";
import Timestamp from "@/services/Timestamp.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // STORDC
    sqlStordcData: {
      recordset: [],
      headers: [],
      rows: 0,
      timestamp: "",
    },

    // INTMOV
    sqlIntmovData: {
      recordset: [],
      headers: [],
      rows: 0,
      timestamp: "",
    },

    // LAV
    sqlLavData: {
      recordset: [],
      headers: [],
      rows: 0,
      timestamp: "",
    },
  },
  mutations: {
    // STORDC
    SAVE_STORDC_DATA(state, sqlStordcData) {
      // clear object before use
      state.sqlStordcData.recordset = [];
      state.sqlStordcData.headers = [];
      state.sqlStordcData.rows = 0;
      state.sqlStordcData.timestamp = "";

      state.sqlStordcData.recordset = JSON.parse(
        JSON.stringify(sqlStordcData.recordset).replace(/T00:00:00.000Z/g, "")
      );
      state.sqlStordcData.rows = sqlStordcData.rowsAffected[0];
      for (const property in sqlStordcData.recordset[0]) {
        state.sqlStordcData.headers.push({
          text: property,
          value: property,
          align: "start",
        });
      }
      state.sqlStordcData.timestamp = Timestamp();
      console.log(
        "VUEX -> updated sqlStordcData ",
        state.sqlStordcData.timestamp
      );
    },

    // INTMOV
    SAVE_INTMOV_DATA(state, sqlIntmovData) {
      // clear object before use
      state.sqlIntmovData.recordset = [];
      state.sqlIntmovData.headers = [];
      state.sqlIntmovData.rows = 0;
      state.sqlIntmovData.timestamp = "";

      state.sqlIntmovData.recordset = JSON.parse(
        JSON.stringify(sqlIntmovData.recordset).replace(/T00:00:00.000Z/g, "")
      );
      state.sqlIntmovData.rows = sqlIntmovData.rowsAffected[0];
      for (const property in sqlIntmovData.recordset[0]) {
        state.sqlIntmovData.headers.push({
          text: property,
          value: property,
          align: "start",
        });
      }
      state.sqlIntmovData.timestamp = Timestamp();
      console.log(
        "VUEX -> updated sqlIntmovData ",
        state.sqlIntmovData.timestamp
      );
    },

    // LAV
    SAVE_LAV_DATA(state, sqlLavData) {
      // clear object before use
      state.sqlLavData.recordset = [];
      state.sqlLavData.headers = [];
      state.sqlLavData.rows = 0;
      state.sqlLavData.timestamp = "";

      state.sqlLavData.recordset = JSON.parse(
        JSON.stringify(sqlLavData.recordset).replace(/T00:00:00.000Z/g, "")
      );
      state.sqlLavData.rows = sqlLavData.rowsAffected[0];
      for (const property in sqlLavData.recordset[0]) {
        state.sqlLavData.headers.push({
          text: property,
          value: property,
          align: "start",
        });
      }
      state.sqlLavData.timestamp = Timestamp();
      console.log("VUEX -> updated sqlLavData ", state.sqlLavData.timestamp);
    },
  },
  actions: {
    loadStordcData({ commit }) {
      Api()
        .get("/")
        .then((result) => {
          console.log("getting STORDC data...");
          commit("SAVE_STORDC_DATA", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    loadIntmovData({ commit }) {
      Api()
        .get("/intmov")
        .then((result) => {
          commit("SAVE_INTMOV_DATA", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    loadLavData({ commit }) {
      Api()
        .get("/lav")
        .then((result) => {
          commit("SAVE_LAV_DATA", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
  },
  modules: {},
});
