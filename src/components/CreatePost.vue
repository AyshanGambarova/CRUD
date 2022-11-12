<template>
  <div>
    <v-container>
      <div>
        <h1>Create Post</h1>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="obj.title" label="Title" required>
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="obj.body" label="Subject" required>
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              class="ma-2"
              outlined
              color="indigo"
              block
              @click="createPost()"
            >
              Create</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const obj = ref({
  title: "",
  body: "",
});
const store = useStore();
const route = useRoute();
let userId = route.params.id;
function createPost() {
  store.dispatch("createPost", {
    id: userId,
    obj: this.obj,
  })
//   const obj = ref({
//   title: "",
//   body: "",
// });
}
</script>
