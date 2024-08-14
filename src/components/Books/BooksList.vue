<script setup lang="ts">
import { computed, ref } from "vue";

import { useBookStore } from "../../store/bookStore";
import { useDialogStore } from "../../store/dialogsStore";

import { Search } from "@element-plus/icons-vue";

import Book from "./Book.vue";
import NewBookDialog from "../Dialog/BookDialog/AddBookDialog.vue";
import DeleteBookDialog from "../Dialog/BookDialog/DeleteBookDialog.vue";
import EditBookDialog from "../Dialog/BookDialog/EditBookDialog.vue";

const bookStore = useBookStore();
const dialogStore = useDialogStore();

const books = bookStore.books;
const filter = ref("");

const filteredBooks = computed(() => {
  if (!filter.value) {
    return books;
  }

  const filterText = filter.value.toLowerCase();

  return books.filter(
    (book) =>
      book.author.toLowerCase().includes(filterText) ||
      book.description.toLowerCase().includes(filterText) ||
      book.title.toLowerCase().includes(filterText) ||
      book.year.includes(filterText),
  );
});
</script>

<template>
  <div class="books">
    <div class="books__header">
      <h2>Books</h2>
      <div class="books__header__btns">
        <el-input v-model="filter" style="width: 240px" placeholder="Type something" :prefix-icon="Search" />
        <el-button type="primary" @click="dialogStore.toggleNewBookDialogOpen(true)">Add new Book</el-button>
      </div>
    </div>
    <el-divider class="books__divider" />
    <div class="books__content">
      <div v-for="book in filteredBooks" :key="book.id">
        <Book :book="book" />
      </div>
    </div>
    <NewBookDialog />
    <DeleteBookDialog />
    <EditBookDialog />
  </div>
</template>

<style scoped lang="scss">
.books {
  margin: 0 20px;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__btns {
      display: flex;
      gap: 16px;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;

    flex-wrap: wrap;
  }

  &__divider {
    margin-top: 0;
  }
}
</style>
