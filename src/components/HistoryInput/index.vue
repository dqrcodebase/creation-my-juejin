<template>
  <div class="history-input" :class="{ 'is-focus': isFocus }">
    <div @click="delCookie">删除</div>
    <!-- <input
      class="search-input"
      @focus="inputFocusHandle(true)"
      :placeholder="inputBasicsData[isFocus].placeholder"
      @blur="inputFocusHandle(false)"
      type="text"
    />
    <div class="seach-icon-container">
      <img
        class="element-centre"
        :src="inputBasicsData[isFocus].searchIconUrl"
        alt="搜索图标"
      />
    </div>
    <div class="typehead" v-show="searchHistotyList">
      <div class="title">
        <span>搜索历史</span>
        <span class="clear"> 清空 </span>
      </div>
      <div class="list">
        <div>fasdf</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocus: false,
      inputBasicsData: {
        false: {
          searchIconUrl:
            "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg",
          placeholder: "搜索稀土掘金",
        },
        true: {
          searchIconUrl:
            "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6dbcdb42ffe8d518a318a5e26efade18.svg",
          placeholder: "搜索文章/小册/标签/用户",
        },
      },
      searchHistotyList: false,
    };
  },
  mounted() {
    console.log(this.$setCookies("zzzz", 3));
  },
  methods: {
    delCookie() {
      this.$clearCookies();
    },
    inputFocusHandle(Boole) {
      this.isFocus = Boole;
    },
  },
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
    cursor: pointer;
  }
}
.typehead {
  width: 100%;
  position: absolute;
  top: 105%;
  line-height: 2rem;
  left: 0;
  z-index: 1000;
  min-width: 6rem;
  font-size: 1rem;
  color: #869aab;
  list-style: none;
  text-align: left;
  border-radius: 0.17rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid #ebebeb;
  background-color: #fff;
  .title {
    border-bottom: 1px solid #ebebeb;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    .clear {
      cursor: pointer;
      color: var(--main-color);
    }
  }
  .list {
    cursor: pointer;
    color: #5e6369;
    div {
      padding: 0.5rem 1rem;
    }
  }
}
</style>
<style lang='less' scoped>
@media screen and (min-width: 1431px) {
  .history-input .search-input {
    width: 260px;
  }
  .history-input.is-focus .search-input {
    width: 360px;
  }
}

@media screen and (max-width: 1430px) {
  .history-input .search-input {
    width: 216px;
  }
  .history-input.is-focus .search-input {
    width: 316px;
  }
}
@media screen and (max-width: 1270px) and (min-width: 1150px) {
  .history-input .search-input {
    width: 316px;
  }
  .history-input.is-focus .search-input {
    width: 316px;
  }
}

@media screen and (max-width: 1149px) {
  .history-input .search-input {
    width: 196px;
  }
  .history-input.is-focus .search-input {
    width: 296px;
  }
}

@media screen and (max-width: 799px) {
  .history-input .search-input {
    width: 176px;
  }
  .history-input.is-focus .search-input {
    width: 276px;
  }
}
@media screen and (max-width: 640px) {
  .history-input .search-input {
    width: 96px;
  }
  .history-input.is-focus .search-input {
    width: 136px;
  }
}
@media (max-width: 640px) {
  .history-input .search-input {
    height: 32px;
  }
  .history-input.is-focus .search-input {
    width: 18rem;
  }
}
</style>