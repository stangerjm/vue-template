<template>
  <div class="appname-register">
    <h2 class="appname-register--title">Create a new account</h2>

    <p class="appname-register--subtitle">Welcome! Please register for a new account</p>

    <smart-form :form-data="model"
                :validation-errors="getErrors"
                :on-submit="registerUser"
                center-form>
      <bit-btn slot="form-buttons"
               @click.native="backToLogin"
               btn-size="medium">
        Back
      </bit-btn>
    </smart-form>
  </div>
</template>

<script>
import { transformIntoFormModel, ModelType } from 'smart-x-vue';
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('registration');

export default {
  name: 'register',
  components: {
    SmartForm: () => import('smart-x-vue/src/components/smart-form'),
    BitBtn: () => import('smart-x-vue/src/components/bit-btn'),
  },
  data() {
    return {
      model: transformIntoFormModel({
        FirstName: {
          type: String,
          required: true,
          span: 5,
        },
        MiddleInitial: {
          type: String,
          required: false,
          span: 2,
          displayName: 'M.I.',
        },
        LastName: {
          type: String,
          required: true,
          span: 5,
        },
        UserName: {
          type: String,
          required: true,
          span: 6,
        },
        Email: {
          type: String,
          required: true,
          span: 6,
        },
        Password: {
          type: ModelType.Password,
          required: true,
          span: 6,
        },
        ConfirmPassword: {
          type: ModelType.Password,
          required: true,
          span: 6,
        },
      }),
    };
  },
  computed: {
    ...mapGetters(['getErrors']),
  },
  methods: {
    ...mapActions(['register', 'clearErrors']),
    async registerUser(submittedData) {
      const account = await this.register(submittedData);

      if (account != null) {
        this.$router.push({ name: 'Profile' });
      }
    },
    backToLogin() {
      this.$router.push({ name: 'Login' });
    },
  },
  created() {
    this.clearErrors();
  },
};
</script>

<style scoped>
.appname-register {
  text-align: center;
  width: 60%;
  margin: 50px auto;
}

.appname-register--subtitle {
  font-size: 1.25em;
}
</style>
