<template>
    <div class="dialog">
        <div class="preview-box">
            <div class="img-box">
                <img :src="url" alt="" referrerPolicy="no-referrer" >
            </div>
        </div>
        <a class="close" href="javascript:;" @click="closePreview">×</a>
    </div>
</template>
<script>
export default {
    name: 'PreviewDialog',
    props: {
        isShowPreview: {
            type: Boolean,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    methods: {
        closePreview() {
            this.$emit('update:isShowPreview', false)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/var';
// 图片视频预览
.dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0.8);
    z-index: 20;
    .preview-box {
        height: 100%;
        width: 100%;
        padding: 3%;
        box-sizing: border-box;
        text-align: center;
        &::before {
            content: "\20";
            display: inline-block;
            height: 50%;
            width: 1px;
            margin-right: -1px;
        }
        .img-box {
            display: inline;
            margin: 0;
            height: 100%;
            > img {
                display: inline-block;
                width: auto;
                height: auto;
                max-height: 100%;
                max-width: 100%;
                vertical-align: middle;
            }
        }
    }
    .close {
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 2.5rem;
        font-weight: 300;
        color: #fff;
        font-family: 'simsun';
        transition: all ease-in-out .2s;
        background-color: rgba($color: #000000, $alpha: .3);
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        text-align: center;
        line-height: 3rem;
        &:hover {
            transform: rotate(90deg);
            transition: all ease-in-out .2s;
        }
    }
}
</style>
