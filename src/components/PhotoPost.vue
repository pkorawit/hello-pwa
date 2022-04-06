<template>
  <v-card class="mx-auto">
    <v-card-title>
      <v-icon left> mdi-instagram </v-icon>
      <span class="text-h6 font-weight-light">{{ data.detail.userid }}</span>
    </v-card-title>
    <v-img :src="data.detail.photoUrl" height="200px"></v-img>

    <v-card-title>
      {{ data.detail.description }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data: () => ({}),
};
</script>

<style>
</style>