<template>
  <header class='main-header'>
    <div class='container'>
      <a class='logo' href='/'><img class='logo-img' src='~imgs/mainHeader/logo.svg' alt='稀土掘金'></a>
      <nav class='main-nav'>
        <div class='nav-list'>
          <ul class='main-nav-list'>
            <li class='nav-item' >
              <a href='' class="active">
                首页
              </a>
            </li>
            <li class='nav-item'>
              <a href=''>
                沸点
              </a>
            </li>
            <li class='nav-item'>
              <a href=''>
                课程
              </a>
            </li>
            <li class='nav-item'>
              <a href=''>
                直播
              </a>
            </li>
            <li class='nav-item'>
              <a href=''>
                资讯
              </a>
            </li>
            <li class='nav-item'>
              <a href=''>
                活动
              </a>
            </li>
            <li class='nav-item'>
              <a href=''>
                开放社区
              </a>
            </li>
            <li class='nav-item'>
              <a href=''>
                商城
              </a>
            </li>
            <li class='nav-item '>
              <a href='' class='isResourceVisible'>
                APP
              </a>
            </li>
            <li class='nav-item '>
              <a href='' class='isResourceVisible'>
                插件
              </a>
            </li>
            <li class='nav-item'>
              <a href=''>
                <img class='activity ' src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd0f3b510bc14f6faed6e7a049a63e3d~tplv-k3u1fbpfcp-zoom-1.image' alt=''>
              </a>
            </li>
          </ul>
          <ul class='right-side-nav'>
            <li>
              <history-input />
            </li>
            <li>
              <div>头像</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import HistoryInput from 'components/HistoryInput/index.vue';

export default {
  components: { HistoryInput },
};
</script>

<style lang='less'>
@import '~style/mainHeader.less';
</style>