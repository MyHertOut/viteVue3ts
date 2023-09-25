<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" placeholder="密码：123456" show-password
        autocomplete="new-password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
    <el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts" name="LoginForm">
import { Login } from "@/api/interface";
import { useAuthStore } from "@/stores";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import { ElForm, ElNotification } from "element-plus";
import { HOME_URL } from "@/config/config";

const router = useRouter();
const authStore = useAuthStore();

// 定义 formRef（校验规则
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const loading = ref(false);
const loginForm = reactive<Login.ReqLoginForm>({ username: "admin", password: "123456" });

const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      authStore.setToken('defaultToken');
      authStore.setweChatUserInfo({
        userId: "302855"
      });
      router.push(HOME_URL);
      ElNotification({
        title: '管理员',
        message: "欢迎登录 Mars-Admin",
        type: "success",
        duration: 3000
      });
    } finally {
      loading.value = false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
