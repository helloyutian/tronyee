(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["brandDetail"],{"408a":function(t,a,n){var r=n("e330");t.exports=r(1..valueOf)},5899:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,a,n){var r=n("e330"),e=n("1d80"),i=n("577e"),s=n("5899"),c=r("".replace),o="["+s+"]",d=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),l=function(t){return function(a){var n=i(e(a));return 1&t&&(n=c(n,d,"")),2&t&&(n=c(n,u,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},"597b":function(t,a,n){"use strict";n("eaca")},"7bcd":function(t,a,n){t.exports=n.p+"img/ppzq.46d440d8.jpg"},a9e3:function(t,a,n){"use strict";var r=n("83ab"),e=n("da84"),i=n("e330"),s=n("94ca"),c=n("6eeb"),o=n("1a2d"),d=n("7156"),u=n("3a9b"),l=n("d9b5"),f=n("c04e"),b=n("d039"),p=n("241c").f,v=n("06cf").f,m=n("9bf2").f,h=n("408a"),_=n("58a8").trim,g="Number",I=e[g],N=I.prototype,x=e.TypeError,C=i("".slice),B=i("".charCodeAt),E=function(t){var a=f(t,"number");return"bigint"==typeof a?a:k(a)},k=function(t){var a,n,r,e,i,s,c,o,d=f(t,"number");if(l(d))throw x("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=_(d),a=B(d,0),43===a||45===a){if(n=B(d,2),88===n||120===n)return NaN}else if(48===a){switch(B(d,1)){case 66:case 98:r=2,e=49;break;case 79:case 111:r=8,e=55;break;default:return+d}for(i=C(d,2),s=i.length,c=0;c<s;c++)if(o=B(i,c),o<48||o>e)return NaN;return parseInt(i,r)}return+d};if(s(g,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var w,D=function(t){var a=arguments.length<1?0:I(E(t)),n=this;return u(N,n)&&b((function(){h(n)}))?d(Object(a),n,D):a},L=r?p(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),y=0;L.length>y;y++)o(I,w=L[y])&&!o(D,w)&&m(D,w,v(I,w));D.prototype=N,N.constructor=D,c(e,g,D)}},c180:function(t,a,n){"use strict";n.r(a);var r=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"wrap"},[r("menu-banner",{attrs:{src:n("7bcd"),"menu-disabled":""}}),r("div",{staticClass:"container"},[r("div",{staticClass:"local"},[r("span",{staticClass:"iconfont icon-home"}),t._v(" 您的位置："),r("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" → "),r("router-link",{attrs:{to:"/brand"}},[t._v("品牌专区")])],1),r("h1",{staticClass:"article-tit"},[t._v(t._s(t.brandData.name))]),r("p",{staticClass:"article-time"},[r("span",[r("i",{staticClass:"iconfont icon-time"}),t._v(" "+t._s(t.$dateFormate(t.brandData.modifyTime,"YYYY-MM-DD")))]),r("span",[r("i",{staticClass:"iconfont icon-View"}),t._v(" ("+t._s(60+3*t.brandData.id)+")次浏览")])]),r("div",{staticClass:"article-main"},[r("p",[r("img",{attrs:{src:t.brandData.img,alt:""}})]),r("p",[t._v(t._s(t.brandData.description))])]),r("div",{staticClass:"detail-pager clearfix"},[r("div",{staticClass:"fl"},[r("p",{staticClass:"nav-link"},[t._v(" 上一篇： "),t.prevBrand?r("router-link",{attrs:{to:"/brand/"+t.prevBrand.id}},[t._v(t._s(t.prevBrand.name))]):r("span",[t._v("无")])],1),r("p",{staticClass:"nav-link"},[t._v(" 下一篇： "),t.nextBrand?r("router-link",{attrs:{to:"/brand/"+t.nextBrand.id}},[t._v(t._s(t.nextBrand.name))]):r("span",[t._v("无")])],1)]),r("router-link",{staticClass:"fr btn-back",attrs:{to:"/brand"}},[r("span",{staticClass:"iconfont icon-aui-icon-back"}),t._v(" 返回列表")])],1)])],1)},e=[],i=n("1da1"),s=(n("96cf"),n("a9e3"),n("f6eb")),c=n("2b0e"),o=c["default"].extend({name:"BrandDetail",data:function(){return{brandList:[],brandData:{},nextBrand:null,prevBrand:null,queryParam:{pageNum:1,pageSize:20}}},computed:{brandId:function(){return Number(this.$route.params.id)}},watch:{brandId:function(){this.getBrandData()}},mounted:function(){this.getBrandList()},methods:{getBrandList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(s["b"])({});case 2:n=a.sent,t.brandList=n.list,t.getBrandData();case 5:case"end":return a.stop()}}),a)})))()},getBrandData:function(){var t=null,a=0;for(a=0;a<this.brandList.length;a++){var n=this.brandList[a];if(n.id===this.brandId){t=n;break}}t?(this.nextBrand=a<this.brandList.length-1?this.brandList[a+1]:null,this.prevBrand=a>0?this.brandList[a-1]:null,this.brandData=t):this.$router.push("/error/404")}}}),d=o,u=(n("597b"),n("2877")),l=Object(u["a"])(d,r,e,!1,null,"1601aab2",null);a["default"]=l.exports},eaca:function(t,a,n){}}]);
//# sourceMappingURL=brandDetail.b350f754.js.map