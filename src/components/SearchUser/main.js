import { FETCH_USERS } from "@/store/modules/user/constants";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    // #region States
    let obj = ref({
      name: "",
      gender: "",
      email: "",
      status: "active",
    });
    const items = ref(["male", "female"]);
    const store = useStore();
    const route = useRoute();

    // #endregion

    // #region Methods
    function searchUser() {
      store.dispatch("user/" + FETCH_USERS, obj.value);
      obj.value = {
        title: "",
        body: "",
      };
    }

    // #endregion

    return {
      obj,
      items,
      searchUser,
    };
  },
};
