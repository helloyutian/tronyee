import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Links from '@/components/Links.vue';
import MenuBanner from '@/components/MenuBanner.vue';

Vue.config.productionTip = false;

// 注册全局组件
Vue.component('v-header', Header);
Vue.component('v-footer', Footer);
Vue.component('v-links', Links);
Vue.component('menu-banner', MenuBanner);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
