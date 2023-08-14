import { createApp } from 'vue'
import { createPinia } from 'pinia'
import routes from './router'
import App from './App.vue'
import './style.css'

const pinia = createPinia()

const app=createApp(App)
app.use(pinia)
app.use(routes)
app.mount('#app')
