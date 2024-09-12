import { useStoreUsers } from "@/stores/Users";

function update() {
  const randomNames = [
    "Alice Smith",
    "Bob Johnson",
    "Charlie Brown",
    "Diana Lee",
    "Edward Doe",
  ];
  const randomName =
    randomNames[Math.floor(Math.random() * randomNames.length)];
  const randomAge = Math.floor(Math.random() * (80 - 18 + 1)) + 18; // Random age between 18 and 80

  return [
    {
      name: randomName,
      age: randomAge,
    },
  ];
}

function alertCurrentUsersInStore() {
  const storeUsers = useStoreUsers();
  const result = JSON.stringify(storeUsers.users);

  console.log(result);
  alert(result);
}

export { alertCurrentUsersInStore, update };
