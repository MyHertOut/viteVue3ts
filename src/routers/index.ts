import { createRouter, createWebHistory } from "vue-router";
import { GlobalStore } from "@/stores";
import { LOGIN_URL } from "@/config/config";
import { staticRouter } from "@/routers/modules/staticRouter";

const router = createRouter({
	history: createWebHistory(),
	routes: [...staticRouter],
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * @description 路由拦截 beforeEach
 * */

router.beforeEach(async (to, from, next) => {
	const globalStore = GlobalStore();

	// 判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由并放行到登陆页
	if (to.path === LOGIN_URL) {
		if (globalStore.token) return next(from.fullPath);
		return next();
	}

	// 判断是否有 Token，没有重定向到 login
	if (!globalStore.token) return next({ path: LOGIN_URL, replace: true });

	// 正常访问页面
	next();
});

export default router;
