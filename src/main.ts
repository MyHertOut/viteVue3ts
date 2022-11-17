import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import vantDefault from './vant/vant'
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia()

// 全局注册Vant组件
for (const [key, value] of Object.entries(vantDefault)) {
    app.use(value)
}

app.use(pinia)
app.use(router)
app.mount('#app')
