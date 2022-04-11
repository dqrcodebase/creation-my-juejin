import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/theme/index.css'
import './assets/style/init.less'
import './assets/style/common.less'
import "./util/directives/activeMenu";
import { setCookies, getCookies, delCookie, clearCookies, getLocalStorage, setLocalStorage,clearStorage } from './util/cookies.js'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$setCookies = setCookies
Vue.prototype.$getCookies = getCookies
Vue.prototype.$delCookie = delCookie
Vue.prototype.$clearCookies = clearCookies
Vue.prototype.$getLocalStorage = getLocalStorage
Vue.prototype.$setLocalStorage = setLocalStorage
Vue.prototype.$clearStorage = clearStorage




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
