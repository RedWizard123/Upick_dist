webpackJsonp([2,0],[function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=s(141),n=i(a),o=s(167),r=s(166),c=s(78),l=s(142),d=s(149),u=s(147),p=s(143),h=s(150),m=s(152),v=s(151),f=s(144),_=s(148),g=s(146),w=s(145);o.use(n.default,{mouseWheel:!0,click:!0,preventDefault:!0,tap:!0,bounce:!0,disableTouch:!1,freeScroll:!0}),o.use(r),o.use(c.default);var C=[{path:"/",component:u},{path:"/storeDetail/:id",component:v},{path:"/storeList/:type",component:m},{path:"/storeList/search/noStore",component:h},{path:"/storeList/search/:keyword",component:m},{path:"/newStore",component:d},{path:"/newStore/addSuccess",component:p},{path:"/comment/success/:id",component:g},{path:"/comment/failed/:id",component:w},{path:"/comment/mark/:id/:title/:tags/:comment/:images",component:_},{path:"/comment/:id",component:f},{path:"/:type",component:u}],k=new r({routes:C});new o({el:"#app",template:"<App/>",components:{App:l},router:k})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/avatar.png"},function(t,e,s){t.exports=s.p+"static/img/no.png"},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(79),n=i(a),o=s(130),r=i(o),c=s(129),l=i(c);e.default={methods:{open:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{captionEl:!1,fullscreenEl:!1,history:!1,shareEl:!1,tapToClose:!0},i=(0,n.default)({index:t,getThumbBoundsFn:function(t){var e=document.querySelectorAll(".preview-img")[t],s=window.pageYOffset||document.documentElement.scrollTop,i=e.getBoundingClientRect();return{x:i.left,y:i.top+s,w:i.width}}},s);this.photoswipe=new r.default(this.$el,l.default,e,i),this.photoswipe.init()},close:function(){this.photoswipe.close()}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=s(5),n=i(a);t.exports={name:"app",components:{},mounted:function(){this.$router.beforeEach(function(t,e,s){n.default.post("pages_info",{current_page:e.path,previous_page:t.path}).then(function(){s()})})}}},function(t,e){"use strict";t.exports={data:function(){return{loaded:!1,n:0}},methods:{back:function(){this.$router.push("/noAnim")},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=s(17),n=i(a),o=s(32),r=i(o),c=s(5),l=s(48).Swipe,d=s(48).SwipeItem;t.exports={data:function(){return{data:{name:"",iconURL:"",tags:[]},width_:0,pages:[""],loaded:!1,text:"",n:0,alertShow:"",alertValue:"",alertTimeout:0,imagesToUpload:[],imagesURLToUpload:[],uploadPromises:[],imagesUploading:!1}},methods:{select:function(t){var e=t.target;e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")},next:function(){var t=this;t.imagesUploading=!0,r.default.all(t.uploadPromises).then(function(){t.imagesUploading=!1}).then(function(){return 0===document.querySelectorAll(".choose-tags button.active").length&&""===t.text&&0===t.imagesURLToUpload.length?void t.alert_("你什么都没有填！"):(""===t.text&&(t.text="empty"),void t.$router.replace("/comment/mark/"+t.$route.params.id+"/"+t.data.name+"/"+t.getChosenTags()+"/"+encodeURIComponent(t.text)+"/"+encodeURIComponent((0,n.default)(t.imagesURLToUpload))))}).catch(function(e){t.alert_(e)})},getChosenTags:function(){for(var t=document.querySelectorAll(".choose-tags button.active"),e=[],s=0;s<t.length;s++)e.push(t[s].dataset.id);return e.length>0?e.join("&"):"empty"},alert_:function(t){clearTimeout(this.alertTimeout),this.alertValue=t,this.alertShow=!0;var e=this;this.alertTimeout=setTimeout(function(){e.alertShow=!1},2500)},selectImg:function(){this.$refs.imageSelector.click()}},watch:{pages:function(){}},mounted:function(){var t=this;c.get("comment_data?id="+t.$route.params.id).then(function(e){e=e.data,t.data=e.data,t.n++,t.width_=document.querySelector("div.width-ruler").clientWidth,t.$forceUpdate(),setTimeout(function(){var e=parseInt(document.querySelector("div.tags-pre").clientHeight/(32*document.querySelector("div.choose-tags").clientHeight/47));document.querySelector("div.tags-pre").style.display="none";for(var s=[],i=0;i<e+1;i++)s.push("");var a=new Image;a.src=t.data.iconURL,a.complete?document.querySelector("div.comment-float").style.backgroundImage="url('"+t.data.iconURL+"')":a.onload=function(){document.querySelector("div.comment-float").style.backgroundImage="url('"+t.data.iconURL+"')"},t.pages=s,t.n++,t.n>=3&&(t.loaded=!0)},200)}).catch(function(e){e&&t.alert_("加载失败！"),t.loaded=!0}),this.$refs.imageSelector.addEventListener("change",function(e){for(var s=0;s<Math.min(e.target.files.length,3);s++)t.uploadPromises.push(function(s){return new r.default(function(i,a){var n=new FileReader;n.readAsDataURL(e.target.files[s]),n.onload=function(e){var s=new Image,a=e.target.result;s.src=a,s.onload=function(){if(s.width>1e3||s.height>1e3){t.$refs.imageCanvas.width=1e3,t.$refs.imageCanvas.height=Math.round(1e3/s.width*s.height);var e=t.$refs.imageCanvas.getContext("2d");e.drawImage(s,0,0,s.width,s.height,0,0,1e3,Math.round(1e3/s.width*s.height)),a=t.$refs.imageCanvas.toDataURL()}var n={id:Math.round(1+1e6*Math.random()),src:a};t.imagesToUpload.push(n),i(n)}}})}(s).then(function(e){return c.post("comments/images","image="+encodeURIComponent(e.src.split(",")[1]),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(s){t.imagesToUpload.find(function(t){return t.id===e.id})&&t.imagesURLToUpload.push({src:s.data.url,msrc:s.data.murl,w:s.data.w,h:s.data.h})})}))})},components:{swipe:l,"swipe-item":d}}},function(t,e){"use strict";t.exports={data:function(){return{loaded:!1,n:0}},methods:{newStore:function(){this.$router.replace("/comment/"+this.$route.params.id)},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e){"use strict";t.exports={data:function(){return{loaded:!1,n:0}},methods:{back:function(){this.$router.replace("/storeDetail/"+this.$route.params.id)},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=s(32),n=i(a),o=s(5),r=s(168),c=void 0,l=void 0;t.exports={data:function(){return{canvasWidth:document.body.clientWidth,canvasHeight:.45*document.body.clientWidth,data:{topic:"这是头条推文这是头条推文",list1:[],list2:[]},loaded:!1,rem:18,keyword:""}},methods:{searchClick:function(t){var e=t.target.parentNode.querySelector("input"),s=t.target.parentNode.parentNode;""===e.value&&s.classList.contains("active")?s.classList.remove("active"):s.classList.contains("active")?this.$router.push("/storeList/search/"+this.keyword):s.classList.add("active")},buttonClick:function(t,e){o.post("classes",{type:0,class:e.name}).then(function(t){return t.data}).then(function(t){if(t.error)return n.default.reject(t.error)}).catch(function(){throw data.error}),1===e.subTitle.length?this.subTitleClick(e.subTitle[0]):(0!==document.querySelectorAll(".active").length&&document.querySelector(".active").classList.remove("active"),t.target.parentNode.classList.add("active"))},subTitleClick:function(t){o.post("classes",{type:1,class:t}).then(function(t){return t.data}).then(function(t){if(t.error)return n.default.reject(t.error)}).catch(function(){throw data.error}),this.$router.push("storeList/"+t)},draw:function(){c.clearRect(0,0,l.width,l.height),c.fillStyle="#343856",c.fillRect(0,0,l.width,l.height);var t=document.getElementById("xingxing");if(t){c.drawImage(t,0,0,t.width,t.height,0,0,l.width,l.width*t.height/t.width);var e=document.getElementById("wave");e&&c.drawImage(e,0,0,e.width,e.height,0,.1*l.height,l.width,l.width*e.height/e.width)}}},mounted:function(){var t=this;t.rem=parseInt(window.getComputedStyle(document.documentElement).fontSize),l=document.querySelector("canvas"),c=document.querySelector("canvas").getContext("2d");var e=["static/img/bottom.png","static/img/title.png","static/img/columns.png","static/img/wave.png","static/img/xingxing.png"],s=e.map(function(t){return new n.default(function(e,s){var i=new Image;i.src=t,i.onload=function(){i.width+i.height===0?s(new Error("图片加载失败")):e()},i.onerror=function(){s(new Error("图片加载失败"))}})}),i=o.get("login").then(function(t){return t.data.status?o.get("index"):(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx70014cb42f7c9422&redirect_uri=http%3A//weixin.bingyan-tech.hustonline.net/upick/weixin/access&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect",n.default.reject(new Error("需要登录")))}).then(function(e){e=e.data,t.data=e});o.post("jsapi","url="+encodeURIComponent(window.location.href.split("#")[0]),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){return t=t.data,r.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"],success:function(){},cancel:function(){}}),new n.default(function(t,e){var s={title:"Upick | 让校内坑店无处遁形！",desc:"发现校内优质店铺，\n吐槽校内黑心商家，\n让品质校园生活从Upick开始！",link:"http://weixin.bingyan-tech.hustonline.net/upick/",imgUrl:"http://weixin.bingyan-tech.hustonline.net/upick/static/img/title_share.png"};r.ready(function(){r.onMenuShareTimeline(s),r.onMenuShareAppMessage(s),r.onMenuShareQQ(s),r.onMenuShareWeibo(s),r.onMenuShareQZone(s)}),r.error(function(t){e(new Error(t)),console.error("微信认证失败")})})}).catch(function(t){throw t}),s.push(i),n.default.all(s).then(function(){t.draw(),t.loaded=!0}).catch(function(t){throw t})}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=s(17),n=i(a),o=s(5);t.exports={data:function(){return{loaded:!1,title:"aaa",score:5,touched:!1,offset:0,rem:0,startX:0,offset_bak:0,alertShow:"",alertValue:"",alertTimeout:0,hasMarked:!1,n:0}},methods:{touchstart:function(t){if(this.hasMarked=!0,this.touched=!0,1===t.touches.length){var e=t.touches[0];this.startX=e.clientX,this.offset=e.clientX-2.5*this.rem,this.offset_bak=e.clientX-2.5*this.rem,this.score=(this.offset/document.querySelector("div.bar").clientWidth*10).toFixed(0)}},touchmove:function(t){if(1===t.touches.length){var e=t.touches[0];this.touched&&(this.offset=this.offset_bak+e.clientX-this.startX,this.offset>=document.querySelector("div.bar").clientWidth?this.offset=document.querySelector("div.bar").clientWidth:this.offset<=0&&(this.offset=0),this.score=(this.offset/document.querySelector("div.bar").clientWidth*10).toFixed(0))}},touchend:function(t){this.touched&&(this.touched=!1)},convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),3===t.length?t:t+".0"},submit:function(){var t=this,e={id:this.$route.params.id,title:this.$route.params.title,tags:"empty"===this.$route.params.tags?[]:this.$route.params.tags.split("&"),text:"empty"===this.$route.params.comment?"":decodeURIComponent(this.$route.params.comment),img:JSON.parse(decodeURIComponent(this.$route.params.images)),score:this.score};e=encodeURIComponent((0,n.default)(e)),o.post("comment",{data:e}).then(function(e){e=e.data,e.error?e.error.indexOf("commented")?t.$router.replace("/comment/failed/"+t.$route.params.id):t.alert_("提交失败：服务器拒绝您的数据！"):t.$router.replace("/comment/success/"+t.$route.params.id)}).catch(function(e){e&&t.alert_("网络出错！")})},submitWithoutMark:function(){var t=this,e={id:this.$route.params.id,title:this.$route.params.title,tags:"empty"===this.$route.params.tags?[]:this.$route.params.tags.split("&"),text:"empty"===this.$route.params.comment?"":decodeURIComponent(this.$route.params.comment),img:JSON.parse(decodeURIComponent(this.$route.params.images)),score:this.score};e=encodeURIComponent((0,n.default)(e)),o.post("comment",{data:e}).then(function(e){e=e.data,e.error?e.error.indexOf("commented")?t.$router.replace("/comment/failed/"+t.$route.params.id):t.alert_("提交失败：服务器拒绝您的数据！"):t.$router.replace("/comment/success/"+t.$route.params.id)}).catch(function(e){e&&t.alert_("网络出错！")})},alert_:function(t){clearTimeout(this.alertTimeout),this.alertValue=t,this.alertShow=!0;var e=this;this.alertTimeout=setTimeout(function(){e.alertShow=!1},2500)}},mounted:function(){var t=this,e=[new Image,new Image,new Image];e[0].src="static/img/bad.png",e[1].src="static/img/normal.png",e[2].src="static/img/good.png";for(var s=0;s<e.length;s++)e[s].onload=function(){t.n++,t.n>=e.length&&(t.loaded=!0,t.offset=document.querySelector("div.bar").clientWidth/2,t.rem=document.querySelector("div.switcher span").clientWidth/1.5)}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,s,i){"undefined"==typeof e&&(e=2100),"undefined"==typeof s&&(s="crimson"),"undefined"==typeof i&&(i=function(){}),clearInterval(n),l=e;var a=document.querySelector("div.new-store-alert");a.classList.add("show"),a.style.background=s,a.innerHTML="<p>"+t+"</p>",n=setInterval(function(){if(l-=30,l<=0)return a.classList.remove("show"),a.style.background="transparent",clearInterval(n),i()},30)}var n,o,r=s(17),c=i(r),l=0,d=s(5);t.exports={data:function(){return{items:o,loaded:!1,n:0,inSelection:!1,selectValue:""}},methods:{submit:function(){for(var t,e,s=this,i=[],n=document.querySelectorAll("div.input-item"),o=0;o<n.length;o++)if(n[o].classList.contains("select")){t=n[o].querySelector("h2>span").innerHTML;var r=[],l=document.querySelectorAll("button.select-option.active");if(0===l.length&&"true"===n[o].dataset.necessary)return void a("没有选择"+t);for(var u=0;u<l.length;u++)r.push({id:l[u].dataset.id,name:l[u].innerHTML});i.push({name:t,type:"select",ops:r})}else if(n[o].classList.contains("shortText")){if(e=n[o].querySelector("input").value,t=n[o].querySelector("h2>span").innerHTML,""===e&&"true"===n[o].dataset.necessary)return void a("没有填写"+t);i.push({name:t,type:"shortText",value:e})}else if(n[o].classList.contains("longText")){if(e=n[o].querySelector("textarea").value,t=n[o].querySelector("h2>span").innerHTML,""===e&&"true"===n[o].dataset.necessary)return void a("没有填写"+t);i.push({name:t,type:"longText",value:e})}i=encodeURIComponent((0,c.default)(i)),d.post("add_store",{data:i}).then(function(t){t=t.data,t.error?a("提交失败：服务器拒绝您的数据！"):s.$router.push("/newStore/addSuccess")}).catch(function(t){t&&a("网络出错！")})},select:function(t){var e=t.target;document.querySelectorAll("button.select-option.active").length>=1&&document.querySelector("button.select-option.active").classList.remove("active"),e.classList.add("active"),this.selectValue=e.innerHTML,this.inSelection=!1},init:function(){var t=this;d.get("store_form_data").then(function(e){e=e.data,t.items=e.data,t.n++,t.checkLoad()}).catch(function(t){console.log(t),t&&a("加载表单失败！")})},checkLoad:function(){2===this.n&&(this.loaded=!0)},selectClick:function(){this.inSelection=!0}},mounted:function(){this.init()}}},function(t,e){"use strict";t.exports={data:function(){return{loaded:!1,n:0}},methods:{newStore:function(){this.$router.push("/newStore")},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";var i=s(5),a=!1,n=!1;t.exports={data:function(){return{loaded:!1,detail:{name:"A",openTime:"",address:"",picURLs:[],picURLs_:[],tags:[],score:"",comments:[]},low:!1,firstChosen:"",list:[],commented:!1}},methods:{convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),3===t.length?t:t+".0"},changeLikeStatus:function(t,e,s){var a=this,n=[s.liked,s.disliked];s.liked=t,s.disliked=e,i.get("changeLikeStatus?id="+s.id+"&liked="+(t?"true":"false")+"&disliked="+(e?"true":"false")).then(function(t){var e=t.data.data.result;s.liked=e.liked,s.disliked=e.disliked,s.like=e.like,s.dislike=e.dislike,a.$forceUpdate()}).catch(function(){s.liked=n[0],s.disliked=n[1]})},likeOnClick:function(t){t.liked?a=!1:(n=!1,a=!0),this.changeLikeStatus(a,n,t)},dislikeOnClick:function(t){t.disliked?n=!1:(n=!0,a=!1),this.changeLikeStatus(a,n,t)},commentImageClick:function(t){i.post("comments/images","type=hit&image="+t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}},watch:{firstChosen:function(t,e){e!==!1?this.detail.comments.sort(function(t,e){return e.date-t.date}):this.detail.comments.sort(function(t,e){return e.like-t.like})}},mounted:function(){var t=this;document.querySelector("div.ul-wrapper").addEventListener("scroll",function(){t.low=this.scrollTop>=10}),i.get("store_detail?id="+t.$route.params.id).then(function(e){e=e.data,t.detail=e.data,t.detail.picURLs_=t.detail.picURLs.slice(0,3);for(var s=0;s<t.detail.picURLs.length;s++)t.list.push({src:t.detail.picURLs[s],w:1200,h:800});t.firstChosen=!0,t.detail.comments=[],i.get("comments_list?id="+t.$route.params.id).then(function(e){e=e.data,t.detail.comments=e.data,i.get("is_commented?id="+t.detail.name).then(function(e){e=e.data,t.commented=e.result,t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})}}},function(t,e,s){"use strict";var i=s(5);t.exports={data:function(){return{loaded:!1,data:[],isMenuActive:!1,isSearchActive:!1,title:"",keyword:"",previewOptions:{showAnimationDuration:0,hideAnimationDuration:0,getThumbBoundsFn:function(t){console.log(arguments)}}}},watch:{$route:function(){var t=this;t.$route.path.includes("storeList")&&t.$route.path.includes("search")?(t.title="搜索: "+t.$route.params.keyword,i.get("store_list_search_data?keyword="+t.$route.params.keyword).then(function(e){e=e.data,e.data.sort(function(t,e){return e.overall-t.overall}),t.data=e.data,0===e.data.length&&t.$router.replace("noStore"),t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})):(t.title=t.$route.params.type,i.get("store_list_data?type="+t.$route.params.type).then(function(e){e=e.data,e.data.sort(function(t,e){return e.overall-t.overall}),t.data=e.data,t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0}))}},methods:{convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),3===t.length?t:t+".0"},menuActive:function(){this.isMenuActive=!this.isMenuActive},searchActive:function(){this.isSearchActive=!this.isSearchActive},sort1:function(){this.data.sort(function(t,e){return e.overall-t.overall}),this.isMenuActive=!this.isMenuActive},sort2:function(){this.data.sort(function(t,e){return e.score-t.score}),this.isMenuActive=!this.isMenuActive},sort3:function(){this.data.sort(function(t,e){return t.score-e.score}),this.isMenuActive=!this.isMenuActive},inputClick:function(){this.isSearchActive=!this.isSearchActive},search:function(){""!==this.keyword&&this.$router.push("/storeList/search/"+this.keyword)}},mounted:function(){var t=this;t.$route.path.includes("storeList")&&t.$route.path.includes("search")?(t.title="搜索: "+t.$route.params.keyword,i.get("store_list_search_data?keyword="+t.$route.params.keyword).then(function(e){e=e.data,e.data.sort(function(t,e){return e.overall-t.overall}),t.data=e.data,t.data=e.data,e.data.length<1&&t.$router.replace("/storeList/search/noStore"),t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})):(t.title=t.$route.params.type,i.get("store_list_data?type="+t.$route.params.type).then(function(e){e=e.data,e.data.sort(function(t,e){return e.overall-t.overall}),t.data=e.data,t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0}))}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,s){t.exports=s.p+"static/img/comment_top.png"},function(t,e,s){t.exports=s.p+"static/img/upload.png"},function(t,e,s){t.exports=s.p+"static/img/favicon.ico"},function(t,e,s){t.exports=s.p+"static/img/wave.png"},function(t,e,s){t.exports=s.p+"static/img/xingxing.png"},function(t,e,s){t.exports=s.p+"static/img/bad.png"},function(t,e,s){t.exports=s.p+"static/img/good.png"},function(t,e,s){t.exports=s.p+"static/img/normal.png"},function(t,e,s){t.exports=s.p+"static/img/header.png"},,function(t,e,s){s(126);var i=s(2)(s(67),s(164),null,null);t.exports=i.exports},function(t,e,s){s(118);var i=s(2)(s(68),s(156),"data-v-0dd9f94e",null);t.exports=i.exports},function(t,e,s){s(121);var i=s(2)(s(69),s(159),null,null);t.exports=i.exports},function(t,e,s){s(125);var i=s(2)(s(70),s(163),"data-v-68428e15",null);t.exports=i.exports},function(t,e,s){s(122);var i=s(2)(s(71),s(160),"data-v-4228435b",null);t.exports=i.exports},function(t,e,s){s(123);var i=s(2)(s(72),s(161),null,null);t.exports=i.exports},function(t,e,s){s(117);var i=s(2)(s(73),s(155),null,null);t.exports=i.exports},function(t,e,s){s(116);var i=s(2)(s(74),s(154),"data-v-0727dad0",null);t.exports=i.exports},function(t,e,s){s(127);var i=s(2)(s(75),s(165),"data-v-f6d59e0e",null);t.exports=i.exports},function(t,e,s){s(124);var i=s(2)(s(76),s(162),"data-v-5c4ec46b",null);t.exports=i.exports},function(t,e,s){s(119);var i=s(2)(s(77),s(157),"data-v-12f1f290",null);t.exports=i.exports},function(t,e,s){s(120);var i=s(2)(s(66),s(158),null,null);t.exports=i.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-store-root",class:{show:t.loaded}},[i("div",{staticClass:"new-store-header"},[i("div",{staticClass:"new-store-alert"}),t._v(" "),i("img",{attrs:{src:s(140)},on:{load:function(e){t.n++,t.checkLoad()}}}),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"new-store-input"},t._l(t.items,function(e){return i("div",{staticClass:"input-item",class:e.inputType,attrs:{"data-necessary":e.necessary}},["select"===e.inputType?[i("h2",[i("span",[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"mask",class:{show:t.inSelection},on:{click:function(e){t.inSelection=!1}}}),t._v(" "),i("div",{staticClass:"select-list",class:{show:t.inSelection}},t._l(e.ops,function(e){return i("button",{staticClass:"select-option",attrs:{"data-id":e.id},on:{click:t.select}},[t._v(t._s(e.name))])})),t._v(" "),i("span",{staticClass:"input",style:{color:""===t.selectValue?"#A9A9A9":"#000"},attrs:{placeholder:e.placeholder},on:{click:t.selectClick}},[t._v(t._s(""===t.selectValue?e.placeholder:t.selectValue))])]:"shortText"===e.inputType?[i("h2",[i("span",[t._v(t._s(e.title))])]),t._v(" "),i("input",{attrs:{placeholder:e.placeholder,id:e.name,type:"text"}})]:"longText"===e.inputType?[i("h2",[i("span",[t._v(t._s(e.title))])]),t._v(" "),i("textarea",{attrs:{placeholder:e.placeholder,id:e.name,type:"text"}})]:t._e()],2)})),t._v(" "),i("button",{staticClass:"submit",on:{click:t.submit}},[t._v("提交")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("span"),s("span",[t._v("添加新店")])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mark-root",class:{show:t.loaded}},[i("div",{staticClass:"alert",class:{show:t.alertShow}},[i("p",[t._v(t._s(t.alertValue))])]),t._v(" "),i("div",{staticClass:"mark-header"},[i("span",[t._v(t._s(t.$route.params.title))])]),t._v(" "),i("div",{staticClass:"mark-body"},[i("div",{staticClass:"img"},[i("img",{staticClass:"bad load",style:{display:t.score<5?"block":"none"},attrs:{src:s(137)}}),t._v(" "),i("img",{staticClass:"normal load",style:{display:t.score>=5&&t.score<7?"block":"none"},attrs:{src:s(139)}}),t._v(" "),i("img",{staticClass:"good load",style:{display:t.score>=7?"block":"none"},attrs:{src:s(138)}})]),t._v(" "),i("div",{staticClass:"switcher"},[i("h2",[t._v(t._s(t.score)+"分")]),t._v(" "),i("div",{on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[i("span",[t._v("0 ")]),t._v(" "),i("div",{staticClass:"bar"},[i("div",[i("div",{staticClass:"button",style:{transform:"translateX("+t.offset+"px)"}})])]),t._v(" "),i("span",[t._v("10")])])])]),t._v(" "),i("div",{staticClass:"mark-footer"},[i("div",{staticClass:"buttons"},[i("button",{on:{click:t.submitWithoutMark}},[t._v("暂不评分")]),t._v(" "),i("button",{on:{click:t.submit}},[t._v("完成")])])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-success-root",class:{show:t.loaded}},[i("img",{attrs:{src:s(46)},on:{load:t.loadPlus}}),t._v(" "),i("h1",[t._v("感谢您提供的数据")]),t._v(" "),i("p",[t._v("您添加的新店将在审核通过后火速上线哦～")]),t._v(" "),i("button",{on:{click:t.back}},[t._v("返回首页")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-list-root",class:{show:t.loaded}},[s("div",{staticClass:"store-list-header"},[s("h1",[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"search",class:{active:t.isSearchActive},on:{click:t.searchActive}},[s("button",{on:{click:t.search}},[t._v("搜索")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"搜索店铺"},domProps:{value:t.keyword},on:{click:t.inputClick,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.search(e):null},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"menu",class:{active:t.isMenuActive},on:{click:t.menuActive}},[s("button",{on:{blur:function(e){t.isMenuActive=!1}}},[t._v("菜单")]),t._v(" "),s("ul",{staticClass:"menu"},[s("li",[s("button",{on:{click:t.sort1}},[t._v("综合排序")])]),t._v(" "),s("li"),t._v(" "),s("li",[s("button",{on:{click:t.sort2}},[t._v("高分排序")])]),t._v(" "),s("li"),t._v(" "),s("li",[s("button",{on:{click:t.sort3}},[t._v("低分排序")])])])])]),t._v(" "),s("div",{directives:[{name:"iscroll",rawName:"v-iscroll"}],staticClass:"store-list-body"},[s("ul",t._l(t.data,function(e){return s("li",{staticClass:"store-info-item"},[s("ul",{staticClass:"pic"},t._l(e.picURLs.slice(0,1),function(i,a){return s("li",[s("img",{ref:i.msrc.split("/")[1].split(".")[0].split("-")[1],refInFor:!0,staticClass:"preview-img",attrs:{src:i.msrc},on:{click:function(s){t.$router.push("/storeDetail/"+e.id)}}})])})),t._v(" "),s("div",{staticClass:"store-info-item-right"},[s("div",{staticClass:"title-container",on:{click:function(s){t.$router.push("/storeDetail/"+e.id)}}},[s("h2",[t._v(t._s(e.name))]),t._v(" "),s("span",[t._v(t._s(t.convertToFloat(e.score)))])]),t._v(" "),s("ul",{staticClass:"tags",on:{click:function(s){t.$router.push("/storeDetail/"+e.id)}}},t._l(e.tags,function(e){return s("li",[t._v(t._s(e[0]))])}))])])}))]),t._v(" "),s("div",{staticClass:"store-list-footer"},[s("router-link",{attrs:{to:"/newStore"}},[s("span"),t._v("添加新店")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"pswp__bg"}),t._v(" "),s("div",{staticClass:"pswp__scroll-wrap"},[s("div",{staticClass:"pswp__container"},[s("div",{staticClass:"pswp__item"}),t._v(" "),s("div",{staticClass:"pswp__item"}),t._v(" "),s("div",{staticClass:"pswp__item"})]),t._v(" "),s("div",{staticClass:"pswp__ui pswp__ui--hidden"},[s("div",{staticClass:"pswp__top-bar"},[s("div",{staticClass:"pswp__counter"}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._v(" "),s("div",{staticClass:"pswp__preloader"},[s("div",{staticClass:"pswp__preloader__icn"},[s("div",{staticClass:"pswp__preloader__cut"},[s("div",{staticClass:"pswp__preloader__donut"})])])])]),t._v(" "),s("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[s("div",{staticClass:"pswp__share-tooltip"})]),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),t._v(" "),s("div",{staticClass:"pswp__caption"},[s("div",{staticClass:"pswp__caption__center"})])])])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment-root",class:{show:t.loaded}},[i("div",{staticClass:"alert",class:{show:t.alertShow}},[i("p",[t._v(t._s(t.alertValue))])]),t._v(" "),i("div",{staticClass:"comment-header"},[i("img",{attrs:{src:s(132)},on:{load:function(e){t.n++,t.n>=3?t.loaded=!0:0}}}),t._v(" "),i("div",{staticClass:"comment-float"}),t._v(" "),i("h1",[t._v(t._s(t.data.name))])]),t._v(" "),i("div",{staticClass:"comment-body"},[i("div",{staticClass:"choose-tags"},[i("div",{staticClass:"width-ruler"}),t._v(" "),i("div",{staticClass:"tags-pre",staticStyle:{display:"block",opacity:"0",position:"absolute","z-index":"-1"}},t._l(t.data.tags,function(e){return i("button",{on:{click:t.select}},[t._v(t._s(e.title))])})),t._v(" "),t.loaded?i("swipe",{attrs:{auto:0,continous:!1}},t._l(t.pages,function(e,s){return i("swipe-item",{staticClass:"tags swiper-slide",style:{width:t.width_+"px"}},[i("div",{staticClass:"button-viewport"},[i("div",{staticClass:"button-wrap",class:{last:s===t.pages.length-1},style:{top:"-"+3.2*s+"rem"}},t._l(t.data.tags,function(e){return i("button",{attrs:{"data-id":e.id},on:{click:t.select}},[t._v(t._s(e.title))])}))])])})):t._e(),t._v(" "),i("div",{staticClass:"dots"})],1),t._v(" "),i("div",{staticClass:"input-area"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"请说出你的故事(限200字以内)"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),i("ul",{staticClass:"input-area-upload"},[i("input",{ref:"imageSelector",attrs:{type:"file",multiple:""}}),t._v(" "),t._l(t.imagesToUpload,function(e,s){return i("li",{staticClass:"images-to-upload"},[i("img",{attrs:{src:e.src}}),t._v(" "),i("a",{staticClass:"image-upload-delete",on:{click:function(e){t.imagesToUpload.splice(s,1),t.imagesURLToUpload.splice(s,1),t.$refs.imageSelector.value=""}}},[t._v("+")])])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.imagesToUpload.length<3,expression:"imagesToUpload.length < 3"}]},[i("img",{staticClass:"choose-image",attrs:{src:s(133)},on:{click:t.selectImg}}),t._v(" "),i("canvas",{ref:"imageCanvas"})]),t._v(" "),t._l(Math.max(3-t.imagesToUpload.length-1,0),function(t){return i("li")})],2)])]),t._v(" "),i("div",{staticClass:"comment-footer"},[t.imagesUploading?i("a",[t._v(" 稍等，正在上传图片~ ")]):t._e(),t._v(" "),t.imagesUploading?t._e():i("a",{on:{click:t.next}},[i("span"),t._v("下一步 ")])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-success-root",class:{show:t.loaded}},[i("img",{attrs:{src:s(46)},on:{load:t.loadPlus}}),t._v(" "),i("h1",[t._v("感谢您的评价")]),t._v(" "),i("p",[t._v("现在大家已经可以看到你的评价了")]),t._v(" "),i("button",{on:{click:t.back}},[t._v("完成评价")])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainpage-root",class:{show:t.loaded}},[i("div",{staticClass:"mainpage-header"},[i("img",{staticStyle:{display:"none"},attrs:{src:s(136),id:"xingxing"}}),t._v(" "),i("img",{staticStyle:{display:"none"},attrs:{src:s(135),id:"wave"}}),t._v(" "),i("canvas",{attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),i("h1",[t._v("Upick")]),t._v(" "),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{
placeholder:"搜索店铺"},domProps:{value:t.keyword},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.searchClick(e):null},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),i("button",{staticClass:"search-button",on:{click:t.searchClick}},[i("span",{staticClass:"search-button-icon"},[t._v("搜索")])])]),t._v(" "),i("div",{staticClass:"topic"},[i("p",[t._v(t._s(t.data.topic))])])]),t._v(" "),i("div",{staticClass:"mainpage-body"},[i("div",{staticClass:"classify"},[i("h2",[t._v("分类")]),t._v(" "),i("div",{staticClass:"column"},t._l(t.data.list1,function(e,s){return i("div",{staticClass:"column-block",on:{click:function(s){t.buttonClick(s,e)}}},[i("div",{staticClass:"back"},[e.subTitle.length>0?i("ul",t._l(e.subTitle,function(e){return i("li",[i("a",{on:{click:function(s){s.stopPropagation(),t.subTitleClick(e)}}},[t._v(t._s(e))])])})):i("ul",[i("li",{staticClass:"come-soon"},[t._v("敬请期待")])]),t._v(" "),i("div",{staticClass:"img-div-a",style:{transform:"scale("+5*t.rem/181+")",backgroundPosition:"-"+181*s+"px -205px"}})]),t._v(" "),i("div",{staticClass:"img-div",style:{transform:"scale("+5*t.rem/181+")",backgroundPosition:"-"+181*s+"px 0"}}),t._v(" "),i("h3",[t._v(t._s(e.title))])])}))])]),t._v(" "),i("div",{staticClass:"hot-store"},[i("h2",[t._v("热门商家")]),t._v(" "),i("div",[i("div",{staticClass:"back"}),t._v(" "),i("div",{staticClass:"mainpage-bottom"},t._l(t.data.list2,function(e){return i("router-link",{attrs:{to:"storeDetail/"+e}},[t._v(t._s(e))])}))])]),t._v(" "),i("img",{staticStyle:{display:"none"},attrs:{src:s(134)}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-detail-root",class:{show:t.loaded}},[s("div",{staticClass:"store-detail-header"},[s("h1",[t._v(t._s(t.detail.name))]),t._v(" "),s("div",{staticClass:"tip"})]),t._v(" "),s("div",{staticClass:"store-detail-body"},[s("div",{staticClass:"body-top",class:{low:t.low&&t.detail.comments.length>=5}},[s("div",[s("table",{staticClass:"addr-time"},[s("tr",[s("td",[s("tr",{staticClass:"open-time",attrs:{valign:"top"}},[s("td",{staticClass:"icon-time"}),t._v(" "),s("td",{staticClass:"addr-time-title"},[t._v("营业时间")]),t._v(" "),s("td",[t._v(":")]),t._v(" "),s("td",{staticClass:"addr-time-value"},[s("ul",t._l(t.detail.openTime.split(";"),function(e){return s("li",[t._v(t._s(e))])}))])]),t._v(" "),s("tr",{staticClass:"address"},[s("td",{staticClass:"icon-address"}),t._v(" "),s("td",{staticClass:"addr-time-title"},[t._v("地址")]),t._v(" "),s("td",[t._v(":")]),t._v(" "),s("td",{staticClass:"addr-time-value"},[t._v(t._s(t.detail.address))])])]),t._v(" "),s("td",{staticClass:"mark"},[s("h2",{staticClass:"mark-h2"},[t._v(t._s(t.convertToFloat(t.detail.score)))]),t._v("分")])])])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"tags"},t._l(t.detail.tags,function(e){return s("span",[t._v(t._s(e[0]))])})),t._v(" "),s("div",{staticClass:"pics"},[s("div",{staticClass:"img-con"},t._l(t.detail.picURLs.slice(0,3),function(e,i){return s("img",{staticClass:"preview-img",attrs:{src:e.msrc},on:{click:function(e){t.$preview.open(i,t.detail.picURLs)}}})})),t._v(" "),t.detail.picURLs.length>3?s("div",{staticClass:"mask"},[t._v("+"+t._s(t.detail.picURLs.length-t.detail.picURLs_.length))]):t._e()])])]),t._v(" "),s("div",{staticClass:"body-bottom"},[s("div",{staticClass:"tabs"},[s("span",{class:{chosen:t.firstChosen},on:{click:function(e){1!=t.firstChosen?t.firstChosen=!t.firstChosen:0}}},[t._v("最热评论")]),t._v(" "),s("span",{class:{chosen:!t.firstChosen},on:{click:function(e){1==t.firstChosen?t.firstChosen=!t.firstChosen:0}}},[t._v("最新评论")])]),t._v(" "),s("div",{directives:[{name:"iscroll",rawName:"v-iscroll"}],staticClass:"ul-wrapper scroll-view"},[s("ul",{staticClass:"comments-list",attrs:{id:"comments-list"}},t._l(t.detail.comments,function(e){return s("li",[s("div",[s("span",{staticClass:"date"},[t._v(t._s(new Date(1e3*e.date).toLocaleDateString()))]),t._v(" "),s("span",{staticClass:"dislike",class:{black:e.disliked},attrs:{"data-id":e.id},on:{click:function(s){t.dislikeOnClick(e)}}},[s("span",[t._v(t._s(e.dislike))])]),t._v(" "),s("span",{staticClass:"like",class:{black:e.liked},attrs:{"data-id":e.id},on:{click:function(s){t.likeOnClick(e)}}},[s("span",[t._v(t._s(e.like))])])]),t._v(" "),s("p",[t._v(t._s(e.value))]),t._v(" "),e.img&&e.img.length>0?s("ul",{staticClass:"comment-images-ul"},[t._l(e.img,function(i,a){return s("li",{staticClass:"comment-images-li"},[s("img",{staticClass:"comment-image",attrs:{src:i.msrc},on:{click:function(s){t.commentImageClick(i.src),t.$preview.open(a,e.img,{shareEl:!1,getThumbBoundsFn:function(){var t=s.target.getBoundingClientRect();return{x:t.left,y:t.top,w:s.target.width}}})}}})])}),t._v(" "),t._l(3-e.img.length,function(t){return s("li",{staticClass:"comment-images-li"})})],2):t._e()])}))])])]),t._v(" "),t.loaded&&!t.commented?s("div",{staticClass:"store-detail-footer"},[s("router-link",{attrs:{to:"/comment/"+t.$route.params.id}},[s("span"),t._v("我要评价")])],1):t.loaded&&t.commented?s("div",{staticClass:"store-detail-footer commented"},[s("a",[t._v("您已经评价过了")])]):t._e()])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-failed-root",class:{show:t.loaded}},[i("img",{attrs:{src:s(47)},on:{load:t.loadPlus}}),t._v(" "),i("h1",[t._v("你已经评价过该店铺了")]),t._v(" "),i("p",[t._v("试着评价其他的页面吧！")]),t._v(" "),i("button",{on:{click:t.newStore}},[t._v("返回")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-failed-root",class:{show:t.loaded}},[i("img",{attrs:{src:s(47)},on:{load:t.loadPlus}}),t._v(" "),i("h1",[t._v("没有找到相应的店铺信息哦～")]),t._v(" "),i("p",[t._v("到添加新店里提醒我们吧！")]),t._v(" "),i("button",{on:{click:t.newStore}},[t._v("添加新店")])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.js.map