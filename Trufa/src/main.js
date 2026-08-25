import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index.js'

createApp(App).use(router).mount('#app') //sin use(router) la ruta existiria pero vue no lo tomaria en cuenta
