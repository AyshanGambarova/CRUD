<template>
  <div>
    <v-container>
      <div>
        <h1>Create User</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model.trim="obj.name"
                :rules="validations.required"
                label="Full Name"
                required
                validate-on="blur"
                v-tocapitalize
              >
              </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                :rules="[...validations.required,...validations.email]"
                v-model.trim="obj.email"
                label="E-mail"
                validate-on="blur"
                required
                v-tolowercase
              >
              </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select
                :rules="validations.required"
                v-model="obj.gender"
                :items="items"
                label="Gender"
                validate-on="blur"
                required
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-btn  :disabled="!valid" class="ma-2" color="indigo" block @click="createUser()">
                Create</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </div>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
      </v-snackbar>
    </v-container>
  </div>
</template>
<script lang="ts">
import script from './main'
export default script
</script>

<style scoped>
@import 'style.css';
</style>
