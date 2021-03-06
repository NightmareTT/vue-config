import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  // 预渲染配置
  mounted(){
    document.dispatchEvent(new Event('render-event'))
  }

}).$mount("#app");
