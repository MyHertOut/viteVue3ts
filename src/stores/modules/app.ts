import { defineStore } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";
import { AppStore, Language } from '../interface'

export const useAppStore = defineStore({
	id: "AppStore",
	state: (): AppStore => ({
		language: "zh-CN",
		themeConfig: {
			layout: "vertical",
			isCollapse: false,
			breadcrumb: true,
			breadcrumbIcon: true,
			tabs: true,
			tabsIcon: true,
			footer: true
		}
	}),
	getters: {},
	actions: {
		updateLanguage(language: Language) {
			this.language = language;
		},
	},
	persist: piniaPersistConfig("AppStore")
});
