<template>
  <div>
    Aggiornato il: {{ timestamp }} / {{ rows }} elementi caricati
    <v-data-table fixed-header height='800px'
      class="elevation-1"
      :headers="headers"
      :items="recordset"
      :items-per-page="15"
      :search='search'
      :custom-filter='filter'
      multi-sort
    >
     <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
          clearable
          append-icon="mdi-magnify"
          single-line
        >
        </v-text-field>
      </template>
    </v-data-table>

  </div>
</template>

<script>
export default {
  name: 'Stordc',
  props: {
    headers: Array,
    recordset: Array,
    rows: Number,
    timestamp: String,
  },
  data () {
    return {
      search: '',
      selected: [],
    }
  },
  methods: {
    filter (value, search) {
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLowerCase().indexOf(search) !== -1
    }
  },
  mounted() {
    this.selectedHeaders = this.headers
  }
}
</script>

<style scoped>
</style>
