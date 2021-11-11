<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <div v-if="type !== 'product'" class="hot">
                <ul class="clearfix">
                    <li v-for="item in hotList" :key="item.cid">
                        <div class="hot-item img-scale">
                            <div class="pic"><router-link :to="`/news/${ item.type }/${ item.cid }`"><img class="img-full" :src="item.titlePic" alt=""></router-link></div>
                            <h3><router-link :to="`/news/${ item.type }/${ item.cid }`">{{ item.title }}</router-link></h3>
                            <p class="date">{{ item.created }}</p>
                            <p class="desc">{{ item.slug }}</p>
                            <router-link class="link" :to="`/news/${ item.type }/${ item.cid }`">[查看详情+]</router-link>
                        </div>
                    </li>
                    <!-- <li>
                        <div class="hot-item img-scale">
                            <div class="pic"><router-link to="/"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202109/612f48823d9ea.jpg" alt=""></router-link></div>
                            <h3><router-link to="/">创亿实业：贴片电容怎么看大小？</router-link></h3>
                            <p class="date">2019-10-08</p>
                            <p class="desc">贴片电容很多由于体积所限，不能标注其容量，所以一般都是在贴片生产时的整盘上有标注。如果是单个的贴片电容，要用电容测试仪测出它的容量。如果是同一个厂标的话，一般来说颜色深的容量比颜色浅的要大，棕灰>浅紫>灰白。当然最好的方法是用热风枪吹下来，等...</p>
                            <router-link class="link" to="/">[查看详情+]</router-link>
                        </div>
                    </li>
                    <li>
                        <div class="hot-item img-scale">
                            <div class="pic"><router-link to="/"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202109/612f48823d9ea.jpg" alt=""></router-link></div>
                            <h3><router-link to="/">创亿实业：贴片电容怎么看大小？</router-link></h3>
                            <p class="date">2019-10-08</p>
                            <p class="desc">贴片电容很多由于体积所限，不能标注其容量，所以一般都是在贴片生产时的整盘上有标注。如果是单个的贴片电容，要用电容测试仪测出它的容量。如果是同一个厂标的话，一般来说颜色深的容量比颜色浅的要大，棕灰>浅紫>灰白。当然最好的方法是用热风枪吹下来，等...</p>
                            <router-link class="link" to="/">[查看详情+]</router-link>
                        </div>
                    </li> -->
                </ul>
            </div>
            <div class="list">
                <ul>
                    <li v-for="item in newsList" :key="item.cid" class="clearfix img-scale">
                        <div class="pic"><router-link :to="`/news/${ item.type }/${ item.cid }`"><img class="img-full" :src="item.titlePic" alt=""></router-link></div>
                        <div class="txt">
                            <h3><router-link :to="`/news/${ item.type }/${ item.cid }`">{{ item.title }}</router-link></h3>
                            <p class="date"><span class="iconfont icon-time"></span> {{ item.created }}</p>
                            <p class="desc">{{ item.slug }}</p>
                            <router-link class="link" :to="`/news/${ item.type }/${ item.cid }`">[查看详情+]</router-link>
                        </div>
                    </li>
                    <!-- <li class="clearfix img-scale">
                        <div class="pic"><router-link to="/"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202006/5ee6d173d349a.jpg" alt=""></router-link></div>
                        <div class="txt">
                            <h3><router-link to="/">创亿实业：贴片电容怎么看大小？</router-link></h3>
                            <p class="date"><span class="iconfont icon-time"></span> 2019-10-08</p>
                            <p class="desc">贴片电容很多由于体积所限，不能标注其容量，所以一般都是在贴片生产时的整盘上有标注。如果是单个的贴片电容，要用电容测试仪测出它的容量。如果是同一个厂标的话，一般来说颜色深的容量比颜色浅的要大，棕灰>浅紫>灰白。当然最好的方法是用热风枪吹下来，等...</p>
                            <router-link class="link" to="/">[查看详情+]</router-link>
                        </div>
                    </li>
                    <li class="clearfix img-scale">
                        <div class="pic"><router-link to="/"><img class="img-full" src="http://www.chuangyisy.cn/uploads/202006/5ee6d173d349a.jpg" alt=""></router-link></div>
                        <div class="txt">
                            <h3><router-link to="/">创亿实业：贴片电容怎么看大小？</router-link></h3>
                            <p class="date"><span class="iconfont icon-time"></span> 2019-10-08</p>
                            <p class="desc">贴片电容很多由于体积所限，不能标注其容量，所以一般都是在贴片生产时的整盘上有标注。如果是单个的贴片电容，要用电容测试仪测出它的容量。如果是同一个厂标的话，一般来说颜色深的容量比颜色浅的要大，棕灰>浅紫>灰白。当然最好的方法是用热风枪吹下来，等...</p>
                            <router-link class="link" to="/">[查看详情+]</router-link>
                        </div>
                    </li> -->
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
                @current-change="getNewsList(type)"
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
        type() {
            return this.$route.params.type || 'default'
        }
    },
    mounted() {
        if (this.type !== 'product') {
            this.getHotList()
        }
        this.getNewsList()
    },
    methods: {
        async getHotList() {
            const res = await getArticleInfo({
                pageNum: 1,
                pageSize: 3,
                type: 'default'
            })
            this.hotList = res.list
        },
        async getNewsList() {
            const res = await getArticleInfo({
                ...this.queryParam,
                type: this.type
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
                margin: 0 11px;
                background-color: #f5f5f5;
                border-radius: .5rem;
                overflow: hidden;
                padding-bottom: 1rem;
                position: relative;
                .pic {
                    width: 100%;
                    height: auto;
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
                    margin: 0 22px 0 0;
                }
            }
            &:last-child {
                .hot-item {
                    margin: 0 0 0 22px;
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
                height: 240px;
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
}
</style>
