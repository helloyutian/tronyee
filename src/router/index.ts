import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/production/:type?',
    name: 'Production',
    component: () => import(/* webpackChunkName: "production" */ '../views/About.vue'),
  },
  {
    path: '/download/:type?',
    name: 'Download',
    component: () => import(/* webpackChunkName: "download" */ '../views/Download.vue'),
  },
  {
    path: '/news/:type?',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/About.vue'),
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import(/* webpackChunkName: "brand" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
