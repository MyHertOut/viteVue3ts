import { defineStore } from "pinia";
import { GlobalState } from "./interface";

export const languageStore = defineStore('language', {
    state: (): GlobalState => {
        return {
            language: 'zh'
        }
    }
})