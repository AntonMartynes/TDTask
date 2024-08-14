import { defineStore } from "pinia";
import { ref } from "vue";

export const useDialogStore = defineStore("dialogs", () => {
  const isNewBookDialogOpen = ref(false);
  const isDeleteBookDialogOpen = ref(false);
  const isEditBookDialogOpen = ref(false);

  const isNewUserDialogOpen = ref(false);
  const isDeleteUserDialogOpen = ref(false);
  const isEditUserDialogOpen = ref(false);

  const toggleNewBookDialogOpen = (isOpen: boolean) => {
    isNewBookDialogOpen.value = isOpen;
  };

  const toggleDeleteBookDialogOpen = (isOpen: boolean) => {
    isDeleteBookDialogOpen.value = isOpen;
  };

  const toggleEditBookDialogOpen = (isOpen: boolean) => {
    isEditBookDialogOpen.value = isOpen;
  };

  const toggleNewUserDialogOpen = (isOpen: boolean) => {
    isNewUserDialogOpen.value = isOpen;
  };

  const toggleDeleteUserDialogOpen = (isOpen: boolean) => {
    isDeleteUserDialogOpen.value = isOpen;
  };

  const toggleEditUserDialogOpen = (isOpen: boolean) => {
    isEditUserDialogOpen.value = isOpen;
  };

  return {
    isNewBookDialogOpen,
    isDeleteBookDialogOpen,
    isEditBookDialogOpen,
    isNewUserDialogOpen,
    isDeleteUserDialogOpen,
    isEditUserDialogOpen,
    toggleNewBookDialogOpen,
    toggleDeleteBookDialogOpen,
    toggleEditBookDialogOpen,
    toggleNewUserDialogOpen,
    toggleDeleteUserDialogOpen,
    toggleEditUserDialogOpen,
  };
});
