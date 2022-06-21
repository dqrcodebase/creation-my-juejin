<template>
  <div class="home">
    <header-nav-layout> header-nav-in-home-change </header-nav-layout>
  </div>
</template>

<script>
import HeaderNavLayout from 'layout/HeaderNavLayout.vue';

export default {
  name: 'Home',
  components: {
    HeaderNavLayout,
  },
  data() {
    return {};
  },
};
</script>
