<template>
  <div>
    <v-container>
      <div>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="3">
              <v-text-field
                v-model="obj.name"
                :rules="nameRules"
                label="Full Name"
                validate-on="blur"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="obj.email"
                :rules="emailRules"
                label="E-mail"
                required
                validate-on="blur"
              >
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-select
                v-model="obj.gender"
                :items="items"
                :rules="[(v) => !!v || 'Gender is required']"
                validate-on="blur"
                label="Gender"
                required
              ></v-select>
            </v-col>
            <v-col cols="3">
              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                block
                @click="searchUser()"
              >
                Search</v-btn
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
