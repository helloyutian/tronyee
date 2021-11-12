<template>
  <div class="wrap">
    <!-- // 栏目标题 -->
    <menu-banner></menu-banner>
    <!--------------- 内容 ---------------->
    <!-- 关于 -->
    <div id="intro" ref="intro" class="session pt-0">
      <div class="session-tit">关于创亿</div>
      <div class="container clearfix">
        <div class="company-pic"><img class="img-full" :src="companyData.img" :alt="companyData.name"></div>
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
                <!-- <el-image class="honor-img img-scale" fit="contain" :src="item.url" :preview-src-list="honorImgList"></el-image> -->
                <div class="honor-img img-scale" @click="showPreview(item.url)">
                  <img class="img-full" :src="item.url" alt="">
                </div>
              </div>
              <p>{{ item.name }}</p>
            </li>
            <!-- <li>
              <div class="box">
                <div class="honor-img img-scale" @click="showPreview('https://c-ssl.duitang.com/uploads/item/201903/30/20190330192531_jKAKG.jpeg')"><img class="img-full" src="http://www.chuangyisy.cn/uploads/201910/5daaeddbdec5d.jpg" alt=""></div>
              </div>
              <p>深圳市电子商会会员单位</p>
            </li>
            <li>
              <div class="box">
                <div class="honor-img img-scale" @click="showPreview('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-0a569452fd53b9349885f469d89380df_r.jpg%3Fsource%3D1940ef5c&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639300375&t=19764762f753ddfa8448993054bd0c4d')"><img class="img-full" src="http://www.chuangyisy.cn/uploads/201910/5daaeddbdec5d.jpg" alt=""></div>
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
              <div class="item-box">
                <span class="img-item" :style="`background-image: url('${ item.url }')`" @click="showPreview(item.url)"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <preview-dialog v-if="isShowPreview" :isShowPreview.sync="isShowPreview" :url="imgUrl" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'About',
  data() {
    return {
      isShowPreview: false,
      imgUrl: ''
    }
  },
  computed: {
    ...mapState(['companyData']),
    type(): string {
      return this.$route.params.type
    },
    honorImgList(): string[] {
      return this.companyData.honorImgs.map((item: any) => item.url)
    },
    envImgList(): string[] {
      return this.companyData.envImgs.map((item: any) => item.url)
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
    },
    showPreview(url: string) {
      this.imgUrl = url
      this.isShowPreview = true
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
  width: 100%;
  > ul {
    > li {
      float: left;
      width: 17.6%;
      margin-right: 1.2%;
      margin-left: 1.2%;
      cursor: pointer;
      box-sizing: border-box;
      margin-bottom: 1rem;
      // &:nth-child(5n) {
      //   margin-right: 0;
      // }
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
  @media (max-width: $largeScreen) {
    > ul {
      > li {
        width: 23%;
        margin-right: 1%;
        margin-left: 1%;
      }
    }
  }
  @media (max-width: $middleScreen) {
    > ul {
      > li {
        width: 31.33%;
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
      position: relative;
      cursor: pointer;
      margin-bottom: 12px;
      &:first-child {
        width: 50%;
        height: 432px;
      }
      .item-box {
        height: 100%;
        margin: 0 6px;
        overflow: hidden;
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
}
</style>