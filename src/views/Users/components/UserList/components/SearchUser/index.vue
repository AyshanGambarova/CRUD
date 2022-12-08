<template>
  <div>
    <v-container>
      <div>
        <v-form>
          <v-row>
            <v-col cols="3">
              <v-text-field v-model="searchingUser.name" label="Full name" v-tocapitalize> </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field v-model="searchingUser.email" label="E-mail" v-tolowercase> </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-select v-model="searchingUser.gender" :items="items" label="Gender"></v-select>
            </v-col>
            <v-col cols="3">
              <v-btn class="ma-2"  outlined color="indigo" block @click="searchUser()"> Search</v-btn>
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

