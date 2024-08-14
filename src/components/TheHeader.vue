<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { UserRole } from "../types/user";
import { computed } from "vue";

const router = useRouter();
const route = useRoute();

const userRole = localStorage.getItem("userRole");
const handleLogOut = () => {
  localStorage.clear();
  router.replace("/");
};

const goToSettingsOrDashboard = () => {
  if (route.path === "/settings") {
    return router.push("/dashboard");
  }
  return router.push("/settings");
};

const getSettingsText = computed(() => {
  if (route.path === "/settings") {
    return "Dashboard";
  }
  return "Settings";
});
</script>

<template>
  <header class="header">
    <img class="header__logo" src="/fav.ico" alt="logo" />
    <div class="heaer__btns">
      <el-button v-if="userRole === UserRole.Admin" type="primary" @click="goToSettingsOrDashboard">{{
        getSettingsText
      }}</el-button>
      <el-button type="primary" @click="handleLogOut">Log Out</el-button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 48px;
  padding: 20px 40px;
  box-shadow: var(--el-box-shadow-light);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__logo {
    width: 32px;
    height: 32px;
  }
}
</style>
