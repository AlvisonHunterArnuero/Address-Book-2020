(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dafb96d0"],{"790a":function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"p-grid messages-demo"},[t("div",{staticClass:"p-col-12 p-lg-6"},[t("div",{staticClass:"card"},[t("h5",[s._v("Growl")]),t("Toast"),t("Button",{staticClass:"p-button-success p-mr-2",attrs:{label:"Success"},on:{click:function(e){return s.showSuccess()}}}),t("Button",{staticClass:"p-button-info p-mr-2",attrs:{label:"Info"},on:{click:function(e){return s.showInfo()}}}),t("Button",{staticClass:"p-button-warning p-mr-2",attrs:{label:"Warn"},on:{click:function(e){return s.showWarn()}}}),t("Button",{staticClass:"p-button-danger p-mr-2",attrs:{label:"Error"},on:{click:function(e){return s.showError()}}})],1)]),t("div",{staticClass:"p-col-12 p-lg-6"},[t("div",{staticClass:"card"},[t("h5",[s._v("Messages")]),t("Button",{staticClass:"p-button-success p-mr-2",attrs:{label:"Success"},on:{click:function(e){return s.addSuccessMessage()}}}),t("Button",{staticClass:"p-button-info p-mr-2",attrs:{label:"Info"},on:{click:function(e){return s.addInfoMessage()}}}),t("Button",{staticClass:"p-button-warning p-mr-2",attrs:{label:"Warn"},on:{click:function(e){return s.addWarnMessage()}}}),t("Button",{staticClass:"p-button-danger p-mr-2",attrs:{label:"Error"},on:{click:function(e){return s.addErrorMessage()}}}),t("transition-group",{attrs:{name:"p-messages",tag:"div"}},s._l(s.message,(function(e){return t("Message",{key:e.content,attrs:{severity:e.severity}},[s._v(s._s(e.content))])})),1)],1)]),t("div",{staticClass:"p-col-12 p-lg-8"},[t("div",{staticClass:"card"},[t("h5",[s._v("Inline")]),t("div",{staticClass:"p-field p-grid p-align-start"},[t("label",{staticClass:"p-col-fixed",attrs:{for:"username1"}},[s._v("Username")]),t("div",{staticClass:"p-col"},[t("InputText",{staticClass:"p-invalid",attrs:{id:"username1",required:!0},model:{value:s.username,callback:function(e){s.username=e},expression:"username"}}),t("InlineMessage",[s._v("Username is required")])],1)]),t("div",{staticClass:"p-field p-grid"},[t("label",{staticClass:"p-col-fixed",attrs:{for:"email"}},[s._v("Email")]),t("div",{staticClass:"p-col"},[t("InputText",{staticClass:"p-invalid",attrs:{id:"email",required:!0},model:{value:s.email,callback:function(e){s.email=e},expression:"email"}}),t("InlineMessage")],1)])])]),t("div",{staticClass:"p-col-12 p-lg-4"},[t("div",{staticClass:"card"},[t("h5",[s._v("Help Text")]),t("div",{staticClass:"p-field p-fluid"},[t("label",{attrs:{for:"username2"}},[s._v("Username")]),t("InputText",{staticClass:"p-error",attrs:{id:"username2",type:"username","aria-describedby":"username-help"}}),t("small",{staticClass:"p-error",attrs:{id:"username-help"}},[s._v("Enter your username to reset your password.")])],1)])])])},n=[],r={data:function(){return{message:[],username:null,email:null}},methods:{addSuccessMessage:function(){this.message=[{severity:"success",content:"Message Detail"}]},addInfoMessage:function(){this.message=[{severity:"info",content:"Message Detail"}]},addWarnMessage:function(){this.message=[{severity:"warn",content:"Message Detail"}]},addErrorMessage:function(){this.message=[{severity:"error",content:"Message Detail"}]},showSuccess:function(){this.$toast.add({severity:"success",summary:"Success Message",detail:"Message Detail",life:3e3})},showInfo:function(){this.$toast.add({severity:"info",summary:"Info Message",detail:"Message Detail",life:3e3})},showWarn:function(){this.$toast.add({severity:"warn",summary:"Warn Message",detail:"Message Detail",life:3e3})},showError:function(){this.$toast.add({severity:"error",summary:"Error Message",detail:"Message Detail",life:3e3})}}},i=r,l=(t("a7cd"),t("2877")),c=Object(l["a"])(i,a,n,!1,null,"65ad1c1e",null);e["default"]=c.exports},a7cd:function(s,e,t){"use strict";var a=t("ef91"),n=t.n(a);n.a},ef91:function(s,e,t){}}]);
//# sourceMappingURL=chunk-dafb96d0.1e20d793.js.map