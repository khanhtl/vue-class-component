import { createRouter, createWebHistory } from 'vue-router'
import { registerRoute } from './register-route';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Main.vue')
    }
  ]
})
registerRoute(router);
export default router;
