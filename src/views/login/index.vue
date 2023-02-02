<template>
  <div class="login-container flx-center">
    <canvas id="canvas"></canvas>
    <SwitchDark class="dark" />
    <div class="login-box">
      <div class="login-form">
        <div class="login-logo">
          <h2 class="logo-text">管理后台</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="login">
import { animation } from "@/utils/animation";
import LoginForm from "./components/LoginForm.vue";
const router = useRouter();
nextTick(() => {
  animation('canvas');
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

