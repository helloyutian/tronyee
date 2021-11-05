<template>
    <div class="banner" :style="`background-image: url('https://www.chuangyisy.cn/uploads/201812/5c1cb588ba18f.jpg')`">
        <h1>标题标题</h1>
        <div class="nav-list">
            <div class="container">
                <ul class="clearfix">
                    <li class="active" style="width: 33.33%"><router-link to="/">二级标题1</router-link></li>
                    <li style="width: 33.33%"><router-link to="/">二级标题2</router-link></li>
                    <li style="width: 33.33%"><router-link to="/">二级标题3</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.banner {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 250px;
    position: relative;
    margin-bottom: 4rem;
    > h1 {
        font-weight: normal;
        color: #fff;
        text-align: center;
        line-height: 190px;
        font-size: 1.8rem;
    }
    .nav-list {
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0;
        left: 0;
        background-color: rgba($color: #fff, $alpha: .8);
        ul {
            border-left: 1px solid $borderColor;
            > li {
                float: left;
                height: 60px;
                text-align: center;
                line-height: 60px;
                box-sizing: border-box;
                border-right: 1px solid $borderColor;
                position: relative;
                > a {
                    display: block;
                    position: relative;
                    z-index: 2;
                }
                &::after {
                    content: '\20';
                    width: 100%;
                    position: absolute;
                    height: 100%;
                    left: 0;
                    top: 0;
                    z-index: 1;
                    background-color: $blueColor;
                    transform-origin: right;
                    transform: scale(0, 1);
                    transition: transform ease-out .2s;
                }
                &:hover, &.active {
                    > a {
                        color: #fff;
                    }
                    &::after {
                        transform-origin: left;
                        transform: scale(1);
                        transition: transform ease-in .2s;
                    }
                }
            }
        }
    }
}
</style>