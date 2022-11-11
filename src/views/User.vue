<template>
  <div>
    <v-container class="bg-surface-variant">
      <h1>User info</h1>
      <ul>
        <li>{{ getUser.name }}</li>
        <li> {{ getUser.email }} </li>
        <li>{{ getUser.gender }}</li>
      </ul>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, computed} from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useStore();
const getUser = computed(() => {
  return store.getters.getUser;
});
    
onMounted(() => {
  let userId=route.params.id
  store.dispatch("getUser",userId);
});

</script>
