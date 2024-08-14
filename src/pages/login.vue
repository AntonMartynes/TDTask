<script setup lang="ts">
import { computed, ref } from "vue";
import { useUsersStore } from "../store/userStore";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";

const usersStore = useUsersStore();

const password = ref<string>("");
const login = ref<string>("");
const router = useRouter();

const findUser = () => {
  const user = usersStore.users.find((user) => user.login === login.value && user.password === password.value);
  if (!user) {
    return ElNotification({
      title: "Warning",
      message: "This is a warning message",
      type: "error",
    });
  }

  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userRole", user.role);
  localStorage.setItem("userId", String(user.id));

  ElNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });

  return router.push("/dashboard");
};

const isLogInBtnDisable = computed(() => {
  return password.value && login.value;
});
</script>

<template>
  <div class="wrapper">
    <el-card class="login-card">
      <template #header>
        <div class="card-header">
          <span>Log In</span>
        </div>
      </template>
      <div class="login__inputs">
        <el-input v-model="login" style="width: 240px" placeholder="Please input login" />
        <el-input
          v-model="password"
          style="width: 240px"
          type="password"
          placeholder="Please input password"
          show-password
        />
      </div>

      <template #footer>
        <el-button :disabled="!isLogInBtnDisable" type="primary" @click="findUser">LogIn</el-button>
      </template>
    </el-card>
  </div>
</template>

<style scoped>
.login-card {
  max-width: 360px;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>
