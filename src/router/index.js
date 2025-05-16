import { createRouter, createWebHistory } from 'vue-router';
  import HomePage from '../views/HomePage.vue';
  import ServicesPage from '../views/ServicesPage.vue';
  import PortfolioPage from '../views/PortfolioPage.vue';
  import ContactPage from '../views/ContactPage.vue';

  const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/services', name: 'Services', component: ServicesPage },
    { path: '/portfolio', name: 'Portfolio', component: PortfolioPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  export default router;