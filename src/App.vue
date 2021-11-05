<template>
  <div id="app">
    <!-- // 导航 -->
    <v-header />

    <router-view />

    <!-- // 页脚 -->
    <v-footer />

    <!-- 友情链接 -->
    <!-- <v-links /> -->

    <!-- // 悬浮窗 -->
    <v-float />

  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'App',
  mounted() {
    this.SET_COMPANY_INFO()
  },
  methods: {
    ...mapActions(['SET_COMPANY_INFO'])
  }
})
</script>
<style lang="scss">
@import '@/assets/scss/var.scss';
@import '@/assets/scss/base.scss';

.wrap {
  padding-top: $navHeight;
}
.pager {
  text-align: center;
  margin-top: 3rem;
  .el-pager {
    > li:not(.disabled).active {
      background-color: $blueColor !important;
    }
    > li:not(.disabled):hover {
      color: $blueColor !important;
    }
  }
}
// -------- 动画 -------
// 透明的
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
// 透明向上
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease; // cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
// 透明向右
.left-fade-enter-active {
  transition: all .3s ease;
}
.left-fade-leave-active {
  transition: all .2s ease; // cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.left-fade-enter, .left-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
