<template>
  <div class="wrap">
    <div class="session slide">
        <swiper class="slide-banner swiper-no-swiping" :options="bannerOption">
            <swiper-slide v-for="item in bannerList" :key="item.id" class="banner-item">
                <div class="pic"><img class="img-cover swiper-lazy" :data-src="item.url" alt="" /></div>
                <div class="swiper-lazy-preloader"></div>
            </swiper-slide>
            <div class="swiper-pagination banner-pagination" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white banner-prev" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white banner-next" slot="button-next"></div>
        </swiper>
    </div>
    <div class="session">
        <div class="product-tit">
            <div class="container clearfix">
                <div class="fl tit">
                    <p>PRODUCTS AND SERVICES</p>
                    <h2>产品与服务</h2>
                </div>
                <p class="intro">深圳市泰成兴电子科技有限公司一直专注于国内外知名品牌的电阻、电容、电感、MOS管、车载芯片的行销以及物流供应链，主要品牌有：三星(SAMSUNG)、村田（MURATA)、国巨（YAGEO)、华科（WALSIN）、天二（EVER OHMS）、厚声（UNI-ROYAL）、风华(FENGHUA)、顺络（Sunlord）、晶导（JD）、长晶（JCET）、TDK、NXP、ON、MAXIM、INFINEON等。目前公司主要以国内贸易为主，现货形式销售，常备大量现货，拥有完整的型号库存。</p>
            </div>
        </div>
        <div ref="productElem" class="container">
            <div class="product-list">
                <ul class="clearfix">
                    <li v-for="(item, idx) in productTypeList" :key="item.href" v-show="!item.hideIndex">
                        <div class="product-item animated" :class="{fadeInDown: isShowProduct}" :style="`animation-delay: ${ (2 + idx * 5) / 10 }s`">
                            <div class="pic">
                                <img class="img-full" :src="item.img" :alt="item.name">
                            </div>
                            <div class="mark"></div>
                            <a class="txt" :href="item.href">
                                <h3>{{ item.name }}</h3>
                                <p>{{ item.en }}</p>
                            </a>
                        </div>
                    </li>
                    <!-- <li>
                        <div class="product-item animated" :class="{fadeInDown: isShowProduct}" style="animation-delay: .7s">
                            <div class="pic">
                                <img class="img-full" src="@/assets/img/b.jpg" alt="产品">
                            </div>
                            <div class="mark"></div>
                            <a class="txt" href="/product/ct">
                                <h3>村田贴片电容</h3>
                                <p>Capacitor category</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="product-item animated" :class="{fadeInDown: isShowProduct}" style="animation-delay: 1.2s">
                            <div class="pic">
                                <img class="img-full" src="@/assets/img/c.jpg" alt="产品">
                            </div>
                            <div class="mark"></div>
                            <a class="txt" href="/product/gj">
                                <h3>国巨贴片电容</h3>
                                <p>Capacitor category</p>
                            </a>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
    <div ref="aboutElem" class="session about">
        <div class="bg-img">
            <a class="animated imgScale infinite" href="/about" :style="`background-image: url('${ companyData.img }')`"></a>
            <!-- <img src="@/assets/img/a.jpg" alt=""> -->
        </div>
        <div class="about-intro">
            <h2>ABOUT US <span>关于我们</span></h2>
            <p>{{ getAboutContent() }}...</p>
            <div class="about-icon">
                <ul>
                    <li class="animated" :class="{ fadeInDown: isShowAbout }" style="animation-delay: .2s">
                        <div class="icon culture"></div>
                        <h3>企业文化</h3>
                        <p>Company Culture</p>
                    </li>
                    <li class="animated" :class="{ fadeInDown: isShowAbout }" style="animation-delay: .7s">
                        <div class="icon strength"></div>
                        <h3>公司实力</h3>
                        <p>Company strength</p>
                    </li>
                    <li class="animated" :class="{ fadeInDown: isShowAbout }" style="animation-delay: 1.2s">
                        <div class="icon patent"></div>
                        <h3>专利证书</h3>
                        <p>Patent Certificate</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div ref="newsElem" class="session news">
        <div class="container clearfix">
            <div class="tit">
                <router-link class="more fr" to="/news"><span>M</span>ORE+</router-link>
                <p>Exhibition</p>
                <h2>泰成兴动态</h2>
            </div>
            <div class="exhibition animated" :class="{ fadeInLeftBig: isShowNews }">
                <!-- <div class="tit">
                    <router-link class="more fr" to="/news/dynamic"><span>M</span>ORE+</router-link>
                    <p>Exhibition</p>
                    <h2>行业动态</h2>
                </div> -->
                <div class="con" @mouseenter.stop="stopAutoPlay('newsSwiper')" @mouseleave.stop="startAutoPlay('newsSwiper')">
                    <swiper ref="newsSwiper" class="exhibition-slide swiper-no-swiping" :options="newsOption">
                        <swiper-slide v-for="item in dynamicLlist" :key="item.cid" class="slide-item img-scale">
                            <router-link :to="`/news/${ item.cid }`"><img class="img-cover" :src="item.titlePic" alt=""></router-link>
                            <div class="txt">
                                <span>{{ $dateFormate(item.modified, 3, 'MM-DD') }}</span>
                                <p><router-link :to="`/news/${ item.cid }`">{{ item.title }}</router-link></p>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev exhi-prev" slot="button-prev"></div>
                        <div class="swiper-button-next exhi-next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
            <!-- 产品百科 -->
            <div class="wiki animated" :class="{ fadeInRightBig: isShowNews }">
                <div class="con">
                    <ul>
                        <template v-for="(item, idx) in wikiList">
                            <li v-if="idx === 0" :key="item.cid" class="first-item clearfix img-scale">
                                <div class="pic fl"><router-link :to="`/news/${ item.cid }`"><img class="img-cover" :src="item.titlePic" alt=""></router-link></div>
                                <div class="txt">
                                    <h3><router-link :to="`/news/${ item.cid }`">{{ item.title }}</router-link></h3>
                                    <p class="date">{{ $dateFormate(item.modified, 3, 'YYYY-MM-DD') }}</p>
                                    <p class="intro">{{ item.slug }}</p>
                                </div>
                            </li>
                            <li v-else :key="item.cid" class="item">
                                <router-link :to="`/news/${ item.cid }`">
                                    <span class="date" v-html="$dateFormate(item.modified, 3, '<i>DD</i>/MM')"></span>
                                    <p>{{ item.title }}</p>
                                </router-link>
                            </li>
                        </template>
                        <!-- <li class="item">
                            <router-link to="/news">
                                <span class="date" v-html="'<i>16</i>/11'"></span>
                                <p>是快乐的法律上地方</p>
                            </router-link>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
// swiper, swiperSlide
import { Component, Vue } from 'vue-property-decorator';
import '@/assets/scss/animate.css';
import { getArticleInfo, getOssByType } from '@/utils/apis';
import { getProductTypeList } from '@/utils'

@Component({})
export default class Home extends Vue {
    private bannerOption = {
        autoplay: 5000,
        initialSlide: 1,
        slidesPerView: 1,
        pagination: '.banner-pagination',
        paginationClickable: true,
        prevButton: '.banner-prev',
        nextButton: '.banner-next',
        observeParents: true,
        effect: 'fade',
        // preloadImages: false,
        // fade: false,
        autoplayDisableOnInteraction: false,
        lazyLoading: true,
        lazyLoadingInPrevNext : true
    };
    private newsOption = {
        autoplay: 4000,
        observeParents: true,
        prevButton: '.exhi-prev',
        nextButton: '.exhi-next',
        autoplayDisableOnInteraction: false,
        loop: true
    };
    private bannerList = []
    private dynamicLlist = []
    private wikiList = []
    // private productTop = 0
    // private aboutTop = 0
    // private newsTop = 0
    private isShowProduct = false
    private isShowAbout = false
    private isShowNews = false
    private productTypeList = getProductTypeList()

    get companyData() {
        return this.$store.state.companyData
    }
    private mounted() {
        this.getBannnerList()
        // this.getDynamicLlist()
        this.getWikiLlist()
        this.$nextTick(() => {
            document.addEventListener('scroll', this.handdleScroll);
            if ((this.$refs.productElem as any).offsetTop < document.documentElement.clientHeight) {
                this.isShowProduct = true
            }
        })
    }
    private beforeDestroy() {
        document.removeEventListener('scroll', this.handdleScroll);
    }
    private handdleScroll() {
        const productTop = (this.$refs.productElem as any).offsetTop
        const aboutTop = (this.$refs.aboutElem as any).offsetTop + 200
        const newsTop = (this.$refs.newsElem as any).offsetTop
        const scrollTop = document.documentElement.clientHeight + document.documentElement.scrollTop;
        if (scrollTop > productTop) {
            this.isShowProduct = true
            // console.log('product animate')
        }
        if (scrollTop > aboutTop) {
            this.isShowAbout = true
            // console.log('about animate')
        }
        if (scrollTop > newsTop) {
            this.isShowNews = true
            document.removeEventListener('scroll', this.handdleScroll)
            // console.log('news animate')
        }
    }
    // 获取轮播图
    private async getBannnerList() {
        const res = await getOssByType({
            type: '7'
        })
        this.bannerList = res.list
    }

    // 获取文章列表
    private async getWikiLlist() {
        const res = await getArticleInfo({
            pageNum: 1,
            pageSize: 7,
            // type: 'product'
        })
        // console.log(res)
        this.wikiList = res.list
        this.dynamicLlist = this.wikiList.splice(0, 3)
    }
    private getAboutContent() {
        const txt = this.companyData.introduce || ''
        const r = txt.indexOf('\r')
        const n = txt.indexOf('\n')
        return txt.substr(0, Math.min(r, n, 200))
    }
    // 停止自动播放
    private stopAutoPlay(elem: string) {
        (this.$refs[elem] as any).swiper.stopAutoplay()
    }
    // 继续自动播放
    private startAutoPlay(elem: string) {
        (this.$refs[elem] as any).swiper.startAutoplay()
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

.slide {
    width: 100%;
    .slide-banner {
        // height: 620px;
        .banner-item {
            padding-top: 26%;
            position: relative;
            background-color: #eee;
            .pic {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                bottom: 0;
                left: 0;
                z-index: 2;
            }
        }
    }
    .banner-prev {
        left: 20px;
    }
    .banner-next {
        right: 20px;
    }
    .banner-prev, .banner-next {
        padding: 20px 10px;
        background-color: rgba($color: #000000, $alpha: .3);
    }
    .banner-pagination {
        ::v-deep .swiper-pagination-bullet{
            width: 3rem;
            height: 5px;
            border-radius: 1px;
            background-color: #fff;
            opacity: .8;
            box-shadow: 0 2px 3px rgba($color: #000000, $alpha: .2);
            &.swiper-pagination-bullet-active {
                background-color: $blueColor;
                opacity: .9;
            }
        }
    }
}
.product-tit {
    padding: 1rem 0;
    background-color: #ececec;
    .tit {
        line-height: 1.5;
        margin: 0 5px;
    }
    .intro {
        font-size: .85rem;
        line-height: 1.6;
        padding-left: 30%;
        padding-right: 1em;
    }
}
.product-list {
    margin: 4rem 0 5rem;
    > ul {
        > li {
            width: 33.33%;
            position: relative;
            box-sizing: border-box;
            float: left;
            .product-item {
                position: relative;
                margin: 10px;
                height: 210px;
                .pic {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    > img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        object-position: center;
                    }
                    &::after {
                        content: '\20';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        background-color: rgba($color: #000000, $alpha: .3);
                        z-index: 2;
                        transition: all ease-out .2s;
                    }
                }
                .mark {
                    position: absolute;
                    width: 0%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    background-color: rgba($color: $blueColor, $alpha: .4);
                    z-index: 2;
                    transition: all ease-out .2s;
                }
                .txt {
                    display: block;
                    width: 100%;
                    height: 100%;
                    z-index: 3;
                    position: absolute;
                    top: 0;
                    left: 0;
                    color: #fff;
                    padding-left: 12%;
                    padding-top: 13%;
                    box-sizing: border-box;
                    > h3 {
                        line-height: 1.5;
                        font-size: 1.4rem;
                        font-weight: normal;
                    }
                    > p {
                        line-height: 1.5;
                        margin-bottom: .5em;
                        font-size: .8rem;
                        text-transform: uppercase;
                    }
                    &::after {
                        content: '\20';
                        width: 2em;
                        height: 2px;
                        display: inline-block;
                        background-color: #fff;
                        transition: width ease-out .2s;
                    }
                }
                &:hover {
                    .pic {
                        &::after {
                            background-color: rgba($color: #000000, $alpha: 0);
                            transition: all ease-in .2s;
                        }
                    }
                    .mark {
                        width: 100%;
                        transition: width ease-in .2s;
                    }
                    .txt {
                        &::after {
                            width: 4em;
                            transition: width ease-in .2s;
                        }
                    }
                }
            }
            
        }
    }
    @media (max-width: $middleScreen) {
        margin: 2rem 0 2rem;
        > ul {
            > li {
                .product-item {
                    height: 180px;
                }
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
.about {
    margin-bottom: 4rem;
    height: 485px;
    width: 100%;
    position: relative;
    .bg-img {
        width: 46%;
        height: 100%;
        overflow: hidden;
        > a {
            display: block;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        // > img {
        //     width: 100%;
        //     height: 100%;
        // }
    }
    .about-intro {
        background-color: $blueColor;
        position: absolute;
        right: 0;
        top: 0;
        width: 54%;
        height: 100%;
        padding-top: 50px;
        padding-left: 60px;
        padding-bottom: 50px;
        box-sizing: border-box;
        color: #fff;
        > h2 {
            position: relative;
            font-size: 2.4rem;
            line-height: 1.5;
            font-weight: 400;
            margin-bottom: 15px;
            > span {
                font-size: 1.6rem;
                font-weight: normal;
            }
            &::before {
                content: '\20';
                width: 1.6em;
                height: 2px;
                position: absolute;
                top: 50%;
                margin-top: -1px;
                left: -2.4em;
                background-color: #fff;
            }
        }
        > p {
            width: 90%;
            max-width: 500px;
            padding-right: 1rem;
            font-size: 0.9rem;
            line-height: 1.8;
            word-break: break-all;
        }
        .about-icon {
            padding-top: 30px;
            > ul {
                > li {
                    line-height: 1.5;
                    text-align: center;
                    display: inline-block;
                    width: 7rem;
                    margin-right: 4rem;
                    position: relative;
                    .icon {
                        width: 58px;
                        height: 72px;
                        display: inline-block;
                        overflow: hidden;
                        margin-bottom: 8px;
                        background-image: url('../assets/img/aIcon.png');
                        background-repeat: no-repeat;
                        transition: all ease .3s;
                        &.culture {
                            background-position: 0 0;
                        }
                        &.strength {
                            background-position: -58px 0;
                        }
                        &.patent {
                            background-position: -116px 0;
                        }
                    }
                    > h3 {
                        font-weight: normal;
                        font-size: 1rem;
                    }
                    > p {
                        font-size: .7rem;
                        opacity: .6;
                        white-space: nowrap;
                        
                    }
                    &::after {
                        content: '\20';
                        width: 2rem;
                        height: 1px;
                        background-color: rgba($color: #fff, $alpha: .6);
                        position: absolute;
                        top: 30%;
                        right: -3rem;
                    }
                    &:last-child {
                        margin-right: 0;
                        &::after{
                            display: none;
                        }
                    }
                    &:hover {
                        .icon {
                            background-position-y: -72px;
                            transition: all ease .3s;
                        }
                    }
                    @media (max-width: $middleScreen) {
                        margin-right: 2rem;
                        &::after {
                            right: -2rem;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: $smallScreen) {
        margin-bottom: 2rem;
        height: auto;
        .bg-img {
            width: 100%;
            height: 400px;
        }
        .about-intro {
            width: 100%;
            position: relative;
            > h2 {
                &::before {
                    display: none;
                }
            }
        }
    }
}
.news {
    
    .tit {
        margin-bottom: 20px;
        > p {
            font-size: 0.9rem;
            color: #888;
        }
        > h2 {
            font-size: 1.6rem;
            font-weight: normal;
        }
        .more {
            position: relative;
            letter-spacing: 2px;
            font-size: .9rem;
            display: block;
            margin-top: 2rem;
            > span {
                background-color: $blueColor;
                color: #fff;
                padding-top: 1em;
            }
        }
    }
    .exhibition {
        width: 36%;
        margin-right: 30px;
        float: left;
        position: relative;
        z-index: 2;
        .con {
            width: 100%;
            height: 375px;
            background-color: #eee;
            .exhibition-slide {
                height: 100%;
                border: 1px solid $borderColor2;
                .slide-item {
                    position: relative;
                    > img {
                        transform: scale(1);
                        transition: all ease 1s;
                    }
                    .txt {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 5rem;
                        background-color: rgba($color: #000000, $alpha: .5);
                        > p {
                            line-height: 5rem;
                            padding: 0 .5rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            position: relative;
                            z-index: 2;
                            > a {
                                color: #fff;
                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                        }
                        > span {
                            float: right;
                            background-color: $blueColor;
                            color: #fff;
                            display: block;
                            height: 100%;
                            line-height: 5rem;
                            width: 80px;
                            text-align: center;
                            position: relative;
                            z-index: 2;
                        }
                        &::after {
                            content: '\20';
                            background-color: $blueColor;
                            transform-origin: right;
                            transform: scale(0, 1);
                            width: 100%;
                            height: 5rem;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            transition: transform ease-out .2s;
                        }
                    }
                    &:hover {
                        > img {
                            transform: scale(1.1);
                            transition: all ease 1s;
                        }
                        .txt {
                            &::after {
                                transform-origin: left;
                                transform: scale(1);
                                transition: transform ease-in .2s;
                            }
                        }
                    }
                }
                .exhi-prev, .exhi-next {
                    width: 28px;
                    height: 30px;
                    opacity: 0;
                    background-color: #fff;
                    border: 5px solid #fff;
                    transition: all ease .2s;
                }
                &:hover {
                    .exhi-prev, .exhi-next {
                        opacity: .8;
                        transition: all ease .2s;
                    }
                }
            }
        }
    }
    .wiki {
        width: 100%;
        .con {
            > ul {
                > li {
                    font-size: .92rem;
                    margin-bottom: 10px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    position: relative;
                    
                    cursor: pointer;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    &.first-item {
                        .pic {
                            width: 30%;
                            height: 190px;
                            background-color: #eee;
                            margin-right: 15px;
                            border: 1px solid $borderColor2;
                            overflow: hidden;
                        }
                        .txt {
                            
                            > h3 {
                                font-size: 1.1rem;
                                font-weight: normal;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                line-height: 1.5;
                            }
                            .date {
                                font-size: .5rem;
                                opacity: .6;
                                line-height: 2;
                            }
                            .intro {
                                margin-top: 1rem;
                                font-size: .92rem;
                                color: #666;
                                line-height: 1.2rem;
                                max-height: 6rem;
                                overflow: hidden;
                            }

                        }
                    }
                    &.item {
                        height: 3rem;
                        line-height: 3rem;
                        background-color: #eee;
                        transition: all ease-out .2s;
                        .date {
                            float: left;
                            font-size: .7rem;
                            color: #999;
                            letter-spacing: 1px;
                            padding: 0 2.5em 0 1.5em;
                            &::v-deep i {
                                font-style: normal;
                                font-size: 1.5rem;
                                color: #686868;
                            }
                        }
                        > a {
                            display: block;
                            &::after {
                                content: '→';
                                position: absolute;
                                line-height: 3rem;
                                right: 1em;
                                top: 0;
                            }
                        }
                        &:hover {
                            background-color: $blueColor;
                            transition: all ease-in .2s;
                            color: #fff;
                            > a {
                                color: #fff;
                            }
                            .date {
                                color: #fff;
                                &::v-deep i {
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
     @media (max-width: $smallScreen) {
        .exhibition {
            width: 100%;
            float: none;
            margin-bottom: 2rem;
        }
        
    }
}
</style>
