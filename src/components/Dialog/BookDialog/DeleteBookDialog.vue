<script setup lang="ts">
import { useDialogStore } from "../../../store/dialogsStore";
import { useBookStore } from "../../../store/bookStore";

const dialogStore = useDialogStore();
const bookStore = useBookStore();

const deleteBook = () => {
  bookStore.deleteBook();
  return dialogStore.toggleDeleteBookDialogOpen(false);
};
</script>

<template>
  <el-dialog v-model="dialogStore.isDeleteBookDialogOpen" title="Delete book ?" width="360" center>
    <div class="dialog-footer">
      <el-button @click="dialogStore.toggleDeleteBookDialogOpen(false)">Cancel</el-button>
      <el-button type="danger" @click="deleteBook"> Delete </el-button>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
.dialog-footer {
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    flex: 1;
  }
}
</style>
