import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/routers'
import { setupStore } from '@/stores'

import "@/styles/reset.scss";
import "@/styles/common.scss";
import './style.css'
import "uno.css";

import vantDefault from './vant/vant'
import * as Icons from "@element-plus/icons-vue";

async function setupApp() {
    const app = createApp(App)
    // 全局注册Vant组件
    for (const [key, value] of Object.entries(vantDefault)) {
        app.use(value)
    }
    // 注册element Icons组件
    Object.keys(Icons).forEach(key => {
        app.component(key, Icons[key as keyof typeof Icons]);
    });
    setupStore(app)
    await setupRouter(app)
    app.mount('#app')
}
setupApp()

