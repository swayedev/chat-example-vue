import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: import('../views/Home.vue') },
  { path: '/login', component: import('../views/Login.vue') },
  { path: '/chat', component: import('../views/Chat.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router