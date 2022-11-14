<template>
  <div>
    <h1>Users</h1>
    <SearchUser/>
    <v-table fixed-header height="300px">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Settings</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user) in getUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            <router-link :to="`/users/${user.id}`">
              <v-btn size="small" color="primary"> View </v-btn>
            </router-link>
            <v-btn size="small" color="success" @click="editingUser(user)">
              Edit
            </v-btn>
            <v-btn size="small" color="error" @click="deletingUser(user.id)">
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="getPaginationOptions.pages"
        :total-visible="7"
      ></v-pagination>
    </div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Update user</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="obj.name" label="Full name" required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="obj.email" label="Email" required>
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
            <v-btn color="green darken-1" text @click="editUser()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> Delete user </v-card-title>
          <v-card-text>Are you sure to delete this user?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog2 = false">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="deleteUser()">
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import SearchUser from './SearchUser.vue'
const store = useStore();
const page = ref(1);
const dialog = ref(false);
const dialog2 = ref(false);
const deletingUserId = ref(null);
const editingUserId = ref(null);
const obj = ref({
  name: "",
  email: "",
  status: "active",
});
const getPaginationOptions = computed(() => {
  return store.getters.getPaginationOptions;
});

const getUsers = computed(() => {
  return store.getters.getUsers;
});

onMounted(() => {
  store.dispatch("getUsers");
});

watch(page, () => {
  let pageNumber = { page: page.value };
  store.dispatch("getUsers", pageNumber);
});

function getNumber() {
  console.log("page");
  console.log(page.value);
}
function deletingUser(userId) {
  dialog2.value = true;
  deletingUserId.value = userId;
}
function deleteUser() {
  store.dispatch("deleteUser", deletingUserId.value).then(() => {
    store.dispatch("getUsers");
    dialog2.value = false;
  });
}
function editingUser(user) {
  dialog.value = true;
  editingUserId.value = user.id;
  obj.value = { ...user };
}
function editUser() {
  store
    .dispatch("editUser", {
      id: editingUserId.value,
      obj: this.obj,
    })
    .then(() => {
      store.dispatch("getUsers");
      dialog.value = false;
    });
}
</script>
