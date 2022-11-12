<template>
  <div>
    <v-container>
      <div>
        <h1>Create User</h1>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="obj.name"
              label="Full Name"
              required
            >
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="obj.email"
              label="E-mail"
              required
            >
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select v-model="obj.gender" :items="items" label="Gender" required></v-select>
          </v-col>
          <v-col cols="12">
            <v-btn
              class="ma-2"
              outlined
              color="indigo"
              block
              @click="createUser()"
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
  name: "",
  gender: "",
  email: "",
  status: "active",
});
const items = ref(["Male", "Female"]);
const store = useStore();
const route = useRoute();
function createUser() {
  store.dispatch("createUser", obj.value);
  //   const obj = ref({
  //   title: "",
  //   body: "",
  // });
}
</script>
