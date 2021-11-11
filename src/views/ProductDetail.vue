<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner menu-disabled></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <div class="local"><span class="iconfont icon-home"></span> 您的位置：<router-link to="/">首页</router-link> → <router-link to="/product">产品中心</router-link> → <router-link :to="`/product/${ type }`">{{ $getRouteItemName(type, currentRoute.childrens) }}</router-link></div>
            <!-- 图片预览，产品属性 -->
            <div class="session clearfix">
                <!-- 轮播图 -->
                <div class="viewer fl">
                    <swiper class="viewer-slide" ref="viewerSlide" :options="viewerSlideOpt">
                        <swiper-slide v-for="(item, idx) in picList" :key="idx"><img class="img-full" :src="item" alt=""></swiper-slide>
                        <!-- <swiper-slide><img class="img-full" src="http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg" alt=""></swiper-slide> -->
                        <div class="swiper-button-prev swiper-button-white viewer-prev" slot="button-prev"></div>
                        <div class="swiper-button-next swiper-button-white viewer-next" slot="button-next"></div>
                    </swiper>
                    <swiper class="viewer-thum" ref="viewerThum" :options="viewerThumOpt">
                        <swiper-slide v-for="(item, idx) in picList" :key="idx" class="thum-item">
                            <div class="thum-img" :class="{ active: selectViewerPic === idx }" @click="handdleClickThum(idx)"><img :src="item" alt=""></div>
                        </swiper-slide>
                        <div v-if="picList.length > 4" class="swiper-button-prev swiper-button-white thum-prev" slot="button-prev"></div>
                        <div v-if="picList.length > 4" class="swiper-button-next swiper-button-white thum-next" slot="button-next"></div>
                    </swiper>
                    <!-- <div class="pic"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg" alt=""></div> -->
                    <!-- <div>swiper</div> -->
                </div>
                <!-- 属性 -->
                <div class="pro-attr">
                    <h1>CC0805KRX7R9BB102</h1>
                    <div class="dtl">
                        <p>产品类别：村田贴片电容</p>
                        <p>产品描述：</p>
                        <p>产品型号：GRM31CR61A476ME15L</p>
                        <p>封装尺寸：1206</p>
                        <p>容 值：2.2UF</p>
                        <p>材 质：X7R</p>
                        <p>电 压：50V</p>
                        <p>精 度：±10%</p>
                        <p>厚 度：0.65T</p>
                        <p>耐高温：-55℃～+125℃</p>
                    </div>
                    <div class="tel"><span class="iconfont icon-f-tel"></span><span class="name">服务热线：</span>0755-83257779</div>
                    <div class="btns">
                        <a class="online" href="/product"><span class="iconfont icon-qq1"></span> 在线咨询</a>
                        <a class="back" href="/product"><span class="iconfont icon-aui-icon-back"></span> 返回列表</a>
                    </div>
                </div>
            </div>
            <!-- 产品说明 -->
            <div class="session">
                <div class="dtl-tit">产品说明</div>
                <div class="dtl-con">
                    <p>&nbsp;</p>
                    <p>特性： </p>
                    <p>1．外形尺寸小。 </p>
                    <p>2．闭合电路，无交互干扰，适合于高密度安装。 </p>
                    <p>3．无方向性，规范化的自动贴片安装外形。 </p>
                    <p>4．可焊性和耐焊性优，适合于流焊和再流焊。</p>
                    <p>&nbsp;</p>
                    <p>应用： </p>
                    <p>被广泛用于笔记本电脑数位电视，数位录放影机，列表机，硬式磁碟机，个人电脑和其安一般消费性及电脑主品上输入、输出线路之杂讯消除。</p>
                </div>
            </div>
            <!-- 相关产品 -->
            <div class="session">
                <div class="dtl-tit">相关产品</div>
                <div class="pro-list">
                    <ul class="clearfix">
                        <li class="img-scale">
                            <div class="pic"><router-link to="/"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202004/5e9ea07714e9a.jpg" alt="a"></router-link></div>
                            <p><router-link to="/">GRM033R61C473KE84D</router-link></p>
                        </li>
                        <li class="img-scale">
                            <div class="pic"><router-link to="/"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202004/5e9ea07714e9a.jpg" alt="a"></router-link></div>
                            <p><router-link to="/">GRM033R61C473KE84D</router-link></p>
                        </li>
                        <li class="img-scale">
                            <div class="pic"><router-link to="/"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202004/5e9ea07714e9a.jpg" alt="a"></router-link></div>
                            <p><router-link to="/">GRM033R61C473KE84D</router-link></p>
                        </li>
                        <li class="img-scale">
                            <div class="pic"><router-link to="/"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202004/5e9ea07714e9a.jpg" alt="a"></router-link></div>
                            <p><router-link to="/">GRM033R61C473KE84D</router-link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Product',
    data() {
        return {
            productList: [],
            total: 0,
            queryParam: {
                pageNum: 1,
                pageSize: 20
            },
            picList: [
                'http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg',
                'http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg',
                'http://www.chuangyisy.cn/uploads/202004/5e9ea16d79fd9.jpg',
                'http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg',
                'http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg',
                'http://www.chuangyisy.cn/uploads/202004/5e9ea16d79fd9.jpg'
            ],
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
            }
        }
    },
    computed: {
        type() {
            return this.$route.params.type
        },
        id() {
            return this.$route.params.id
        },
        currentRoute(): RouteItemType {
            return this.$store.state.currentRoute
        }
    },
    mounted() {
        this.initSwiper()
        this.$nextTick(() => {
            // console.log('mounted detail')
            if (this.type && !this.currentRoute.childrens?.some((item) => item.type === this.type )) {
                return this.$router.replace('/404')
            }
            // this.getDownloadInfo()
        })
    },
    methods: {
        initSwiper() {
            this.viewerSlide = (this.$refs.viewerSlide as any).swiper
            // this.viewerThum = this.$refs.viewerThum
        },
        handdleClickThum(i: number) {
            this.selectViewerPic = i
            this.viewerSlide.slideTo(i)
        }
        // async getDownloadInfo() {
        //     const res = await getOssInfo({
        //         ...this.queryParam,
        //         type: this.type
        //     })
        //     this.productList = res.list
        //     this.total = res.total
        // }
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
    margin-right: 30px;
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
}
.pro-attr {
    padding-left: 530px;
    > h1 {
        font-size: 1.6rem;
        line-height: 1.2;
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
        margin-top: 1rem;
        margin-bottom: 2.5rem;
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
            margin-right: 1rem;
            border-radius: .5rem;
            transition: all ease .2s;
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
    > p {
        margin-bottom: .1em;
    }
}
.pro-list {
    > ul {
        > li {
            width: 25%;
            float: left;
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
}
</style>