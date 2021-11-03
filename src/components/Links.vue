<template>
    <div class="links">
        <div class="container">
            <p class="con">友情链接&nbsp;<span class="tit">LINKS</span>：<a href="#">小学学校</a><a href="#">小学学校</a></p>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'VLinks',
});
</script>
<style lang="scss" scoped>
.links {
    background-color: #161616;
    color: #eee;
    font-size: 0.9rem;
    padding: 1em 0;
    .con {
        padding: 0 .5em;
        line-height: 1.5;
        .tit {
            opacity: .6;
        }
        > a {
            color: #eee;
            margin: 0 5px;
            display: inline-block;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>