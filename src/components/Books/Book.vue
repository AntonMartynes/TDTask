<script setup lang="ts">
import { computed, PropType } from "vue";

import { Delete, Edit } from "@element-plus/icons-vue";

import { useDialogStore } from "../../store/dialogsStore";
import { useBookStore } from "../../store/bookStore";

import { UserRole } from "../../types/user";
import { IBooks } from "../../types/books";


const userRole = localStorage.getItem("userRole");

const dialogsStore = useDialogStore();
const bookStore = useBookStore();

const isDeleteBtnDisable = computed(() => {
  if (userRole === UserRole.Admin) {
    return false;
  }

  if (userRole === UserRole.Mentor && props.book.created_by === UserRole.User) {
    return false;
  }

  return true;
});

const openDeleteDialog = (id: number | string) => {
  bookStore.setDeleteBookId(id);
  return dialogsStore.toggleDeleteBookDialogOpen(true);
};

const openEditDialog = (book: IBooks) => {
  bookStore.setEditedBookId(book);
  return dialogsStore.toggleEditBookDialogOpen(true);
};

const props = defineProps({
  book: {
    type: Object as PropType<IBooks>,
    required: true,
  },
});
</script>

<template>
  <el-card style="max-width: 480px" class="book-card">
    <template #header>
      <div class="book-card__header">
        <span>{{ book.title }}</span>
      </div>
    </template>
    <p>Description: {{ book.description }}</p>
    <p>Author: {{ book.author }}</p>
    <p>Year: {{ book.year }}</p>
    <template #footer>
      <div class="book-card__btn">
        <el-button :disabled="isDeleteBtnDisable" type="primary" :icon="Edit" @click="openEditDialog(book)" />
        <el-button :disabled="isDeleteBtnDisable" type="primary" :icon="Delete" @click="openDeleteDialog(book.id)" />
      </div>
    </template>
  </el-card>
</template>

<style scoped lang="scss">
.book-card {
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
