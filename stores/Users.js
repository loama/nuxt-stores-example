import { defineStore } from "pinia";
import helpers from "@/helpers";

export const useStoreUsers = defineStore("Users", () => {
  const users = ref([
    {
      name: "John Doe",
      age: 30,
    },
  ]);

  function updateUsers() {
    users.value = helpers.users.update();
  }

  return {
    users,
    updateUsers,
  };
});
