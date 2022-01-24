<template>
  <div>
    <RenderQueryTable
      :headers="sqlData.headers"
      :recordset="sqlData.recordset"
      :timestamp="sqlData.timestamp"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RenderQueryTable from "../components/RenderQueryTable";

export default {
  name: "Giacmag",
  components: {
    RenderQueryTable,
  },
  data() {
    return {};
  },
  computed: {
    sqlData() {
      return this.$store.state.sqlGiacmagData;
    },
  },
  created() {
    this.$store.dispatch("loadGiacmagData");
  },
};
</script>
