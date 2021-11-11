<template>
    <div class="banner" :style="`background-image: url('http://www.chuangyisy.cn/uploads/201812/5c1cb588ba18f.jpg')`">
        <h1>{{ currentRoute.name }}</h1>
        <div v-if="!menuDisabled && currentRoute.childrens" class="nav-list">
            <div class="container">
                <ul class="clearfix">
                    <li
                        v-for="item in currentRoute.childrens"
                        :key="item.href"
                        :class="{ active: item.href === $route.path }"
                        :style="`width: ${ Math.floor(10000 / currentRoute.childrens.length) / 100 }%`"
                        @click="handdleMenuChange(item.type)"
                    >
                        <router-link :to="item.href">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
    name: 'MenuBanner',
    props: {
        menuDisabled: Boolean
    },
    computed: {
        ...mapState(['currentRoute'])
    },
    methods: {
        handdleMenuChange(type: string) {
            this.$emit('menuChange', type)
        }
    }
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.banner {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 250px;
    position: relative;
    margin-bottom: 4rem;
    > h1 {
        font-weight: normal;
        color: #fff;
        text-align: center;
        line-height: 250px;
        font-size: 1.8rem;
    }
    .nav-list {
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0;
        left: 0;
        background-color: rgba($color: #fff, $alpha: .8);
        ul {
            border-left: 1px solid $borderColor;
            > li {
                float: left;
                height: 60px;
                text-align: center;
                line-height: 60px;
                box-sizing: border-box;
                border-right: 1px solid $borderColor;
                position: relative;
                > a {
                    display: block;
                    position: relative;
                    z-index: 2;
                }
                &::after {
                    content: '\20';
                    width: 100%;
                    position: absolute;
                    height: 100%;
                    left: 0;
                    top: 0;
                    z-index: 1;
                    background-color: $blueColor;
                    transform-origin: right;
                    transform: scale(0, 1);
                    transition: transform ease-out .2s;
                }
                &:hover, &.active {
                    > a {
                        color: #fff;
                    }
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
</style>