<template>
  <v-snackbar v-model="snackbar" :timeout="settings.timeout" :color='settings.color'>
    {{ settings.text }}
  </v-snackbar>
</template>
<script lang="ts">
import script from './main'
export default script
</script>
