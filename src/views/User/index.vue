<template>
  <v-container>
    <User />
    <CreatePost />
    <PostsList v-if="isMountedUserDetails" />
  </v-container>
</template>
<script>
import script from './main'
export default script
</script>
