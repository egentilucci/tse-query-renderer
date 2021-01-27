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
import getData from '@/services/getLavData'

export default {
  name: 'Lav',
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
    this.data = (await getData.getData()).data
    this.recordset = this.data.recordset
    this.rows = this.data.rowsAffected[0]
    console.log(this.rows)

    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    this.timestamp = date + ' ' + time;
    //this.timestamp = Date.now()

    for(const property in this.recordset[0]) {
      this.headers.push({
        text: property,
        value: property,
      })
    }
  },
}
</script>
