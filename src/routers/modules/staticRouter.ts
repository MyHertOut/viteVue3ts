import { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL } from "@/config/config";

/**
 * staticRouter(静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: HOME_URL
	},
	{
		path: LOGIN_URL,
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "登录"
		}
	},
	{
		path: "/layout",
		name: "layout",
		component: () => import("@/layouts/index.vue"),
		redirect: HOME_URL,
		children: [
			{
				path: "/home",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					icon: "HomeFilled",
					isAffix: true,
					isFull: false,
					isHide: false,
					isKeepAlive: true,
					isLink: "",
					title: "首页",
				},
			},
			{
				path: "/learn",
				name: "learn",
				component: () => import("@/views/learn/index.vue"),
				meta: {
					icon: "HomeFilled",
					isAffix: true,
					isFull: false,
					isHide: false,
					isKeepAlive: true,
					isLink: "",
					title: "学习",
				},
			},
		]
	},

];

/**
 * errorRouter(错误页面路由)
 */
export const errorRouter = [
	{
		path: "/403",
		name: "403",
		component: () => import("@/components/ErrorMessage/403.vue"),
		meta: {
			title: "403页面"
		}
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/components/ErrorMessage/404.vue"),
		meta: {
			title: "404页面"
		}
	},
	{
		path: "/500",
		name: "500",
		component: () => import("@/components/ErrorMessage/500.vue"),
		meta: {
			title: "500页面"
		}
	}
];

/**
 * notFoundRouter(找不到路由)
 */
export const notFoundRouter = {
	path: "/:pathMatch(.*)*",
	name: "notFound",
	redirect: { name: "404" }
};
