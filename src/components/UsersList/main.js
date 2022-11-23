import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import axios from "axios";
// Components
import SearchUser from "@/components/SearchUser/index.vue";

import {
  EDIT_USER,
  FETCH_USERS,
  GET_USERS,
} from "@/store/modules/user/constants";

export default {
  components: { SearchUser },
  setup() {
    // #region States
    const store = useStore();
    const page = ref(1);
    const dialog = ref(false);
    const dialog2 = ref(false);
    const deletingUserId = ref(null);
    const editingUserId = ref(null);
    const obj = ref({
      name: "",
      email: "",
      status: "active",
    });

    // #endregion

    // #region Methods
    function deletingUser(userId) {
      dialog2.value = true;
      deletingUserId.value = userId;
    }
    async function deleteUser() {
      await axios
        .delete(
          `https://gorest.co.in/public/v2/users/${deletingUserId.value}`,
          {
            headers: {
              Authorization:
                "Bearer edd87e7b3e90b9586dc33973743e69bf175f539b150f4322602cbbe90bb56351",
            },
          }
        )
        .then(() => {
          dialog2.value = false;
          fetchUsers();
        });
    }
    function editingUser(user) {
      dialog.value = true;
      editingUserId.value = user.id;
      obj.value = { ...user };
    }
    function editUser() {
      store
        .dispatch("user/" + EDIT_USER, {
          userId: editingUserId.value,
          obj: obj.value,
        })
        .then(() => {
          fetchUsers();
          dialog.value = false;
        });
    }
    function fetchUsers(query) {
      store.dispatch("user/" + FETCH_USERS, query);
    }

    // #endregion

    // #region Hooks
    const getPaginationOptions = computed(() => {
      return store.getters["pagination/getPaginationOptions"];
    });

    const getUsers = computed(() => {
      return store.getters["user/" + GET_USERS];
    });

    onMounted(() => {
      fetchUsers();
    });

    //Get current page number
    watch(page, () => {
      let query = { page: page.value };
      fetchUsers(query);
    });

    // #endregion

    return {
      getUsers,
      page,
      dialog,
      dialog2,
      obj,
      getPaginationOptions,
      editingUser,
      editUser,
      deletingUser,
      deleteUser,
    };
  },
};
