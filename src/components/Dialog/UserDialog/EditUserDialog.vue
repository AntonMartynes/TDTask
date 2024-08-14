<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { cloneDeep } from 'lodash';

import { useDialogStore } from "../../../store/dialogsStore";
import { useUsersStore } from "../../../store/userStore";

import { IUser, UserRole } from "../../../types/user";

const formLabelWidth = "140px";

const dialogStore = useDialogStore();
const userStore = useUsersStore();

const form = reactive<IUser>({
  name: "",
  login: "",
  password: "",
  role: "",
  id: "",
});

const isConfirmBtnDisable = computed(() => {
  return !form.name || !form.login || !form.password || !form.role || !form.id;
});

const resetForm = () => {
  Object.assign(form, {
    name: "",
    login: "",
    password: "",
    role: "",
    id: "",
  });
};

const handleEditeUser = () => {
  if (form.id) {
    userStore.editUser({ ...form }); // Используем клон объекта для изменения
  } else {
    userStore.addUser({ ...form });
  }
  resetForm();
  dialogStore.toggleEditUserDialogOpen(false);
};

watch(
  () => userStore.getEditedUser,
  (newVal) => {
    if (newVal) {
      Object.assign(form, cloneDeep(newVal)); // Клонируем объект, чтобы избежать изменения оригинала
    } else {
      resetForm();
    }
  },
  { immediate: true }
);
</script>

<template>
  <el-dialog v-model="dialogStore.isEditUserDialogOpen" :title="`Edit ${form.name}`" width="360">
    <el-form :model="form">
      <el-form-item label="Name" :label-width="formLabelWidth" label-position="left">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Login" :label-width="formLabelWidth" label-position="left">
        <el-input v-model="form.login" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth" label-position="left">
        <el-input v-model="form.password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Role" :label-width="formLabelWidth" label-position="left">
        <el-select v-model="form.role" placeholder="Please select a role">
          <el-option :label="UserRole.User" :value="UserRole.User" />
          <el-option :label="UserRole.Admin" :value="UserRole.Admin" />
          <el-option :label="UserRole.Mentor" :value="UserRole.Mentor" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogStore.toggleEditUserDialogOpen(false)">Cancel</el-button>
        <el-button type="primary" :disabled="isConfirmBtnDisable" @click="handleEditeUser"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
