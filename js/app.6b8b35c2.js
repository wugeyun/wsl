(function(e){function t(t){for(var a,s,r=t[0],c=t[1],l=t[2],p=0,f=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2c44":function(e,t,n){"use strict";n("7cf3")},"56d7":function(e,t,n){"use strict";n.r(t);n("3b18");var a=n("f64c"),o=(n("fbd6"),n("160c")),i=(n("0032"),n("e32c")),s=(n("de6a"),n("9a63")),r=(n("5704"),n("b558")),c=(n("438c"),n("fbdf")),l=(n("2ef0"),n("9839")),u=(n("6ba6"),n("5efb")),p=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],h=(n("5c0b"),n("2877")),g={},m=Object(h["a"])(g,f,d,!1,null,null,null),v=m.exports,b=(n("6d37"),n("9483"));console.log("production"),Object(b["a"])("".concat("","sw.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y,w=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("p",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v("在线朗读.")]),n("p",{staticStyle:{"margin-bottom":"30px",color:"#999"}},[e._v(" 基于微软edge浏览器大声朗读功能开发的pwa应用 ")]),n("a-textarea",{staticClass:"a-textarea",attrs:{placeholder:"输入需要朗读的文字",value:e.inputText,rows:10},on:{input:e.onInput}}),n("p",{staticClass:"text-lf pb5 fweight-bold letter2 pl5 mt30"},[e._v("选择语音")]),n("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("a-col",{attrs:{span:18}},[n("a-select",{staticStyle:{width:"100%"},attrs:{"default-value":e.defaultSelect},on:{select:e.onSelect}},e._l(e.voices,(function(t,a){return n("a-select-option",{key:a},[e._v(" "+e._s(t.displayName)+" ")])})),1)],1),n("a-col",{attrs:{span:5}},[n("a-button",{attrs:{type:"primary"},on:{click:e.onClick}},[e._v("播放")])],1)],1),n("a-row",{staticClass:"pb5 pt10 mt20",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("a-col",{attrs:{span:24}},[n("div",{staticClass:"text-lf"},[n("span",{staticClass:"fweight-bold letter2 pl5"},[e._v("播放速度(rate)")]),n("span",{staticClass:"letter2 pl10",staticStyle:{color:"#999","font-size":"12px"}},[e._v(e._s(e.rateValue)+" 倍速")])]),n("div",{staticStyle:{"padding-left":"10px"},attrs:{"touch-action":"none"}},[n("a-slider",{attrs:{marks:e.rateMarks,step:.25,min:e.minRate,max:e.maxRate,included:!1,"default-value":e.rateValue},on:{change:e.onRateSlider}})],1)])],1),n("a-row",{staticClass:"pb5 pt20",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("a-col",{attrs:{span:24}},[n("div",{staticClass:"text-lf"},[n("span",{staticClass:"text-lf fweight-bold letter2 pl5"},[e._v("音调调整(pitch)")]),n("span",{staticClass:"letter2 pl10",staticStyle:{color:"#999","font-size":"12px"}},[e._v("当前"+e._s(e.pitchValue))])]),n("div",{staticStyle:{"padding-left":"10px"},attrs:{"touch-action":"none"}},[n("a-slider",{attrs:{marks:e.pitchMarks,step:.1,min:e.minPitch,max:e.maxPitch,included:!1,"default-value":e.pitchValue},on:{change:e.onPitchSlider}})],1)])],1),n("a-row",{staticClass:"pb10",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("a-col",{staticClass:"flex-wrap"},[n("p",{staticClass:"text-lf fweight-bold letter2 pl5 pb10",staticStyle:{"margin-right":"10px"}},[e._v("开启录音(record)")]),n("a-switch",{attrs:{checked:e.recordStatus},on:{change:e.onChange}})],1)],1),n("p",{staticClass:"link",on:{click:e.push}},[e._v("Github中查看")])],1)},S=[],k=(n("d3b7"),n("d81d"),n("2ca0"),n("b0c0"),n("5319"),n("ac1f"),n("466d"),window.speechSynthesis),_={name:"Home",components:{},data:function(){return{voices:[],value:"",value1:20,disabled:!1,defaultSelect:"选择朗读语言类型",speedSelect:"x1",inputText:"",selectIdx:0,rateValue:1,minRate:.5,maxRate:2,rateMarks:{.5:"缓慢",.75:"",1:"常规",1.25:"",1.5:"",1.75:"",2:"快"},pitchValue:1,minPitch:0,maxPitch:2,pitchMarks:{0:"",2:""},recordStatus:!1}},created:function(){},beforeMount:function(){},mounted:function(){this.populateVoiceList(),this.checkBrowser()},updated:function(){},beforeDestroy:function(){},methods:{populateVoiceList:function(){var e=this;"undefined"!==typeof speechSynthesis&&new Promise((function(e,t){setTimeout((function(){var t=speechSynthesis.getVoices();e(t)}),0)})).then((function(t){e.voices=t.map((function(e){return e.name.startsWith("Google ")?e.displayName=e.name.replace(/^Google /,""):e.name.startsWith("Microsoft")?(e.name.match(/^Microsoft (.+) Online.*- (.+)/),e.displayName=e.name):e.displayName=e.name,e})).sort((function(e,t){return e.displayName.localeCompare(t.displayName)}))}))},test:function(){k.resume(),this.$message.success("继续播放")},onClick:function(){(this.inputText||0!=this.inputText.length)&&this.speak()},onInput:function(e){this.inputText=e.target.value},onSelect:function(e){this.selectIdx=e},speak:function(){var e=this.voices,t=this.selectIdx,n=this.inputText,a=this.rateValue,o=this.pitchValue;y=new SpeechSynthesisUtterance(n),y.onend=function(e){console.log("SpeechSynthesisUtterance.onend")},y.onerror=function(e){console.error("SpeechSynthesisUtterance.onerror")},y.voice=e[t],y.pitch=o,y.rate=a,k.speak(y)},onChange:function(e){console.log("change: ",e),this.recordStatus||this.initRecorder(),this.recordStatus=!this.recordStatus},onAfterChange:function(e){console.log("afterChange: ",e)},onRateSlider:function(e){this.rateValue=e},onPitchSlider:function(e){this.pitchValue=e},checkBrowser:function(){},push:function(){window.location.href="http://www.wuge.xyz/"},initRecorder:function(){var e=this,t=window.constraints={audio:!0,video:!1};navigator.mediaDevices.getUserMedia(t).then((function(t){e.recorderFn(t),console.log(t)})).catch((function(t){console.log(t),e.recordStatus=!1,e.$message.warning("🙅🏻‍♀️ 拒绝录音权限")}))},recorderFn:function(e){var t=new MediaRecorder(e);t.start(),console.log("录音中...")}}},C=_,j=(n("2c44"),Object(h["a"])(C,x,S,!1,null,"48a175a8",null)),O=j.exports;p["a"].use(w["a"]);var P=[{path:"/",name:"Home",component:O}],M=new w["a"]({routes:P,mode:"hash"});p["a"].config.productionTip=!1,p["a"].use(u["a"]),p["a"].use(l["a"]),p["a"].use(c["a"]),p["a"].use(r["a"]),p["a"].use(s["a"]),p["a"].use(i["a"]),p["a"].use(o["a"]),p["a"].prototype.$message=a["a"],new p["a"]({router:M,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6d37":function(e,t,n){},"7cf3":function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.6b8b35c2.js.map