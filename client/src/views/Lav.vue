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
  name: "Lav",
  components: {
    RenderQueryTable,
  },
  data() {
    return {};
  },
  computed: {
    sqlData() {
      return this.$store.state.sqlLavData;
    },
  },
  created() {
    this.$store.dispatch("loadLavData");
  },
};
</script>
