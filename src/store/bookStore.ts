import { defineStore } from "pinia";

import { computed, ref } from "vue";
import { IBooks } from "../types/books";

export const useBookStore = defineStore("books", () => {
  const books = ref<IBooks[]>([
    {
      title: "Super Book",
      author: "Jhon Doe",
      description: "Book 1 description",
      year: "1992",
      created_by: "default",
      id: 1,
    },
    {
      title: "Super Book 2",
      author: "Jhon Smith",
      description: "Book 2 description",
      year: "1292",
      created_by: "default",
      id: 2,
    },
    {
      title: "Super Book 3",
      author: "Smith Will",
      description: "Book 1 description",
      year: "1992",
      created_by: "default",
      id: 3,
    },
    {
      title: "Super Book 4",
      author: "Will Smith",
      description: "Book 4 description",
      year: "1932",
      created_by: "User",
      id: 4,
    },
    {
      title: "Super Book 5",
      author: "Jhon Will",
      description: "Book 5 description",
      year: "1992",
      created_by: "User",
      id: 5,
    },
  ]);

  const deleteBookId = ref();
  const editedBook = ref();

  const addBook = (book: IBooks) => {
    books.value.push(book);
  };

  const setDeleteBookId = (id: IBooks["id"]) => {
    deleteBookId.value = id;
  };

  const setEditedBookId = (book: IBooks) => {
    editedBook.value = book;
  };

  const editBook = (book: IBooks) => {
    const index = books.value.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      books.value[index] = book;
    } else {
      console.error(`Книга с ID ${book.id} не найдена.`);
    }
  };

  const deleteBook = () => {
    const index = books.value.findIndex((book) => book.id == deleteBookId.value);

    if (index !== -1) {
      books.value.splice(index, 1);
    }
  };

  const getEditedBook = computed(() => {
    return editedBook.value;
  });

  return { books, getEditedBook, addBook, deleteBook, editBook, setDeleteBookId, setEditedBookId };
});
