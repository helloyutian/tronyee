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
</style>
