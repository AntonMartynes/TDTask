<script setup lang="ts">
import User from "./User.vue";
import { useDialogStore } from "../../store/dialogsStore";

import AddUserDialog from "../Dialog/UserDialog/AddUserDialog.vue";
import DeleteUserDialog from "../Dialog/UserDialog/DeleteUserDialog.vue";
import { useUsersStore } from "../../store/userStore";
import EditUserDialog from "../Dialog/UserDialog/EditUserDialog.vue";

const userStore = useUsersStore();
const dialogStore = useDialogStore();

const users = userStore.getUsers;
</script>

<template>
  <div class="user">
    <div class="user__header">
      <h2>Users</h2>
      <AddUserDialog />
      <el-button type="primary" @click="dialogStore.toggleNewUserDialogOpen(true)">Add new User</el-button>
    </div>
    <el-divider class="user__divider" />
    <div class="user__content">
      <div v-for="user in users" :key="user.id">
        <User :user="user" />
      </div>
    </div>
    <DeleteUserDialog />
    <EditUserDialog />
  </div>
</template>

<style scoped lang="scss">
.user {
  margin: 0 20px;
  flex: 1;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;

    flex-wrap: wrap;
  }

  &__divider {
    margin-top: 0;
  }
}
</style>
