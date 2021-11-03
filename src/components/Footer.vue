<template>
    <div class="footer">
        <div class="container">
            <div class="foot-right">
                <h4>CONTACT US</h4>
                <h5>联系我们</h5>
                <p>0755-83257779</p>
                <div class="contact-icon">
                    <span>信</span>
                    <span>博</span>
                    <span>邮</span>
                </div>
            </div>
            <div class="foot-left">
                <ul class="foot-nav mb-20">
                    <li v-for="item in menuList" :key="item.href"><router-link :to="item.href">{{ item.name }}</router-link></li>
                </ul>
                <div>
                    <h4>手动阀</h4>
                    <p>电话：0755-83257779</p>
                    <p>邮箱：2881383375@qq.com</p>
                    <p class="mb-10">地址：深圳市福田区中航路鼎诚国际大厦1811号</p>
                    <p>© 2019 深圳创亿实业有限公司 版权所有 <a href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备16056078号-2</a>  <a href="/map">网站地图</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import menuData from '@/assets/data/menuData'
export default Vue.extend({
    name: 'VFooter',
    data() {
        return {
            menuList: menuData
        }
    }
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.footer {
    background-color: $footBgColor;
    color: #eee;
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 1.3rem 0;
    margin-top: 4rem;
    a {
        color: #eee;
        margin: 0 5px;
        &:hover {
            text-decoration: underline;
        }
    }
    .foot-left {
        padding-left: .5em;
    }
    .foot-nav {
        padding-top: .1em;
        > li {
            display: inline-block;
            line-height: 1;
            border-right: 1px solid rgba($color: #fff, $alpha: .6);
            text-align: left;
            padding-right: 1.5em;
            margin-right: 1.5em;
            > a {
                margin: 0;
            }
            &:last-child {
                padding-right: 0em;
                margin-right: 0em;
                border-right: none;
            }
        }
    }
    .foot-right {
        float: right;
        text-align: right;
        padding-right: .5em;
        > h4 {
            font-size: 1.1rem;
            font-weight: normal;
        }
        > h5 {
            font-size: 0.8rem;
            font-weight: normal;
            margin-bottom: 1em;
        }
        > p {
            font-size: 1.8rem;
        }
        .contact-icon {
            margin-top: 1rem;
            > span {
                display: inline-block;
                text-align: center;
                border-radius: 50%;
                line-height: 28px;
                width: 28px;
                height: 28px;
                box-sizing: border-box;
                border: 2px solid #eee;
                margin-left: 6px;
                cursor: pointer;
            }
        }
    }
}

</style>