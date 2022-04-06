<template>
  <v-bottom-navigation
      v-model="value"
      :input-value="active"
      color="indigo"
      fixed
    >
      <v-btn to="/">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
       <v-btn to="/about">
        <span>About</span>

        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
  export default {
    name: 'ButtomNavigation',  
    data () {
      return {
        value: 1,
        active: true,
      }
    },
  }
</script>

