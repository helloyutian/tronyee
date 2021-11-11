<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner menu-disabled></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <div class="local"><span class="iconfont icon-home"></span> 您的位置：<router-link to="/">首页</router-link> → <router-link to="/news">行业动态</router-link> → <router-link to="/news/product">产品百科</router-link></div>
            <!-- 标题 -->
            <h1 class="article-tit">乘风破浪 砥砺前行——记深圳创亿实业惠州巽寮湾2日游</h1>
            <p class="article-time"><span><i class="iconfont icon-time"></i> 2021-09-01</span><span><i class="iconfont icon-View"></i> (80)次浏览</span></p>
            <div class="article-main">
                <p>伴随公司规模不断发展壮大，为培养员工团队协作精神、增强企业凝聚力、舒缓工作压力，在结束春夏紧张忙碌的工作后，8月29-30日，创亿实业深圳区部分员工开展了以一次以“乘风破浪 砥砺前行”为主题的惠州巽寮湾激情团建之旅，燃烧每位创亿伙伴们的激情。</p>
                <p><img src="http://www.chuangyisy.cn/uploads/202109/612f48823d9ea.jpg" alt=""></p>
                <p>两天的团建之旅不仅增进了员工之间的互动交流，更让我们懂得了承担的价值，得到了责任的历练，增强了大家对团队力量的认识，感受到了沟通、合作、凝聚力、相互激励以及遵从团体规范的重要性，让创亿人体会到了“乘风破浪 砥砺前行”的责任心和使命感！</p>
            </div>
            <div class="detail-pager clearfix">
                <div class="fl">
                    <p class="nav-link">
                        上一篇：
                        <router-link v-if="true" to="/">创辉煌 创未来——记深圳创亿实业南澳拓展之旅</router-link>
                        <span v-else>无</span>
                    </p>
                    <p class="nav-link">
                        下一篇：
                        <router-link v-if="false" to="/">创辉煌 创未来——记深圳创亿实业南澳拓展之旅</router-link>
                        <span v-else>无</span>
                    </p>
                </div>
                <router-link class="fr btn-back" to="/"><span class="iconfont icon-aui-icon-back"></span> 返回列表</router-link>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { getOssInfo } from '@/utils/apis';
import Vue from 'vue';

export default Vue.extend({
    name: 'BrandDetail',
    data() {
        return {
            downloadList: [],
            total: 0,
            queryParam: {
                pageNum: 1,
                pageSize: 20
            }
        }
    },
    computed: {
        type() {
            return this.$route.params.type
        }
    },
    mounted() {
        this.getDownloadInfo()
    },
    methods: {
        async getDownloadInfo() {
            const res = await getOssInfo({
                ...this.queryParam,
                type: this.type
            })
            this.downloadList = res.list
            this.total = res.total
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
            margin: 0 auto;
        }
    }
    @media (max-width: $smallScreen) {
        padding: 2rem 0;
    }
}
</style>