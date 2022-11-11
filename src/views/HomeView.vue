<template>
<v-container class="bg-surface-variant">
  <UserList />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import UserList from '../components/UserList.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    UserList,
  },
});
</script>
