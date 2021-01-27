<template>
  <div>
    <RenderQueryTable
      :headers="headers"
      :recordset="recordset"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RenderQueryTable from '../components/RenderQueryTable'
import getData from '@/services/getStordcData'

export default {
  name: 'Stordc',
  components: {
    RenderQueryTable
  },
  data () {
    return {
      headers: [],
      recordset: [],
      rows: '',
    }
  },
  async created() {
    this.recordset = (await getData.getData()).data.recordset
    console.log(this.recordset)

    for(const property in this.recordset[0]) {
      this.headers.push({
        text: property,
        value: property,
      })
    }
  },
}
</script>
