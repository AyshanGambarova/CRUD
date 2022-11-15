<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="obj.title" label="Title" required>
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="obj.body" label="Subject" required>
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn
              class="ma-2"
              outlined
              color="indigo"
              block
              @click="searchPost()"
            >
              Search</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import script from './main.js'
export default script
</script>

<style scoped>
@import 'style.css'
</style>