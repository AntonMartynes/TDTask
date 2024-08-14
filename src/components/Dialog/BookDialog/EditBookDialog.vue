<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { cloneDeep } from 'lodash';

import { useDialogStore } from "../../../store/dialogsStore";
import { useBookStore } from "../../../store/bookStore";

import { IBooks } from "../../../types/books";

const dialogStore = useDialogStore();
const bookStore = useBookStore();

const form = reactive<IBooks>({
  title: "",
  author: "",
  description: "",
  year: "",
  created_by: "",
  id: "",
});

const resetForm = () => {
  Object.assign(form, {
    title: "",
    author: "",
    description: "",
    year: "",
    created_by: "",
    id: "",
  });
};

const formLabelWidth = "140px";

const isConfirmBtnDisable = computed(() => {
  return !form.title || !form.author || !form.description || !form.year || !form.created_by;
});

const handleEditeBook = () => {
  if (form.id) {
    bookStore.editBook({ ...form });
  } else {
    bookStore.addBook({ ...form });
  }
  resetForm();
  dialogStore.toggleEditBookDialogOpen(false);
};

watch(
  () => bookStore.getEditedBook,
  (newVal) => {
    if (newVal) {
      Object.assign(form, cloneDeep(newVal));
    } else {
      resetForm();
    }
  },
  { immediate: true }
);
</script>

<template>
  <el-dialog v-model="dialogStore.isEditBookDialogOpen" :title="`Edit ${form.title}`" width="360">
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
        <el-button @click="dialogStore.toggleEditBookDialogOpen(false)">Cancel</el-button>
        <el-button type="primary" :disabled="isConfirmBtnDisable" @click="handleEditeBook"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
