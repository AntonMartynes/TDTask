import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { IUser } from "../types/user";

export const useUsersStore = defineStore("users", () => {
  const users = ref<IUser[]>([
    {
      name: "John Smith",
      login: "Smith",
      password: "123",
      role: "Admin",
      id: 1,
    },
    {
      name: "John Doe",
      login: "Doe",
      password: "123",
      role: "Mentor",
      id: 2,
    },
    {
      name: "Alice Parson",
      login: "Parson",
      password: "123",
      role: "User",
      id: 3,
    },
  ]);
  const selectedUser = ref<IUser>();
  const deleteUserId = ref();
  const editedUser = ref();

  const setSelectedUser = (userId: number) => {
    selectedUser.value = users.value.find((user) => user.id === userId);
  };

  const setDeleteUserId = (id: IUser["id"]) => {
    deleteUserId.value = id;
  };

  const setEditedUser = (user: IUser) => {
    editedUser.value = user;
  };

  const addUser = (user: IUser) => {
    users.value.push(user);
  };

  const deleteUser = () => {
    const index = users.value.findIndex((user) => user.id == deleteUserId.value);

    if (index !== -1) {
      users.value.splice(index, 1);
    }
  };

  const editUser = (user: IUser) => {
    const index = users.value.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      users.value[index] = user;
    } else {
      console.error(`User с ID ${user.id} не найден.`);
    }
  };

  const getSelectedUser = () => {
    return selectedUser.value;
  };

  const getUsers = computed(() => {
    return users.value;
  });

  const getEditedUser = computed(() => {
    return editedUser.value;
  });

  return {
    users,
    selectedUser,
    setSelectedUser,
    getSelectedUser,
    getUsers,
    getEditedUser,
    addUser,
    deleteUser,
    setDeleteUserId,
    setEditedUser,
    editUser,
  };
});
