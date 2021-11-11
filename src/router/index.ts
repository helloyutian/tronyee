import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Error from '../views/Error.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about/:type?',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/product/:type?',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
  },
  {
    path: '/product/:type/:id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "productDetail" */ '../views/ProductDetail.vue'),
  },
  {
    path: '/download/:type?',
    name: 'Download',
    component: () => import(/* webpackChunkName: "download" */ '../views/Download.vue'),
  },
  {
    path: '/news/:type?',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
  },
  {
    path: '/news/:type/:id',
    name: 'NewsDetail',
    component: () => import(/* webpackChunkName: "newsDetail" */ '../views/NewsDetail.vue'),
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import(/* webpackChunkName: "brand" */ '../views/Brand.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
