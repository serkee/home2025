import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Lenis from 'lenis';
import './assets/css/main.css';

const app = createApp(App);
app.use(router);
app.mount('#app');

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);