(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productDetail"],{"0cb2":function(t,e,i){var r=i("e330"),s=i("7b0b"),n=Math.floor,a=r("".charAt),c=r("".replace),o=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,r,p,v){var d=i+t.length,f=r.length,h=l;return void 0!==p&&(p=s(p),h=u),c(v,h,(function(s,c){var u;switch(a(c,0)){case"$":return"$";case"&":return t;case"`":return o(e,0,i);case"'":return o(e,d);case"<":u=p[o(c,1,-1)];break;default:var l=+c;if(0===l)return s;if(l>f){var v=n(l/10);return 0===v?s:v<=f?void 0===r[v-1]?a(c,1):r[v-1]+a(c,1):s}u=r[l-1]}return void 0===u?"":u}))}},2236:function(t,e,i){"use strict";i("2b34")},"2b34":function(t,e,i){},5319:function(t,e,i){"use strict";var r=i("2ba4"),s=i("c65b"),n=i("e330"),a=i("d784"),c=i("d039"),o=i("825a"),u=i("1626"),l=i("5926"),p=i("50c4"),v=i("577e"),d=i("1d80"),f=i("8aa5"),h=i("dc4a"),m=i("0cb2"),w=i("14c3"),_=i("b622"),b=_("replace"),g=Math.max,C=Math.min,x=n([].concat),$=n([].push),y=n("".indexOf),k=n("".slice),P=function(t){return void 0===t?t:String(t)},S=function(){return"$0"==="a".replace(/./,"$0")}(),L=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),R=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,e,i){var n=L?"$":"$0";return[function(t,i){var r=d(this),n=void 0==t?void 0:h(t,b);return n?s(n,t,r,i):s(e,v(r),t,i)},function(t,s){var a=o(this),c=v(t);if("string"==typeof s&&-1===y(s,n)&&-1===y(s,"$<")){var d=i(e,a,c,s);if(d.done)return d.value}var h=u(s);h||(s=v(s));var _=a.global;if(_){var b=a.unicode;a.lastIndex=0}var S=[];while(1){var L=w(a,c);if(null===L)break;if($(S,L),!_)break;var R=v(L[0]);""===R&&(a.lastIndex=f(c,p(a.lastIndex),b))}for(var O="",D=0,T=0;T<S.length;T++){L=S[T];for(var j=v(L[0]),I=g(C(l(L.index),c.length),0),V=[],q=1;q<L.length;q++)$(V,P(L[q]));var B=L.groups;if(h){var M=x([j],V,I,c);void 0!==B&&$(M,B);var z=v(r(s,void 0,M))}else z=m(j,c,I,V,B,s);I>=D&&(O+=k(c,D,I)+z,D=I+j.length)}return O+k(c,D)}]}),!R||!S||L)},"5f47":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap"},[r("menu-banner",{attrs:{src:i("cbd5"),"menu-disabled":""}}),r("div",{staticClass:"container"},[r("div",{staticClass:"local"},[r("span",{staticClass:"iconfont icon-home"}),t._v(" 您的位置："),r("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" → "),r("router-link",{attrs:{to:"/product"}},[t._v("产品中心")]),t._v(" → "),r("router-link",{attrs:{to:"/product/"+t.type}},[t._v(t._s(t.$getRouteItemName(t.type,t.currentRoute.childrens)))])],1),r("div",{staticClass:"session clearfix"},[r("div",{staticClass:"viewer fl"},[r("swiper",{ref:"viewerSlide",staticClass:"viewer-slide",attrs:{options:t.viewerSlideOpt}},[t._l(t.product.picList,(function(t,e){return r("swiper-slide",{key:e},[r("img",{staticClass:"img-full",attrs:{src:t,alt:""}})])})),r("div",{staticClass:"swiper-button-prev swiper-button-white viewer-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),r("div",{staticClass:"swiper-button-next swiper-button-white viewer-next",attrs:{slot:"button-next"},slot:"button-next"})],2),r("swiper",{ref:"viewerThum",staticClass:"viewer-thum",attrs:{options:t.viewerThumOpt}},[t._l(t.product.picList,(function(e,i){return r("swiper-slide",{key:i,staticClass:"thum-item"},[r("div",{staticClass:"thum-img",class:{active:t.selectViewerPic===i},on:{click:function(e){return t.handdleClickThum(i)}}},[r("img",{attrs:{src:e,alt:""}})])])})),t.product.picList.length>4?[r("div",{staticClass:"swiper-button-prev swiper-button-white thum-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),r("div",{staticClass:"swiper-button-next swiper-button-white thum-next",attrs:{slot:"button-next"},slot:"button-next"})]:t._e()],2)],1),r("div",{staticClass:"pro-attr"},[r("h1",[t._v(t._s(t.product.name))]),r("div",{staticClass:"dtl"},[r("p",[t._v("产品类别："+t._s(t.$getRouteItemName(t.product.type,t.currentRoute.childrens)))]),r("p",[t._v("产品描述："+t._s(t.product.description))]),r("p",[t._v("产品型号："+t._s(t.product.model))]),r("p",[t._v("封装尺寸："+t._s(t.product.size))]),r("p",[t._v("容 值："+t._s(t.product.volume))]),r("p",[t._v("材 质："+t._s(t.product.material))]),r("p",[t._v("电 压："+t._s(t.product.voltage))]),r("p",[t._v("精 度："+t._s(t.product.precision))]),r("p",[t._v("厚 度："+t._s(t.product.thickness))]),r("p",[t._v("耐高温："+t._s(t.product.temperature))])]),r("div",{staticClass:"tel"},[r("span",{staticClass:"iconfont icon-f-tel"}),r("span",{staticClass:"name"},[t._v("服务热线：")]),t._v(t._s(t.companyData.phone))]),r("div",{staticClass:"btns"},[r("a",{staticClass:"online",attrs:{href:"tencent://message/?Site=tianshigame.com&uin="+t.companyData.qq+"&Menu=yes"}},[r("span",{staticClass:"iconfont icon-qq1"}),t._v(" 在线咨询")]),t._m(0)])])]),r("div",{staticClass:"session"},[r("div",{staticClass:"dtl-tit"},[t._v("产品说明")]),r("div",{staticClass:"dtl-con"},[t._v(" "+t._s(t.product.introduce)+" ")])]),r("div",{staticClass:"session"},[r("div",{staticClass:"dtl-tit"},[t._v("相关产品")]),r("div",{staticClass:"pro-list"},[r("ul",{staticClass:"clearfix"},t._l(t.relativeProList,(function(e){return r("li",{key:e.id,staticClass:"img-scale"},[r("div",{staticClass:"pic"},[r("router-link",{attrs:{to:"/product/"+e.type+"/"+e.id}},[r("img",{staticClass:"img-full",attrs:{src:e.img,alt:""}})])],1),r("p",[r("router-link",{attrs:{to:"/product/"+e.type+"/"+e.id}},[t._v(t._s(e.name))])],1)])})),0)])])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"back",attrs:{href:"/product"}},[i("span",{staticClass:"iconfont icon-aui-icon-back"}),t._v(" 返回列表")])}],n=i("1da1"),a=(i("96cf"),i("ac1f"),i("5319"),i("1276"),i("2b0e")),c=i("f6eb"),o=a["default"].extend({name:"ProductDetail",data:function(){var t=this;return{product:{picList:[]},viewerSlide:null,selectViewerPic:0,viewerSlideOpt:{autoplay:!1,observeParents:!0,prevButton:".viewer-prev",nextButton:".viewer-next",onSlideChangeStart:function(e){t.selectViewerPic=e.activeIndex}},viewerThumOpt:{autoplay:!1,observeParents:!0,prevButton:".thum-prev",nextButton:".thum-next",slidesPerView:4},relativeProList:[]}},computed:{type:function(){return this.$route.params.type},id:function(){return this.$route.params.id},companyData:function(){return this.$store.state.companyData},currentRoute:function(){return this.$store.state.currentRoute}},watch:{id:function(){this.getProductList(),this.getProductDetail()}},mounted:function(){var t=this;this.initSwiper(),this.$nextTick((function(){var e;if(t.type&&(null===(e=t.currentRoute.childrens)||void 0===e||!e.some((function(e){return e.type===t.type}))))return t.$router.replace("/404");t.getProductList()})),this.getProductDetail()},methods:{initSwiper:function(){this.viewerSlide=this.$refs.viewerSlide.swiper},handdleClickThum:function(t){this.selectViewerPic=t,this.viewerSlide.slideTo(t)},getProductList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["h"])({pageNum:1,pageSize:4,type:t.type});case 2:i=e.sent,t.relativeProList=i.list;case 4:case"end":return e.stop()}}),e)})))()},getProductDetail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["g"])({id:t.id});case 2:i=e.sent,t.product=i,t.product.picList=i.img.split(",");case 5:case"end":return e.stop()}}),e)})))()}}}),u=o,l=(i("2236"),i("2877")),p=Object(l["a"])(u,r,s,!1,null,"71169854",null);e["default"]=p.exports},cbd5:function(t,e,i){t.exports=i.p+"img/cpzx.7816334e.jpg"}}]);
//# sourceMappingURL=productDetail.b599cd2e.js.map