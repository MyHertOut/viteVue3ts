<template>
  <div class="login">
    <div class="login-Con" @click="login">
      
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
const login = ()=>{
  router.push({
    path: '/home'
  })
}
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.login {
  position: relative;
}
.login-Con {
  width: 400px;
  height: 400px;
  border-radius: 8px;
  background-image: linear-gradient(0deg, #6090d1, #3975c6);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
</style>

