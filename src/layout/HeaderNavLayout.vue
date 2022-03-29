<template>
  <div class='default-layout'>
    <main-header />
    <view-nav />
    <slot></slot>
  </div>
</template>

<script>
import MainHeader from 'components/MainHeader/index.vue';
import viewNav from 'components/ViewNav/index.vue';

export default {
  components: { MainHeader, viewNav },
  created() {
    console.log(1111);
  },
};
</script>

<style>
</style>