<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner :src="require('@/assets/img/cpzx.jpg')"></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <ul class="product-list clearfix">
                <li v-for="item in productList" :key="item.id" class="pro-item img-scale clearfix">
                    <div class="product-pic">
                        <router-link :to="`/product/${ item.type }/${ item.id }`">
                            <img class="img-full" :src="item.img.split(',')[0]" alt="a">
                        </router-link>
                    </div>
                    <div class="poduct-intro">
                        <h3><router-link :to="`/product/${ item.type }/${ item.id }`">{{ item.name }}</router-link></h3>
                        <p class="type">{{ $getRouteItemName(item.type, currentRoute.childrens) }}</p>
                        <div class="desc">{{ item.description }}</div>
                        <router-link class="btn" :to="`/product/${ item.type }/${ item.id }`">查看详情+</router-link>
                    </div>
                </li>
                <!-- <li class="pro-item clearfix" >
                    <div class="product-pic">
                        <router-link to="/">
                            <img class="img-full" src="@/assets/img/a.jpg" alt="a">
                        </router-link>
                    </div>
                    <div class="poduct-intro">
                        <h3><router-link to="/">CC1206JKNPOCBN101</router-link></h3>
                        <p class="type">三星贴片电容</p>
                        <div class="desc">三星贴片电容寿命长、耐高温、准确度高、滤高频谐波性能极好。在电解电容器工作过程中，具有自动修补或隔绝氧化膜中的疵点所在的性能。</div>
                        <router-link class="btn" to="/">查看详情+</router-link>
                    </div>
                </li>
                <li class="pro-item clearfix" >
                    <div class="product-pic">
                        <router-link to="/">
                            <img class="img-full" src="@/assets/img/a.jpg" alt="a">
                        </router-link>
                    </div>
                    <div class="poduct-intro">
                        <h3><router-link to="/">CC1206JKNPOCBN101</router-link></h3>
                        <p class="type">三星贴片电容</p>
                        <div class="desc">三星贴片电容寿命长、耐高温、准确度高、滤高频谐波性能极好。在电解电容器工作过程中，具有自动修补或隔绝氧化膜中的疵点所在的性能。</div>
                        <router-link class="btn" to="/">查看详情+</router-link>
                    </div>
                </li> -->
            </ul>
            <!-- // 分页  -->
            <el-pagination
                class="pager"
                background
                layout="prev, pager, next"
                :current-page.sync="queryParam.pageNum"
                :page-size="queryParam.pageSize"
                :total="total"
                @current-change="getProductList"
            ></el-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { getProductInfo } from '@/utils/apis';
import Vue from 'vue';

export default Vue.extend({
    name: 'Product',
    data() {
        return {
            productList: [],
            total: 0,
            queryParam: {
                pageNum: 1,
                pageSize: 20
            }
        }
    },
    // beforeRouteUpdate(from, to, next) {
    //     console.log('update')
    //     next()
    // },
    computed: {
        type() {
            return this.$route.params.type
        },
        currentRoute(): RouteItemType {
            return this.$store.state.currentRoute
        }
    },
    watch: {
        type() {
            this.menuChange()
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.type && !this.currentRoute.childrens?.some((item) => item.type === this.type )) {
                return this.$router.replace('/404')
            }
            this.getProductList()
        })
    },
    methods: {
        async getProductList() {
            const res = await getProductInfo({
                ...this.queryParam,
                type: this.type
            })
            this.productList = res.list
            this.total = res.total
        },
        menuChange() {
            this.queryParam.pageNum = 1
            this.getProductList()
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.pro-item {
    float: left;
    width: 49%;
    border: 1px solid $borderColor2;
    margin-right: 2%;
    margin-bottom: 2rem;
    box-sizing: border-box;
    border-radius: .5rem;
    overflow: hidden;
    padding: 20px 20px 20px 8px;
    background-color: #fff;
    transition: all ease-out .2s;
    .product-pic {
        width: 240px;
        height: 240px;
        overflow: hidden;
        float: left;
        img {
            max-height: 100%;
            // transform: scale(1);
            // transition: all ease .4s;
            // &:hover {
            //     transform: scale(1.1);
            //     transition: all ease .4s;
            // }
        }
    }
    .poduct-intro {
        line-height: 1.4rem;
        margin-left: 250px;
        > h3 {
            font-size: 1.2rem;
            font-weight: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .type {
            font-size: .8rem;
            margin-bottom: 1em;
        }
        .desc {
            font-size: .8rem;
            max-height: 7rem;
            overflow: hidden;
        }
        .btn {
            display: inline-block;
            border: 1px solid $borderColor;
            font-size: .9rem;
            width: 6rem;
            text-align: center;
            height: 2rem;
            line-height: 2rem;
            border-radius: 5px;
            margin-top: .5rem;
            transition: all ease-out .2s;
        }
    }
    &:nth-child(2n) {
        margin-right: 0;
    }
    &:hover {
        box-shadow: 0 .3rem .5rem rgba($color: #000000, $alpha: .1);
        transition: all ease .2s;
        .poduct-intro {
            .btn {
                background-color: $blueColor;
                border-color: $blueColor;
                color: #fff;
                transition: all ease .2s;
            }
        }
    }
    @media (max-width: $middleScreen) {
        .product-pic {
            width: 160px;
            height: 160px;
        }
        .poduct-intro {
            margin-left: 180px;
        }
    }
    @media (max-width: $smallScreen) {
        width: 100%;
        margin-right: 0%;
    }
}

</style>