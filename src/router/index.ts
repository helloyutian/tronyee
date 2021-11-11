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
    meta: {
      title: '首页 - 创亿实业'
    }
  },
  {
    path: '/about/:type?',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于创亿'
    }
  },
  {
    path: '/product/:type?',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    meta: {
      title: '产品中心'
    }
  },
  {
    path: '/product/:type/:id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "productDetail" */ '../views/ProductDetail.vue'),
    meta: {
      title: '产品详情'
    }
  },
  {
    path: '/download/:type?',
    name: 'Download',
    component: () => import(/* webpackChunkName: "download" */ '../views/Download.vue'),
    meta: {
      title: '资料下载'
    }
  },
  {
    path: '/news/:type?',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
    meta: {
      title: '行业动态'
    }
  },
  {
    path: '/news/:type/:id',
    name: 'NewsDetail',
    component: () => import(/* webpackChunkName: "newsDetail" */ '../views/NewsDetail.vue'),
    meta: {
      title: '行业动态详情'
    }
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import(/* webpackChunkName: "brand" */ '../views/Brand.vue'),
    meta: {
      title: '品牌专区'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue'),
    meta: {
      title: '错误页'
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
