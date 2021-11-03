<template>
    <div class="float-warp">
        <ul>
            <li class="qq">
                <!-- // qq -->
                <span class="iconfont icon-qq"></span>
            </li>
            <li class="tel">
                <!-- // tel -->
                <p>
                    <span class="iconfont icon-f-tel"></span>
                    <span>{{ companyData.phone }}</span>
                </p>
            </li>
            <li class="wx">
                <!-- // weixin -->
                <span class="iconfont icon-weixin"></span>
            </li>
            <li class="top">
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
    name: 'Float',
    computed: {
        ...mapState(['companyData'])
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
            &.tel {
                &:hover {
                    width: 100px;
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