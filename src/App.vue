<template>
  <v-app>
    <nav>
      <h1 class="bg-red-500">Navbar</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="products">Products</router-link>
  </nav>
    <router-view v-slot="{Component}">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>

<script setup>
import './assets/tailwind.css';
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
