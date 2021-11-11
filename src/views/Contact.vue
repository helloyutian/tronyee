<template>
  <div class="wrap">
    <!-- // 栏目标题 -->
    <menu-banner></menu-banner>
    <!--------------- 内容 ---------------->
    <div class="container">
      <h1 class="page-tit">联系方式 CONTACT US</h1>
      <div class="main">
        <p><img src="/assets/img/logo.png" alt="logo"></p>
        <p>&nbsp;</p>
        <p>电　话：{{ companyData.phone }}</p>
        <p>&nbsp;</p>
        <p>邮　箱：{{ companyData.email }}</p>
        <!-- <p>&nbsp;</p>
        <p>邮　箱：{{ companyData.email }}</p> -->
        <p>&nbsp;</p>
        <p>网　址：{{ companyData.website }}</p>
        <p>&nbsp;</p>
        <p>地　址：{{ companyData.address }}</p>
      </div>
    </div>
    <div class="border-top"></div>
    <div class="container">
      <ul class="contact-list clearfix">
        <li>
          <div class="icon">
            <span class="iconfont icon-f-tel"></span>
          </div>
          <div class="txt">
            <h5>联系电话</h5>
            <p>{{ companyData.phone }}</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <span class="iconfont icon-icmobile"></span>
          </div>
          <div class="txt">
            <h5>手机号码</h5>
            <p>{{ companyData.tel }}</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <span class="iconfont icon-qq"></span>
          </div>
          <div class="txt">
            <h5>QQ咨询</h5>
            <p>{{ companyData.qq }}</p>
          </div>
        </li>
        <li>
          <div class="icon">
            <span class="iconfont icon-email"></span>
          </div>
          <div class="txt">
            <h5>邮箱地址</h5>
            <p>{{ companyData.email }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'Contact',
  computed: {
    ...mapState(['companyData'])
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.page-tit {
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  margin-bottom: 2rem;
  &::after {
    content: '\20';
    display: block;
    width: 1em;
    height: 1px;
    background-color: $mainTextColor;
    margin: 1rem auto;
  }
}
.main {
  margin-bottom: .3rem;
  line-height: 2;
  padding-bottom: 4rem;
  img {
    max-width: 100%;
  }
}
.contact-list {
  padding-top: 3.5rem;
  > li {
    float: left;
    width: 25%;
    .icon {
      width: 3.6rem;
      height: 3.6rem;
      line-height: 3.6rem;
      border-radius: 2rem;
      border: 2px solid $borderColor;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      margin-right: 1em;
      .iconfont {
        font-size: 2rem;
      }
    }
    .txt {
      display: inline-block;
      vertical-align: middle;
      line-height: 1.5;
      > h5 {
        font-weight: normal;
        font-size: 1rem;
      }
      > p {
        font-size: 1.3rem;
      }
    }
  }
}
</style>