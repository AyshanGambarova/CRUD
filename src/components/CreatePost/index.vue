<template>
  <div>
    <v-container>
      <div>
        <h1 class="title">Create Post</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="obj.title" :rules="titleRules" label="Title" validate-on="blur" v-tocapitalize>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="obj.body" :rules="bodyRules" label="Subject" validate-on="blur" v-tocapitalize>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn class="ma-2" outlined color="indigo" block @click="createPost()"> Create</v-btn>
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

<style scoped>
@import 'style.css';
</style>
