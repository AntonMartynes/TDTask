<script setup lang="ts">
import { useDialogStore } from "../../../store/dialogsStore";
import { computed, reactive, watch } from "vue";
import { IUser, UserRole } from "../../../types/user";
import { useUsersStore } from "../../../store/userStore";

const dialogStore = useDialogStore();
const userStore = useUsersStore();

const form = reactive<IUser>({
  name: "",
  login: "",
  password: "",
  role: "",
  id: "",
});

const formLabelWidth = "140px";

const isConfirmBtnDisable = computed(() => {
  return !form.name || !form.login || !form.password || !form.role || !form.id;
});

const handleEditeUser = () => {
  userStore.editUser(form);
  return dialogStore.toggleEditUserDialogOpen(false);
};

watch(
  () => userStore.getEditedUser,
  (newVal) => {
    console.log(newVal);
    form.name = newVal.name;
    form.login = newVal.login;
    form.password = newVal.password;
    form.role = newVal.role;
    form.id = newVal.id;
  },
);
</script>

<template>
  <el-dialog v-model="dialogStore.isEditUserDialogOpen" title="Add new book" width="360">
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
