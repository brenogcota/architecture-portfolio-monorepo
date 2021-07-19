import * as VueRouter from 'vue-router'

import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Post from './pages/Post.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog},
  { path: '/post/:id', component: Post}
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router