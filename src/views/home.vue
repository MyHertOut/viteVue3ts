<template>
  <div class="home">
    <button @click="count++">{{ count }}</button>
    <button @click="jumpPage">笔记</button>
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="datetime"
        @change="change"
        placeholder="Select date and time"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="home">
import {} from "vue";
const count = ref(0);
const router = useRouter();
const value1 = ref("");
const jumpPage = () => {
  router.push({
    path: "/learn",
  });
};

const change = () => {
  console.log(value1.value);
};
</script>

