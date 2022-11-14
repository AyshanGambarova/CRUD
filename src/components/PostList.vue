<template>
  <div>
    <v-container class="bg-surface-variant">
      <h1>Posts</h1>
      <div v-if="getUserPosts.length">
        <v-table fixed-header height="300px">
          <thead>
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Settings</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in getUserPosts" :key="index">
              <td>{{ post.title }}</td>
              <td>{{ post.body }}</td>
              <td>
                <v-btn size="small" color="success" @click="editingPost(post)">
                  Edit
                </v-btn>
                <v-btn
                  size="small"
                  color="error"
                  @click="deletingPost(post.id)"
                >
                  Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div v-else>There isn't any post.</div>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Update post</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="obj.title" label="Post title" required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="obj.body"
                    label="Post subject"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="green darken-1" text @click="editPost()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> Delete post </v-card-title>
          <v-card-text>Are you sure to delete this post?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog2 = false">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="deletePost()">
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import axios from 'axios'
const route = useRoute();
const store = useStore();
const dialog = ref(false);
const dialog2 = ref(false);
const deletingPostId = ref(null);
const editingPostId = ref(null);
const obj = ref({
  title: "",
  body: "",
});
let userId = route.params.id;
const getUserPosts = computed(() => {
  return store.getters.getUserPosts;
});
onMounted(() => {
  let userId = route.params.id;
  store.dispatch("getUserPosts", userId);
});
function deletingPost(postId) {
  dialog2.value = true;
  deletingPostId.value = postId;
}
async function deletePost() {
  await axios.delete(`https://gorest.co.in/public/v2/posts/${deletingPostId.value}`, {
          headers: {
            'Authorization':'Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351'
          }
        })
        .then(() => {
      dialog2.value = false;
    })
}
function editingPost(post) {
  dialog.value = true;
  editingPostId.value = post.id;
  obj.value = { ...post };
}
function editPost() {
  store
    .dispatch("editPost", {
      postId: editingPostId.value,
      obj: this.obj,
    })
    .then(() => {
      store.dispatch("getUserPosts",userId);
      dialog.value = false;
    });
}
</script>
