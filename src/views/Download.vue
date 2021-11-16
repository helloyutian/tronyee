<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner :src="require('@/assets/img/zlxz.jpg')"></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <ul class="download-list clearfix">
                <li v-for="item in downloadList" :key="item.id" class="dl-item" >
                    <a :download="item.name" :href="item.url" target="_blank" title="点击下载" @click="handdleClick(item.id)">
                        <span class="icon iconfont icon-xiazai"></span>
                        <h4>{{ item.name }}</h4>
                        <p class="count">下载次数：{{ (item.id * 3) % 11 * 6 + 30 + (clickCount['c' + item.id] || 0) }}</p>
                        <p class="date">更新时间：{{ $dateFormate(item.modifyTime, 'YYYY-MM-DD') }}</p>
                    </a>
                </li>
            </ul>
            <!-- // 分页  -->
            <el-pagination
                class="pager"
                background
                layout="prev, pager, next"
                :current-page.sync="queryParam.pageNum"
                :page-size="queryParam.pageSize"
                :total="total"
                @current-change="getDownloadInfo"
            ></el-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { getOssInfo } from '@/utils/apis';
import Vue from 'vue';

export default Vue.extend({
    name: 'Download',
    data() {
        return {
            clickCount: {} as ObjectType,
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
        },
        handdleClick(id: number) {
            this.$set(this.clickCount, 'c' + id, 1)
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.download-list {
    margin: 0 10px;
    .dl-item {
        background-color: #eee;
        margin-right: 3%;
        margin-bottom: 20px;
        float: left;
        width: 48.5%;
        border-radius: .6rem;
        overflow: hidden;
        > a {
            padding: 20px 0 20px 20px;
            display: block;
            .icon {
                float: right;
                margin-right: 2rem;
                font-size: 2rem;
                margin-top: 1.5rem;
            }
            > h4 {
                font-weight: normal;
                line-height: 1.5;
                font-size: 1.1rem;
                margin-bottom: 1.2rem;
            }
            > p {
                font-size: .9rem;
                opacity: .8;
            }
            &:hover {
                color: #fff;
                background-color: $blueColor;
                transition: all ease-in .2s;
            }
        }
        &:nth-child(2n) {
            margin-right: 0;
        }
    }
    @media (max-width: $smallScreen) {
        .dl-item {
            width: 100%;
            margin-right: 0%;
        }
    }
}

</style>