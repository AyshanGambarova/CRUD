<template>
  <div>
    <v-container>
      <div>
        <h1>Create User</h1>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="obj.name"
                :rules="nameRules"
                label="Full Name"
                required
                validate-on="blur"
              >
              </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                :rules="emailRules"
                v-model="obj.email"
                label="E-mail"
                validate-on="blur"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select
                :rules="[(v) => !!v || 'Gender is required']"
                v-model="obj.gender"
                :items="items"
                label="Gender"
                validate-on="blur"
                required
              ></v-select>
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
        </v-form>
      </div>
    </v-container>
  </div>
</template>
<script>
import script from "./main.js";
export default script;
</script>

<style scoped>
@import "style.css";
</style>
