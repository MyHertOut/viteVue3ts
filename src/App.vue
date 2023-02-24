<template>
  <div id="app">
    <el-config-provider :locale="i18nLocale">
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path"></component>
      </router-view>
    </el-config-provider>
  </div>
</template>


<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';
import { languageStore } from '@/stores/language';
import { getBrowserLang } from "@/utils/util";

const language = languageStore();
// element 语言配置
const i18nLocale = computed(() => {
	if (language.language && language.language == "zh") return zhCn;
	if (language.language == "en") return en;
	return getBrowserLang() == "zh" ? zhCn : en;
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
