<template>
  <v-app>
    <v-app-bar app>

      <v-btn text outlined @contextmenu.prevent="" @click="reloadPage">
        LAMEP APP
      </v-btn>

      <router-link to='/'>
        <v-btn text @contextmenu.prevent="">
          Situazione Ordini Clienti
        </v-btn>
      </router-link>

      <router-link to='/intmov'>
        <v-btn text @contextmenu.prevent="">
          Interrogazione Movimenti
        </v-btn>
      </router-link>

      <router-link to='/lav'>
        <v-btn text @contextmenu.prevent="">
          Lavorazioni
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text outlined @contextmenu.prevent="" v-bind="attrs" v-on="on">
            {{ timestamp }}
          </v-btn>
        </template>
        <span>Loaded {{ rows }} rows</span>
      </v-tooltip>

      <v-btn text @contextmenu.prevent="" @click="snackbar = true">
        ABOUT
      </v-btn>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text centered v-bind="attrs" @click="snackbar = false" @contextmenu.prevent="">
            Close
          </v-btn>
        </template>
      </v-snackbar>

    </v-app-bar>

    <v-main>

      <router-view></router-view>

    </v-main>

  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data: () => ({
      snackbar: false,
      text: `Made with ❤ by LAMEP SNC`,
      timeout: 2000,
    }),
    computed: {
      timestamp() {
        return this.$store.state.timestamp
      },
      rows() {
        return this.$store.state.rows
      }
    },
    methods: {
      reloadPage() {
        window.location.reload()
      },
      updateTimestamp(value) {
        console.log('updateTimestamp', value)
      }
    },
    created() {
      this.$vuetify.theme.dark = true
    },
    watch: {
      $route: {
        immediate: true,
        handler(to) {
          document.title = to.meta.title || 'Some Default Title';
        }
      },
    }
  };

</script>

<style>
  a {
    text-decoration: none;
  }

</style>
