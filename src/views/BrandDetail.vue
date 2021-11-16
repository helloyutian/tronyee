<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner :src="require('@/assets/img/ppzq.jpg')" menu-disabled></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <div class="local"><span class="iconfont icon-home"></span> 您的位置：<router-link to="/">首页</router-link> → <router-link to="/brand">品牌专区</router-link></div>
            <!-- 标题 -->
            <h1 class="article-tit">{{ brandData.name }}</h1>
            <p class="article-time"><span><i class="iconfont icon-time"></i> {{ $dateFormate(brandData.modifyTime, 'YYYY-MM-DD') }}</span><span><i class="iconfont icon-View"></i> ({{ 60 + brandData.id * 3 }})次浏览</span></p>
            <div class="article-main">
                <p><img :src="brandData.img" alt=""></p>
                <p>{{ brandData.description }}</p>
            </div>
            <div class="detail-pager clearfix">
                <div class="fl">
                    <p class="nav-link">
                        上一篇：
                        <router-link v-if="prevBrand" :to="`/brand/${ prevBrand.id }`">{{ prevBrand.name }}</router-link>
                        <span v-else>无</span>
                    </p>
                    <p class="nav-link">
                        下一篇：
                        <router-link v-if="nextBrand" :to="`/brand/${ nextBrand.id }`">{{ nextBrand.name }}</router-link>
                        <span v-else>无</span>
                    </p>
                </div>
                <router-link class="fr btn-back" to="/brand"><span class="iconfont icon-aui-icon-back"></span> 返回列表</router-link>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { getBrandInfo } from '@/utils/apis'
import Vue from 'vue';

export default Vue.extend({
    name: 'BrandDetail',
    data() {
        return {
            brandList: [],
            brandData: {},
            nextBrand: null,
            prevBrand: null,
            queryParam: {
                pageNum: 1,
                pageSize: 20
            }
        }
    },
    computed: {
        brandId(): number {
            return Number(this.$route.params.id)
        }
    },
    watch: {
        brandId() {
            this.getBrandData()
        }
    },
    mounted() {
        this.getBrandList()
    },
    methods: {
        async getBrandList() {
            const res = await getBrandInfo({})
            // const arr = res.list.filter((item: any) => item.id === this.brandId)
            this.brandList = res.list
            this.getBrandData()
        },
        getBrandData() {
            let barndItem = null
            let i = 0;
            for (i = 0; i < this.brandList.length; i++) {
                const item = this.brandList[i] as {id: number}
                if (item.id === this.brandId) {
                    barndItem = item
                    break
                }
            }
            if (!barndItem) {
                this.$router.push('/error/404')
            } else {
                this.nextBrand = i < this.brandList.length - 1 ? this.brandList[i + 1] : null
                this.prevBrand = i > 0 ? this.brandList[i - 1] : null
                this.brandData = barndItem
            }
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.article-tit {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1.2;
    color: $mainTextColor;
    margin-bottom: .5rem;
}
.article-time {
    font-size: 1rem;
    line-height: 2;
    margin-bottom: 2rem;
    > span {
        display: inline-block;
        margin-right: 1em;
    }
    @media (max-width: $smallScreen) {
        margin-bottom: 1.5rem;
    }
}
.article-main {
    border-top: 1px solid $borderColor;
    font-size: .95rem;
    line-height: 1.6;
    white-space: pre-wrap;
    padding: 3rem 0;
    &::v-deep p {
        text-indent: 2em;
        margin-bottom: 1rem;
        > img {
            max-width: 100%;
            display: block;
            // margin: 0 auto;
        }
    }
    @media (max-width: $smallScreen) {
        padding: 2rem 0;
    }
}
</style>