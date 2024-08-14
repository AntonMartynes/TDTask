<script setup lang="ts">
import { computed, reactive } from "vue";
import { v4 as uuidv4 } from "uuid";

import { useDialogStore } from "../../../store/dialogsStore";
import { useBookStore } from "../../../store/bookStore";

const dialogStore = useDialogStore();
const bookStore = useBookStore();
const userRole = localStorage.getItem("userRole");

const form = reactive({
  title: "",
  author: "",
  description: "",
  year: "",
  created_by: userRole,
  id: uuidv4(),
});

const isConfirmBtnDisable = computed(() => {
  return !form.title || !form.author || !form.description || !form.year;
});

const addNewBook = () => {
  bookStore.addBook(form);
  dialogStore.toggleNewBookDialogOpen(false);
};

const formLabelWidth = "140px";
</script>

<template>
  <el-dialog v-model="dialogStore.isNewBookDialogOpen" title="Add new book" width="360">
    <el-form :model="form">
      <el-form-item label="Title" :label-width="formLabelWidth" label-position="left">
        <el-input v-model="form.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Author" :label-width="formLabelWidth" label-position="left">
        <el-input v-model="form.author" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Description" :label-width="formLabelWidth" label-position="left">
        <el-input v-model="form.description" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Year" :label-width="formLabelWidth" label-position="left">
        <el-input v-model="form.year" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogStore.toggleNewBookDialogOpen(false)">Cancel</el-button>
        <el-button type="primary" :disabled="isConfirmBtnDisable" @click="addNewBook"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
