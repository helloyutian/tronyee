<template>
    <div class="wrap">
        <!-- // 导航 -->
        <v-header />
        <!-- // 栏目标题 -->
        <menu-banner></menu-banner>
        <!-- // 内容 -->
        <div class="container">
            <ul class="download-list clearfix">
                <li class="dl-item">
                    <a href="#" >
                        <span class="icon">下载</span>
                        <h4>收到反馈</h4>
                        <p class="count">下载次数： 0</p>
                        <p class="date">更新时间：2021-11-02</p>
                    </a>
                </li>
                <li class="dl-item">
                    <a href="#" >
                        <span class="icon">下载</span>
                        <h4>收到反馈</h4>
                        <p class="count">下载次数： 0</p>
                        <p class="date">更新时间：2021-11-02</p>
                    </a>
                </li>
                <li class="dl-item">
                    <a href="#" >
                        <span class="icon">下载</span>
                        <h4>收到反馈</h4>
                        <p class="count">下载次数： 0</p>
                        <p class="date">更新时间：2021-11-02</p>
                    </a>
                </li>
            </ul>
        </div>
        <!-- // 页脚 -->
        <v-footer />
        <!-- 友情链接 -->
        <v-links />
    </div>
</template>

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
                width: 50px;
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
}

</style>