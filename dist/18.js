webpackJsonp([18],{115:function(n,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"affix"}},116:function(n,a,e){"use strict";var t=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("article",[e("h1",[n._v("NPM安装")]),n._v(" "),e("h2",{staticStyle:{"margin-top":"40px"}},[n._v("全局引入")]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n._v("    "),e("code",{staticClass:"javascript"},[n._v("\n      $ npm install lanlan-ui --save\n\n      import 'lanlan-ui/dist/lanlanui.css'\n\n      import lanlanui from 'lanlan-ui'\n\n      import Vue from 'vue'\n\n      Vue.use(lanlanui);\n    ")]),n._v("\n  ")]),n._v(" "),e("h2",[n._v("按需引入")]),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n._v("    "),e("code",{staticClass:"javascript"},[n._v("\n      $ npm install lanlan-ui --save\n\n      import 'lanlan-ui/dist/lanlanui.css'\n\n      import { lanButton } from 'lanlan-ui'\n\n      import Vue from 'vue'\n\n      new Vue({\n        el: '#app',\n        components: {\n          lanButton\n        }\n      })\n    ")]),n._v("\n  ")])])},i=[],l={render:t,staticRenderFns:i};a.a=l},96:function(n,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e(115),i=e.n(t),l=e(116),r=e(39),s=r(i.a,l.a,!1,null,null,null);a.default=s.exports}});