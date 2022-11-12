<template>
  <div>
    <v-container>
      <h1>User info</h1>
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th>Full name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ getUser.name }}</td>
            <td>{{ getUser.email }}</td>
            <td>{{ getUser.gender }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const store = useStore();
const getUser = computed(() => {
  return store.getters.getUser;
});

const route = useRoute();
onMounted(() => {
  let userId = route.params.id;
  store.dispatch("getUser", userId);
});
</script>
