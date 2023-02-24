<!-- 纵向布局 -->
<template>
  <el-container class="layout">
    <el-aside>
      <div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="logo flx-center">
          <img src="@/assets/images/logo.svg" alt="logo" />
          <span v-show="!isCollapse">Geeker Admin</span>
        </div>
        <el-scrollbar>
          <el-menu
            :default-active="activeMenu"
            :router="false"
            :collapse="isCollapse"
            :collapse-transition="false"
            :unique-opened="true"
            background-color="#191a20"
            text-color="#bdbdc0"
            active-text-color="#ffffff"
          >
            <SubMenu :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
			<Main />
		</el-container>
  </el-container>
</template>

<script setup lang="ts" name="layoutVertical">
import { GlobalStore } from "@/stores";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";
import Main from "@/layouts/components/Main/index.vue";

const route = useRoute();
const globalStore = GlobalStore();
const activeMenu = computed(() =>
  route.meta.activeMenu ? route.meta.activeMenu : route.path
);
console.log('activeMenu', activeMenu)
const menuList = computed(() => [
  {
    component: "/home/index",
    meta: {
      icon: "HomeFilled",
      isAffix: true,
      isFull: false,
      isHide: false,
      isKeepAlive: true,
      isLink: "",
      title: "首页",
    },
    name: "home",
    path: "/home/index",
  },
]);
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

<style lang="scss">
.vertical {
  .el-menu,
  .el-menu--popup {
    .el-menu-item {
      &.is-active {
        background: #060708;
        &::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          content: "";
          background: var(--el-color-primary);
        }
      }
    }
  }
}
</style>
