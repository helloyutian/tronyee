(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productDetail"],{"049e":function(t,e,s){"use strict";s("2455")},"0cb2":function(t,e,s){var i=s("e330"),a=s("7b0b"),r=Math.floor,n=i("".charAt),c=i("".replace),l=i("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,s,i,p,v){var d=s+t.length,w=i.length,h=o;return void 0!==p&&(p=a(p),h=u),c(v,h,(function(a,c){var u;switch(n(c,0)){case"$":return"$";case"&":return t;case"`":return l(e,0,s);case"'":return l(e,d);case"<":u=p[l(c,1,-1)];break;default:var o=+c;if(0===o)return a;if(o>w){var v=r(o/10);return 0===v?a:v<=w?void 0===i[v-1]?n(c,1):i[v-1]+n(c,1):a}u=i[o-1]}return void 0===u?"":u}))}},2455:function(t,e,s){},5319:function(t,e,s){"use strict";var i=s("2ba4"),a=s("c65b"),r=s("e330"),n=s("d784"),c=s("d039"),l=s("825a"),u=s("1626"),o=s("5926"),p=s("50c4"),v=s("577e"),d=s("1d80"),w=s("8aa5"),h=s("dc4a"),f=s("0cb2"),g=s("14c3"),C=s("b622"),m=C("replace"),_=Math.max,b=Math.min,y=r([].concat),x=r([].push),k=r("".indexOf),$=r("".slice),R=function(t){return void 0===t?t:String(t)},S=function(){return"$0"==="a".replace(/./,"$0")}(),j=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),M=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));n("replace",(function(t,e,s){var r=j?"$":"$0";return[function(t,s){var i=d(this),r=void 0==t?void 0:h(t,m);return r?a(r,t,i,s):a(e,v(i),t,s)},function(t,a){var n=l(this),c=v(t);if("string"==typeof a&&-1===k(a,r)&&-1===k(a,"$<")){var d=s(e,n,c,a);if(d.done)return d.value}var h=u(a);h||(a=v(a));var C=n.global;if(C){var m=n.unicode;n.lastIndex=0}var S=[];while(1){var j=g(n,c);if(null===j)break;if(x(S,j),!C)break;var M=v(j[0]);""===M&&(n.lastIndex=w(c,p(n.lastIndex),m))}for(var P="",E=0,T=0;T<S.length;T++){j=S[T];for(var L=v(j[0]),B=_(b(o(j.index),c.length),0),D=[],O=1;O<j.length;O++)x(D,R(j[O]));var V=j.groups;if(h){var G=y([L],D,B,c);void 0!==V&&x(G,V);var I=v(i(a,void 0,G))}else I=f(L,c,B,D,V,a);B>=E&&(P+=$(c,E,B)+I,E=B+L.length)}return P+$(c,E)}]}),!M||!S||j)},"5f47":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("menu-banner",{attrs:{"menu-disabled":""}}),s("div",{staticClass:"container"},[s("div",{staticClass:"local"},[s("span",{staticClass:"iconfont icon-home"}),t._v(" 您的位置："),s("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" → "),s("router-link",{attrs:{to:"/product"}},[t._v("产品中心")]),t._v(" → "),s("router-link",{attrs:{to:"/product/"+t.type}},[t._v(t._s(t.$getRouteItemName(t.type,t.currentRoute.childrens)))])],1),s("div",{staticClass:"session clearfix"},[s("div",{staticClass:"viewer fl"},[s("swiper",{ref:"viewerSlide",staticClass:"viewer-slide",attrs:{options:t.viewerSlideOpt}},[t._l(t.picList,(function(t,e){return s("swiper-slide",{key:e},[s("img",{staticClass:"img-full",attrs:{src:t,alt:""}})])})),s("div",{staticClass:"swiper-button-prev swiper-button-white viewer-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),s("div",{staticClass:"swiper-button-next swiper-button-white viewer-next",attrs:{slot:"button-next"},slot:"button-next"})],2),s("swiper",{ref:"viewerThum",staticClass:"viewer-thum",attrs:{options:t.viewerThumOpt}},[t._l(t.picList,(function(e,i){return s("swiper-slide",{key:i,staticClass:"thum-item"},[s("div",{staticClass:"thum-img",class:{active:t.selectViewerPic===i},on:{click:function(e){return t.handdleClickThum(i)}}},[s("img",{attrs:{src:e,alt:""}})])])})),t.picList.length>4?s("div",{staticClass:"swiper-button-prev swiper-button-white thum-prev",attrs:{slot:"button-prev"},slot:"button-prev"}):t._e(),t.picList.length>4?s("div",{staticClass:"swiper-button-next swiper-button-white thum-next",attrs:{slot:"button-next"},slot:"button-next"}):t._e()],2)],1),t._m(0)]),t._m(1),s("div",{staticClass:"session"},[s("div",{staticClass:"dtl-tit"},[t._v("相关产品")]),s("div",{staticClass:"pro-list"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"img-scale"},[s("div",{staticClass:"pic"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"img-full",attrs:{src:"http://www.chuangyisy.cn/uploads/202004/5e9ea07714e9a.jpg",alt:"a"}})])],1),s("p",[s("router-link",{attrs:{to:"/"}},[t._v("GRM033R61C473KE84D")])],1)]),s("li",{staticClass:"img-scale"},[s("div",{staticClass:"pic"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"img-full",attrs:{src:"http://www.chuangyisy.cn/uploads/202004/5e9ea07714e9a.jpg",alt:"a"}})])],1),s("p",[s("router-link",{attrs:{to:"/"}},[t._v("GRM033R61C473KE84D")])],1)]),s("li",{staticClass:"img-scale"},[s("div",{staticClass:"pic"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"img-full",attrs:{src:"http://www.chuangyisy.cn/uploads/202004/5e9ea07714e9a.jpg",alt:"a"}})])],1),s("p",[s("router-link",{attrs:{to:"/"}},[t._v("GRM033R61C473KE84D")])],1)]),s("li",{staticClass:"img-scale"},[s("div",{staticClass:"pic"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"img-full",attrs:{src:"http://www.chuangyisy.cn/uploads/202004/5e9ea07714e9a.jpg",alt:"a"}})])],1),s("p",[s("router-link",{attrs:{to:"/"}},[t._v("GRM033R61C473KE84D")])],1)])])])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pro-attr"},[s("h1",[t._v("CC0805KRX7R9BB102")]),s("div",{staticClass:"dtl"},[s("p",[t._v("产品类别：村田贴片电容")]),s("p",[t._v("产品描述：")]),s("p",[t._v("产品型号：GRM31CR61A476ME15L")]),s("p",[t._v("封装尺寸：1206")]),s("p",[t._v("容 值：2.2UF")]),s("p",[t._v("材 质：X7R")]),s("p",[t._v("电 压：50V")]),s("p",[t._v("精 度：±10%")]),s("p",[t._v("厚 度：0.65T")]),s("p",[t._v("耐高温：-55℃～+125℃")])]),s("div",{staticClass:"tel"},[s("span",{staticClass:"iconfont icon-f-tel"}),s("span",{staticClass:"name"},[t._v("服务热线：")]),t._v("0755-83257779")]),s("div",{staticClass:"btns"},[s("a",{staticClass:"online",attrs:{href:"/product"}},[s("span",{staticClass:"iconfont icon-qq1"}),t._v(" 在线咨询")]),s("a",{staticClass:"back",attrs:{href:"/product"}},[s("span",{staticClass:"iconfont icon-aui-icon-back"}),t._v(" 返回列表")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"session"},[s("div",{staticClass:"dtl-tit"},[t._v("产品说明")]),s("div",{staticClass:"dtl-con"},[s("p",[t._v(" ")]),s("p",[t._v("特性： ")]),s("p",[t._v("1．外形尺寸小。 ")]),s("p",[t._v("2．闭合电路，无交互干扰，适合于高密度安装。 ")]),s("p",[t._v("3．无方向性，规范化的自动贴片安装外形。 ")]),s("p",[t._v("4．可焊性和耐焊性优，适合于流焊和再流焊。")]),s("p",[t._v(" ")]),s("p",[t._v("应用： ")]),s("p",[t._v("被广泛用于笔记本电脑数位电视，数位录放影机，列表机，硬式磁碟机，个人电脑和其安一般消费性及电脑主品上输入、输出线路之杂讯消除。")])])])}],r=(s("ac1f"),s("5319"),s("2b0e")),n=r["default"].extend({name:"ProductDetail",data:function(){var t=this;return{productList:[],total:0,queryParam:{pageNum:1,pageSize:20},picList:["http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg","http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg","http://www.chuangyisy.cn/uploads/202004/5e9ea16d79fd9.jpg","http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg","http://www.chuangyisy.cn/uploads/202004/5e9ea2cdb3b62.jpg","http://www.chuangyisy.cn/uploads/202004/5e9ea16d79fd9.jpg"],viewerSlide:null,selectViewerPic:0,viewerSlideOpt:{autoplay:!1,observeParents:!0,prevButton:".viewer-prev",nextButton:".viewer-next",onSlideChangeStart:function(e){t.selectViewerPic=e.activeIndex}},viewerThumOpt:{autoplay:!1,observeParents:!0,prevButton:".thum-prev",nextButton:".thum-next",slidesPerView:4}}},computed:{type:function(){return this.$route.params.type},id:function(){return this.$route.params.id},currentRoute:function(){return this.$store.state.currentRoute}},mounted:function(){var t=this;this.initSwiper(),this.$nextTick((function(){var e;if(t.type&&(null===(e=t.currentRoute.childrens)||void 0===e||!e.some((function(e){return e.type===t.type}))))return t.$router.replace("/404")}))},methods:{initSwiper:function(){this.viewerSlide=this.$refs.viewerSlide.swiper},handdleClickThum:function(t){this.selectViewerPic=t,this.viewerSlide.slideTo(t)}}}),c=n,l=(s("049e"),s("2877")),u=Object(l["a"])(c,i,a,!1,null,"ea7ab452",null);e["default"]=u.exports}}]);
//# sourceMappingURL=productDetail.f17e7d86.js.map