import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

import "@/assets/css/style.css";


createApp(App).use(createPinia()).use(router).mount('#app')
