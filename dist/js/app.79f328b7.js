(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({about:"about",brand:"brand",brandDetail:"brandDetail",contact:"contact",download:"download",news:"news",newsDetail:"newsDetail",product:"product",productDetail:"productDetail"}[t]||t)+"."+{about:"4c5448ee",brand:"55017e7b",brandDetail:"833c25c9",contact:"20ff73fe",download:"4f63321a",news:"4cd7b33e",newsDetail:"25752d81",product:"48574199",productDetail:"b599cd2e"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,brand:1,brandDetail:1,contact:1,download:1,news:1,newsDetail:1,product:1,productDetail:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about",brand:"brand",brandDetail:"brandDetail",contact:"contact",download:"download",news:"news",newsDetail:"newsDetail",product:"product",productDetail:"productDetail"}[t]||t)+"."+{about:"8229d72c",brand:"6bbabebf",brandDetail:"bf70b483",contact:"792aec2f",download:"8b05efa0",news:"8289fd0f",newsDetail:"3d9b6bfd",product:"a42ede8d",productDetail:"d986f72b"}[t]+".css",s=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"040a":function(t,e,n){},"0fae":function(t,e,n){"use strict";n("9aef")},"16ce":function(t,e,n){t.exports=n.p+"img/c.f72f7724.jpg"},"1a20":function(t,e,n){"use strict";n("70cb")},"1de8":function(t,e,n){"use strict";n("8d94")},"1ec2":function(t,e,n){t.exports=n.p+"img/b.bf2800c7.jpg"},"31a3":function(t,e){(function(t){if(!t.requestAnimationFrame){if(t.webkitRequestAnimationFrame)return t.requestAnimationFrame=t["webkitRequestAnimationFrame"],void(t.cancelAnimationFrame=t["webkitCancelAnimationFrame"]||t["webkitCancelRequestAnimationFrame"]);if(t.mozRequestAnimationFrame)return t.requestAnimationFrame=t["mozRequestAnimationFrame"],void(t.cancelAnimationFrame=t["mozCancelAnimationFrame"]||t["mozCancelRequestAnimationFrame"]);var e=0;t.requestAnimationFrame=function(t){var n=(new Date).getTime(),a=Math.max(e+16,n);return setTimeout((function(){t(e=a)}),a-n)},t.cancelAnimationFrame=clearTimeout}})(window)},3250:function(t,e,n){},"3b17":function(t){t.exports=JSON.parse('[{"name":"首页","href":"/"},{"name":"关我们","href":"/about","childrens":[{"name":"公司简介","href":"/about/intro","type":"intro"},{"name":"企业文化","href":"/about/culture","type":"culture"},{"name":"荣誉资质","href":"/about/honor","type":"honor"},{"name":"公司环境","href":"/about/environment","type":"environment"}]},{"name":"产品中心","href":"/product","childrens":[{"name":"三星贴片电容","href":"/product/sx","type":"sx"},{"name":"村田贴片电容","href":"/product/ct","type":"ct"},{"name":"国巨贴片电容","href":"/product/gj","type":"gj"}]},{"name":"资料下载","href":"/download","childrens":[{"name":"规格书下载","href":"/download/spec","type":"spec"}]},{"name":"行业动态","href":"/news"},{"name":"品牌专区","href":"/brand"},{"name":"联系我们","href":"/contact"}]')},"3c93":function(t,e,n){t.exports=n.p+"img/a.a7bab3c8.jpg"},"44df":function(t,e,n){"use strict";n("040a")},5625:function(t,e,n){"use strict";n("65da")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"65da":function(t,e,n){},"70cb":function(t,e,n){},7835:function(t,e,n){},"8d94":function(t,e,n){},"9aef":function(t,e,n){},"9c0c":function(t,e,n){},a066:function(t,e,n){"use strict";n("bafc")},a342:function(t,e,n){},a6a2:function(t,e,n){"use strict";n("3250")},aca7:function(t,e,n){t.exports=n.p+"img/logo.6498fbe4.jpg"},bafc:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("672e"),n("450d");var a=n("101e"),i=n.n(a),s=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0"),n("2b0e")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-header"),n("router-view"),n("v-footer"),n("v-float")],1)},o=[],c=n("5530"),l=n("2f62"),u=s["default"].extend({name:"App",mounted:function(){this.SET_COMPANY_INFO()},methods:Object(c["a"])({},Object(l["b"])(["SET_COMPANY_INFO"]))}),d=u,f=(n("5c0b"),n("2877")),m=Object(f["a"])(d,r,o,!1,null,null,null),p=m.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"session slide"},[n("swiper",{staticClass:"slide-banner swiper-no-swiping",attrs:{options:t.bannerOption}},[t._l(t.bannerList,(function(t){return n("swiper-slide",{key:t.id},[n("img",{staticClass:"img-full",attrs:{src:t.url,alt:""}})])})),n("div",{staticClass:"swiper-pagination banner-pagination",attrs:{slot:"pagination"},slot:"pagination"}),n("div",{staticClass:"swiper-button-prev swiper-button-white banner-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),n("div",{staticClass:"swiper-button-next swiper-button-white banner-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),n("div",{staticClass:"session"},[t._m(0),n("div",{ref:"productElem",staticClass:"container"},[n("div",{staticClass:"product-list"},[n("ul",{staticClass:"clearfix"},[n("li",[n("div",{staticClass:"product-item animated",class:{fadeInDown:t.isShowProduct},staticStyle:{"animation-delay":".2s"}},[t._m(1),n("div",{staticClass:"mark"}),t._m(2)])]),n("li",[n("div",{staticClass:"product-item animated",class:{fadeInDown:t.isShowProduct},staticStyle:{"animation-delay":".7s"}},[t._m(3),n("div",{staticClass:"mark"}),t._m(4)])]),n("li",[n("div",{staticClass:"product-item animated",class:{fadeInDown:t.isShowProduct},staticStyle:{"animation-delay":"1.2s"}},[t._m(5),n("div",{staticClass:"mark"}),t._m(6)])])])])])]),n("div",{ref:"aboutElem",staticClass:"session about"},[n("div",{staticClass:"bg-img"},[n("a",{staticClass:"animated imgScale infinite",style:"background-image: url('"+t.companyData.img+"')",attrs:{href:"/about"}})]),n("div",{staticClass:"about-intro"},[t._m(7),n("p",[t._v(t._s(t.getAboutContent())+"...")]),n("div",{staticClass:"about-icon"},[n("ul",[n("li",{staticClass:"animated",class:{fadeInDown:t.isShowAbout},staticStyle:{"animation-delay":".2s"}},[n("div",{staticClass:"icon culture"}),n("h3",[t._v("企业文化")]),n("p",[t._v("Company Culture")])]),n("li",{staticClass:"animated",class:{fadeInDown:t.isShowAbout},staticStyle:{"animation-delay":".7s"}},[n("div",{staticClass:"icon strength"}),n("h3",[t._v("公司实力")]),n("p",[t._v("Company strength")])]),n("li",{staticClass:"animated",class:{fadeInDown:t.isShowAbout},staticStyle:{"animation-delay":"1.2s"}},[n("div",{staticClass:"icon patent"}),n("h3",[t._v("专利证书")]),n("p",[t._v("Patent Certificate")])])])])])]),n("div",{ref:"newsElem",staticClass:"session news"},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"tit"},[n("router-link",{staticClass:"more fr",attrs:{to:"/news"}},[n("span",[t._v("M")]),t._v("ORE+")]),n("p",[t._v("Exhibition")]),n("h2",[t._v("泰成兴动态")])],1),n("div",{staticClass:"exhibition animated",class:{fadeInLeftBig:t.isShowNews}},[n("div",{staticClass:"con",on:{mouseenter:function(e){return e.stopPropagation(),t.stopAutoPlay("newsSwiper")},mouseleave:function(e){return e.stopPropagation(),t.startAutoPlay("newsSwiper")}}},[n("swiper",{ref:"newsSwiper",staticClass:"exhibition-slide swiper-no-swiping",attrs:{options:t.newsOption}},[t._l(t.dynamicLlist,(function(e){return n("swiper-slide",{key:e.cid,staticClass:"slide-item"},[n("router-link",{attrs:{to:"/news/"+e.cid}},[n("img",{staticClass:"img-cover",attrs:{src:e.titlePic,alt:""}})]),n("div",{staticClass:"txt"},[n("span",[t._v(t._s(t.$dateFormate(e.modified,"MM-DD")))]),n("p",[n("router-link",{attrs:{to:"/news/"+e.cid}},[t._v(t._s(e.title))])],1)])],1)})),n("div",{staticClass:"swiper-button-prev exhi-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),n("div",{staticClass:"swiper-button-next exhi-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)]),n("div",{staticClass:"wiki animated",class:{fadeInRightBig:t.isShowNews}},[n("div",{staticClass:"con"},[n("ul",[t._l(t.wikiList,(function(e,a){return[0===a?n("li",{key:e.cid,staticClass:"first-item clearfix"},[n("div",{staticClass:"pic fl"},[n("router-link",{attrs:{to:"/news/"+e.cid}},[n("img",{staticClass:"img-full",attrs:{src:e.titlePic,alt:""}})])],1),n("div",{staticClass:"txt"},[n("h3",[n("router-link",{attrs:{to:"/news/"+e.cid}},[t._v(t._s(e.title))])],1),n("p",{staticClass:"date"},[t._v(t._s(t.$dateFormate(e.modified,"YYYY-MM-DD")))]),n("p",{staticClass:"intro"},[t._v(t._s(e.slug))])])]):n("li",{key:e.cid,staticClass:"item"},[n("router-link",{attrs:{to:"/news/"+e.type+"/"+e.cid}},[n("span",{staticClass:"date",domProps:{innerHTML:t._s(t.$dateFormate(e.modified,"<i>DD</i>/MM"))}}),n("p",[t._v(t._s(e.title))])])],1)]}))],2)])])])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-tit"},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"fl tit"},[n("p",[t._v("PRODUCTS AND SERVICES")]),n("h2",[t._v("产品与服务")])]),n("p",{staticClass:"intro"},[t._v("深圳市泰成兴电子科技有限公司一直专注于国内外知名品牌MLCC电容的行销以及物流供应链，主要品牌有：三星(SAMSUNG)、村田（MURATA)、国巨（YAGEO)、华科（WALSIN）、三环（CCTC）等。目前公司主要以国内贸易为主，现货形式销售，常备大量现货，拥有完整的型号库存。")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pic"},[a("img",{staticClass:"img-full",attrs:{src:n("3c93"),alt:"产品"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"txt",attrs:{href:"/product/sx"}},[n("h3",[t._v("三星贴片电容")]),n("p",[t._v("Inductive magnetic beads")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pic"},[a("img",{staticClass:"img-full",attrs:{src:n("1ec2"),alt:"产品"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"txt",attrs:{href:"/product/ct"}},[n("h3",[t._v("村田贴片电容")]),n("p",[t._v("Capacitor category")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pic"},[a("img",{staticClass:"img-full",attrs:{src:n("16ce"),alt:"产品"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"txt",attrs:{href:"/product/gj"}},[n("h3",[t._v("国巨贴片电容")]),n("p",[t._v("Capacitor category")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("ABOUT US "),n("span",[t._v("关于我们")])])}],w=n("1da1"),C=n("d4ec"),g=n("bee2"),_=n("262e"),y=n("2caf"),S=(n("a434"),n("96cf"),n("9ab4")),O=n("1b40"),D=(n("7835"),n("f6eb")),x=function(t){Object(_["a"])(n,t);var e=Object(y["a"])(n);function n(){var t;return Object(C["a"])(this,n),t=e.apply(this,arguments),t.bannerOption={autoplay:5e3,pagination:".banner-pagination",paginationClickable:!0,prevButton:".banner-prev",nextButton:".banner-next",observeParents:!0,effect:"fade",fade:!0,autoplayDisableOnInteraction:!1,loop:!0},t.newsOption={autoplay:4e3,observeParents:!0,prevButton:".exhi-prev",nextButton:".exhi-next",autoplayDisableOnInteraction:!1,loop:!0},t.bannerList=[],t.dynamicLlist=[],t.wikiList=[],t.isShowProduct=!1,t.isShowAbout=!1,t.isShowNews=!1,t}return Object(g["a"])(n,[{key:"companyData",get:function(){return this.$store.state.companyData}},{key:"mounted",value:function(){var t=this;this.getBannnerList(),this.getWikiLlist(),this.$nextTick((function(){document.addEventListener("scroll",t.handdleScroll),t.$refs.productElem.offsetTop<document.documentElement.clientHeight&&(t.isShowProduct=!0)}))}},{key:"beforeDestroy",value:function(){document.removeEventListener("scroll",this.handdleScroll)}},{key:"handdleScroll",value:function(){var t=this.$refs.productElem.offsetTop,e=this.$refs.aboutElem.offsetTop+200,n=this.$refs.newsElem.offsetTop,a=document.documentElement.clientHeight+document.documentElement.scrollTop;a>t&&(this.isShowProduct=!0),a>e&&(this.isShowAbout=!0),a>n&&(this.isShowNews=!0,document.removeEventListener("scroll",this.handdleScroll))}},{key:"getBannnerList",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(D["e"])({type:"7"});case 2:e=t.sent,this.bannerList=e.list;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getWikiLlist",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(D["b"])({pageNum:1,pageSize:7});case 2:e=t.sent,this.wikiList=e.list,this.dynamicLlist=this.wikiList.splice(0,2);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getAboutContent",value:function(){var t=this.companyData.introduce||"",e=t.indexOf("\r"),n=t.indexOf("\n");return t.substr(0,Math.min(e,n,200))}},{key:"stopAutoPlay",value:function(t){this.$refs[t].swiper.stopAutoplay()}},{key:"startAutoPlay",value:function(t){this.$refs[t].swiper.startAutoplay()}}]),n}(O["b"]);x=Object(S["a"])([Object(O["a"])({})],x);var k=x,E=k,T=(n("44df"),Object(f["a"])(E,v,b,!1,null,"ac8658ca",null)),j=T.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"error container"},[n("h2",[t._v("404")]),n("p",[t._v("页面不存在或者已删除")]),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/"}},[t._v("返回首页")])],1)])])},A=[],$=(n("0fae"),{}),R=Object(f["a"])($,P,A,!1,null,"53da85f9",null),L=R.exports;s["default"].use(h["a"]);var M=[{path:"/",name:"Home",component:j,meta:{title:"首页 - 深圳市泰成兴电子科技有限公司"}},{path:"/about/:type?",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{title:"关于我们"}},{path:"/product/:type?",name:"Product",component:function(){return n.e("product").then(n.bind(null,"d2f1"))},meta:{title:"产品中心"}},{path:"/product/:type/:id",name:"ProductDetail",component:function(){return n.e("productDetail").then(n.bind(null,"5f47"))},meta:{title:"产品详情"}},{path:"/download/:type?",name:"Download",component:function(){return n.e("download").then(n.bind(null,"3971"))},meta:{title:"资料下载"}},{path:"/news",name:"News",component:function(){return n.e("news").then(n.bind(null,"a2f9"))},meta:{title:"行业动态"}},{path:"/news/:id",name:"NewsDetail",component:function(){return n.e("newsDetail").then(n.bind(null,"9c36"))},meta:{title:"行业动态详情"}},{path:"/brand",name:"Brand",component:function(){return n.e("brand").then(n.bind(null,"4fa8"))},meta:{title:"品牌专区"}},{path:"/brand/:id",name:"BrandDetail",component:function(){return n.e("brandDetail").then(n.bind(null,"c180"))},meta:{title:"品牌介绍"}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))},meta:{title:"联系我们"}},{path:"*",name:"Error",component:L,meta:{title:"错误页"}}],N=new h["a"]({mode:"history",base:"/",routes:M}),F=N;s["default"].use(l["a"]);var q=new l["a"].Store({state:{companyData:{},currentRoute:null},actions:{SET_COMPANY_INFO:function(t){return Object(w["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.state,a=t.commit,n.companyData.name){e.next=7;break}return e.t0=a,e.next=5,Object(D["d"])({});case 5:e.t1=e.sent,(0,e.t0)("SET_COMPANY_INFO",e.t1);case 7:case"end":return e.stop()}}),e)})))()}},mutations:{SET_COMPANY_INFO:function(t,e){t.companyData=e},SET_CURRENT_ROUTE:function(t,e){t.currentRoute=e}}}),I=q,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar fixed"},[a("div",{staticClass:"container"},[a("div",{staticClass:"brand"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"img-full",attrs:{src:n("aca7"),alt:"logo"}})])],1),a("div",{staticClass:"navlist"},[a("ul",t._l(t.menuList,(function(e){return a("li",{key:e.href,class:{active:e.href===t.activeRoute}},[a("router-link",{attrs:{to:e.href}},[t._v(t._s(e.name))]),e.childrens?a("dl",{staticClass:"dropdown"},t._l(e.childrens,(function(e,n){return a("dd",{key:e.href,style:"transition-delay: 0."+n+"s"},[a("router-link",{attrs:{to:e.href}},[t._v(t._s(e.name))])],1)})),0):t._e()],1)})),0)]),a("div",{staticClass:"nav-tel"},[a("h3",[t._v("全国服务热线")]),a("p",[t._v(t._s(t.companyData.phone))])])])])},U=[],Y=n("b85c"),H=(n("4d63"),n("ac1f"),n("25f0"),n("3b17")),z=function(t){Object(_["a"])(n,t);var e=Object(y["a"])(n);function n(){var t;return Object(C["a"])(this,n),t=e.apply(this,arguments),t.menuList=H,t}return Object(g["a"])(n,[{key:"companyData",get:function(){return this.$store.state.companyData}},{key:"activeRoute",get:function(){var t=null;if("/"===this.$route.path)return this.$store.commit("SET_CURRENT_ROUTE",this.menuList[0]),this.menuList[0].href;var e,n=Object(Y["a"])(this.menuList);try{for(n.s();!(e=n.n()).done;){var a=e.value;if("/"!==a.href){var i=new RegExp("^".concat(a.href));if(i.test(this.$route.path)){t=a;break}}}}catch(s){n.e(s)}finally{n.f()}return this.$store.commit("SET_CURRENT_ROUTE",t),t?t.href:""}}]),n}(O["b"]);z=Object(S["a"])([O["a"]],z);var J=z,V=J,W=(n("a6a2"),Object(f["a"])(V,B,U,!1,null,"5ec0bee1",null)),G=W.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"foot-right"},[n("h4",[t._v("CONTACT US")]),n("h5",[t._v("联系我们")]),n("p",[t._v(t._s(t.companyData.phone))]),n("div",{staticClass:"contact-icon"},[n("div",{staticClass:"icon",on:{mouseenter:function(e){t.isShowCode=!0},mouseleave:function(e){t.isShowCode=!1}}},[n("i",{staticClass:"iconfont icon-weixin"}),n("transition",{attrs:{name:"slide-fade"}},[t.isShowCode?n("div",{staticClass:"qrcode"},[n("img",{staticClass:"img-full",attrs:{src:t.companyData.wechatUrl,alt:"微信二维码"}})]):t._e()])],1),n("a",{staticClass:"icon",attrs:{href:t.companyData.weibo,target:"_blank"}},[n("i",{staticClass:"iconfont icon-xinlangweibo"})]),n("a",{staticClass:"icon",attrs:{href:"mailto:"+t.companyData.email,target:"_blank"}},[n("i",{staticClass:"iconfont icon-email"})])])]),n("div",{staticClass:"foot-left"},[n("ul",{staticClass:"foot-nav mb-20"},t._l(t.menuList,(function(e){return n("li",{key:e.href},[n("router-link",{attrs:{to:e.href}},[t._v(t._s(e.name))])],1)})),0),n("div",[n("h4",[t._v(t._s(t.companyData.name))]),n("p",[t._v("电话："+t._s(t.companyData.phone))]),n("p",[t._v("邮箱："+t._s(t.companyData.email))]),n("p",{staticClass:"mb-10"},[t._v("地址："+t._s(t.companyData.address))]),n("p",[t._v("©2021-2022 "+t._s(t.companyData.name)+"版权所有 "),n("a",{attrs:{href:"http://www.miibeian.gov.cn/",target:"_blank"}},[t._v("粤ICP备2021161022号-1")])])])])])])},Q=[],X=s["default"].extend({name:"VFooter",data:function(){return{menuList:H,isShowCode:!1}},computed:Object(c["a"])({},Object(l["c"])(["companyData"]))}),Z=X,tt=(n("5625"),Object(f["a"])(Z,K,Q,!1,null,"b8aad584",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"float-warp"},[n("ul",[n("li",{staticClass:"qq"},[n("a",{attrs:{href:"tencent://message/?Site=tianshigame.com&uin="+t.companyData.qq+"&Menu=yes"}},[n("span",{staticClass:"iconfont icon-qq"})])]),n("li",{staticClass:"tel"},[n("p",[n("span",{staticClass:"iconfont icon-f-tel"}),n("span",{staticClass:"phone"},[t._v(t._s(t.companyData.phone))])])]),n("li",{staticClass:"wx",on:{mouseenter:function(e){t.isShowCode=!0},mouseleave:function(e){t.isShowCode=!1}}},[n("span",{staticClass:"iconfont icon-weixin"}),n("transition",{attrs:{name:"left-fade"}},[t.isShowCode?n("div",{staticClass:"qrcode"},[n("img",{staticClass:"img-full",attrs:{src:t.companyData.wechatUrl,alt:"微信二维码"}}),n("p",[t._v("关注官方微信")])]):t._e()])],1),n("li",{staticClass:"top",on:{click:t.gotop}},[n("span",{staticClass:"iconfont icon-top"})])])])},at=[],it=s["default"].extend({name:"VFloat",data:function(){return{isShowCode:!1,step:0}},computed:Object(c["a"])({},Object(l["c"])(["companyData"])),methods:{gotop:function(){var t=document.documentElement.scrollTop,e=300;this.step=t/e*16,this.moveToTop()},moveToTop:function(){var t=document.documentElement.scrollTop-this.step;document.documentElement.scrollTop=Math.max(0,t),document.documentElement.scrollTop>0&&requestAnimationFrame(this.moveToTop)}}}),st=it,rt=(n("a066"),Object(f["a"])(st,nt,at,!1,null,"4f230308",null)),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner",style:"background-image: url('"+t.src+"')"},[n("h1",[t._v(t._s(t.currentRoute.name))]),!t.menuDisabled&&t.currentRoute.childrens?n("div",{staticClass:"nav-list"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"clearfix"},t._l(t.currentRoute.childrens,(function(e){return n("li",{key:e.href,class:{active:e.href===t.$route.path},style:"width: "+Math.floor(1e4/t.currentRoute.childrens.length)/100+"%",on:{click:function(n){return t.handdleMenuChange(e.type)}}},[n("router-link",{attrs:{to:e.href}},[t._v(t._s(e.name))])],1)})),0)])]):t._e()])},lt=[],ut=s["default"].extend({name:"MenuBanner",props:{menuDisabled:Boolean,src:{type:String,required:!0}},computed:Object(c["a"])({},Object(l["c"])(["currentRoute"])),methods:{handdleMenuChange:function(t){this.$emit("menuChange",t)}}}),dt=ut,ft=(n("1a20"),Object(f["a"])(dt,ct,lt,!1,null,"1b782cdc",null)),mt=ft.exports,pt=(n("a342"),n("dfa4"),n("31a3"),n("1276"),n("a15b"),n("4de4"),function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss",n="string"===typeof t?t:1e3*t,a=new Date(n),i={y:String(a.getFullYear()),m:String(a.getMonth()+1),d:String(a.getDate()),h:String(a.getHours()),min:String(a.getMinutes()),s:String(a.getSeconds())},s=e.split(""),r=function(t,e){var n=i[e].length-1;n>=0?(s[t]=i[e][n],i[e]=i[e].substr(0,n)):s[t]="0"},o=s.length-1;o>=0;o--)switch(s[o]){case"Y":r(o,"y");break;case"M":r(o,"m");break;case"D":r(o,"d");break;case"h":r(o,"h");break;case"m":r(o,"min");break;case"s":r(o,"s");break;default:break}return s.join("")}),ht=function(t,e){if(!e)return t;var n=e.filter((function(e){return e.type===t}));return n[0]?n[0].name:""},vt=n("1f80"),bt=n.n(vt),wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog"},[n("div",{staticClass:"preview-box"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:t.url,alt:"",referrerPolicy:"no-referrer"}})])]),n("a",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:t.closePreview}},[t._v("×")])])},Ct=[],gt={name:"PreviewDialog",props:{isShowPreview:{type:Boolean,required:!0},url:{type:String,required:!0}},methods:{closePreview:function(){this.$emit("update:isShowPreview",!1)}}},_t=gt,yt=(n("1de8"),Object(f["a"])(_t,wt,Ct,!1,null,"5a6b3740",null)),St=yt.exports;s["default"].config.productionTip=!1,s["default"].use(bt.a),s["default"].component("v-header",G),s["default"].component("v-footer",et),s["default"].component("v-float",ot),s["default"].component("menu-banner",mt),s["default"].component(i.a.name,i.a),s["default"].component(St.name,St),s["default"].prototype.$getRouteItemName=ht,s["default"].prototype.$dateFormate=pt,F.beforeEach((function(t,e,n){var a;document.title=null===(a=t.meta)||void 0===a?void 0:a.title,n()})),new s["default"]({router:F,store:I,render:function(t){return t(p)}}).$mount("#app")},f6eb:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"h",(function(){return m})),n.d(e,"g",(function(){return p}));n("d3b7");var a=n("bc3a"),i=n.n(a);i.a.defaults.baseURL="http://112.74.94.224:8080/";var s=function(t){var e=t.url,n=t.method,a=t.data,s=t.params,r=t.headers;return new Promise((function(t,o){i()({url:e,method:n,data:a,params:s,headers:r}).then((function(e){if(!/^2[0-9]{2}$/.test(String(e.status)))throw o(e),e;var n=e.data;t(n)})).catch((function(t){throw t}))}))},r=s,o=function(t){return r({url:"/open/company/info",method:"POST",data:t})},c=function(t){return r({url:"/open/article/info",method:"POST",data:t})},l=function(t){return r({url:"/open/article/get",method:"POST",data:t})},u=function(t){return r({url:"/open/brand/info",method:"POST",data:t})},d=function(t){return r({url:"/open/oss/info",method:"POST",data:t})},f=function(t){return r({url:"/open/oss/getOssByType",method:"POST",data:t})},m=function(t){return r({url:"/open/product/info",method:"POST",data:t})},p=function(t){return r({url:"/open/product/get",method:"POST",data:t})}}});
//# sourceMappingURL=app.79f328b7.js.map