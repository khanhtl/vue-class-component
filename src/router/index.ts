import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Main.vue')
    },
    {
      path: '/products/:id',
      name: 'product-page',
      component: () => import('@/views/ProductPage.vue')
    },
    {
      path: '/cart',
      name: 'cart-page',
      component: () => import('@/views/Cart.vue')
    },
  ]
})

export default router
