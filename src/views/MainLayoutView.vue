<template>
  <v-app>
    <AppBar />

    <v-main class="pa-3">
      <router-view></router-view>
      <v-fab-transition>
        <v-btn v-show="true" color="pink mb-14" to="/addnew" fab dark small fixed right bottom>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-main>

    <ButtomNavigation />
  </v-app>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import ButtomNavigation from "../components/ButtomNavigation.vue";

export default {
  name: "MainLayout",

  components: {
    ButtomNavigation,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>