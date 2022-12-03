<template>
  <v-app>
    <v-main>
      <Toolbar />
      <Sidebar />
      <router-view v-slot="{Component}">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// import './assets/tailwind.css';
import Toolbar from '@/layouts/components/Toolbar/index.vue'
import Sidebar from '@/layouts/components/Sidebar/index.vue'
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
