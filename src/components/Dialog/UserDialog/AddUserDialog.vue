<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { v4 as uuidv4 } from "uuid";

import { useDialogStore } from "../../../store/dialogsStore";
import { useUsersStore } from "../../../store/userStore";

import { UserRole } from "../../../types/user";

const dialogStore = useDialogStore();
const userStore = useUsersStore();

const form = reactive({
  name: "",
  login: "",
  password: "",
  role: "",
  id: uuidv4(),
});

const isConfirmBtnDisable = computed(() => {
  return !form.name || !form.login || !form.password || !form.role;
});

const addNewUser = () => {
  userStore.addUser(form);
  dialogStore.toggleNewUserDialogOpen(false);
};

const closeDialog = () => {
  dialogStore.toggleNewUserDialogOpen(false);
};

const clearForm = () => {
  form.name = "";
  form.login = "";
  form.password = "";
  form.role = "";
};

watch(
  () => dialogStore.isNewUserDialogOpen,
  () => {
    clearForm();
  },
);
const formLabelWidth = "140px";
</script>

<template>
  <el-dialog v-model="dialogStore.isNewUserDialogOpen" title="Add new user" width="360">
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
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" :disabled="isConfirmBtnDisable" @click="addNewUser"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
