import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BreedsInformation from '../views/BreedsInformation.vue'
import SearchImages from '../views/SearchImages.vue'
import YourFavourite from '../views/YourFavourite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: Home,
    component: Home
  },
  {
    path: '/about',
    name: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/breedsInformation',
    name: BreedsInformation,
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BreedsInformation.vue')
    }
  },
  {
    path: '/searchImages',
    name: SearchImages,
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SearchImages.vue')
    }
  },
  {
    path: '/yourFavourite',
    name: YourFavourite,
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/YourFavourite.vue')
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
