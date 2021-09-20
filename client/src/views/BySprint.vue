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
  name: "BySprint",
  components: {
    RenderQueryTable,
  },
  data() {
    return {};
  },
  computed: {
    sqlData() {
      return this.$store.state.sqlBySprintData;
    },
  },
  created() {
    this.$store.dispatch("loadBySprintData");
  },
};
</script>
