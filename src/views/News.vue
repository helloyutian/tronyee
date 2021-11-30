<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner :src="require('@/assets/img/hydt.jpg')"></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <!-- <div v-if="type !== 'product'" class="hot">
                <ul class="clearfix">
                    <li v-for="item in hotList" :key="item.cid">
                        <div class="hot-item img-scale">
                            <div class="pic"><router-link :to="`/news/${ item.type }/${ item.cid }`"><img class="img-cover" :src="item.titlePic" alt=""></router-link></div>
                            <h3><router-link :to="`/news/${ item.type }/${ item.cid }`">{{ item.title }}</router-link></h3>
                            <p class="date">{{ item.modified }}</p>
                            <p class="desc">{{ item.slug }}</p>
                            <router-link class="link" :to="`/news/${ item.type }/${ item.cid }`">[查看详情+]</router-link>
                        </div>
                    </li>
                </ul>
            </div> -->
            <div class="list">
                <ul>
                    <li v-for="item in newsList" :key="item.cid" class="clearfix img-scale">
                        <div class="pic"><router-link :to="`/news/${ item.cid }`"><img class="img-cover" :src="item.titlePic" alt=""></router-link></div>
                        <div class="txt">
                            <h3><router-link :to="`/news/${ item.cid }`">{{ item.title }}</router-link></h3>
                            <p class="date"><span class="iconfont icon-time"></span> {{  $dateFormate(item.modified, 3, 'YYYY-MM-DD') }}</p>
                            <p class="desc">{{ item.slug }}</p>
                            <router-link class="link" :to="`/news/${ item.cid }`">[查看详情+]</router-link>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- // 分页  -->
            <el-pagination
                class="pager"
                background
                layout="prev, pager, next"
                :current-page.sync="queryParam.pageNum"
                :page-size="queryParam.pageSize"
                :total="total"
                @current-change="getNewsList()"
            ></el-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { getArticleInfo } from '@/utils/apis';
import Vue from 'vue';


export default Vue.extend({
    name: 'News',
    data() {
        return {
            hotList: [],
            newsList: [],
            total: 0,
            queryParam: {
                pageNum: 1,
                pageSize: 20
            }
        }
    },
    computed: {
        // type() {
        //     return this.$route.params.type || 'default'
        // }
    },
    watch: {
        // type() {
        //     this.getNewsList()
        // }
    },
    mounted() {
        // if (this.type !== 'product') {
        //     this.getHotList()
        // }
        this.getNewsList()
    },
    methods: {
        // async getHotList() {
        //     const res = await getArticleInfo({
        //         pageNum: 1,
        //         pageSize: 3,
        //     })
        //     this.hotList = res.list
        // },
        async getNewsList() {
            const res = await getArticleInfo({
                ...this.queryParam,
                // type: this.type
            })
            this.newsList = res.list
            this.total = res.total
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.hot {
    padding-bottom: 3rem;
    border-bottom: 1px solid $borderColor;
    > ul {
        > li {
            float: left;
            width: 33.33%;
            .hot-item {
                margin: 0 3%;
                background-color: #f5f5f5;
                border-radius: .5rem;
                overflow: hidden;
                padding-bottom: 1rem;
                position: relative;
                .pic {
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                }
                > h3 {
                    font-size: 1rem;
                    font-weight: normal;
                    margin: 0 1rem;
                    line-height: 1.5;
                    padding-top: .6em;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .date {
                    color: #aaa;
                    font-size: .8rem;
                    line-height: 2;
                    margin: 0 1rem;
                }
                .desc {
                    color: $defaultTextColor;
                    font-size: .9rem;
                    line-height: 1.4rem;
                    max-height: 4.2rem;
                    overflow: hidden;
                    margin: .5em 1rem;
                }
                .link {
                    margin: 0 1rem;
                    font-size: .8rem;
                    color: $blueColor;
                }
                &::after {
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    height: 2px;
                    left: 0;
                    background-color: $blueColor;
                    content: '\20';
                    opacity: 0;
                    transition: all ease .2s;
                }
                &:hover {
                    &::after {
                        opacity: 1;
                        transition: all ease .2s;
                    }
                }
            }
            &:first-child {
                .hot-item {
                    margin: 0 6% 0 0;
                }
            }
            &:last-child {
                .hot-item {
                    margin: 0 0 0 6%;
                }
            }
        }
    }
    @media (max-width: $middleScreen) {
        > ul {
            > li {
                .hot-item {
                    .pic {
                        height: 200px;
                    }
                }
            }
        }
    }
}
.list {
    > ul {
        > li {
            border-bottom: 1px dotted $borderColor;
            padding: 2rem 0;
            .pic {
                float: left;
                width: 28%;
                overflow: hidden;
                margin-right: 2%;
                height: 200px;
            }
            .txt {
                > h3 {
                    font-weight: normal;
                    font-size: 1.2rem;
                    line-height: 1.6;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .date {
                    color: #aaa;
                    font-size: .8rem;
                    line-height: 2;
                    .iconfont {
                        font-size: .8rem;
                    }
                }
                .desc {
                    color: $infoColor;
                    font-size: .92rem;
                    line-height: 1.6rem;
                    padding-top: 1em;
                    margin-bottom: 1.5em;
                    max-height: 4.8rem;
                    overflow: hidden;
                }
                .link {
                    font-size: 0.92rem;
                    color: $blueColor;
                }
            }
        }
    }
    @media (max-width: $middleScreen) {
        > ul {
            > li {
                .pic {
                    width: 240px;
                }
            }
        }
    }
}
</style>
