<template>
	<component :is="LayoutComponents[themeConfig.layout]" />
</template>

<script setup lang="ts" name="layout">
import { type Component } from "vue";
import { useAppStore } from "@/stores";
import LayoutVertical from "./LayoutVertical/index.vue";

const LayoutComponents: { [key: string]: Component } = {
	vertical: LayoutVertical,
};

const appStore = useAppStore();
const themeConfig = computed(() => appStore.themeConfig);
</script>

<style scoped lang="scss">
.layout {
	min-width: 760px;
}
</style>
