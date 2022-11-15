import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup() {
    // #region States
    const store = useStore();
    const route = useRoute();

    // #endregion

    // #region Hooks
    const getUser = computed(() => {
      return store.getters.getUser;
    });

    onMounted(() => {
      let userId = route.params.id;
      store.dispatch("getUser", userId);
    });

    // #endregion

    return{
        getUser
    }
  },
};
