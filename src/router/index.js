import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '*',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/info/About.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/account/Login'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/account/Profile.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/info/Contact.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/account/Register.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' || to.name === 'Register') {
    next();
    return;
  }

  const isLoggedIn = store.getters['registration/isLoggedIn'];

  if (isLoggedIn) {
    next();
    return;
  }

  next('/login');
});

export default router;
