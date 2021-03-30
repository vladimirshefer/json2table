(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/json2table/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("p",[t._v(" Insert your JSON here (or use "),n("a",{attrs:{href:"/json2table/?randomJson=true"}},[t._v("random JSON")]),t._v("): "),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.objectText,expression:"objectText"}],domProps:{value:t.objectText},on:{input:function(e){e.target.composing||(t.objectText=e.target.value)}}}),t._v(" "),n("br"),t._v(" You can change values in table. All changes will be applied to this JSON. ")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.showControls,expression:"showControls"}],attrs:{id:"showControls",type:"checkbox"},domProps:{checked:Array.isArray(t.showControls)?t._i(t.showControls,null)>-1:t.showControls},on:{change:function(e){var n=t.showControls,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=null,s=t._i(n,a);r.checked?s<0&&(t.showControls=n.concat([a])):s>-1&&(t.showControls=n.slice(0,s).concat(n.slice(s+1)))}else t.showControls=o}}}),n("label",{attrs:{for:"showControls"}},[t._v("(Alt) Show control buttons.")])]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.indent,expression:"indent"}],attrs:{id:"indent",type:"checkbox"},domProps:{checked:Array.isArray(t.indent)?t._i(t.indent,null)>-1:t.indent},on:{change:function(e){var n=t.indent,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=null,s=t._i(n,a);r.checked?s<0&&(t.indent=n.concat([a])):s>-1&&(t.indent=n.slice(0,s).concat(n.slice(s+1)))}else t.indent=o}}}),n("label",{attrs:{for:"indent"}},[t._v("Format JSON")])])]),n("div",[n("table",{attrs:{border:"1"}},[n("TableArea",{attrs:{"target-object":t.targetObject,"show-controls":t.showControls}})],1)]),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("hr"),t._v(" Author: "),n("a",{attrs:{href:"https://github.com/vladimirshefer"}},[t._v("Vladimir Shefer")]),t._v(". Source code on "),n("a",{attrs:{href:"https://github.com/vladimirshefer/json2table"}},[t._v("GitHub")]),t._v(". ")])}],s=(n("841c"),n("ac1f"),n("2b3d"),n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isPrimitive?n("input",{directives:[{name:"model",rawName:"v-model",value:t.targetValue,expression:"targetValue"}],attrs:{type:"text"},domProps:{value:t.targetValue},on:{input:function(e){e.target.composing||(t.targetValue=e.target.value)}}}):t._e(),n("div",{staticStyle:{position:"relative"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isCollection&&t.showControls,expression:"isCollection && showControls"}],staticClass:"controls"},[n("input",{attrs:{type:"button",value:"⟳",title:"Rotate table"},on:{click:t.flip}})])]),t.isCollection?n("div",[t.isHorizontal?n("div",[n("tr",t._l(t.targetValue,(function(e,r){return n("EntryHeader",{key:r,attrs:{"entry-key":r},on:{drop:function(e){return t.dropEntryByKey(r)}}})})),1),n("tr",t._l(t.targetValue,(function(e){return n("td",{key:e},[n("TableArea",{attrs:{"target-object":e,"show-controls":t.showControls}})],1)})),0)]):n("div",t._l(t.targetValue,(function(e,r){return n("tr",{key:e},[n("EntryHeader",{attrs:{"entry-key":r},on:{drop:function(e){return t.dropEntryByKey(r)}}}),n("td",[n("TableArea",{attrs:{"target-object":e,"show-controls":t.showControls}})],1)],1)})),0)]):t._e()])}),i=[],l=n("53ca"),c=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{attrs:{tabindex:"0"},on:{focus:function(e){t.showControls=!0},focusout:function(e){t.showControls=!1},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.tryDrop(e)}}},[t._v(" "+t._s(t.entryKey)+" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showControls,expression:"showControls"}],staticClass:"entry-controls"},[n("a",{staticClass:"entry-drop-button",attrs:{title:"Drop this entry. Double click to proceed."},on:{click:t.tryDrop,mouseout:function(e){t.wantToDrop=!1}}},[t._v(t._s(t.wantToDrop?"✓":"✗"))])])])}),u=[],d={name:"EntryHeader",props:{entryKey:{required:!0}},data:function(){return{wantToDrop:!1,showControls:!1}},methods:{tryDrop:function(){this.wantToDrop?this.$emit("drop"):this.wantToDrop=!0}}},p=d,h=(n("7486"),n("2877")),f=Object(h["a"])(p,c,u,!1,null,"7e88e1b6",null),v=f.exports,y={name:"TableArea",components:{EntryHeader:v},props:{targetObject:{},showControls:{type:Boolean,required:!1,default:!0}},data:function(){return{isHorizontal:!1}},computed:{isObject:function(){return!this.isArray&&"object"===Object(l["a"])(this.targetValue)&&null!==this.targetValue},isArray:function(){return Array.isArray(this.targetValue)},isCollection:function(){return this.isArray||this.isObject},isPrimitive:function(){return!this.isCollection},targetValue:{get:function(){return this.targetObject.data},set:function(t){this.targetObject.data=t}}},methods:{flip:function(){this.isHorizontal=!this.isHorizontal},dropEntryByKey:function(t){console.log("deleting "+t),this.isArray&&this.targetValue.splice(parseInt(t),1),this.isObject&&this.$delete(this.targetValue,t)}}},b=y,m=Object(h["a"])(b,s,i,!1,null,"aa039132",null),w=m.exports,g=n("bc3a"),_=n.n(g),j={name:"App",components:{TableArea:w},data:function(){return{targetObject:["no data"],showControls:!1,indent:!1}},computed:{objectText:{get:function(){return JSON.stringify(this.targetObject,(function(t,e){return e.data}),this.indent?2:null)},set:function(t){this.targetObject=JSON.parse(t,(function(t,e){return{data:e}}))}}},methods:{loadRandomJson:function(){var t=this;_.a.get("https://randomuser.me/api/",{transformResponse:function(t){return t}}).then((function(e){t.objectText=e.data}))}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){e.altKey&&(t.showControls=!0)})),window.addEventListener("keyup",(function(e){e.altKey||(t.showControls=!1)}));var e=window.location.search,n=new URLSearchParams(e);n.get("randomJson")&&this.loadRandomJson()}},C=j,O=(n("034f"),Object(h["a"])(C,o,a,!1,null,"4d454f34",null)),k=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},"5c14":function(t,e,n){},7486:function(t,e,n){"use strict";n("5c14")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.d73f70c5.js.map