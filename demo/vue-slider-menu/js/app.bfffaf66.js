(function(e){function t(t){for(var r,l,s=t[0],a=t[1],c=t[2],d=0,f=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},4154:function(e,t,n){"use strict";n("c245")},"4a42":function(e,t,n){"use strict";n("cbea")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("slider-menu",{scopedSlots:e._u([{key:"menu",fn:function(t){var r=t.row;return[n("div",{staticClass:"slider-menu-nav",class:{"slider-menu-nav-active":r.current===r.index}},[n("span",[e._v(e._s(r.name))])])]}}])},[n("slider-menu-item",{attrs:{name:"标题1"}}),n("slider-menu-item",{attrs:{name:"标题2"}}),n("slider-menu-item",{attrs:{name:"标题3"}}),n("slider-menu-item",{attrs:{name:"标题4"}}),n("slider-menu-item",{attrs:{name:"标题5"}})],1)],1)},o=[],l={name:"App"},s=l,a=(n("034f"),n("2877")),c=Object(a["a"])(s,i,o,!1,null,null,null),u=c.exports,d=(n("4160"),n("b0c0"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider-main"},[n("div",{staticClass:"slider-body"},[n("div",{ref:"sliderMenu",staticClass:"slider-menu"},e._l(e.data,(function(t,r){return n("div",{key:r,on:{click:function(t){return e.scrollToView(r)}}},[e._t("menu",[n("div",{staticClass:"slider-menu-nav",class:{"slider-menu-nav-active":e.current===r}},[n("span",[e._v(e._s(t.name))])])],{row:Object.assign({},t,{current:e.current,index:r})})],2)})),0),n("div",{staticClass:"slider-info"},[e._t("default")],2)])])}),f=[],p=(n("d81d"),{name:"SliderMenu",data:function(){return{current:0,data:[]}},methods:{scrollToView:function(e){var t=this.getScrollItems();if(e>=0&&e<t.length){var n=t[e]||{},r=this.getOffset(n),i=r.top-this.getStartTop();window.scrollTo({top:i<0?0:i,behavior:"smooth"})}},handleScroll:function(e){var t=this,n=this.getScrollItems(),r=this.getScroll(window,!0),i=-99999;n.forEach((function(e,n){var o=t.getOffset(e),l=o.top-t.getStartTop()-r;l<=0&&i<=l&&(i=l,t.current=n)}))},getStartTop:function(){return this.$refs.sliderMenu&&this.$refs.sliderMenu.offsetTop||0},getScrollItems:function(){var e=[],t=[];return this.$children&&this.$children.length&&(e=this.$children.map((function(e){return e.$el})),t=e),t},getScroll:function(e,t){var n=t?"pageYOffset":"pageXOffset",r=t?"scrollTop":"scrollLeft",i=e[n];return"number"!==typeof i&&(i=window.document.documentElement[r]),i},getOffset:function(e){var t=e.getBoundingClientRect(),n=this.getScroll(window,!0),r=this.getScroll(window),i=window.document.body,o=i.clientTop||0,l=i.clientLeft||0,s=t.bottom-t.top;if(0===s&&e.parentNode){var a=e.parentNode.getBoundingClientRect();s=a&&a.height||0}return{top:t.top+n-o,left:t.left+r-l,height:s,width:t.right-t.left}}},mounted:function(){this.$children&&this.$children.length&&(this.data=this.$children.map((function(e){return{name:e.name}}))),window.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll,!1),window.removeEventListener("resize",this.handleScroll,!1)}}),m=p,h=(n("4154"),Object(a["a"])(m,d,f,!1,null,"530086c4",null)),v=h.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollItem",staticClass:"slider-menu-item"},[e._t("default",[n("div",{staticClass:"content"},[e._v(e._s(e.name+" 的内容"))])])],2)},g=[],b=(n("a9e3"),{name:"SliderMenuItem",props:{name:{type:[String,Number],default:"String"}}}),y=b,S=(n("4a42"),Object(a["a"])(y,w,g,!1,null,"0281aced",null)),_=S.exports,O=[v,_],j=function(e){O.forEach((function(t){e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&j(window.Vue);var $={install:j};r["a"].use($),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){},c245:function(e,t,n){},cbea:function(e,t,n){}});
//# sourceMappingURL=app.bfffaf66.js.map