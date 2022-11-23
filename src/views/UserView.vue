<template>
  <v-container>
    <User />
    <CreatePost />
    <PostsList v-if="isMountedUserDetails" />
  </v-container>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import User from "../components/User/index.vue";
import CreatePost from "../components/CreatePost/index.vue";
import PostsList from "../components/PostsList/index.vue";
import { GET_USER } from '@/store/modules/user/constants'

export default defineComponent({
  name: "HomeView",
  components: {
    User,
    CreatePost,
    PostsList,
  },
  setup() {

    const store = useStore();
    let isMountedUserDetails = ref(false)

    const getUserDetails = () => {
      return store.getters['user/'+ GET_USER];
    }

    watch(getUserDetails, (userDetails) => {
      isMountedUserDetails.value = !!userDetails
    })

    return {
      isMountedUserDetails
    }
  }
});
</script>
