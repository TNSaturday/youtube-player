// This is the entry point of the application - main.js is the special name

// This is the import of the Vue.js library itself
import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App)
}).$mount('#app');
