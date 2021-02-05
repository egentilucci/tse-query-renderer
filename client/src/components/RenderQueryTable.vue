<template>
  <v-card class='pa-2'>
    <v-data-table
      fixed-header
      height='100%'
      class='elevation-1'
      :headers='headers'
      :items='recordset'
      :items-per-page='15'
      :search='search'
      :custom-filter='filter'
      multi-sort
    >
     <template v-slot:top>
        <v-card-title>
          <v-text-field
            v-model='search'
            label='Search'
            class='mx-4'
            clearable
            append-icon='mdi-magnify'
            single-line
            hide-details
          >
          </v-text-field>
        </v-card-title>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'Stordc',
  props: {
    title: String,
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
