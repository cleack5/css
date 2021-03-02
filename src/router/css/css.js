import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../../views/css/Home.vue';

const routes = [
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
    component: () =>
      import(/* webpackChunkName: "about" */ '../../views/css/About.vue'),
  },
  {
    path: '/clearFloat',
    name: 'clearFloat',
    component: () =>
      import(
        /* webpackChunkName: "clearFloat" */ '../../views/css/clearFloat.vue'
      ),
  },

  {
    path: '/tab',
    name: 'tab',
    component: () =>
      import(/* webpackChunkName: "clearFloat" */ '../../views/css/tab.vue'),
  },

  {
    path: '/grid',
    name: 'grid',
    component: () =>
      import(/* webpackChunkName: "clearFloat" */ '../../views/css/grid.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
