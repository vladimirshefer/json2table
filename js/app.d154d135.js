(function(t){function e(e){for(var n,a,c=e[0],u=e[1],l=e[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/json2table/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.objectText,expression:"objectText"}],attrs:{type:"text"},domProps:{value:t.objectText},on:{input:function(e){e.target.composing||(t.objectText=e.target.value)}}}),r("table",{attrs:{border:"1"}},[r("TableArea",{attrs:{"target-object":t.targetObject}})],1)])},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isPrimitive?r("input",{directives:[{name:"model",rawName:"v-model",value:t.targetObject,expression:"targetObject"}],attrs:{type:"text"},domProps:{value:t.targetObject},on:{input:function(e){e.target.composing||(t.targetObject=e.target.value)}}}):t._e(),t.innerCollectionIsHorizontal?r("div",[t.isCollection?r("div",[r("tr",t._l(t.targetObject,(function(e,n){return r("th",{key:n},[t._v(t._s(n))])})),0),r("tr",t._l(t.targetObject,(function(t){return r("td",{key:t},[r("TableArea",{attrs:{"target-object":t,"inner-collection-is-horizontal":!1}})],1)})),0)]):t._e()]):r("div",[t.isCollection?r("div",t._l(t.targetObject,(function(e,n){return r("tr",{key:e},[r("th",[t._v(t._s(n))]),r("td",[r("TableArea",{attrs:{"target-object":e,"inner-collection-is-horizontal":t.isCollection&&!t.innerCollectionIsHorizontal}})],1)])})),0):t._e()])])},c=[],u=r("53ca"),l={name:"TableArea",props:{targetObject:{},innerCollectionIsHorizontal:{type:Boolean,default:!1}},data:function(){return{}},computed:{isObject:function(){return!this.isArray&&"object"===Object(u["a"])(this.targetObject)&&null!==this.targetObject},isArray:function(){return Array.isArray(this.targetObject)},isPrimitive:function(){return!this.isObject&&!this.isArray},isCollection:function(){return this.isArray||this.isObject}}},s=l,p=r("2877"),f=Object(p["a"])(s,a,c,!1,null,"275e91f4",null),b=f.exports,d=r("bc3a"),j=r.n(d),v={name:"App",components:{TableArea:b},data:function(){return{targetObject:["no data"]}},computed:{objectText:{get:function(){return JSON.stringify(this.targetObject)},set:function(t){this.targetObject=JSON.parse(t)}}},mounted:function(){var t=this;j.a.get("https://randomuser.me/api/",{transformResponse:function(t){return t}}).then((function(e){t.objectText=e.data}))}},g=v,h=Object(p["a"])(g,o,i,!1,null,"4a61f5f0",null),O=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(O)}}).$mount("#app")}});
//# sourceMappingURL=app.d154d135.js.map