<template>
  <div class="default-layout">
    <main-header />
    <nav-list
      :navList="[
        { href: 'fdasf', name: 'dlasflkds' },
        { href: 'dfasf', name: 'fasdf' },
      ]"
    />
    <view-nav />
    <slot></slot>
  </div>
</template>

<script>
import MainHeader from "components/MainHeader/index.vue";
import ViewNav from "components/ViewNav/index.vue";
import NavList from "components/NavList/index.vue";

export default {
  components: { MainHeader, ViewNav, NavList },
  created() {
  },
};
</script>

<style>
</style>