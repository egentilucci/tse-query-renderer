<template>
  <div>
    <v-card flat outlined>
      <v-toolbar dense floating>
        <v-text-field
          v-model="searchValue"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          clearable
          label="Search"
        ></v-text-field>
      </v-toolbar>
    </v-card>
    <v-container>
      <v-row>
        <v-col :cols="6">
          <RenderQueryTable
            :headers="sqlStordcData.headers"
            :recordset="sqlStordcData.recordset"
            :timestamp="sqlStordcData.timestamp"
            :search="searchValue"
            :showSearch="false"
          />
        </v-col>
        <v-col :cols="6">
          <RenderQueryTable
            :headers="sqlIntmovData.headers"
            :recordset="sqlIntmovData.recordset"
            :timestamp="sqlIntmovData.timestamp"
            :search="searchValue"
            :showSearch="false"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import RenderQueryTable from "../components/RenderQueryTable";

export default {
  name: "SplitView",
  components: {
    RenderQueryTable,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    sqlStordcData() {
      return this.$store.state.sqlStordcData;
    },
    sqlIntmovData() {
      return this.$store.state.sqlIntmovData;
    },
  },
  created() {
    this.$store.dispatch("loadStordcData");
    this.$store.dispatch("loadIntmovData");
  },
};
</script>
