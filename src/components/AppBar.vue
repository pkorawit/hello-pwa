<template>
  <div>
    <v-app-bar color="indigo" dense dark>
      <v-app-bar-nav-icon><v-icon>mdi-home-city-outline</v-icon></v-app-bar-nav-icon> InstaHouse

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ attrs }">
          <v-btn icon v-bind="attrs" @click="signOut">
            <v-icon>mdi-logout-variant</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods: {
    signOut() {
      this.$firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/signin");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
