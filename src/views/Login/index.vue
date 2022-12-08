<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-sheet class="pa-2 ma-2">
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                <v-text-field
                v-model="creatingUser.username"
                :rules="validations.required"
                label="Username"
                required
                validate-on="blur"
              >
              </v-text-field>
                  <v-text-field
                   v-model="creatingUser.password"
                :rules="validations.required"
                label="Password"
                required
                validate-on="blur"
              >
              </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
               <v-btn :disabled="!valid" class="ma-2" color="indigo" block @click="submitLogin()"> Create</v-btn>
              </v-card-actions>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-form>
        <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
      </v-snackbar>
  </v-container>
</template>
<script lang="ts">
import script from './main'
export default script
</script>