<template>
  <div class="login">
    <div class="login-Con">
      <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">
        www.baidu.com
      </a>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { animation } from "@/utils/animation";
const router = useRouter();
nextTick(() => {
  animation();
});

const login = () => {
  router.push({
    path: "/home",
  });
};
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  position: relative;
  background: var(--el-bg-color);
  .login-Con {
    width: 400px;
    height: 400px;
    border-radius: 8px;
    // background: $background;
    background: var(--el-bg-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    color: $font-color-gray; // 这里引入
    a {
      color: var(--el-color-primary);
      text-decoration: none;
    }
  }
}
</style>

