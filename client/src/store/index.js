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

    // SIT MP
    sqlSitMPData: {
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

    // BYSPRINT
    sqlBySprintData: {
      recordset: [],
      headers: [],
      rows: 0,
      timestamp: "",
    },

    // BYSMART
    sqlBySmartData: {
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

      console.log(state.sqlStordcData.recordset);

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

    // SIT MP
    SAVE_SITMP_DATA(state, sqlSitMPData) {
      // clear object before use
      state.sqlSitMPData.recordset = [];
      state.sqlSitMPData.headers = [];
      state.sqlSitMPData.rows = 0;
      state.sqlSitMPData.timestamp = "";

      state.sqlSitMPData.recordset = JSON.parse(
        JSON.stringify(sqlSitMPData.recordset).replace(/T00:00:00.000Z/g, "")
      );
      state.sqlSitMPData.rows = sqlSitMPData.rowsAffected[0];
      for (const property in sqlSitMPData.recordset[0]) {
        state.sqlSitMPData.headers.push({
          text: property,
          value: property,
          align: "start",
        });
      }
      state.sqlSitMPData.timestamp = Timestamp();
      console.log(
        "VUEX -> updated sqlSitMPData ",
        state.sqlSitMPData.timestamp
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

    // BYSPRINT
    SAVE_BYSPRINT_DATA(state, sqlBySprintData) {
      // clear object before use
      state.sqlBySprintData.recordset = [];
      state.sqlBySprintData.headers = [];
      state.sqlBySprintData.rows = 0;
      state.sqlBySprintData.timestamp = "";

      state.sqlBySprintData.recordset = JSON.parse(
        JSON.stringify(sqlBySprintData.recordset).replace(/T00:00:00.000Z/g, "")
      );
      state.sqlBySprintData.rows = sqlBySprintData.rowsAffected[0];
      for (const property in sqlBySprintData.recordset[0]) {
        state.sqlBySprintData.headers.push({
          text: property,
          value: property,
          align: "start",
        });
      }

      state.sqlBySprintData.timestamp = Timestamp();
      console.log(
        "VUEX -> updated sqlBySprintData ",
        state.sqlBySprintData.timestamp
      );
    },

    // BYSMART
    SAVE_BYSMART_DATA(state, sqlBySmartData) {
      // clear object before use
      state.sqlBySmartData.recordset = [];
      state.sqlBySmartData.headers = [];
      state.sqlBySmartData.rows = 0;
      state.sqlBySmartData.timestamp = "";

      state.sqlBySmartData.recordset = JSON.parse(
        JSON.stringify(sqlBySmartData.recordset).replace(/.000Z/g, "")
      );
      state.sqlBySmartData.rows = sqlBySmartData.rowsAffected[0];
      for (const property in sqlBySmartData.recordset[0]) {
        state.sqlBySmartData.headers.push({
          text: property,
          value: property,
          align: "start",
        });
      }
      state.sqlBySmartData.timestamp = Timestamp();
      console.log(
        "VUEX -> updated sqlBySmartData ",
        state.sqlBySmartData.timestamp
      );
    },
  },

  actions: {
    loadStordcData({ commit }) {
      Api()
        .get("/")
        .then((result) => {
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

    loadSitMPData({ commit }) {
      Api()
        .get("/SitMP")
        .then((result) => {
          commit("SAVE_SITMP_DATA", result.data);
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

    loadBySprintData({ commit }) {
      Api()
        .get("/bysprint")
        .then((result) => {
          commit("SAVE_BYSPRINT_DATA", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },

    loadBySmartData({ commit }) {
      Api()
        .get("/bysmart")
        .then((result) => {
          commit("SAVE_BYSMART_DATA", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
  },
  modules: {},
});
