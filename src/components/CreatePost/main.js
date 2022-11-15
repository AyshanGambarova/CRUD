import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: 'CreatePost',
  setup() {
    // #region States

    let obj = ref({
      title: "",
      body: "",
    });
    const store = useStore();
    const route = useRoute();
    let userId = route.params.id;

    //Form validation
    let valid = ref(true);
    let titleRules = ref([(v) => !!v || "Title is required"]);
    let bodyRules = ref([(v) => !!v || "Subject is required"]);

    // #endregion

    // #region Methods

    function createPost() {
      const { valid } = this.$refs.form.validate();
      if (valid) {
        store.dispatch("createPost", {
          userId: userId,
          obj: obj.value,
        });
        alert("Form is valid");
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
      titleRules,
      bodyRules,
      createPost,
    };
  },
});
