<template>
  <div>
    <v-container>
      <h1>Posts</h1>
      <SearchPost />
      <div v-if="getUserPosts.length">
        <v-table fixed-header height="300px">
          <thead>
            <tr>
              <th class="text-center">Title</th>
              <th class="text-center">Subject</th>
              <th class="text-center">Settings</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in getUserPosts" :key="index">
              <td>{{ post.title }}</td>
              <td>{{ post.body }}</td>
              <td>
                <v-btn size="small" color="success" @click="editingPost(post)"> Edit </v-btn>
                <v-btn size="small" color="error" @click="deletingPost(post.id)"> Delete </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
        <div class="text-center">
          <v-pagination v-model="page" :length="getPaginationOptions.pages" :total-visible="7"></v-pagination>
        </div>
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
                  <v-text-field v-model="obj.title" label="Post title" required> </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="obj.body" label="Post subject" required> </v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false"> Close </v-btn>
            <v-btn color="green darken-1" text @click="editPost()"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> Delete post </v-card-title>
          <v-card-text>Are you sure to delete this post?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog2 = false"> Disagree </v-btn>
            <v-btn color="green darken-1" text @click="deletePost()"> Agree </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>
<script lang='ts'>
import script from './main'
export default script
</script>


