import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router  from './plugins/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

 // if(window.navigator.userAgent.indexOf('Trident') > 0){
//   console.log('ie');
//   window.addEventListener('hashchange', () => {
//     console.log('hashchange', window.location.hash);
//     // let currentPath = window.location.hash.slice(1)
//     // if (this.$route.path !== currentPath) {
//     //     this.$router.push(currentPath);// 主动更改路由界面
//     // }
//   })
// }