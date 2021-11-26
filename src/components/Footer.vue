<template>
    <div class="footer">
        <div class="container">
            <div class="foot-right">
                <h4>CONTACT US</h4>
                <h5>联系我们</h5>
                <p>{{ companyData.phone }}</p>
                <div class="contact-icon">
                    <div class="icon" @mouseenter="isShowCode=true" @mouseleave="isShowCode=false">
                        <i class="iconfont icon-weixin"></i>
                        <transition name="slide-fade">
                            <div v-if="isShowCode" class="qrcode"><img class="img-full" :src="companyData.wechatUrl" alt="微信二维码"></div>
                        </transition>
                    </div>
                    <a class="icon" :href="companyData.weibo" target="_blank"><i class="iconfont icon-xinlangweibo"></i></a>
                    <a class="icon" :href="`mailto:${ companyData.email }`" target="_blank"><i class="iconfont icon-email"></i></a>
                </div>
            </div>
            <div class="foot-left">
                <ul class="foot-nav mb-20">
                    <li v-for="item in menuList" :key="item.href"><router-link :to="item.href">{{ item.name }}</router-link></li>
                </ul>
                <div>
                    <h4>{{ companyData.name }}</h4>
                    <p>电话：{{ companyData.phone }}</p>
                    <p>邮箱：{{ companyData.email }}</p>
                    <p class="mb-10">地址：{{ companyData.address }}</p>
                    <p>©2021-2022 {{ companyData.name }}版权所有 <a href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备2021161022号-1</a></p>
                    <!-- <a href="/map">网站地图</a> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import menuData from '@/assets/data/menuData.json';
import { mapState } from 'vuex';
export default Vue.extend({
    name: 'VFooter',
    data() {
        return {
            menuList: menuData,
            isShowCode: false
        }
    },
    computed: {
        ...mapState(['companyData'])
    }
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.footer {
    background-color: $footBgColor;
    color: #eee;
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 1.3rem 0;
    margin-top: 4rem;
    a {
        color: #eee;
        margin: 0 5px;
        &:hover {
            text-decoration: underline;
        }
    }
    .foot-left {
        padding-left: .5em;
    }
    .foot-nav {
        padding-top: .1em;
        > li {
            display: inline-block;
            line-height: 1;
            border-right: 1px solid rgba($color: #fff, $alpha: .6);
            text-align: left;
            padding-right: 1.5em;
            margin-right: 1.5em;
            > a {
                margin: 0;
            }
            &:last-child {
                padding-right: 0em;
                margin-right: 0em;
                border-right: none;
            }
        }
    }
    .foot-right {
        float: right;
        text-align: right;
        padding-right: .5em;
        > h4 {
            font-size: 1.1rem;
            font-weight: normal;
        }
        > h5 {
            font-size: 0.8rem;
            font-weight: normal;
            margin-bottom: 1em;
        }
        > p {
            font-size: 1.8rem;
        }
        .contact-icon {
            margin-top: 1rem;
            .icon {
                display: inline-block;
                text-align: center;
                border-radius: 50%;
                line-height: 24px;
                width: 24px;
                height: 24px;
                font-size: .7rem;
                // box-sizing: border-box;
                border: 2px solid #eee;
                margin-left: 6px;
                cursor: pointer;
                position: relative;
                .qrcode {
                    width: 100px;
                    height: 100px;
                    background-color: #fff;
                    padding: 10px;
                    position: absolute;
                    bottom: 35px;
                    left: -48px;
                    &::after {
                        content: '\20';
                        width: 10px;
                        height: 10px;
                        background-color: #fff;
                        transform: rotate(45deg);
                        position: absolute;
                        bottom: -5px;
                        left: 50%;
                        margin-left: -5px;
                    }
                }
                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
    @media (max-width: $smallScreen) {
        .foot-right {
            display: none;
        }
    }
}

</style>