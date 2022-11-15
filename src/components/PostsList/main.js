import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import axios from "axios";


export default {
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
          .delete(`https://gorest.co.in/public/v2/posts/${deletingPostId.value}`, {
            headers: {
              Authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          })
          .then(() => {
            dialog2.value = false;
            store.dispatch("getUserPosts", {userId:userId});
          });
      }
      function editingPost(post) {
        dialog.value = true;
        editingPostId.value = post.id;
        obj.value = { ...post };
      }
      function editPost() {
        store
          .dispatch("editPost", {
            postId: editingPostId.value,
            obj: this.obj,
          })
          .then(() => {
            store.dispatch("getUserPosts", {userId:userId});
            dialog.value = false;
          });
      }

      // #endregion

    // #region Hooks
      const getPaginationOptions = computed(() => {
        return store.getters.getPaginationOptions;
      });
      let userId = route.params.id;
      const getUserPosts = computed(() => {
        return store.getters.getUserPosts;
      });
      onMounted(() => {
        let userId = route.params.id;
        store.dispatch("getUserPosts", {
          userId: userId
        });
      });
      watch(page, () => {
        let query = { page: page.value };
        store.dispatch("getUserPosts", {userId:userId,query:query});
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
        deletePost

      };
  },
};
