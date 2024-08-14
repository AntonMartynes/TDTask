<script setup lang="ts">
import { useDialogStore } from "../../../store/dialogsStore";
import { useUsersStore } from "../../../store/userStore";

const dialogStore = useDialogStore();
const userStore = useUsersStore();

const deleteUser = () => {
  userStore.deleteUser();
  return dialogStore.toggleDeleteUserDialogOpen(false);
};
</script>

<template>
  <el-dialog v-model="dialogStore.isDeleteUserDialogOpen" title="Delete User ?" width="360" center>
    <div class="dialog-footer">
      <el-button @click="dialogStore.toggleDeleteBookDialogOpen(false)">Cancel</el-button>
      <el-button type="danger" @click="deleteUser"> Delete </el-button>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
