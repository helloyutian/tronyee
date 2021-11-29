<template>
    <div class="float-warp">
        <ul>
            <li class="qq" @mouseenter="isShowQQ=true" @mouseleave="isShowQQ=false">
                <!-- // qq -->
                <span class="iconfont icon-qq"></span>
                <transition name="left-fade">
                    <div v-if="isShowQQ" class="fade-box qqGroups">
                        <ul>
                            <li><a :href="`tencent://message/?Site=tianshigame.com&uin=${ companyData.qq }&Menu=yes`">QQ交谈</a></li>
                            <li><a :href="`tencent://message/?Site=tianshigame.com&uin=${ companyData.qq }&Menu=yes`">QQ交谈</a></li>
                            <li><a :href="`tencent://message/?Site=tianshigame.com&uin=${ companyData.qq }&Menu=yes`">售后服务</a></li>
                        </ul>
                    </div>
                </transition>
            </li>
            <li class="tel">
                <!-- // tel -->
                <p>
                    <span class="iconfont icon-f-tel"></span>
                    <span class="phone">{{ companyData.phone }}</span>
                </p>
            </li>
            <li class="wx" @mouseenter="isShowCode=true" @mouseleave="isShowCode=false">
                <!-- // weixin -->
                <span class="iconfont icon-weixin"></span>
                <transition name="left-fade">
                    <div v-if="isShowCode" class="fade-box qrcode">
                        <img class="img-full" :src="companyData.wechatUrl" alt="微信二维码">
                        <p>关注官方微信</p>
                    </div>
                </transition>
            </li>
            <li class="top" @click="gotop">
                <!-- // top -->
                <span class="iconfont icon-top"></span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
    name: 'VFloat',
    data() {
        return {
            isShowCode: false,
            isShowQQ: false,
            step: 0,
        }
    },
    computed: {
        ...mapState(['companyData'])
    },
    methods: {
        gotop() {
            const top = document.documentElement.scrollTop
            const sec = 300;
            this.step = top / sec * 16
            this.moveToTop()
        },
        moveToTop() {
            const top = document.documentElement.scrollTop - this.step
            document.documentElement.scrollTop = Math.max(0, top)
            if (document.documentElement.scrollTop > 0) {
                requestAnimationFrame(this.moveToTop)
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.float-warp {
    position: fixed;
    right: 0;
    top: 50%;
    margin-top: -100px;
    z-index: 10;
    > ul {
        > li {
            width: 50px;
            height: 50px;
            margin-bottom: 1px;
            color: #fff;
            background-color: $blueColor;
            opacity: .8;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
            position: relative;
            > a {
                color: #fff;
                display: block;
            }
            &.tel {
                > p {
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    right: 0;
                    background-color: $blueColor;
                    text-align: left;
                    transition: width ease-out .2s;
                    overflow: hidden;
                    > span {
                        vertical-align: middle;
                    }
                    .iconfont {
                        display: inline-block;
                        text-align: center;
                        width: 50px;
                    }
                    .phone {
                        letter-spacing: 1px;
                    }
                    &:hover {
                        width: 200px;
                        transition: width ease-in .2s;
                    }
                }
                
            }
            .fade-box {
                width: 150px;
                background-color: #fff;
                padding: 10px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 53px;
                box-shadow: 0 5px 10px rgba($color: #000000, $alpha: .2);
                border-radius: 6px;
                border: 1px solid $borderColor;
                &::after {
                    content: '\20';
                    width: 10px;
                    height: 10px;
                    background-color: #fff;
                    transform: rotate(45deg);
                    position: absolute;
                    bottom: 50%;
                    right: -5px;
                    margin-bottom: -5px;
                }
            }
            .qqGroups {
                > ul {
                    > li {
                        padding: 6px 8px;
                        > a {
                            display: block;
                            border: 1px solid $blueColor;
                            border-radius: 16px;
                            height: 32px;
                            line-height: 32px;
                            font-size: 16px;
                            text-align: center;
                        }
                    }
                }
            }
            .qrcode {
                > p {
                    color: #666;
                    font-size: 12px;
                    line-height: 16px;
                    padding-top: 5px;
                    text-align: center;
                }
            }
            &.top {
                background-color: #222;
            }
            &:hover {
                opacity: 1;
            }
            .iconfont {
                font-size: 1.8rem;
            }
        }
    }
    @media (max-width: $middleScreen) {
        display: none;
    }
}
</style>