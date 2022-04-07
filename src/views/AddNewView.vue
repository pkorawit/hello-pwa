<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="6">
        <h2>New Post</h2>
      </v-col>
      <v-col cols="6" align="right">
        <v-btn icon to="/"><v-icon large>mdi-close</v-icon></v-btn>
      </v-col>
      <v-col cols="12">
        <h3>Select a photo</h3>
      </v-col>
      <v-col cols="12" align="center">
        <v-img :src="photoUrl" @click="selectPhoto"> </v-img>
      </v-col>
      <v-col cols="12" class="mt-5">
        <v-text-field
          name="name"
          v-model="name"
          label="Name of property"
          id="id"
          hint="Ex. Townhome 2 floor in downtown"
          outlined
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          name="description"
          v-model="description"
          label="Description of property"
          hint="Ex. 250 sqrm. 3 bedroom 2 bathroom"
          id="id"
          outlined
        ></v-text-field>
      </v-col>
      <v-col align="center">
        <v-btn rounded large color="primary" @click="savePost">Save</v-btn>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <input type="file" ref="file" style="display: none" @change="uploadPhoto" />
  </v-container>
</template>

<script>
export default {
  name: "AddNew",
  data() {
    return {
      photoUrl:
        "https://firebasestorage.googleapis.com/v0/b/fir-44bed.appspot.com/o/photos%2Fpicture.png?alt=media&token=4f59144a-44a8-47c9-9188-e885f8d07ac0",
      name: "",
      description: "",
      overlay: false,
    };
  },
  methods: {
    selectPhoto() {
      this.$refs.file.click();
    },
    uploadPhoto() {
      this.overlay = true;
      const fileName = `${Math.floor(Date.now() / 1000)}.png`;
      const storageRef = this.$firebase.storage().ref("photos");
      const newFileRef = storageRef.child(fileName);
      newFileRef
        .put(this.$refs.file.files[0])
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");
          snapshot.ref
            .getDownloadURL()
            .then((url) => {
              this.photoUrl = url;
            })
            .catch((error) => {
              console.log(error);
              this.overlay = false;
            });
          this.overlay = false;
        })
        .catch((error) => {
          console.log(error);
          this.overlay = false;
        });
    },
    savePost() {
      const userId = this.$firebase.auth().currentUser.email;
      const newPost = {
        userId: userId,
        photoUrl: this.photoUrl,
        name: this.name,
        description: this.description,
      };
      console.log(newPost);
      this.$db
        .collection("posts")
        .add(newPost)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.$router.replace("/");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
  },
};
</script>

<style>
</style>