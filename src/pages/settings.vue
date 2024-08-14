<script setup lang="ts">
import { ref } from "vue";

import { useUsersStore } from "../store/userStore";

import Header from "../components/TheHeader.vue";
import Footer from "../components/TheFooter.vue";
import UsersList from "../components/Users/UsersList.vue";

import { IUser } from "../types/user";

const userStore = useUsersStore();

const userId = localStorage.getItem("userId");

const user = ref<IUser>();

if (userId) {
  userStore.setSelectedUser(+userId);
  user.value = userStore.getSelectedUser();
}
</script>

<template>
  <div class="wrapper">
    <Header />
    <UsersList />
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.main {
  flex: 1;
}
</style>
