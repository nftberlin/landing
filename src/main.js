import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './themes/style.scss'
import './themes/resp.scss'
import './fonts/stylesheet.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import MarqueeText from 'vue-marquee-text-component'



Vue.component('marquee-text', MarqueeText)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper,

new Vue({
  router,
  render: h => h(App)
}).$mount('#app'))
