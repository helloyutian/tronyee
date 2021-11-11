import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Float from '@/components/Float.vue';
// import Links from '@/components/Links.vue';
import MenuBanner from '@/components/MenuBanner.vue';
import { Pagination } from 'element-ui';
import '@/assets/font/iconfont.css';
import 'swiper/dist/css/swiper.css';
import '@/utils/requestAnimationFrame'
import { dateFormate, getRouteItemName } from '@/utils'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper)

// 注册全局组件
Vue.component('v-header', Header);
Vue.component('v-footer', Footer);
Vue.component('v-float', Float);
// Vue.component('v-links', Links);
Vue.component('menu-banner', MenuBanner);
Vue.component(Pagination.name, Pagination);
// 定义全局方法
Vue.prototype.$getRouteItemName = getRouteItemName
Vue.prototype.$dateFormate = dateFormate

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
