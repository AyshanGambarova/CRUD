<template>
  <v-container>
    <CreateUser />
    <UsersList />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import CreateUser from "../components/CreateUser/index.vue";
import UsersList from "../components/UsersList/index.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CreateUser,
    UsersList,
  },
});
</script>
