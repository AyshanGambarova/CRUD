<template>
  <div>
  <User/>
  <CreatePost/>
  <Post/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import User from '../components/User.vue';
import Post from '../components/PostList.vue';
import CreatePost from '../components/CreatePost.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    User,
    Post,
    CreatePost
  },
});
</script>
