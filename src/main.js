import Vue from 'vue';
import App from './App.vue';

// new Vue({
//   el: '#app',
//   render: function(createElement) {
//     return createElement(App);
//   }
// });

new Vue({
  render: h => h(App)
}).$mount('#app');
