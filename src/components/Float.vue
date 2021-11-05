<template>
    <div class="float-warp">
        <ul>
            <li class="qq">
                <!-- // qq -->
                <a :href="`tencent://message/?Site=tianshigame.com&uin=${ companyData.qq }&Menu=yes`">
                    <span class="iconfont icon-qq"></span>
                </a>
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
                    <div v-if="isShowCode" class="qrcode">
                        <img class="img-full" src="http://www.chuangyisy.cn/uploads/201910/5d9fe9a2ed377.png" alt="微信二维码">
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
            .qrcode {
                width: 100px;
                // height: 100px;
                background-color: #fff;
                padding: 10px;
                position: absolute;
                top: -44px;
                right: 55px;
                box-shadow: 0 5px 10px rgba($color: #000000, $alpha: .2);
                > p {
                    color: #666;
                    font-size: 12px;
                    line-height: 16px;
                    padding-top: 5px;
                    text-align: center;
                }
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
}
</style>