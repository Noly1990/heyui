webpackJsonp([7],{1055:function(e,t,n){var o=n(1)(n(1286),n(1573),null,null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/demos/other/affix1.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),o.options.functional,e.exports=o.exports},1056:function(e,t,n){var o=n(1)(n(1287),n(1572),null,null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/demos/other/affix2.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),o.options.functional,e.exports=o.exports},1057:function(e,t,n){var o=n(1)(n(1288),n(1424),null,null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/demos/other/backtotop1.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),o.options.functional,e.exports=o.exports},1058:function(e,t,n){var o=n(1)(n(1289),n(1425),null,null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/demos/other/backtotop2.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)}),o.options.functional,e.exports=o.exports},1286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{status:{fixed1:!1,fixed2:!1,fixed3:!1}}},methods:{onchange1:function(e){this.status.fixed1=e},onchange2:function(e){this.status.fixed2=e},onchange3:function(e){this.status.fixed3=e}}}},1287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{fixed:!1}},methods:{onchange:function(e){this.fixed=e}}}},1288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{getTarget:function(){return document.querySelector(".right-frame")}}}},1289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{getTarget:function(){return document.querySelector(".right-frame")}}}},1424:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("BackTop",{attrs:{target:e.getTarget,bottom:0,right:50}})},staticRenderFns:[]},e.exports.render._withStripped=!0},1425:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("BackTop",{attrs:{target:e.getTarget,bottom:100,right:50,"class-name":"h-backtop-custom"}},[e._v("\n  返回顶部\n")])},staticRenderFns:[]},e.exports.render._withStripped=!0},1572:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Affix",{attrs:{"offset-bottom":10},on:{onchange:e.onchange}},[n("button",{staticClass:"h-btn",class:{"h-btn-red":e.fixed}},[e._v("固定在距离底部偏移量10px的位置")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},1573:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("Affix",{attrs:{"offset-top":70},on:{onchange:e.onchange1}},[n("button",{staticClass:"h-btn",class:{"h-btn-green":e.status.fixed1}},[e._v("固定在距离顶部偏移量70px的位置")])])],1),e._v(" "),n("div",{directives:[{name:"height",rawName:"v-height",value:10,expression:"10"}]}),e._v(" "),n("div",[n("Affix",{attrs:{"offset-top":120},on:{onchange:e.onchange2}},[n("button",{staticClass:"h-btn",class:{"h-btn-yellow":e.status.fixed2}},[e._v("固定在距离顶部偏移量120px的位置")])])],1),e._v(" "),n("div",{directives:[{name:"height",rawName:"v-height",value:10,expression:"10"}]}),e._v(" "),n("div",[n("Affix",{attrs:{"offset-top":170},on:{onchange:e.onchange3}},[n("button",{staticClass:"h-btn",class:{"h-btn-blue":e.status.fixed3}},[e._v("固定在距离顶部偏移量190px的位置")])])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});