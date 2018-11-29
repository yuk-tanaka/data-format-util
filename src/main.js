import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMoment from 'vue-moment'
import AtUI from 'at-ui'
import 'at-ui-style'    // Import CSS

Vue.use(AtUI)
Vue.use(VueMoment)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
