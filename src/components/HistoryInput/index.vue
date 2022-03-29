<template>
  <div class="history-input" :class="{'is-focus': isFocus}">
    <input class="search-input" @focus="inputFocusHandle(true)" @blur="inputFocusHandle(false)" type='text'>
    <div class="seach-icon-container">
      <img class="element-centre" :src='isFocus ? focusSearchIconUrl : blurSearchIconUrl' alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocus: false,
      blurSearchIconUrl: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg',
      focusSearchIconUrl: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6dbcdb42ffe8d518a318a5e26efade18.svg'
    }
  },
  methods: {
    inputFocusHandle(Boole) {
      this.isFocus = Boole
      console.log('inputFocusHandle')
    }
  }
};
</script>

<style lang='less' scoped>
.history-input {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  position: relative;
  height: 2.834rem;
  border: 1px solid #c2c8d1;
  transition: width 0.2s;
  &.is-focus {
    border-color: var(--main-color);
    .seach-icon-container {
      background: var(--main-button-active-background);
    }
  }
  .search-input {
    border: none;
    padding: 0.6rem 0 0.6rem 1rem;
    box-shadow: none;
    outline: none;
    font-size: 1.1rem;
    color: #8a919f;
    background-color: transparent;
    transition: width 0.3s;
  }
  .seach-icon-container {
    position: relative;
    left: -2px;
    width: 44px;
    height: 30px;
    background: #f2f3f5;
    border-radius: 2px;
  }
}
</style>