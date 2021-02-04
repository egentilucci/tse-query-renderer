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
import RenderQueryTable from '../components/RenderQueryTable'

export default {
  name: 'Stordc',
  components: {
    RenderQueryTable
  },
  data() {
    return {
      polling: null
    }
  },
  computed: {
    sqlData() {
      return this.$store.state.sqlData
    }
  },
  methods: {
    pollData() {
      this.polling = setInterval(() => {
        this.$store.dispatch('loadStordcData')
      }, 3000)
    }
  },
  mounted() {
    this.$store.dispatch('loadStordcData')
  },
}
</script>
