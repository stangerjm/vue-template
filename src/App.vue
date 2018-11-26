<template>
  <div id='app'>

    <layout-main>

      <template slot='header'>

        <smart-nav :nav-items='nav'
                   :nav-title='title'
                   :usr="user"
                   :on-sign-out="logout">
        </smart-nav>

      </template>

      <template slot='content'>

        <router-view></router-view>

      </template>

      <template slot='footer'>

        <smart-footer></smart-footer>

      </template>

    </layout-main>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { config } = require('../app.config');

const { mapGetters, mapActions } = createNamespacedHelpers('registration');
const { items, title } = config.nav;

export default {
  name: 'app',
  components: {
    SmartNav: () => import('smart-x-vue/src/components/smart-nav'),
    SmartFooter: () => import('smart-x-vue/src/components/smart-footer'),
    LayoutMain: () => import('smart-x-vue/src/components/layout-main'),
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'getUserName']),
    nav() {
      return this.isLoggedIn ? [...items] : [];
    },
    title() {
      return title;
    },
    user() {
      return this.getUserName;
    },
  },
  methods: {
    ...mapActions(['signOut']),
    async logout() {
      await this.signOut();
      this.$router.push('/login');
    },
  },
};
</script>
