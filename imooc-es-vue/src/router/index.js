import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import User from '../views/User.vue'
// import Upload from '../views/Upload.vue'
const Upload = () => import(/* webpackChunkName: 'upload' */ '../views/Upload.vue')

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
