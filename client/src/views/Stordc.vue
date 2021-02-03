<template>
  <div>
    <RenderQueryTable
      :headers="headers"
      :recordset="recordset"
      :rows="rows"
      :timestamp="timestamp"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RenderQueryTable from '../components/RenderQueryTable'
import Timestamp from '../services/Timestamp'

export default {
  name: 'Stordc',
  components: {
    RenderQueryTable
  },
  data () {
    return {
      data: [],
      headers: [],
      recordset: [],
      rows: 0,
      timestamp: '',
    }
  },
  async mounted() {
    this.data = (await this.$store.state.getStordcData()).data
    this.recordset = JSON.parse(JSON.stringify(this.data.recordset).replace(/T00:00:00.000Z/g,''))
    this.rows = this.data.rowsAffected[0]

    this.timestamp = Timestamp()

    this.$store.commit('updateTimestamp', this.timestamp)
    this.$store.commit('updateRowsCount', this.rows)
    this.$store.commit('updateCurrentPath', 0)

    console.log(this.$route.path)

    console.log("View: stordc", this.rows, this.timestamp)

    for(const property in this.recordset[0]) {
      this.headers.push({
        text: property,
        value: property,
      })
    }
  },
}
</script>
