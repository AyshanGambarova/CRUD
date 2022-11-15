<template>
  <div>
  <User/>
  <CreatePost/>
  <PostsList/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import User from '../components/User/index.vue';
import CreatePost from '../components/CreatePost/index.vue';
import PostsList from '../components/PostsList/index.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    User,
    CreatePost,
    PostsList
  },
});
</script>
