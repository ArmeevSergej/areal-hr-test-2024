import { createRouter, createWebHistory } from 'vue-router';

// Импортируем компоненты страниц
import Home from './components/Home.vue';
import Department from './components/Department.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/department',
    name: 'Department',
    component: Department,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
