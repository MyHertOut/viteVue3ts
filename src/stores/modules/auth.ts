import { defineStore } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";
import { AuthStore } from "../interface";


export const useAuthStore = defineStore({
	id: "AuthStore",
	state: (): AuthStore => ({
		token: "",
		weChatUserInfo: "",
	}),
	getters: {},
	actions: {
		setToken(token: string) {
			this.token = token;
		},
		setweChatUserInfo(weChatUserInfo: any) {
			this.weChatUserInfo = weChatUserInfo;
		},
	},
	persist: piniaPersistConfig("AuthStore")
});