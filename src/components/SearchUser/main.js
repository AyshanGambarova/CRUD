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

    //Form validation
    let valid = ref(true);
    let nameRules = ref([(v) => !!v || "Full name is required"]);
    let emailRules = ref([
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]);

    // #endregion

    // #region Methods
    function searchUser() {
      const { valid } = this.$refs.form.validate();
      if (valid) {
        alert("Form is valid");
        store.dispatch("getUsers", obj.value);
      } else {
        alert("Form is invalid");
      }
      obj.value = {
        title: "",
        body: "",
      };
    }

    // #endregion

    return {
      obj,
      valid,
      nameRules,
      emailRules,
      items,
      searchUser,
    };
  },
};
