<template>
  <div class="wrap">
    <!-- // 栏目标题 -->
    <menu-banner :src="require('@/assets/img/ppzq.jpg')"></menu-banner>
    <!--------------- 内容 ---------------->
    <div class="container">
      <ul class="brand-list clearfix">
        <li v-for="item in brandList" :key="item.id" class="brand-item">
          <div class="brand-img img-scale">
            <router-link :to="`/brand/${item.id}`"><img class="img-contain" :src="item.img" alt=""></router-link>
          </div>
          <p><router-link :to="`/brand/${item.id}`">{{ item.name }}</router-link></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { getBrandInfo } from '@/utils/apis'
import Vue from 'vue'
export default Vue.extend({
  name: 'Brand',
  data() {
    return {
     brandList: [],
      total: 0,
      queryParam: {
        pageNum: 1,
        pageSize: 20
      }
    }
  },
  mounted() {
    this.getBrandList()
  },
  methods: {
    async getBrandList() {
      const res = await getBrandInfo({})
      this.brandList = res.list
      this.total = res.total
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.brand-list {
  .brand-item {
    width: 18%;
    float: left;
    margin: 0 1% 1rem;
    .brand-img {
      box-sizing: border-box;
      overflow: hidden;
      height: 201px;
      border: 1px solid $borderColor;
      border-radius: .5rem;
    }
    > p {
      text-align: center;
      font-size: 1rem;
      line-height: 2;
    }
  }
}
@media (max-width: $largeScreen) {
  .brand-list {
    .brand-item {
      width: 23%;
    }
  }
}
@media (max-width: $middleScreen) {
  .brand-list {
    .brand-item {
      width: 31.33%;
      .brand-img {
        height: 160px;
      }
    }
  }
}
</style>