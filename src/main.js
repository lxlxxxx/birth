import Vue from 'vue'
import router from '@/router';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
