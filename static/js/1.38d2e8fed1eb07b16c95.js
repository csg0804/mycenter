webpackJsonp([1],{ZJNW:function(t,n){},hMmo:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"nav-wrap scale-1px-top"},[a("ul",{staticClass:"nav-list"},t._l(t.navlist,function(n,e){return a("li",{key:e,staticClass:"nav-item",class:{active:t.curnav==n.name}},[a("router-link",{staticClass:"links",attrs:{to:n.path}},[a("span",{staticClass:"iconfont",class:n.icon}),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(n.title))])])],1)}),0)])},staticRenderFns:[]};var s=a("VU/8")({components:{},data:function(){return{curnav:"home",navlist:[{id:1,title:"首页",name:"home",icon:"iconhome1",path:"/"},{id:2,title:"项目",name:"works",icon:"iconappworksheet",path:"/works"},{id:3,title:"我的",name:"my",icon:"icongerenzhongxin",path:"/my"}]}},watch:{$route:function(t,n){this.curnav=t.name}},created:function(){this.curnav=this.$route.name},methods:{}},e,!1,function(t){a("mQWV")},"data-v-666f9f78",null).exports,i={components:{NavPage:s},data:function(){return{}},methods:{}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"layuot-wrap"},[n("router-view"),this._v(" "),n("nav-page")],1)},staticRenderFns:[]};var o=a("VU/8")(i,c,!1,function(t){a("ZJNW")},"data-v-5add6231",null);n.default=o.exports},mQWV:function(t,n){}});