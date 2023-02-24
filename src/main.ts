import { createApp } from 'vue'
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";

import App from './App.vue'
import routers from './routers/index'
import vantDefault from './vant/vant'


import './style.css'

// element icons
import * as Icons from "@element-plus/icons-vue";

// pinia store
import pinia from "@/stores/index";


const app = createApp(App);


// 全局注册Vant组件
for (const [key, value] of Object.entries(vantDefault)) {
    app.use(value)
}

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(routers).use(pinia).mount('#app')
