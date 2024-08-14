<script setup lang="ts">
import { PropType } from "vue";
import { Delete, Edit } from "@element-plus/icons-vue";
import { IUser } from "../../types/user";
import { useDialogStore } from "../../store/dialogsStore";
import { useUsersStore } from "../../store/userStore";

const dialogsStore = useDialogStore();
const userStore = useUsersStore();

const openDeleteDialog = (id: number | string) => {
  userStore.setDeleteUserId(id);
  return dialogsStore.toggleDeleteUserDialogOpen(true);
};

const openEditDialog = (user: IUser) => {
  userStore.setEditedUser(user);
  return dialogsStore.toggleEditUserDialogOpen(true);
};

defineProps({
  user: {
    type: Object as PropType<IUser>,
    required: true,
  },
});
</script>

<template>
  <el-card style="max-width: 480px" class="user-card">
    <template #header>
      <div class="user-card__header">
        <span>{{ user.name }}</span>
      </div>
    </template>
    <p>User Login: {{ user.login }}</p>
    <p>User Password: {{ user.password }}</p>
    <p>User Role: {{ user.role }}</p>
    <template #footer>
      <div class="user-card__btn">
        <el-button type="primary" :icon="Edit" @click="openEditDialog(user)" />
        <el-button type="primary" :icon="Delete" @click="openDeleteDialog(user.id)" />
      </div>
    </template>
  </el-card>
</template>

<style scoped lang="scss">
.user-card {
  max-width: 360px;
  min-width: 245px;
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
      flex: 1;
    }
  }
}
</style>
