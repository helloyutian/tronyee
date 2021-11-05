<template>
    <div class="navbar fixed">
        <div class="container">
            <div class="brand">
                <router-link to="/">
                    <img class="img-full" src="x.png" alt="logo">
                </router-link>
            </div>
            <div class="navlist">
                <ul>
                    <li v-for="menuItem in menuList" :key="menuItem.href" :class="{ active: menuItem.href === $route.path }">
                        <router-link :to="menuItem.href">{{ menuItem.name }}</router-link>
                        <dl v-if="menuItem.childrens" class="dropdown">
                            <dd v-for="(item, idx) in menuItem.childrens" :key="item.href" :style="`transition-delay: 0.${ idx }s`">
                                <router-link :to="item.href">{{ item.name }}</router-link>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="nav-tel">
                <!-- <span class="icon-tel">a</span> -->
                <!-- <div class="tel-dropdown"> -->
                    <h3>全国服务热线</h3>
                    <p>{{ companyData.phone }}</p>
                <!-- </div> -->
                <!-- <span class="icon-search">b</span> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import menuData from '@/assets/data/menuData.json';
import { Route } from 'vue-router';

@Component
export default class VHeader extends Vue {
  private menuList = menuData;
  get companyData() {
    return this.$store.state.companyData
  }
  @Watch('$route')
  onWatchChanged(newVal: Route) {
      console.log(newVal)
      for (let i = 0; i < menuData.length; i ++) {
          const item = menuData[i]
          if (newVal.path === item.href) {
              console.log('xxxxx')
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/scss/var.scss';
.navbar {
    background-color: #fff;
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    height: $navHeight;
    box-shadow: 0 0 6px rgba($color: #000000, $alpha: .1);
    position: relative;
    &.fixed {
        position: fixed;
        width: 100%;
        z-index: 9;
    }
    .brand {
        position: absolute;
        width: 160px;
        height: 75px;
        background-color: #ccc;
        top: 7px;
        left: 5px;
        display: table;
        text-align: center;
        vertical-align: middle;
        a {
            display: table-cell;
            vertical-align: middle;
        }
        @media (min-width: $largeScreen) {
            width: 250px;
        }
    }
    .navlist {
        width: 100%;
        height: 100%;
        padding: 0 130px 0 22%;
        box-sizing: border-box;
        text-align: right;
        > ul > li {
            width: 14%;
            max-width: 110px;
            font-size: 1rem;
            display: inline-block;
            position: relative;
            margin-left: 1px;
            > a {
                display: block;
                height: $navHeight;
                line-height: $navHeight;
                text-align: center;
                position: relative;
                z-index: 2;
                transition: color .15s ease-out;
            }
            &::after {
                content: '\20';
                position: absolute;
                width: 100%;
                height: 0%;
                bottom: 0;
                left: 0;
                background: $blueColor;
                transition: height .15s ease-out;
            }
            .dropdown {
                display: block;
                height: 0;
                overflow: hidden;
                position: absolute;
                top: $navHeight;
                left: -1px;
                box-shadow: 0 .5em 1em rgba($color: #000000, $alpha: .2);
                text-align: center;
                font-size: .9rem;
                > dd {
                    background: #fff;
                    width: 160px;
                    padding: 0 6px;
                    height: 2.3rem;
                    line-height: 2.3rem;
                    border-bottom: 1px solid $borderColor;
                    transform: rotateY(90deg);
                    // transition: all ease-out .2s;
                    > a {
                        display: block;
                        height: 100%;
                    }
                    &:hover, &:active {
                        background-color: $blueColor;
                        transition: background-color .15s ease-in;
                        > a {
                            color: #fff;
                            transition: color .15s ease-in;
                        }
                    }
                }
            }
            &.active, &:hover {
                > a {
                    color: #fff;
                    transition: color .15s ease-in;
                }
                &::after {
                    height: 100%;
                    transition: height .15s ease-in;
                }
            }
            &:hover {
                .dropdown {
                    height: auto;
                    > dd {
                        transform: rotateY(0deg);
                        transition: transform ease-in .2s;
                    }
                }
            }
        }
    }
    .nav-tel {
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -21px;
        line-height: 1.5;
        > h3 {
            // font-weight: normal;
            font-size: .9rem;
        }
        > p {
            font-size: 1.1rem;
        }
    }
    .navbtn {
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -18px;
        > span {
            display: inline-block;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #666;
            text-align: center;
            line-height: 36px;
            color: #fff;
            cursor: pointer;
            margin: 0 6px;
            opacity: .8;
            &:hover {
                opacity: 1;
                background-color: $blueColor;
                transition: all ease-in .2s;
            }
        }
        .tel-dropdown {
            position: absolute;
            width: 200px;
            background-color: rgba($color: #fff, $alpha: .8);
            box-shadow: 0 .5rem 1rem rgba($color: #000000, $alpha: .2);
        }
    }
}
</style>
