import { createApp } from 'vue'
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";

import App from './App.vue'
import router from './router/index'
import vantDefault from './vant/vant'
import { createPinia } from 'pinia'

import './style.css'

// element icons
import * as Icons from "@element-plus/icons-vue";

const app = createApp(App);
const pinia = createPinia()

// 全局注册Vant组件
for (const [key, value] of Object.entries(vantDefault)) {
    app.use(value)
}

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(pinia)
app.use(router)
app.mount('#app')
