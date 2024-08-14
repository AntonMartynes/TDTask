<script setup lang="ts">
import { useDialogStore } from "../../../store/dialogsStore";
import { useBookStore } from "../../../store/bookStore";
import { computed, reactive, watch } from "vue";
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

const formLabelWidth = "140px";

const isConfirmBtnDisable = computed(() => {
  return !form.title || !form.author || !form.description || !form.year || !form.created_by;
});

const handleEditeBook = () => {
  bookStore.editBook(form);
  return dialogStore.toggleEditBookDialogOpen(false);
};

watch(
  () => bookStore.getEditedBook,
  (newVal) => {
    form.title = newVal.title;
    form.author = newVal.author;
    form.description = newVal.description;
    form.year = newVal.year;
    form.created_by = newVal.created_by;
    form.id = newVal.id;
  },
);
</script>

<template>
  <el-dialog v-model="dialogStore.isEditBookDialogOpen" title="Add new book" width="360">
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
