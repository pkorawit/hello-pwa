import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import router from './router'

// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFnCWc98xP8yaArmbGbtk0TC1PjqS92TQ",
  authDomain: "fir-44bed.firebaseapp.com",
  projectId: "fir-44bed",
  storageBucket: "fir-44bed.appspot.com",
  messagingSenderId: "568653984643",
  appId: "1:568653984643:web:0f8e71af306413dba03cb6",
  measurementId: "G-1PE8LL2TD6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
Vue.prototype.$firebase = firebase;
Vue.prototype.$db = db;
Vue.prototype.$auth = auth;
console.log("Firebase initialized ... done");

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
