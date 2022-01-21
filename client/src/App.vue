<template>
  <v-app>
    <v-app-bar app>
      <v-btn
        text
        outlined
        @contextmenu.prevent=""
        @click="forceReRenderComponent"
        class="mr-2"
      >
        LAMEP APP
      </v-btn>

      <v-spacer></v-spacer>

      <v-tabs exact background-color="transparent">
        <v-tab v-for="(item, idx) in tabItems" :key="idx" :to="item">
          {{ item.title }}
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn
        text
        outlined
        @contextmenu.prevent=""
        @click="forceReRenderComponent"
        class="mr-2"
      >
        <v-icon>mdi-cached</v-icon>
      </v-btn>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            outlined
            @contextmenu.prevent=""
            v-bind="attrs"
            v-on="on"
            @click="forceReRenderComponent"
          >
            {{ sqlData.timestamp }}
          </v-btn>
        </template>
        <span>Loaded STORDC {{ sqlData.rows }} rows</span>
      </v-tooltip>

      <v-btn text @contextmenu.prevent="" @click="snackbar = true">
        ABOUT
      </v-btn>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="red"
            text
            centered
            v-bind="attrs"
            @click="snackbar = false"
            @contextmenu.prevent=""
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-app-bar>

    <v-main>
      <router-view :key="componentKey"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      tabItems: [
        {
          title: "SITORDC",
          path: "/",
        },
        {
          title: "INTMOV",
          path: "/intmov",
        },
        {
          title: "SITMP",
          path: "/SitMP",
        },
        {
          title: "LAV",
          path: "/lav",
        },
        {
          title: "SPLITVIEW",
          path: "/splitview",
        },
        {
          title: "BySprint",
          path: "/bysprint",
        },
        {
          title: "BySmart",
          path: "/bysmart",
        },
      ],
      snackbar: false,
      text: `Made with ❤ by LAMEP SNC`,
      timeout: 2000,
      componentKey: 0,
      titleToggleSelector: 0,
    };
  },
  computed: {
    sqlData() {
      return this.$store.state.sqlStordcData;
    },
  },
  methods: {
    forceReRenderComponent() {
      console.log("re-rendering component...");
      this.componentKey += 1;
    },
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "LAMEP APP";
      },
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
