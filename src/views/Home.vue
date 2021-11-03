<template>
  <div class="warp">
    <!-- // 导航 -->
    <v-header />
    <div class="session slide">
        <swiper class="slide-banner swiper-no-swiping" :options="bannerOption">
            <swiper-slide><img class="img-full" src="@/assets/img/a.jpg" alt="a" /></swiper-slide>
            <swiper-slide><img class="img-full" src="@/assets/img/b.jpg" alt="a" /></swiper-slide>
            <swiper-slide><img class="img-full" src="@/assets/img/a.jpg" alt="a" /></swiper-slide>
            <div class="swiper-pagination banner-pagination" slot="pagination"></div>
            <div class="swiper-button-prev banner-prev" slot="button-prev"></div>
            <div class="swiper-button-next banner-next" slot="button-next"></div>
        </swiper>
    </div>
    <div class="session">
        <div class="product-tit">
            <div class="container clearfix">
                <div class="fl tit">
                    <p>PRODUCTS AND SERVICES</p>
                    <h2>产品与服务</h2>
                </div>
                <p class="intro">深圳创亿实业有限公司一直专注于国内外知名品牌MLCC电容的行销以及物流供应链，主要品牌有：三星(SAMSUNG)、村田（MURATA)、国巨（YAGEO)、华科（WALSIN）、三环（CCTC）等。目前公司主要以国内贸易为主，现货形式销售，常备大量现货，拥有完整的型号库存。</p>
            </div>
        </div>
        <div class="container">
            <div class="product-list">
                <ul class="clearfix">
                    <li>
                        <div class="pic">
                            <img class="img-full" src="@/assets/img/b.jpg" alt="产品">
                        </div>
                        <div class="mark"></div>
                        <a class="txt" href="#">
                            <h3>数据的克里夫</h3>
                            <p>skjf dskfjewlk df</p>
                        </a>
                    </li>
                    <li>
                        <div class="pic">
                            <img class="img-full" src="@/assets/img/b.jpg" alt="产品">
                        </div>
                        <div class="mark"></div>
                        <a class="txt" href="#">
                            <h3>数据的克里夫</h3>
                            <p>skjf dskfjewlk df</p>
                        </a>
                    </li>
                    <li>
                        <div class="pic">
                            <img class="img-full" src="@/assets/img/b.jpg" alt="产品">
                        </div>
                        <div class="mark"></div>
                        <a class="txt" href="#">
                            <h3>数据的克里夫</h3>
                            <p>skjf dskfjewlk df</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="session about">
        <div class="bg-img">
            <span class="animated imgScale infinite" :style="`background-image: url('${require('@/assets/img/a.jpg')}')`"></span>
            <!-- <img src="@/assets/img/a.jpg" alt=""> -->
        </div>
        <div class="about-intro">
            <h2>ABOUT US <span>关于创亿</span></h2>
            <p>深圳创亿实业有限公司多年来一直专注于国内外知名品牌MLCC电容的行销以及物流供应链，主要品牌有：三星(SAMSUNG)、村田（MURATA)、国巨（YAGEO)、华科（WALSIN）、三环（CCTC）等。</p>
            <div class="about-icon">
                <ul>
                    <li>
                        <div class="icon culture"></div>
                        <h3>企业文化</h3>
                        <p>Company Culture</p>
                    </li>
                    <li>
                        <div class="icon"></div>
                        <h3>公司实力</h3>
                        <p>Company strength</p>
                    </li>
                    <li>
                        <div class="icon"></div>
                        <h3>专利证书</h3>
                        <p>Patent Certificate</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="session news">
        <div class="container">
            <div class="exhibition">
                <div class="tit">
                    <router-link class="more fr" to="/"><span>M</span>ORE+</router-link>
                    <p>Exhibition</p>
                    <h2>创亿动态</h2>
                </div>
                <div class="con">
                    <swiper class="exhibition-slide swiper-no-swiping" :options="newsOption">
                        <swiper-slide class="slide-item">
                            <img class="img-cover" src="/assets/img/b.jpg" alt="xxx">
                            <div class="txt">
                                <span>10-27</span>
                                <p>数据库的flak的，上的飞机咋啦</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="slide-item">
                            <img class="img-cover" src="/assets/img/b.jpg" alt="xxx">
                            <div class="txt">
                                <span>10-27</span>
                                <p>数据库的flak的，上的飞机咋啦</p>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev exhi-prev" slot="button-prev"></div>
                        <div class="swiper-button-next exhi-next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
            <!-- 产品百科 -->
            <div class="wiki">
                <div class="tit">
                    <router-link class="more fr" to="/"><span>M</span>ORE+</router-link>
                    <p>Brand Dynamics</p>
                    <h2>产品百科</h2>
                </div>
                <div class="con">
                    <ul>
                        <li class="first-item clearfix">
                            <div class="pic fl"><img class="img-full" src="x.jpg" alt="xxx"></div>
                            <div class="txt">
                                <h3>速度加快立法</h3>
                                <p class="date">2021-10-27</p>
                                <p class="intro">本文档是li的私有项目的接口文档，以下为当前项目下的公共参数。</p>
                            </div>
                        </li>
                        <li class="item">
                            <div class="date"><span>16</span>/11</div>
                            <p>是快乐的法律上地方</p>
                        </li>
                        <li class="item">
                            <div class="date"><span>16</span>/11</div>
                            <p>是快乐的法律上地方</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- // 页脚 -->
    <v-footer />
    <!-- 友情链接 -->
    <v-links />
  </div>
</template>

<script lang="ts">
// swiper, swiperSlide
import { Component, Vue } from 'vue-property-decorator';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
@Component({
  components: {
    swiper,
    swiperSlide,
  },
})
export default class Home extends Vue {
    private bannerOption = {
        autoplay: 5000,
        pagination: '.banner-pagination',
        paginationClickable: true,
        prevButton: '.banner-prev',
        nextButton: '.banner-next',
        observeParents: true,
        effect: 'fade',
        fade: true,
        autoplayDisableOnInteraction: false,
    };
    private newsOption = {
        autoplay: 3000,
        observeParents: true,
        effect: 'fade',
         prevButton: '.exhi-prev',
        nextButton: '.exhi-next',
        fade: true,
        autoplayDisableOnInteraction: false,
    };
    private mounted() {
        document.addEventListener('scroll', this.handdleScroll);
        console.log(document.documentElement.clientHeight);
        console.log(document.documentElement.scrollTop);
    }
    /**
     * handdleScolle
     */
    public handdleScroll() {
        // console.log(document.documentElement.clientHeight)
        // console.log(document.documentElement.scrollTop)
        const newsHeight = 0
        const scrollHeight = document.documentElement.clientHeight + document.documentElement.scrollTop;
        if (scrollHeight >= newsHeight) {
            console.log('add animate class');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

.slide {
    width: 100%;
    .slide-banner {
        height: 620px;
        max-height: 620px;
    }
}
.product-tit {
    padding: 1rem 0;
    background-color: #ececec;
    .tit {
        padding-right: 18%;
        line-height: 1.5;
    }
    .intro {
        font-size: .85rem;
        line-height: 1.5;
    }
}
.product-list {
    margin: 4rem 0 5rem;
    > ul {
        display: flex;
        > li {
            width: 33.33%;
            position: relative;
            margin-right: 15px;
            box-sizing: border-box;
            &:last-child {
                margin-right: 0;
            }
            .pic {
                position: relative;
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
.about {
    margin-bottom: 4rem;
    height: 485px;
    width: 100%;
    position: relative;
    .bg-img {
        width: 46%;
        height: 100%;
        overflow: hidden;
        > span {
            display: block;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        > img {
            width: 100%;
            height: 100%;
        }
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
            width: 65%;
            font-size: 0.9rem;
            line-height: 1.8;
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
                        background-color: #eee;
                        margin-bottom: 8px;
                    }
                    > h3 {
                        font-weight: normal;
                        font-size: 1rem;
                    }
                    > p {
                        font-size: .7rem;
                        opacity: .6;
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
                    
                }
            }
        }
    }
}
.news {
    .container {
        display: flex;
    }
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
        flex: none;
        width: 36%;
        margin-right: 30px;
        .con {
            width: 100%;
            height: 375px;
            background-color: #eee;
            .exhibition-slide {
                height: 100%;
                .slide-item {
                    position: relative;
                    .img-cover {
                        background: #eee;
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
                            color: #fff;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            position: relative;
                            z-index: 2;
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
                        .txt {
                            &::after {
                                transform-origin: left;
                                transform: scale(1);
                                transition: transform ease-in .2s;
                            }
                        }
                    }
                }
            }
        }
    }
    .wiki {
        width: 100%;
        flex: auto;
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
                            > span {
                                font-size: 1.5rem;
                                color: #686868;
                            }
                        }
                        &::after {
                            content: '→';
                            position: absolute;
                            line-height: 3rem;
                            right: 1em;
                            top: 0;
                        }
                        &:hover {
                            background-color: $blueColor;
                            color: #fff;
                            transition: all ease-in .2s;
                            .date {
                                color: #fff;
                                > span {
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
}
// animate.css
.animated {
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@keyframes imgScale {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
.imgScale {
    -webkit-animation-name: imgScale;
    animation-name: imgScale;
    -webkit-animation-duration: 25s;
    animation-duration: 25s;
}

</style>
