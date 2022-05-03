import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/js/bootstrap'
import "bootstrap/dist/css/bootstrap.css";

import "@/assets/css/style.css";


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
