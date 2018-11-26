<template>
  <div class="home">
    <h1>Welcome to the app</h1>
    <smart-details :detail-data="{ isEmployee: true }"></smart-details>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    SmartDetails: () => import('smart-x-vue/src/components/smart-details'),
  },
};
</script>
