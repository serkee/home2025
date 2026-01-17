import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectList from '../views/ProjectList.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/list/:category', 
    name: 'ProjectList',
    component: ProjectList, 
    props: true 
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/' 
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // 'routes: routes'의 축약형입니다.
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;