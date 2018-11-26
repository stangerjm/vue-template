<template>
  <smart-section class="appname-login" section-title="Welcome!">
    <h3 class="appname-login--title">Please login below.</h3>
    <smart-form :form-data="loginModel" :on-submit="loginUser" :center-form="true">
      <router-link slot="form-end"
                   class="appname-login--link"
                   to="Register">
        Create new account
      </router-link>
    </smart-form>
  </smart-section>
</template>

<script>
import ModelType from 'smart-x-vue/src/global/constants/ModelType';
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('registration');

export default {
  name: 'login',
  components: {
    SmartSection: () => import('smart-x-vue/src/components/smart-section'),
    SmartForm: () => import('smart-x-vue/src/components/smart-form'),
  },
  data() {
    return {
      loginModel: {
        UserName: String,
        Password: ModelType.Password,
      },
    };
  },
  methods: {
    ...mapActions(['login']),
    async loginUser(submittedData) {
      await this.login(submittedData);
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style scoped lang="scss">
  section.appname-login {
    padding: 20px 10px;
    width: 30%;
    border-radius: 10px;
    box-shadow: 2px 2px 5px -1px black;
    margin: 60px auto;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .appname-login--link {
    color: white;
    padding: 10px;
  }

  .appname-login--title {
    color: white;
    text-align: center;
    margin: 10px;
  }
</style>
