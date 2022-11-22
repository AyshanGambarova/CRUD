<template>
  <div>
    <v-container>
      <div>
        <v-form>
          <v-row>
            <v-col cols="3">
              <v-text-field
                v-model="obj.name"
                label="Full Name"
                 v-touppercase
              >
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="obj.email"
                label="E-mail"
                v-tolowercase
              >
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-select
                v-model="obj.gender"
                :items="items"
                label="Gender"
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
