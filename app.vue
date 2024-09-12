<template>
  <div>
    <ul>
      <li v-for="user in storeUsers.users" :key="user.id">{{ user.name }}</li>
    </ul>
    <button @click="storeUsers.updateUsers">Update Users</button>

    <button @click="helpers.users.alertCurrentUsersInStore">Alert Users</button>
  </div>
</template>

<script setup>
import { useStoreUsers } from "@/stores/Users";
import helpers from "@/helpers";

const storeUsers = useStoreUsers();
</script>
