<template>
  <div>
    <v-row v-for="post in posts" :key="post.id">
      <v-col>
        <Post :data="post" />
      </v-col>
    </v-row>   
  </div>
</template>

<script>

import Post from "../components/PhotoPost.vue";
export default {
  name: "HomeView",
  components: {
    Post,
  },

  mounted() {
    this.$db.collection("post")      
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          const post = {
            id: doc.id,
            detail:  doc.data()
          }
          this.posts.push(post);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },

  data: () => ({
    posts: []
  }),
};
</script>
