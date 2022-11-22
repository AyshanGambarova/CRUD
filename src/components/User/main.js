import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { GET_USER,FETCH_USER } from '@/store/modules/user/constants'

export default {
  setup() {
    // #region States
    const store = useStore();
    const route = useRoute();
    let userId = route.params.id;

    // #endregion

    // #region Hooks
    const getUser = computed(() => {
      return store.getters['user/'+ GET_USER];
    });

    onMounted(() => {
      // store.dispatch("getUser", userId);
      store.dispatch('user/' + FETCH_USER, userId);
    });

    // #endregion

    return{
        getUser
    }
  },
};
