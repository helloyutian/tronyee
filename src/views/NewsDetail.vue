<template>
    <div class="wrap">
        <!-- // 栏目标题 -->
        <menu-banner></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <div class="local">您的位置：<router-link to="/">首页</router-link> → <router-link to="/product">产品中心</router-link> → 三星贴片电容</div>
            <!-- 图片预览，产品属性 -->
            <div class="">
                <!-- 轮播图 -->
                <div class="viewer">
                    <div class="pic"></div>
                    <div>swiper</div>
                </div>
                <!-- 属性 -->
                <div class="txt">
                    <h1>name</h1>
                    <div class="dtl">
                        <p>产品类别：村田贴片电容</p>
                        <p>产品描述：</p>
                        <p>产品型号：GRM31CR61A476ME15L</p>
                        <p>封装尺寸：1206</p>
                        <p>容 值：2.2UF</p>
                    </div>
                    <div class="tel"><span class="icon"></span>服务热线：0755-83257779</div>
                    <div class="btns">
                        <button><span class="icon"></span>在线咨询</button>
                        <button><span class="icon"></span>返回列表</button>
                    </div>
                </div>
            </div>
            <!-- 产品说明 -->
            <div>
                <div class="dtl-tit">产品说明</div>
                <div class="con">
                    <p>特性： </p>
                    <p>1．外形尺寸小。 </p>
                    <p>2．闭合电路，无交互干扰，适合于高密度安装。 </p>
                    <p>3．无方向性，规范化的自动贴片安装外形。 </p>
                    <p>4．可焊性和耐焊性优，适合于流焊和再流焊。</p>
                    <p>应用： </p>
                    <p>被广泛用于笔记本电脑数位电视，数位录放影机，列表机，硬式磁碟机，个人电脑和其安一般消费性及电脑主品上输入、输出线路之杂讯消除。</p>
                </div>
            </div>
            <!-- 相关产品 -->
            <div>
                <div class="dtl-tit">相关产品</div>
                <div class="list">
                    <ul>
                        <li>
                            <div class="pic"><router-link to="/"><img src="@/assets/img/a.jpg" alt="a"></router-link></div>
                            <p>GRM033R61C473KE84D</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { getOssInfo } from '@/utils/apis';
import Vue from 'vue';
import { dateFormate } from '@/utils'

export default Vue.extend({
    name: 'Product',
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
    filters: {
        dateFormate
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
        max-height: 240px;
        overflow: hidden;
        float: left;
        img {
            max-height: 100%;
            transform: scale(1);
            transition: all ease .4s;
            &:hover {
                transform: scale(1.1);
                transition: all ease .4s;
            }
        }
    }
    .poduct-intro {
        line-height: 1.4rem;
        margin-left: 250px;
        > h3 {
            font-size: 1.2rem;
            font-weight: normal;
        }
        .type {
            font-size: .8rem;
            margin-bottom: 1em;
        }
        .desc {
            font-size: .8rem;
            
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
        box-shadow: 0 .5rem 1rem rgba($color: #000000, $alpha: .2);
        transition: all ease-in .2s;
        .poduct-intro {
            .btn {
                background-color: $blueColor;
                border-color: $blueColor;
                color: #fff;
                transition: all ease-in .2s;
            }
        }
    }
}

</style>