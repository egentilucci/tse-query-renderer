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
//import getData from '@/services/getIntmovData'

export default {
  name: 'Intmov',
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
    this.data = (await this.$store.state.getIntmovData()).data
    this.recordset = JSON.parse(JSON.stringify(this.data.recordset).replace(/T00:00:00.000Z/g,''))
    this.rows = this.data.rowsAffected[0]
    
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    this.timestamp = date + ' ' + time;

    this.$store.commit('updateTimestamp', this.timestamp)
    this.$store.commit('updateRowsCount', this.rows)

    console.log("View: intmov", this.rows, this.timestamp)

    for(const property in this.recordset[0]) {
      this.headers.push({
        text: property,
        value: property,
      })
    }
  },
}
</script>
