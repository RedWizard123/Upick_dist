webpackJsonp([2,0],[function(t,e,s){"use strict";var i=s(85),n=s(86),a=s(118),o=s(62),c=s(69),r=s(67),l=s(63),d=s(70),u=s(72),p=s(71),h=s(64),v=s(68),m=s(66),f=s(65);i.use(n),i.use(a.default);var _=[{path:"/",component:r},{path:"/storeDetail/:id",component:p},{path:"/storeList/:type",component:u},{path:"/storeList/search/noStore",component:d},{path:"/storeList/search/:keyword",component:u},{path:"/newStore",component:c},{path:"/newStore/addSuccess",component:l},{path:"/comment/success/:id",component:m},{path:"/comment/failed/:id",component:f},{path:"/comment/mark/:id/:title/:tags/:comment",component:v},{path:"/comment/:id",component:h},{path:"/:type",component:r}],g=new n({routes:_});new i({el:"#app",template:"<App/>",components:{App:o},router:g})},,,,,,,,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/avatar.png"},function(t,e,s){t.exports=s.p+"static/img/no.png"},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/comment_top.png"},function(t,e,s){t.exports=s.p+"static/img/favicon.ico"},function(t,e,s){t.exports=s.p+"static/img/title_share.png"},function(t,e,s){t.exports=s.p+"static/img/xingxing.png"},function(t,e,s){t.exports=s.p+"static/img/bad.png"},function(t,e,s){t.exports=s.p+"static/img/good.png"},function(t,e,s){t.exports=s.p+"static/img/normal.png"},function(t,e,s){t.exports=s.p+"static/img/header.png"},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){s(59);var i=s(2)(s(119),s(83),null,null);t.exports=i.exports},function(t,e,s){s(58);var i=s(2)(s(120),s(82),null,null);t.exports=i.exports},function(t,e,s){s(51);var i=s(2)(s(121),s(75),"data-v-0dd9f94e",null);t.exports=i.exports},function(t,e,s){s(53);var i=s(2)(s(122),s(77),null,null);t.exports=i.exports},function(t,e,s){s(57);var i=s(2)(s(123),s(81),"data-v-68428e15",null);t.exports=i.exports},function(t,e,s){s(54);var i=s(2)(s(124),s(78),"data-v-4228435b",null);t.exports=i.exports},function(t,e,s){s(55);var i=s(2)(s(125),s(79),null,null);t.exports=i.exports},function(t,e,s){s(50);var i=s(2)(s(126),s(74),null,null);t.exports=i.exports},function(t,e,s){s(49);var i=s(2)(s(127),s(73),"data-v-0727dad0",null);t.exports=i.exports},function(t,e,s){s(60);var i=s(2)(s(128),s(84),"data-v-f6d59e0e",null);t.exports=i.exports},function(t,e,s){s(56);var i=s(2)(s(129),s(80),"data-v-5c4ec46b",null);t.exports=i.exports},function(t,e,s){s(52);var i=s(2)(s(130),s(76),"data-v-12f1f290",null);t.exports=i.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-store-root",class:{show:t.loaded}},[i("div",{staticClass:"new-store-header"},[i("div",{staticClass:"new-store-alert"}),t._v(" "),i("img",{attrs:{src:s(48)},on:{load:function(e){t.n++,t.checkLoad()}}}),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"new-store-input"},t._l(t.items,function(e){return i("div",{staticClass:"input-item",class:e.inputType,attrs:{"data-necessary":e.necessary}},["select"===e.inputType?[i("h2",[i("span",[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"mask",class:{show:t.inSelection},on:{click:function(e){t.inSelection=!1}}}),t._v(" "),i("div",{staticClass:"select-list",class:{show:t.inSelection}},t._l(e.ops,function(e){return i("button",{staticClass:"select-option",attrs:{"data-id":e.id},on:{click:t.select}},[t._v(t._s(e.name))])})),t._v(" "),i("span",{staticClass:"input",style:{color:""===t.selectValue?"#A9A9A9":"#000"},attrs:{placeholder:e.placeholder},on:{click:t.selectClick}},[t._v(t._s(""===t.selectValue?e.placeholder:t.selectValue))])]:"shortText"===e.inputType?[i("h2",[i("span",[t._v(t._s(e.title))])]),t._v(" "),i("input",{attrs:{placeholder:e.placeholder,id:e.name,type:"text"}})]:"longText"===e.inputType?[i("h2",[i("span",[t._v(t._s(e.title))])]),t._v(" "),i("textarea",{attrs:{placeholder:e.placeholder,id:e.name,type:"text"}})]:t._e()],2)})),t._v(" "),i("button",{staticClass:"submit",on:{click:t.submit}},[t._v("提交")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("span"),s("span",[t._v("添加新店")])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mark-root",class:{show:t.loaded}},[i("div",{staticClass:"alert",class:{show:t.alertShow}},[i("p",[t._v(t._s(t.alertValue))])]),t._v(" "),i("div",{staticClass:"mark-header"},[i("router-link",{attrs:{to:"/"}},[i("span")]),t._v(" "),i("span",[t._v(t._s(t.$route.params.title))])],1),t._v(" "),i("div",{staticClass:"mark-body"},[i("div",{staticClass:"img"},[i("img",{staticClass:"bad load",style:{display:t.score<5?"block":"none"},attrs:{src:s(45)}}),t._v(" "),i("img",{staticClass:"normal load",style:{display:t.score>=5&&t.score<7?"block":"none"},attrs:{src:s(47)}}),t._v(" "),i("img",{staticClass:"good load",style:{display:t.score>=7?"block":"none"},attrs:{src:s(46)}})]),t._v(" "),i("div",{staticClass:"switcher"},[i("h2",[t._v(t._s(t.score)+"分")]),t._v(" "),i("div",{on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[i("span",[t._v("0 ")]),t._v(" "),i("div",{staticClass:"bar"},[i("div",[i("div",{staticClass:"button",style:{transform:"translateX("+t.offset+"px)"}})])]),t._v(" "),i("span",[t._v("10")])])])]),t._v(" "),i("div",{staticClass:"mark-footer"},[i("div",{staticClass:"buttons"},[i("button",{on:{click:t.submitWithoutMark}},[t._v("暂不评分")]),t._v(" "),i("button",{on:{click:t.submit}},[t._v("完成")])])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-success-root",class:{show:t.loaded}},[i("img",{attrs:{src:s(15)},on:{load:t.loadPlus}}),t._v(" "),i("h1",[t._v("感谢您提供的数据")]),t._v(" "),i("p",[t._v("您添加的新店将在审核通过后火速上线哦～")]),t._v(" "),i("button",{on:{click:t.back}},[t._v("返回首页")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-list-root",class:{show:t.loaded}},[s("div",{staticClass:"store-list-header"},[s("router-link",{staticClass:"store-list-return",attrs:{to:"/"}},[s("span")]),t._v(" "),s("h1",[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"search",class:{active:t.isSearchActive},on:{click:t.searchActive}},[s("button",{on:{click:t.search}},[t._v("搜索")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"输入搜索内容"},domProps:{value:t.keyword},on:{click:t.inputClick,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.search(e):null},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"menu",class:{active:t.isMenuActive},on:{click:t.menuActive}},[s("button",{on:{blur:function(e){t.isMenuActive=!1}}},[t._v("菜单")]),t._v(" "),s("ul",{staticClass:"menu"},[s("li",[s("button",{on:{click:t.sort1}},[t._v("综合排序")])]),t._v(" "),s("li"),t._v(" "),s("li",[s("button",{on:{click:t.sort2}},[t._v("高分排序")])]),t._v(" "),s("li"),t._v(" "),s("li",[s("button",{on:{click:t.sort3}},[t._v("低分排序")])])])])],1),t._v(" "),s("div",{staticClass:"store-list-body"},[s("ul",t._l(t.data,function(e){return s("li",[s("div",{staticClass:"title-container",on:{click:function(s){t.$router.push("/storeDetail/"+e.id)}}},[s("h2",[t._v(t._s(e.name))]),t._v(" "),s("span",[t._v(t._s(t.convertToFloat(e.score)))])]),t._v(" "),s("ul",{staticClass:"tags",on:{click:function(s){t.$router.push("/storeDetail/"+e.id)}}},t._l(e.tags,function(e){return s("li",[t._v(t._s(e[0]))])})),t._v(" "),s("ul",{staticClass:"pic",on:{click:function(s){t.$router.push("/storeDetail/"+e.id)}}},t._l(e.picURLs.slice(0,3),function(t,e){return s("li",[s("img",{staticClass:"preview-img",attrs:{src:t.msrc}})])}))])})),t._v(" "),s("div",{staticClass:"mask",style:{display:t.isMenuActive?"block":"none"}})]),t._v(" "),s("div",{staticClass:"store-list-footer"},[s("router-link",{attrs:{to:"/newStore"}},[s("span"),t._v("添加新店")])],1)])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment-root",class:{show:t.loaded}},[i("div",{staticClass:"alert",class:{show:t.alertShow}},[i("p",[t._v(t._s(t.alertValue))])]),t._v(" "),i("div",{staticClass:"comment-header"},[i("router-link",{staticClass:"comment-back",attrs:{to:"/"}}),t._v(" "),i("img",{attrs:{src:s(41)},on:{load:function(e){t.n++,t.n>=3?t.loaded=!0:0}}}),t._v(" "),i("div",{staticClass:"comment-float"}),t._v(" "),i("h1",[t._v(t._s(t.data.name))])],1),t._v(" "),i("div",{staticClass:"comment-body"},[i("div",{staticClass:"choose-tags"},[i("div",{staticClass:"width-ruler"}),t._v(" "),i("div",{staticClass:"tags-pre",staticStyle:{display:"block",opacity:"0",position:"absolute","z-index":"-1"}},t._l(t.data.tags,function(e){return i("button",{on:{click:t.select}},[t._v(t._s(e.title))])})),t._v(" "),t.loaded?i("swipe",{attrs:{auto:0,continous:!1}},t._l(t.pages,function(e,s){return i("swipe-item",{staticClass:"tags swiper-slide",style:{width:t.width_+"px"}},[i("div",{staticClass:"button-viewport"},[i("div",{staticClass:"button-wrap",class:{last:s===t.pages.length-1},style:{top:"-"+3.2*s+"rem"}},t._l(t.data.tags,function(e){return i("button",{attrs:{"data-id":e.id},on:{click:t.select}},[t._v(t._s(e.title))])}))])])})):t._e(),t._v(" "),i("div",{staticClass:"dots"})],1),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"请说出你的故事(限200字以内)"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"comment-footer"},[i("a",{on:{click:t.next}},[i("span"),t._v("下一步 ")])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-success-root",class:{show:t.loaded}},[i("img",{attrs:{src:s(15)},on:{load:t.loadPlus}}),t._v(" "),i("h1",[t._v("感谢您的评价")]),t._v(" "),i("p",[t._v("现在大家已经可以看到你的评价了")]),t._v(" "),i("button",{on:{click:t.back}},[t._v("返回")])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainpage-root",class:{show:t.loaded}},[t._m(0),t._v(" "),i("div",{staticClass:"mainpage-header"},[i("img",{staticStyle:{display:"none"},attrs:{src:s(44),id:"xingxing"}}),t._v(" "),i("canvas",{attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),i("h1",[t._v("Upick")]),t._v(" "),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{placeholder:"输入搜索内容"},domProps:{value:t.keyword},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.searchClick(e):null},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),i("button",{staticClass:"search-button",on:{click:t.searchClick}},[i("span",{staticClass:"search-button-icon"},[t._v("搜索")])])]),t._v(" "),i("div",{staticClass:"topic"},[i("p",[t._v(t._s(t.data.topic))])])]),t._v(" "),i("div",{staticClass:"mainpage-body"},[i("div",{staticClass:"classify"},[i("h2",[t._v("分类")]),t._v(" "),i("div",{staticClass:"column"},t._l(t.data.list1,function(e,s){return i("div",{staticClass:"column-block",on:{click:t.buttonClick}},[i("div",{staticClass:"back"},[e.subTitle.length>0?i("ul",t._l(e.subTitle,function(e){return i("li",[i("router-link",{attrs:{to:"storeList/"+e}},[t._v(t._s(e))])],1)})):i("ul",[i("li",{staticClass:"come-soon"},[t._v("敬请期待")])]),t._v(" "),i("div",{staticClass:"img-div-a",style:{transform:"scale("+5*t.rem/181+")",backgroundPosition:"-"+181*s+"px -205px"}})]),t._v(" "),i("div",{staticClass:"img-div",style:{transform:"scale("+5*t.rem/181+")",backgroundPosition:"-"+181*s+"px 0"}}),t._v(" "),i("h3",[t._v(t._s(e.title))])])}))])]),t._v(" "),i("div",{staticClass:"hot-store"},[i("h2",[t._v("热门商家")]),t._v(" "),i("div",[i("div",{staticClass:"back"}),t._v(" "),i("div",{staticClass:"mainpage-bottom"},t._l(t.data.list2,function(e){return i("router-link",{attrs:{to:"storeDetail/"+e}},[t._v(t._s(e))])}))])]),t._v(" "),i("img",{staticStyle:{display:"none"},attrs:{src:s(42)}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"none"}},[i("img",{attrs:{src:s(43)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-detail-root",class:{show:t.loaded}},[s("div",{staticClass:"store-detail-header"},[s("a",{on:{click:function(e){t.$router.go(-1)}}},[s("span",{staticClass:"back"})]),t._v(" "),s("h1",[t._v(t._s(t.detail.name))]),t._v(" "),s("div",{staticClass:"tip"})]),t._v(" "),s("div",{staticClass:"store-detail-body"},[s("div",{staticClass:"body-top",class:{low:t.low&&t.detail.comments.length>=5}},[s("div",{staticClass:"addr-time"},[s("h2",{staticClass:"time"},[s("span",{staticClass:"icon"}),s("span",{staticClass:"icon-time"},[t._v("营业时间:")]),t._v(t._s(t.detail.openTime))]),t._v(" "),s("h2",{staticClass:"addr"},[s("span",{staticClass:"icon"}),s("span",{staticClass:"icon-addr"},[t._v("地址:")]),t._v(t._s(t.detail.address))]),t._v(" "),s("span",{staticClass:"score"},[t._v(t._s(t.convertToFloat(t.detail.score))+"分")])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"tags"},t._l(t.detail.tags,function(e){return s("span",[t._v(t._s(e[0]))])})),t._v(" "),s("div",{staticClass:"pics"},[s("div",{staticClass:"img-con"},t._l(t.detail.picURLs.slice(0,3),function(e,i){return s("img",{staticClass:"preview-img",attrs:{src:e.msrc},on:{click:function(e){t.$preview.open(i,t.detail.picURLs)}}})})),t._v(" "),t.detail.picURLs.length>3?s("div",{staticClass:"mask"},[t._v("+"+t._s(t.detail.picURLs.length-t.detail.picURLs_.length))]):t._e()])])]),t._v(" "),s("div",{staticClass:"body-bottom"},[s("div",{staticClass:"tabs"},[s("span",{class:{chosen:t.firstChosen},on:{click:function(e){1!=t.firstChosen?t.firstChosen=!t.firstChosen:0}}},[t._v("最热评论")]),t._v(" "),s("span",{class:{chosen:!t.firstChosen},on:{click:function(e){1==t.firstChosen?t.firstChosen=!t.firstChosen:0}}},[t._v("最新评论")])]),t._v(" "),s("ul",{staticClass:"comments-list",attrs:{id:"comments-list"}},t._l(t.detail.comments,function(e){return s("li",[s("div",[s("span",{staticClass:"date"},[t._v(t._s(new Date(1e3*e.date).toLocaleDateString()))]),t._v(" "),s("span",{staticClass:"dislike",class:{black:e.disliked},attrs:{"data-id":e.id},on:{click:function(s){t.dislikeOnClick(e)}}},[s("span",[t._v(t._s(e.dislike))])]),t._v(" "),s("span",{staticClass:"like",class:{black:e.liked},attrs:{"data-id":e.id},on:{click:function(s){t.likeOnClick(e)}}},[s("span",[t._v(t._s(e.like))])])]),t._v(" "),s("p",[t._v(t._s(e.value))])])}))])]),t._v(" "),t.loaded&&!t.commented?s("div",{staticClass:"store-detail-footer"},[s("router-link",{attrs:{to:"/comment/"+t.$route.params.id}},[s("span"),t._v("我要评价")])],1):t.loaded&&t.commented?s("div",{staticClass:"store-detail-footer commented"},[s("a",[t._v("您已经评价过了")])]):t._e()])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-failed-root",class:{show:t.loaded}},[i("img",{attrs:{src:s(16)},on:{load:t.loadPlus}}),t._v(" "),i("h1",[t._v("你已经评价过该店铺了")]),t._v(" "),i("p",[t._v("试着评价其他的页面吧！")]),t._v(" "),i("button",{on:{click:t.newStore}},[t._v("返回")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"pswp__bg"}),t._v(" "),s("div",{staticClass:"pswp__scroll-wrap"},[s("div",{staticClass:"pswp__container"},[s("div",{staticClass:"pswp__item"}),t._v(" "),s("div",{staticClass:"pswp__item"}),t._v(" "),s("div",{staticClass:"pswp__item"})]),t._v(" "),s("div",{staticClass:"pswp__ui pswp__ui--hidden"},[s("div",{staticClass:"pswp__top-bar"},[s("div",{staticClass:"pswp__counter"}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._v(" "),s("div",{staticClass:"pswp__preloader"},[s("div",{staticClass:"pswp__preloader__icn"},[s("div",{staticClass:"pswp__preloader__cut"},[s("div",{staticClass:"pswp__preloader__donut"})])])])]),t._v(" "),s("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[s("div",{staticClass:"pswp__share-tooltip"})]),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),t._v(" "),s("div",{staticClass:"pswp__caption"},[s("div",{staticClass:"pswp__caption__center"})])])])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-failed-root",class:{show:t.loaded}},[i("img",{attrs:{src:s(16)},on:{load:t.loadPlus}}),t._v(" "),i("h1",[t._v("没有找到相应的店铺信息哦～")]),t._v(" "),i("p",[t._v("到添加新店里提醒我们吧！")]),t._v(" "),i("button",{on:{click:t.newStore}},[t._v("添加新店")])])},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(117),a=i(n),o=s(116),c=i(o),r=s(115),l=i(r);e.default={methods:{open:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{captionEl:!1,fullscreenEl:!1,history:!1,shareEl:!1,tapToClose:!0},i=(0,a.default)({index:t,getThumbBoundsFn:function(t){var e=document.querySelectorAll(".preview-img")[t],s=window.pageYOffset||document.documentElement.scrollTop,i=e.getBoundingClientRect();return{x:i.left,y:i.top+s,w:i.width}}},s);this.photoswipe=new c.default(this.$el,l.default,e,i),this.photoswipe.init()},close:function(){this.photoswipe.close()}}}},function(t,e){"use strict";t.exports={name:"app",components:{}}},function(t,e){"use strict";t.exports={data:function(){return{loaded:!1,n:0}},methods:{back:function(){this.$router.push("/noAnim")},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";var i=s(3),n=s(17).Swipe,a=s(17).SwipeItem;t.exports={components:{swipe:n,"swipe-item":a},data:function(){return{data:{name:"",iconURL:"",tags:[]},width_:0,pages:[""],loaded:!1,text:"",n:0,alertShow:"",alertValue:"",alertTimeout:0}},methods:{select:function(t){var e=t.target;e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")},next:function(){return 0===document.querySelectorAll(".choose-tags button.active").length?void this.alert_("未选择标签！"):""===this.text?void this.alert_("未填写评论！"):void this.$router.replace("/comment/mark/"+this.$route.params.id+"/"+this.data.name+"/"+this.getChosenTags()+"/"+encodeURIComponent(this.text))},getChosenTags:function(){for(var t=document.querySelectorAll(".choose-tags button.active"),e=[],s=0;s<t.length;s++)e.push(t[s].dataset.id);return e.join("&")},alert_:function(t){clearTimeout(this.alertTimeout),this.alertValue=t,this.alertShow=!0;var e=this;this.alertTimeout=setTimeout(function(){e.alertShow=!1},2500)}},watch:{pages:function(){}},mounted:function(){var t=this;i.get("comment_data?id="+t.$route.params.id).then(function(e){e=e.data,t.data=e.data,t.n++,t.width_=document.querySelector("div.width-ruler").clientWidth,t.$forceUpdate(),setTimeout(function(){var e=parseInt(document.querySelector("div.tags-pre").clientHeight/(32*document.querySelector("div.choose-tags").clientHeight/47));document.querySelector("div.tags-pre").style.display="none";for(var s=[],i=0;i<e+1;i++)s.push("");var n=new Image;n.src=t.data.iconURL,n.complete?document.querySelector("div.comment-float").style.backgroundImage="url('"+t.data.iconURL+"')":n.onload=function(){document.querySelector("div.comment-float").style.backgroundImage="url('"+t.data.iconURL+"')"},t.pages=s,t.n++,t.n>=3&&(t.loaded=!0)},200)}).catch(function(e){console.log(e),e&&alert("加载失败！"),t.loaded=!0})}}},function(t,e){"use strict";t.exports={data:function(){return{loaded:!1,n:0}},methods:{newStore:function(){this.$router.replace("/comment/"+this.$route.params.id)},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e){"use strict";t.exports={data:function(){return{loaded:!1,n:0}},methods:{back:function(){this.$router.replace("/storeDetail/"+this.$route.params.id)},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";var i,n,a,o=s(3),c=s(131),r=0,l=0,d=["rgba(255,255,255,1)","rgba(96,119,186, 0.7)","rgba(142,211,227, 0.5)"],u=[],p=[],h=0;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){window.clearTimeout(t)}}(),t.exports={data:function(){return{canvasWidth:document.body.clientWidth,canvasHeight:.45*document.body.clientWidth,data:{topic:"这是头条推文这是头条推文",list1:[],list2:[]},loaded:!1,rem:18,keyword:""}},methods:{searchClick:function(t){var e=t.target.parentNode.querySelector("input"),s=t.target.parentNode.parentNode;""===e.value&&s.classList.contains("active")?s.classList.remove("active"):s.classList.contains("active")?this.$router.push("/storeList/search/"+this.keyword):s.classList.add("active")},buttonClick:function(t){0!==document.querySelectorAll(".active").length&&document.querySelector(".active").classList.remove("active"),t.target.parentNode.classList.add("active")},loop:function(){n.clearRect(0,0,a.width,a.height),n.fillStyle="#343856",n.fillRect(0,0,a.width,a.height);var t=document.getElementById("xingxing");if(t){n.drawImage(t,0,0,t.width,t.height,0,0,a.width,a.width*t.height/t.width),r+=2;for(var e=a.width/50,s=0;s<u.length;s++)if(u[s].position.x-u[s].length/Math.SQRT2>a.width||u[s].position.y-u[s].length/Math.SQRT2>a.height)u.splice(s,1),u.push({position:{x:Math.random()*a.width*.75,y:0},color:"",length:.5*Math.random()*l+2*l});else{u[s].position.x+=e/2,u[s].position.y+=e/2;var o=n.createRadialGradient(u[s].position.x,u[s].position.y,1,u[s].position.x,u[s].position.y,1.5*e);o.addColorStop(0,"rgba(255,255,255,0.6)"),o.addColorStop(.2,"rgba(255,223,0,0.18)"),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(u[s].position.x-e/2,u[s].position.y-e/2,e,e),n.moveTo(u[s].position.x,u[s].position.y),n.lineTo(u[s].position.x-u[s].length/Math.SQRT2,u[s].position.y-u[s].length/Math.SQRT2),n.strokeStyle="rgba(255,255,255,0.2)",n.lineWidth="20px",n.stroke()}for(s=d.length-1;s>=0;s--){n.fillStyle=d[s];var c=(r+90*s)*Math.PI/180,p=Math.sin(c)*l*.7,h=Math.cos(c)*l*.7;n.beginPath(),n.moveTo(0,a.height/3*2+p),n.bezierCurveTo(a.width/2,a.height/3*2+p-l,a.width/2,a.height/3*2+h-l,a.width,a.height/3*2+h),n.lineTo(a.width,a.height),n.lineTo(0,a.height),n.lineTo(0,a.height/3*2+p),n.closePath(),n.fill()}i=requestAnimFrame(this.loop)}}},watch:{$route:function(){}},mounted:function(){a=document.querySelector("canvas"),n=document.querySelector("canvas").getContext("2d"),l=.08*a.width,u=[],p=[];for(var t=0;t<2;t++)u.push({position:{x:-10*l+30*Math.random()*l,y:-5*l-Math.random()*l},color:"",length:l/2});for(t=0;t<10;t++)p.push({x:l+10*Math.random()*l,y:l+5*Math.random()*l});window.cancelAnimFrame(i);var e=this;document.getElementById("xingxing").onload=function(){e.loop()},e.rem=parseInt(window.getComputedStyle(document.documentElement).fontSize);var s=new Image,r=new Image,d=new Image;s.src="static/img/bottom.png",s.onload=function(){h++,h>=5&&(e.loaded=!0)},r.src="static/img/title.png",r.onload=function(){h++,h>=5&&(e.loaded=!0)},d.src="static/img/columns.png",d.onload=function(){h++,h>=5&&(e.loaded=!0)},s=r=d=null,o.get("index").then(function(t){t=t.data,e.data=t,h++,h>=5&&(e.loaded=!0),o.get("http://weixin.bigtech.cc/service/jssdk_config?url="+encodeURIComponent("http://weixin.bigtech.cc/upick/index.html")).then(function(t){console.log(e.$route.path),t=t.data,c.config({debug:!0,appId:t.appid,timestamp:t.timestamp,nonceStr:t.noncestr,signature:t.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),c.ready(function(){c.onMenuShareTimeline({title:"Upick",desc:"华科吃喝玩乐，让老司机带你飞！！",link:"http://weixin.bigtech.cc/upick/index.html",imgUrl:"http://weixin.bigtech.cc/upick/static/img/title_share.png",success:function(){},cancel:function(){}}),c.onMenuShareAppMessage({title:"Upick",desc:"华科吃喝玩乐，让老司机带你飞！！",link:"http://weixin.bigtech.cc/upick/index.html",imgUrl:"http://weixin.bigtech.cc/upick/static/img/title_share.png",success:function(){},cancel:function(){}}),c.onMenuShareQQ({title:"Upick",desc:"华科吃喝玩乐，让老司机带你飞！！",link:"http://weixin.bigtech.cc/upick/index.html",imgUrl:"http://weixin.bigtech.cc/upick/static/img/title_share.png",success:function(){},cancel:function(){}}),c.onMenuShareWeibo({title:"Upick",desc:"华科吃喝玩乐，让老司机带你飞！！",link:"http://weixin.bigtech.cc/upick/index.html",imgUrl:"http://weixin.bigtech.cc/upick/static/img/title_share.png",success:function(){},cancel:function(){}}),c.onMenuShareQZone({title:"Upick",desc:"华科吃喝玩乐，让老司机带你飞！！",link:"http://weixin.bigtech.cc/upick/index.html",imgUrl:"http://weixin.bigtech.cc/upick/static/img/title_share.png",success:function(){},cancel:function(){}}),h++,h>=5&&(e.loaded=!0)}),c.error(function(t){console.log("error"),console.log(t)})}).catch(function(t){console.log(t),t&&alert("主页加载失败！"),e.loaded=!0})}).catch(function(t){console.log(t),t&&alert("主页加载失败！"),e.loaded=!0})}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=s(22),a=i(n),o=s(3);t.exports={data:function(){return{loaded:!1,title:"aaa",score:5,touched:!1,offset:0,rem:0,startX:0,offset_bak:0,alertShow:"",alertValue:"",alertTimeout:0,hasMarked:!1,n:0}},methods:{touchstart:function(t){if(this.hasMarked=!0,this.touched=!0,1===t.touches.length){var e=t.touches[0];this.startX=e.clientX,this.offset=e.clientX-2.5*this.rem,this.offset_bak=e.clientX-2.5*this.rem,this.score=(this.offset/document.querySelector("div.bar").clientWidth*10).toFixed(0)}},touchmove:function(t){if(1===t.touches.length){var e=t.touches[0];this.touched&&(this.offset=this.offset_bak+e.clientX-this.startX,this.offset>=document.querySelector("div.bar").clientWidth?this.offset=document.querySelector("div.bar").clientWidth:this.offset<=0&&(this.offset=0),this.score=(this.offset/document.querySelector("div.bar").clientWidth*10).toFixed(0))}},touchend:function(t){this.touched&&(this.touched=!1)},convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),3===t.length?t:t+".0"},submit:function(){var t=this,e={id:this.$route.params.id,title:this.$route.params.title,tags:this.$route.params.tags.split("&"),text:decodeURIComponent(this.$route.params.comment),score:this.score};e=encodeURIComponent((0,a.default)(e)),o.post("comment",{data:e}).then(function(e){e=e.data,e.error?e.error.indexOf("commented")?t.$router.replace("/comment/failed/"+t.$route.params.id):t.alert_("提交失败：服务器拒绝您的数据！"):t.$router.replace("/comment/success/"+t.$route.params.id)}).catch(function(e){e&&t.alert_("网络出错！")})},submitWithoutMark:function(){var t=this,e={id:this.$route.params.id,title:this.$route.params.title,tags:this.$route.params.tags.split("&"),text:decodeURIComponent(this.$route.params.comment),score:-1};e=encodeURIComponent((0,a.default)(e)),o.post("comment",{data:e}).then(function(e){e=e.data,e.error?e.error.indexOf("commented")?t.$router.replace("/comment/failed/"+t.$route.params.id):t.alert_("提交失败：服务器拒绝您的数据！"):t.$router.replace("/comment/success/"+t.$route.params.id)}).catch(function(e){e&&t.alert_("网络出错！")})},alert_:function(t){clearTimeout(this.alertTimeout),this.alertValue=t,this.alertShow=!0;var e=this;this.alertTimeout=setTimeout(function(){e.alertShow=!1},2500)}},mounted:function(){var t=this,e=[new Image,new Image,new Image];e[0].src="static/img/bad.png",e[1].src="static/img/normal.png",e[2].src="static/img/good.png";for(var s=0;s<e.length;s++)e[s].onload=function(){t.n++,t.n>=e.length&&(t.loaded=!0,t.offset=document.querySelector("div.bar").clientWidth/2,t.rem=document.querySelector("div.switcher span").clientWidth/1.5)}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function n(t,e,s,i){"undefined"==typeof e&&(e=2100),"undefined"==typeof s&&(s="crimson"),"undefined"==typeof i&&(i=function(){}),clearInterval(a),l=e;var n=document.querySelector("div.new-store-alert");n.classList.add("show"),n.style.background=s,n.innerHTML="<p>"+t+"</p>",a=setInterval(function(){if(l-=30,l<=0)return n.classList.remove("show"),n.style.background="transparent",clearInterval(a),i()},30)}var a,o,c=s(22),r=i(c),l=0,d=s(3);t.exports={data:function(){return{items:o,loaded:!1,n:0,inSelection:!1,selectValue:""}},methods:{submit:function(){for(var t,e,s=this,i=[],a=document.querySelectorAll("div.input-item"),o=0;o<a.length;o++)if(a[o].classList.contains("select")){t=a[o].querySelector("h2>span").innerHTML;var c=[],l=document.querySelectorAll("button.select-option.active");if(0===l.length&&"true"===a[o].dataset.necessary)return void n("没有选择"+t);for(var u=0;u<l.length;u++)c.push({id:l[u].dataset.id,name:l[u].innerHTML});i.push({name:t,type:"select",ops:c})}else if(a[o].classList.contains("shortText")){if(e=a[o].querySelector("input").value,t=a[o].querySelector("h2>span").innerHTML,""===e&&"true"===a[o].dataset.necessary)return void n("没有填写"+t);i.push({name:t,type:"shortText",value:e})}else if(a[o].classList.contains("longText")){if(e=a[o].querySelector("textarea").value,t=a[o].querySelector("h2>span").innerHTML,""===e&&"true"===a[o].dataset.necessary)return void n("没有填写"+t);i.push({name:t,type:"longText",value:e})}i=encodeURIComponent((0,r.default)(i)),d.post("add_store",{data:i}).then(function(t){t=t.data,t.error?n("提交失败：服务器拒绝您的数据！"):s.$router.push("/newStore/addSuccess")}).catch(function(t){t&&n("网络出错！")})},select:function(t){var e=t.target;document.querySelectorAll("button.select-option.active").length>=1&&document.querySelector("button.select-option.active").classList.remove("active"),e.classList.add("active"),this.selectValue=e.innerHTML,this.inSelection=!1},init:function(){var t=this;d.get("store_form_data").then(function(e){e=e.data,t.items=e.data,t.n++,t.checkLoad()}).catch(function(t){console.log(t),t&&n("加载表单失败！")})},checkLoad:function(){2===this.n&&(this.loaded=!0)},selectClick:function(){this.inSelection=!0}},mounted:function(){this.init()}}},function(t,e){"use strict";t.exports={data:function(){return{loaded:!1,n:0}},methods:{newStore:function(){this.$router.push("/newStore")},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";var i=s(3),n=!1,a=!1;t.exports={data:function(){return{loaded:!1,detail:{name:"A",openTime:"",address:"",picURLs:[],picURLs_:[],tags:[],score:"",comments:[]},low:!1,firstChosen:"",list:[],commented:!1}},methods:{convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),
3===t.length?t:t+".0"},changeLikeStatus:function(t,e,s){var n=this,a=[s.liked,s.disliked];s.liked=t,s.disliked=e,i.get("changeLikeStatus?id="+s.id+"&liked="+(t?"true":"false")+"&disliked="+(e?"true":"false")).then(function(t){var e=t.data.data.result;s.liked=e.liked,s.disliked=e.disliked,s.like=e.like,s.dislike=e.dislike,n.$forceUpdate()}).catch(function(){s.liked=a[0],s.disliked=a[1]})},likeOnClick:function(t){t.liked?n=!1:(a=!1,n=!0),this.changeLikeStatus(n,a,t)},dislikeOnClick:function(t){t.disliked?a=!1:(a=!0,n=!1),this.changeLikeStatus(n,a,t)}},watch:{firstChosen:function(t,e){e!==!1?this.detail.comments.sort(function(t,e){return e.date-t.date}):this.detail.comments.sort(function(t,e){return e.like-t.like})}},mounted:function(){var t=this;document.querySelector("ul#comments-list").addEventListener("scroll",function(){t.low=this.scrollTop>=10}),i.get("store_detail?id="+t.$route.params.id).then(function(e){e=e.data,t.detail=e.data,t.detail.picURLs_=t.detail.picURLs.slice(0,3);for(var s=0;s<t.detail.picURLs.length;s++)t.list.push({src:t.detail.picURLs[s],w:1200,h:800});t.firstChosen=!0,t.detail.comments=[],i.get("comments_list?id="+t.$route.params.id).then(function(e){e=e.data,t.detail.comments=e.data,i.get("is_commented?id="+t.detail.name).then(function(e){e=e.data,t.commented=e.result,t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})}}},function(t,e,s){"use strict";var i=s(3);t.exports={data:function(){return{loaded:!1,data:[],isMenuActive:!1,isSearchActive:!1,title:"",keyword:""}},watch:{$route:function(){var t=this;t.$route.path.includes("storeList")&&t.$route.path.includes("search")?(t.title="搜索: "+t.$route.params.keyword,i.get("store_list_search_data?keyword="+t.$route.params.keyword).then(function(e){e=e.data,e.data.sort(function(t,e){return e.overall-t.overall}),t.data=e.data,0===e.data.length&&t.$router.replace("noStore"),t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})):(t.title=t.$route.params.type,i.get("store_list_data?type="+t.$route.params.type).then(function(e){e=e.data,e.data.sort(function(t,e){return e.overall-t.overall}),t.data=e.data,t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0}))}},methods:{convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),3===t.length?t:t+".0"},menuActive:function(){this.isMenuActive=!this.isMenuActive},searchActive:function(){this.isSearchActive=!this.isSearchActive},sort1:function(){this.data.sort(function(t,e){return e.overall-t.overall}),this.isMenuActive=!this.isMenuActive},sort2:function(){this.data.sort(function(t,e){return e.score-t.score}),this.isMenuActive=!this.isMenuActive},sort3:function(){this.data.sort(function(t,e){return t.score-e.score}),this.isMenuActive=!this.isMenuActive},inputClick:function(){this.isSearchActive=!this.isSearchActive},search:function(){""!==this.keyword&&this.$router.push("/storeList/search/"+this.keyword)}},mounted:function(){var t=this;t.$route.path.includes("storeList")&&t.$route.path.includes("search")?(t.title="搜索: "+t.$route.params.keyword,i.get("store_list_search_data?keyword="+t.$route.params.keyword).then(function(e){e=e.data,e.data.sort(function(t,e){return e.overall-t.overall}),t.data=e.data,t.data=e.data,e.data.length<1&&t.$router.replace("/storeList/search/noStore"),t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})):(t.title=t.$route.params.type,i.get("store_list_data?type="+t.$route.params.type).then(function(e){e=e.data,e.data.sort(function(t,e){return e.overall-t.overall}),t.data=e.data,t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0}))}}}]);
//# sourceMappingURL=app.js.map