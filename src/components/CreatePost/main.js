import { CREATE_POST } from "@/store/modules/post/constants";
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

   async function createPost() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        store.dispatch('post/' + CREATE_POST, {userId:userId, obj:obj.value});
        alert("Post created");
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
