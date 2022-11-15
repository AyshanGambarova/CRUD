import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: 'CreateUser',
  setup() {
    // #region States
    const store = useStore();
    let obj = ref({
      name: "",
      gender: "",
      email: "",
      status: "active",
    });
    let items = ref(["male", "female"]);

    //Form validation
    let valid=ref(true);
    let nameRules=ref([v => !!v || 'Full name is required',    ])
    let emailRules=ref([v => !!v || 'E-mail is required',    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',])

    // #endregion

    // #region Methods
    function createUser() {
      const { valid } = this.$refs.form.validate()
      if (valid) {
        store.dispatch("createUser", obj.value);
        alert('Form is valid')
      } else {
        alert('Form is invalid')
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
      createUser,
    };
  },
});
