import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
    setup(){
        // #region States
        let obj = ref({
            title: "",
            body: "",
          });
          const store = useStore();
          const route = useRoute();
          let userId = route.params.id;

          // #endregion

          // #region Methods
          function searchPost() {
            store.dispatch("getUserPosts", { userId: userId, query: obj.value });
            obj.value = {
              title: "",
              body: "",
            };
          }

          // #endregion

          return{
            obj,
            searchPost
          }
    }
}