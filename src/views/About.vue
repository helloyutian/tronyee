<template>
  <div class="wrap">
    <!-- // 栏目标题 -->
    <menu-banner></menu-banner>
    <!--------------- 内容 ---------------->
    <!-- 关于 -->
    <div id="intro" ref="intro" class="session pt-0">
      <div class="session-tit">关于创亿</div>
      <div class="container clearfix">
        <div class="company-pic"><img :src="companyData.img" :alt="companyData.name"></div>
        <div class="company-intro">{{ companyData.introduce }}</div>
      </div>
    </div>

    <!-- 文化 -->
    <div id="culture" ref="culture" class="session drak-bg">
      <div class="session-tit">企业文化</div>
      <div class="container">
        <div class="company-culture">{{ companyData.culture }}</div>
      </div>
    </div>

    <!-- 荣誉 -->
    <div id="honor" ref="honor" class="session">
      <div class="session-tit">荣誉资质</div>
      <div class="container">
        <div class="company-honor">
          <ul class="clearfix">
            <li v-for="item in companyData.honorImgs" :key="item.id">
              <div class="box">
                <div class="honor-img img-scale"><img class="img-full" :src="item.url" alt=""></div>
              </div>
              <p>{{ item.name }}</p>
            </li>
            <li>
              <div class="box">
                <div class="honor-img img-scale"><img class="img-full" src="http://www.chuangyisy.cn/uploads/201910/5daaeddbdec5d.jpg" alt=""></div>
              </div>
              <p>深圳市电子商会会员单位</p>
            </li>
            <!-- <li>
              <div class="box">
                <div class="honor-img"><img src="http://www.chuangyisy.cn/uploads/201910/5daaeddc916bb.jpg" alt=""></div>
              </div>
              <p>深圳市电子商会会员单位</p>
            </li>
            <li>
              <div class="box">
                <div class="honor-img"><img src="@/assets/img/a.jpg" alt=""></div>
              </div>
              <p>深圳市电子商会会员单位</p>
            </li> -->
          </ul>
        </div>
      </div>
    </div>

    <!-- 环境 -->
    <div id="environment" ref="environment" class="session pt-0">
      <div class="session-tit">公司环境</div>
      <div class="container">
        <div class="company-envi">
          <ul class="clearfix">
            <li v-for="item in companyData.envImgs" :key="item.id" class="img-scale">
              <div class="img-item" :style="`background-image: url('${ item.url }')`"></div>
            </li>
            <!-- <li>
              <div class="img-item" style="background-image: url('http://www.chuangyisy.cn/uploads/201910/5daaeb6781551.jpg')"></div>
            </li>
            <li>
              <div class="img-item" style="background-image: url('http://www.chuangyisy.cn/uploads/201910/5daaeafc03a53.jpg')"></div>
            </li>
            <li>
              <div class="img-item" style="background-image: url('http://www.chuangyisy.cn/uploads/201910/5daaeb6781551.jpg')"></div>
            </li>
            <li>
              <div class="img-item" style="background-image: url('http://www.chuangyisy.cn/uploads/201910/5daaeafc03a53.jpg')"></div>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'About',
  // data() {
  //   return {
  //     step: 0
  //   }
  // },
  computed: {
    ...mapState(['companyData']),
    type() {
      return this.$route.params.type
    }
  },
  watch: {
    type(val?: string) {
      this.scrollTo(val)
    }
  },
  mounted() {
    this.$nextTick(() => {
      const elem = this.$route.params.type
      if (elem) {
        this.scrollTo(elem)
      }
    })
  },
  methods: {
    scrollTo(elem?: string) {
      // 动画时长
      const sec = 300;
      // 获取目标元素位置高度
      const elemTop = elem ? (this.$refs[elem] as any).offsetTop - 120 : 0
      // 获取当前滚动高度
      const currentTop = document.documentElement.scrollTop
      // 计算高度差
      const vHeihgt = elemTop - currentTop
      // 步长
      const step = vHeihgt / sec * 16

      const moving = () => {
        const top = Math.max(0, document.documentElement.scrollTop + step)
        document.documentElement.scrollTop = top
        if ((vHeihgt > 0 && top < elemTop) || (vHeihgt < 0 && top > elemTop)) {
          requestAnimationFrame(moving)
        }
      }
      moving()
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.session {
  padding-bottom: 5rem;
  font-size: 1rem;
  padding-top: 3rem;
  line-height: 1.8;
  .session-tit {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    &::after {
      content: '\20';
      width: 1em;
      background: $defaultTextColor;
      display: block;
      height: 1px;
      margin: 0 auto;
      margin-top: 1rem;
    }
  }
}
.drak-bg {
  background-color: #f3f3f3;
}
.company-pic {
  width: 50%;
  float: left;
  margin-right: 1.5rem;
  
}
.company-intro, .company-culture {
  // text-indent: 2em;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.company-honor {
  > ul {
    > li {
      float: left;
      width: 18%;
      margin-right: 2.5%;
      cursor: pointer;
      box-sizing: border-box;
      margin-bottom: 1rem;
      &:nth-child(5n) {
        margin-right: 0;
      }
      .box {
        display: table;
        border: 1px solid $borderColor2;
        height: 200px;
      }
      .honor-img {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;
        width: 100%;
        > img {
          max-width: 100%;
        }
      }
      > p {
        text-align: center;
        font-size: .9rem;
        line-height: 2.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.company-envi {
  > ul {
    > li {
      float: left;
      width: 25%;
      height: 210px;
      padding: 6px;
      position: relative;
      box-sizing: border-box;
      cursor: pointer;
      overflow: hidden;
      &:first-child {
        width: 50%;
        height: 420px;
      }
      .img-item {
        display: block;
        // margin: 10px;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }
}
</style>