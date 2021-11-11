<template>
    <div class="wrap">
        <div class="error container">
            <h2>404</h2>
            <p>页面不存在或者已删除</p>
            <div class="btns"><router-link to="/">返回首页</router-link></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';
.error {
    text-align: center;
    padding: 100px 0;
    > h2 {
        font-size: 6rem;
    }
    > p {
        color: $infoColor;
        font-size: 1rem;
        letter-spacing: .2em;
    }
    .btns {
        padding-top: 3rem;
        > a {
            display: inline-block;
            width: 120px;
            height: 42px;
            line-height: 42px;
            background-color: #eee;
            border-radius: .2rem;
            &:hover {
                background-color: $blueColor;
                color: #fff;
            }
        }
    }
}
</style>

