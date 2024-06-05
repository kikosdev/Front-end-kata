import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './layout/index.sass'
import 'vue3-carousel/dist/carousel.css'
import 'animate.css'

const app = createApp(App)

app.use(router).use(store).mount('#app')
