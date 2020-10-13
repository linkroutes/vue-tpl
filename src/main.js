import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import routerGo from './router/throttle.js'
Vue.config.productionTip = false

// vue-meta
import VueMeta from 'vue-meta';
Vue.use(VueMeta);

// axios
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000

const vp = Vue.prototype;
vp.$http = axios.create({
  headers: {
    // preset what you need
  }
})

// 已做节流处理
routerGo();

new Vue({
  router,
  store,
  metaInfo() {
    let metaInfo = this.$store.state.metaInfo;
    return {
      title: metaInfo.title,
      meta: [
        { name: "keywords", content: metaInfo.keywords },
        { name: "description", content: metaInfo.description },
        { itemprop: 'image', content: metaInfo.image },
        { itemprop: "name", content: metaInfo.name }
      ]
    }
  },
  render: h => h(App)
}).$mount('#app')
