<template>
  <div>
    <RenderQueryTable
      :headers='sqlData.headers'
      :recordset='sqlData.recordset'
      :timestamp='sqlData.timestamp'
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RenderQueryTable from '../components/RenderQueryTable'

export default {
  name: 'Intmov',
  components: {
    RenderQueryTable
  },
  data() {
    return {
    }
  },
  computed: {
    sqlData() {
      return this.$store.state.sqlData
    }
  },
  created() {
    this.$store.dispatch('loadIntmovData')
  }
}
</script>
