<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner :src="require('@/assets/img/cpzx.jpg')" menu-disabled></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <div class="local"><span class="iconfont icon-home"></span> 您的位置：<router-link to="/">首页</router-link> → <router-link to="/product">产品中心</router-link> → <router-link :to="`/product/${ type }`">{{ $getRouteItemName(type, currentRoute.childrens) }}</router-link></div>
            <!-- 图片预览，产品属性 -->
            <div class="session clearfix">
                <!-- 轮播图 -->
                <div class="viewer fl">
                    <swiper class="viewer-slide" ref="viewerSlide" :options="viewerSlideOpt">
                        <swiper-slide v-for="(item, idx) in product.picList" :key="idx"><img class="img-full" :src="item" alt=""></swiper-slide>
                        <!-- <swiper-slide><img class="img-full" src="http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg" alt=""></swiper-slide> -->
                        <div class="swiper-button-prev swiper-button-white viewer-prev" slot="button-prev"></div>
                        <div class="swiper-button-next swiper-button-white viewer-next" slot="button-next"></div>
                    </swiper>
                    <swiper class="viewer-thum" ref="viewerThum" :options="viewerThumOpt">
                        <swiper-slide v-for="(item, idx) in product.picList" :key="idx" class="thum-item">
                            <div class="thum-img" :class="{ active: selectViewerPic === idx }" @click="handdleClickThum(idx)"><img :src="item" alt=""></div>
                        </swiper-slide>
                        <template v-if="product.picList.length > 4">
                            <div class="swiper-button-prev swiper-button-white thum-prev" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white thum-next" slot="button-next"></div>
                        </template>
                    </swiper>
                    <!-- <div class="pic"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg" alt=""></div> -->
                    <!-- <div>swiper</div> -->
                </div>
                <!-- 属性 -->
                <div class="pro-attr">
                    <h1>{{ product.name }}</h1>
                    <div class="dtl">
                        <p>产品类别：{{ $getRouteItemName(product.type, currentRoute.childrens) }}</p>
                        <p>产品描述：{{ product.description }}</p>
                        <p>产品型号：{{ product.model }}</p>
                        <p>封装尺寸：{{ product.size }}</p>
                        <p>容 值：{{ product.volume }}</p>
                        <p>材 质：{{ product.material }}</p>
                        <p>电 压：{{ product.voltage }}</p>
                        <p>精 度：{{ product.precision }}</p>
                        <p>厚 度：{{ product.thickness }}</p>
                        <p>耐高温：{{ product.temperature }}</p>
                    </div>
                    <div class="tel"><span class="iconfont icon-f-tel"></span><span class="name">服务热线：</span>{{ companyData.phone }}</div>
                    <div class="btns">
                        <a class="online" :href="`tencent://message/?Site=tianshigame.com&uin=${ companyData.qq }&Menu=yes`"><span class="iconfont icon-qq1"></span> 在线咨询</a>
                        <a class="back" href="/product"><span class="iconfont icon-aui-icon-back"></span> 返回列表</a>
                    </div>
                </div>
            </div>
            <!-- 产品说明 -->
            <div class="session">
                <div class="dtl-tit">产品说明</div>
                <div class="dtl-con">
                    {{ product.introduce }}
                </div>
            </div>
            <!-- 相关产品 -->
            <div class="session">
                <div class="dtl-tit">相关产品</div>
                <div class="pro-list">
                    <ul class="clearfix">
                        <li v-for="item in relativeProList" :key="item.id" class="img-scale">
                            <div class="pic"><router-link :to="`/product/${ item.type }/${ item.id }`"><img class="img-full" :src="item.img" alt=""></router-link></div>
                            <p><router-link :to="`/product/${ item.type }/${ item.id }`">{{ item.name }}</router-link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getProductGet, getProductInfo } from '@/utils/apis';

export default Vue.extend({
    name: 'ProductDetail',
    data() {
        return {
            product: {
                picList: []
            },
            viewerSlide: null as any,
            selectViewerPic: 0,
            viewerSlideOpt: {
                autoplay: false,
                observeParents: true,
                prevButton: '.viewer-prev',
                nextButton: '.viewer-next',
                onSlideChangeStart: (swiper: any): void => {
                    (this as any).selectViewerPic = swiper.activeIndex
                }
            },
            viewerThumOpt: {
                autoplay: false,
                observeParents: true,
                prevButton: '.thum-prev',
                nextButton: '.thum-next',
                slidesPerView: 4
            },
            relativeProList: []
        }
    },
    computed: {
        type() {
            return this.$route.params.type
        },
        id() {
            return this.$route.params.id
        },
        companyData() {
            return this.$store.state.companyData
        },
        currentRoute(): RouteItemType {
            return this.$store.state.currentRoute
        }
    },
    watch: {
        id() {
            this.getProductList()
            this.getProductDetail()
        }
    },
    mounted() {
        this.initSwiper()
        this.$nextTick(() => {
            if (this.type && !this.currentRoute.childrens?.some((item) => item.type === this.type )) {
                return this.$router.replace('/404')
            }
            this.getProductList()
        })
        this.getProductDetail()
    },
    methods: {
        initSwiper() {
            this.viewerSlide = (this.$refs.viewerSlide as any).swiper
        },
        handdleClickThum(i: number) {
            this.selectViewerPic = i
            this.viewerSlide.slideTo(i)
        },
        async getProductList() {
            const res = await getProductInfo({
                pageNum: 1,
                pageSize: 4,
                type: this.type
            })
            this.relativeProList = res.list
        },
        async getProductDetail() {
            const res = await getProductGet({
                id: this.id
            })
            this.product = res
            this.product.picList = res.img.split(',')
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.session {
    position: relative;
}
.viewer {
    width: 500px;
    min-height: 500px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid $borderColor;
    background-color: #f5f5f5;
    .viewer-slide {
        .viewer-prev, .viewer-next {
            padding: 8px 3px;
            background-color: rgba($color: #000000, $alpha: .6);
        }
    }
    .viewer-thum {
        margin-top: 10px;
        .thum-item {
            // border: 1px solid $borderColor2;
            position: relative;
            cursor: pointer;
            .thum-img {
                margin: 0 3px;
                border: 1px solid $borderColor2;
                box-sizing: border-box;
                transition: all ease .2s;
                > img {
                    max-width: 100%;
                }
                &:hover, &.active {
                    border-color: $blueColor;
                    transition: all ease .2s;
                }
            }
        }
        .thum-prev, .thum-next {
            width: 20px;
            background-size: contain;
            background-position: center;
            background-color: rgba($color: #000000, $alpha: .6);
        }
    }
    @media (max-width: $middleScreen) {
        width: 50%;
    }
    @media (max-width: $smallScreen) {
        width: 100%;
        border: none;
        float: none;
    }
}
.pro-attr {
    padding-left: 530px;
    > h1 {
        font-size: 1.6rem;
        line-height: 1.2;
        padding-top: .5rem;
        padding-bottom: 1rem;
        font-weight: normal;
        border-bottom: 1px solid $borderColor2;
        color: $mainTextColor;
    }
    .dtl {
        padding: 1.2rem 0;
        > p {
            line-height: 2;
            font-size: .92rem;
        }
    }
    .tel {
        font-size: 1.2rem;
        color: $blueColor;
        margin-top: .5rem;
        margin-bottom: 2rem;
        > .iconfont {
            font-size: 2rem;
        }
        // .name {
        //     font-size: .92rem;
        // }
    }
    .btns {
        border-top: 1px solid $borderColor2;
        padding-top: 2rem;
        > a {
            display: inline-block;
            text-align: center;
            line-height: 50px;
            width: 15rem;
            height: 50px;
            border: 2px solid #222;
            border-radius: .5rem;
            transition: all ease .2s;
            margin-bottom: 1rem;
            &.online {
                margin-right: 1rem;
            }
            &:hover, &:active, &.online {
                background-color: #333;
                color: #fff;
                transition: all ease .2s;
            }
            .iconfont {
                font-size: 1.8rem;
                vertical-align: bottom;
            }
        }
    }
    @media (max-width: $middleScreen) {
        padding-left: 52%;
        .btns {
            > a {
                width: 11rem;
            }
        }
    }
    @media (max-width: $smallScreen) {
        padding-left: 0;
        .btns {
            text-align: center;
            > a {
                width: 48%;
                margin-right: 1%;
            }
        }
    }
}
.dtl-tit {
    margin-top: 3rem;
    font-size: 1.2rem;
    line-height: 3rem;
    color: $blueColor;
    position: relative;
    border-bottom: 1px solid $borderColor;
    margin-bottom: 1rem;
    &::after {
        content: '\20';
        width: 4em;
        height: 1px;
        position: absolute;
        left: 0;
        bottom: -1px;
        background-color: $blueColor;
    }
}
.dtl-con {
    font-size: .92rem;
    line-height: 1.5;
    white-space: pre-wrap;
    > p {
        margin-bottom: .1em;
    }
}
.pro-list {
    > ul {
        > li {
            width: 25%;
            float: left;
            margin-top: 1.5rem;
            .pic {
                margin: 0 3%;
            }
            > p {
                margin: 0 3%;
                font-size: .9rem;
                line-height: 3;
                overflow: hidden;
                text-align: center;
                white-space: nowrap;
            }
        }
    }
    @media (max-width: $smallScreen) {
        > ul {
            > li {
                width: 50%;
            }
        }
    }
}
</style>