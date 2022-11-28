<template>
  <div>
    <h1>Users</h1>
    <SearchUser />
    <div v-if="getUsers.length">
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Name</th>
            <th class="text-center">Settings</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in getUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>
              <router-link :to="`/users/${user.id}`">
                <v-btn size="small" color="primary"> View </v-btn>
              </router-link>
              <v-btn size="small" color="success" @click="editingUser(user)"> Edit </v-btn>
              <v-btn size="small" color="error" @click="deletingUser(user.id)"> Delete </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
      <div class="text-center">
        <v-pagination v-model="page" :length="getPaginationOptions.pages" :total-visible="7"></v-pagination>
      </div>
    </div>
    <div v-else>There isn't any user.</div>
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
                  <v-text-field v-model="obj.name" label="Full name" required> </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="obj.email" label="Email" required> </v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false"> Close </v-btn>
            <v-btn color="green darken-1" text @click="editUser()"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> Delete user </v-card-title>
          <v-card-text>Are you sure to delete this user?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog2 = false"> Disagree </v-btn>
            <v-btn color="green darken-1" text @click="deleteUser()"> Agree </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script lang='ts'>
import script from './main'
export default script
</script>

<style scoped>
@import 'style.css';
</style>
