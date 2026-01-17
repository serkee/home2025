import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // 이 줄이 파일 경로와 일치해야 합니다.

const app = createApp(App)
app.use(router)
app.mount('#app')