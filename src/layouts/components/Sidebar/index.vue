<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <!-- <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider"></v-list-item> -->
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard">
        <router-link to="/" class="text-decoration-none">Users</router-link>
      </v-list-item>
      <v-list-item prepend-icon="mdi-forum">
        <router-link to="/products" class="text-decoration-none">Products</router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import script from './main'
export default script
</script>
