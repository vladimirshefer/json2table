(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"171d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isPrimitive?n("EntryPrimitiveValue",{attrs:{"target-value":e.targetValue},on:{update:function(t){e.targetValue=t}}}):e._e(),e.isCollection?n("div",[n("div",{style:e.isHorizontal?{display:"flex"}:{display:"block"}},e._l(e.targetValue,(function(t,r){return n("Entry",{key:r,style:e.isHorizontal?{display:"block"}:{display:"flex"},attrs:{"entry-key":r,value:t},on:{drop:function(t){return e.dropEntryByKey(r)},flip:e.flip}})})),1)]):e._e()],1)},a=[],i=n("53ca"),o=(n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-1",staticStyle:{border:"1px solid black"},style:e.rootStyle},[n("EntryHeader",{attrs:{"entry-key":e.entryKey,collapse:e.isCollapsed},on:{drop:function(t){return e.$emit("drop",t)},flip:function(t){return e.$emit("flip",t)},collapse:function(t){e.isCollapsed=!e.isCollapsed}}}),n("TableArea",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapsed,expression:"!isCollapsed"}],attrs:{"target-object":e.value}}),e.isCollapsed?n("EntryCollapsedValue",{on:{show:function(t){e.isCollapsed=!1}}}):e._e()],1)}),s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-1 d-flex",attrs:{tabindex:"0"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.tryDrop(t)}}},[n("b",[e._v(e._s(e.entryKey))]),n("div",[n("b-dropdown",{attrs:{variant:"custom",size:"sm"}},[n("b-dropdown-item",{on:{click:e.toggleCollapse}},[n("b-icon",{attrs:{icon:e.collapse?"arrows-expand":"arrows-collapse"}}),e._v(" "+e._s(e.collapse?"Развернуть":"Свернуть")+" ")],1),n("b-dropdown-item",{on:{click:e.flip}},[n("b-icon",{attrs:{icon:"arrow-clockwise"}}),e._v(" Повернуть ")],1),n("b-dropdown-item",{on:{click:e.tryDrop}},[n("b-icon",{attrs:{icon:"x"}}),e._v(" Удалить ")],1)],1)],1)])},c=[],u={name:"EntryHeader",props:{entryKey:{required:!0},collapse:{}},data:function(){return{fontSizeScale:1}},methods:{tryDrop:function(){confirm("Удалить элемент?")&&this.$emit("drop")},toggleCollapse:function(){this.$emit("collapse")},flip:function(){this.$emit("flip")}}},d=u,p=(n("2ea8"),n("2877")),f=Object(p["a"])(d,l,c,!1,null,"1a929606",null),v=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-1 p-1",staticStyle:{cursor:"pointer",border:"1px solid black","background-color":"#f0f0f0"},on:{click:function(t){return e.$emit("show")}}},[n("b-icon",{attrs:{icon:"eye-slash"}})],1)},b=[],y={name:"EntryCollapsedValue"},m=y,g=Object(p["a"])(m,h,b,!1,null,"0bb693ba",null),_=g.exports,w={name:"Entry",components:{EntryCollapsedValue:_,EntryHeader:v,TableArea:P},props:{rootStyle:{type:Object,required:!1},entryKey:{required:!0},value:{type:Object,required:!0}},data:function(){return{isCollapsed:!1}},beforeCreate:function(){this.$options.components.TableArea=n("171d").default}},x=w,j=Object(p["a"])(x,o,s,!1,null,"200b5e47",null),O=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.editable,expression:"!editable"}],on:{dblclick:function(t){e.editable=!0}}},[e._v(e._s(e.value))]),n("input",{directives:[{name:"show",rawName:"v-show",value:e.editable,expression:"editable"},{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text"},domProps:{value:e.value},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.update(t)},input:function(t){t.target.composing||(e.value=t.target.value)}}})])},k=[],E={name:"EntryValuePrimitive",props:{targetValue:{required:!0}},data:function(){return{value:this.targetValue,editable:!1}},methods:{update:function(){this.editable=!1,this.$emit("update",this.value)}}},S=E,T=Object(p["a"])(S,C,k,!1,null,"0db0b5ea",null),$=T.exports,V={name:"TableArea",components:{EntryPrimitiveValue:$,Entry:O},props:{targetObject:{}},data:function(){return{isHorizontal:!1,collapsed:!1}},computed:{isObject:function(){return!this.isArray&&"object"===Object(i["a"])(this.targetValue)&&null!==this.targetValue},isArray:function(){return Array.isArray(this.targetValue)},isCollection:function(){return this.isArray||this.isObject},isPrimitive:function(){return!this.isCollection},targetValue:{get:function(){return this.targetObject.data},set:function(e){this.targetObject.data=e}}},methods:{flip:function(){this.isHorizontal=!this.isHorizontal},dropEntryByKey:function(e){console.log("deleting "+e),this.isArray&&this.targetValue.splice(parseInt(e),1),this.isObject&&this.$delete(this.targetValue,e)}}},A=V,H=Object(p["a"])(A,r,a,!1,null,null,null),P=t["default"]=H.exports},"2ea8":function(e,t,n){"use strict";n("bbe8")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("div",{staticClass:"row header"},[n("OptionToggleButton",{attrs:{hint:"Format JSON",enabled:e.indent,"icon-name":"text-indent-left"},on:{click:function(t){e.indent=!e.indent}}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-4"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.objectText,expression:"objectText"}],domProps:{value:e.objectText},on:{input:function(t){t.target.composing||(e.objectText=t.target.value)}}}),e._v(" "),e._m(0),n("p",[e._v(" You can change values in table. All changes will be applied to this JSON. ")])]),n("div",{staticClass:"col-12 col-lg-8",attrs:{id:"table"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.objectText,expression:"objectText"}],staticClass:"d-flex"},[n("TableArea",{attrs:{"target-object":e.targetObject}})],1)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12",attrs:{id:"history"}},[n("History",{attrs:{value:e.objectText}})],1)]),e._m(1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Insert your JSON here (or use "),n("a",{attrs:{href:"/?randomJson=true"}},[e._v("random JSON")]),e._v("). ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row footer"},[n("div",{staticClass:"col-12"},[e._v(" Author: "),n("a",{attrs:{href:"https://github.com/vladimirshefer",target:"_blank"}},[e._v("Vladimir Shefer")]),e._v(". Source code on "),n("a",{attrs:{href:"https://github.com/vladimirshefer/json2table",target:"_blank"}},[e._v("GitHub")]),e._v(". ")])])}],o=(n("841c"),n("ac1f"),n("2b3d"),n("d3b7"),n("3ca3"),n("ddb0"),n("171d")),s=n("bc3a"),l=n.n(s),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.history.length?n("p",[e._v(" History is empty. Use Ctrl+S to save current state. ")]):e._e(),e.noChangesDetected?n("p",[e._v(" All changes are saved... ")]):e._e(),n("ul",e._l(e.history,(function(t){return n("li",{key:t.value},[n("span",[e._v(" "+e._s(t.date.getHours()+":"+t.date.getMinutes()+":"+t.date.getSeconds())+" ")]),n("input",{attrs:{type:"text",disabled:""},domProps:{value:t.value}})])})),0)])},u=[],d=(n("466d"),{name:"History",props:{value:{type:String}},data:function(){return{history:[]}},computed:{noChangesDetected:function(){var e=""==this.value,t=0!==this.history.length&&this.history[0].value===this.value;return e||t}},methods:{pushHistory:function(){this.noChangesDetected||this.history.unshift({date:new Date,value:this.value})}},mounted:function(){var e=this;window.addEventListener("keydown",(function(t){(window.navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&83===t.keyCode&&(t.preventDefault(),e.pushHistory())}))}}),p=d,f=n("2877"),v=Object(f["a"])(p,c,u,!1,null,"361b302e",null),h=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-button",{attrs:{title:e.hint,variant:e.enabled?"primary":"primary-outlined"},on:{click:function(t){return e.$emit("click")}}},[n("b-icon",{attrs:{icon:e.iconName}})],1)},y=[],m={name:"OptionToggleButton",props:{iconName:{type:String},hint:{type:String},enabled:{type:Boolean}}},g=m,_=Object(f["a"])(g,b,y,!1,null,"1b3edc16",null),w=_.exports,x={name:"App",components:{OptionToggleButton:w,History:h,TableArea:o["default"]},data:function(){return{targetObject:{data:null},indent:!1,history:[]}},computed:{objectText:{get:function(){return JSON.stringify(this.targetObject,(function(e,t){return t.data}),this.indent?2:null)},set:function(e){this.targetObject=JSON.parse(e,(function(e,t){return{data:t}}))}}},methods:{loadRandomJson:function(){var e=this;l.a.get("https://randomuser.me/api/",{transformResponse:function(e){return e}}).then((function(t){e.objectText=t.data}))}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);t.get("randomJson")&&this.loadRandomJson()}},j=x,O=(n("034f"),n("d945"),Object(f["a"])(j,a,i,!1,null,"04a19e4d",null)),C=O.exports,k=n("5f5b"),E=n("b1e0");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(k["a"]),r["default"].use(E["a"]),new r["default"]({render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,n){},bbe8:function(e,t,n){},d945:function(e,t,n){"use strict";n("e741")},e741:function(e,t,n){}});
//# sourceMappingURL=app.e915f464.js.map