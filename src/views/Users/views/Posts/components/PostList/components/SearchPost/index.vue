<template>
  <div>
    <v-container>
      <div>
        <v-form>
          <v-row>
            <v-col cols="4">
              <v-text-field v-model="searchingPost.title" label="Title"> </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="searchingPost.body" label="Subject"> </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-btn class="ma-2" outlined color="indigo" block @click="searchPost()"> Search</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-container>
  </div>
</template>
<script lang='ts'>
import script from './main'
export default script
</script>

