import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import axios from "axios";
// Components
import SearchPost from "@/components/SearchPost/index.vue";

import {
  EDIT_POST,
  FETCH_POSTS,
  GET_POSTS,
} from "@/store/modules/post/constants";

export default {
  components: { SearchPost },
  setup() {
    // #region States
    const route = useRoute();
    const store = useStore();
    const page = ref(1);
    const dialog = ref(false);
    const dialog2 = ref(false);
    const deletingPostId = ref(null);
    const editingPostId = ref(null);
    const obj = ref({
      title: "",
      body: "",
    });

    // #endregion

    // #region Methods
    function deletingPost(postId) {
      dialog2.value = true;
      deletingPostId.value = postId;
    }
    async function deletePost() {
      await axios
        .delete(
          `https://gorest.co.in/public/v2/posts/${deletingPostId.value}`,
          {
            headers: {
              Authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        )
        .then(() => {
          dialog2.value = false;
          fetchUserPosts(userId);
        });
    }
    function editingPost(post) {
      dialog.value = true;
      editingPostId.value = post.id;
      obj.value = { ...post };
    }
    function editPost() {
      store
        .dispatch("post/" + EDIT_POST, {
          postId: editingPostId.value,
          obj: this.obj,
        })
        .then(() => {
          let userId = route.params.id;
          fetchUserPosts(userId);
          dialog.value = false;
        });
    }
    function fetchUserPosts(userId, query) {
      store.dispatch("post/" + FETCH_POSTS, { userId, query });
    }

    // #endregion

    // #region Hooks
    const getPaginationOptions = computed(() => {
      return store.getters["pagination/getPaginationOptions"];
    });
    const getUserPosts = computed(() => {
      return store.getters["post/" + GET_POSTS];
    });
    onMounted(() => {
      let userId = route.params.id;
      fetchUserPosts(userId);
      // store.dispatch("getUserPosts", {
      //   userId: userId
      // });
    });
    watch(page, () => {
      let query = { page: page.value };
      fetchUserPosts(userId, query);
      // store.dispatch("getUserPosts", {userId:userId,query:query});
    });

    // #endregion

    return {
      obj,
      getUserPosts,
      getPaginationOptions,
      page,
      dialog,
      dialog2,
      editingPost,
      editPost,
      deletingPost,
      deletePost,
    };
  },
};
