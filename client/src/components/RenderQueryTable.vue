<template>
  <div>

    <v-data-table fixed-header height='800px'
      class="elevation-1"
      :headers="headers"
      :items="recordset"
      :items-per-page="-1"
      :search='search'
      :custom-filter='filter'
    >
     <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
          clearable
          append-outer-icon="mdi-database-search"
        ></v-text-field>
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
  },
  data () {
    return {
      search: '',
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
  created() {
    this.selectedHeaders = this.headers
  }
}
</script>

<style scoped>
</style>
