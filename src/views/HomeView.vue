<template>
<v-container>
  <CreateUser />
  <UserList />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import CreateUser from '../components/CreateUser.vue';
import UserList from '../components/UserList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CreateUser,
    UserList,
  },
});
</script>
