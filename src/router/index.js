import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: { title: 'Home' },
      shell: { user: "guest", pro: "@test:~$ "},
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue'),
      meta: { title: 'Test Page' },
      shell: { user: "guest", pro: "@test:~/test$ "},
    }
  ],
})

export default router
