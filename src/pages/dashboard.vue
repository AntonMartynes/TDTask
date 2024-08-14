<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore } from "../store/userStore";
import { IUser } from "../types/user";
import Header from "../components/TheHeader.vue";
import BooksList from "../components/Books/BooksList.vue";
import Footer from "../components/TheFooter.vue";

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
    <BooksList class="main" />
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
