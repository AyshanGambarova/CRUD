<template>
  <div>
    <v-container class="bg-surface-variant">
      <h1>Posts</h1>
      <v-table v-if="getUserPosts.length" fixed-header height="300px">
      <thead>
        <tr>
          <th>Title</th>
          <th>Subject</th>
          <!-- <th>Settings</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in getUserPosts" :key="index">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <!-- <td>
            <v-btn size="small" color="success" @click="editingPost(post)">
              Edit
            </v-btn>
            <v-btn size="small" color="error" @click="deletingPost(post.id)">
              Delete
            </v-btn>
          </td> -->
        </tr>
      </tbody>
    </v-table>
    <div v-else>There isn't any post.</div>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useStore();
const getUserPosts = computed(() => {
  return store.getters.getUserPosts;
});
onMounted(() => {
  let userId = route.params.id;
  store.dispatch("getUserPosts", userId);
});

</script>
