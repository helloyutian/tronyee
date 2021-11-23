<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner :src="require('@/assets/img/hydt.jpg')" menu-disabled></menu-banner>
        <!-- // 内容 -->
        <div class="container editormd-preview">
            <div class="local"><span class="iconfont icon-home"></span> 您的位置：<router-link to="/">首页</router-link> → <router-link to="/news">行业动态</router-link></div>
            <!-- 标题 -->
            <h1 class="article-tit">{{ newsDetail.title }}</h1>
            <p class="article-time"><span><i class="iconfont icon-time"></i> {{ $dateFormate(newsDetail.modified, 'YYYY-MM-DD') }}</span><span><i class="iconfont icon-View"></i> ({{ newsDetail.hits }})次浏览</span></p>
            <div class="article-main editormd-preview-container" v-html="newsDetail.content"></div>
            <div class="detail-pager clearfix">
                <!-- <div class="fl">
                    <p class="nav-link">
                        上一篇：
                        <router-link v-if="true" to="/">创辉煌 创未来——记南澳拓展之旅</router-link>
                        <span v-else>无</span>
                    </p>
                    <p class="nav-link">
                        下一篇：
                        <router-link v-if="false" to="/">创辉煌 创未来——记南澳拓展之旅</router-link>
                        <span v-else>无</span>
                    </p>
                </div> -->
                <router-link class="fr btn-back" to="/news"><span class="iconfont icon-aui-icon-back"></span> 返回列表</router-link>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { getArticleGet } from '@/utils/apis';
import Vue from 'vue';
// import EditorMD from 'editor.md'
// import 'editor.md/css/editormd.preview.min.css'
import '@/assets/scss/editormd.preview.min.css'
import { marked } from 'marked'

export default Vue.extend({
    name: 'NewsDetail',
    data() {
        return {
            newsDetail: {
                content: ''
            }
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    mounted() {
        this.getNewsDetail()
    },
    methods: {
        async getNewsDetail() {
            const res = await getArticleGet({
                id: this.id
            })
            if (!res.cid) {
                this.$router.replace('/error/404')
            }
            document.title = res.title
            this.newsDetail = res
            this.newsDetail.content = marked(res.content)
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
    // &::v-deep p {
    //     text-indent: 2em;
    //     margin-bottom: 1rem;
    &::v-deep img {
        max-width: 100%;
        // display: block;
        // margin: 0 auto;
    }
    
    @media (max-width: $smallScreen) {
        padding: 2rem 0;
    }
}
</style>