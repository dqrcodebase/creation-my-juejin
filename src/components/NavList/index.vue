<template>
  <nav class="view-nav">
    <div class="nav-list">
      <a
        v-is-active-menu="{item,route:$route}"
        class="nav-item"
        :href="item.href"
        v-for="item in navList"
        :key="item.name"
      >
        <div class="category-popover-box">
          {{ item.name }}
        </div></a
      >
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
};
</script>

<style lang='less' scoped>
.view-nav {
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all 0.2s;
  transform: translateZ(0);
  background-color: #fff;
  .nav-list {
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
    .nav-item {
      height: 100%;
      align-items: center;
      display: flex;
      flex-shrink: 0;
      font-size: 1.16rem;
      color: #71777c;
      padding: 0 1rem;
      &.active {
        color: var(--main-color);
      }
    }
  }
}
</style>