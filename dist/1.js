webpackJsonp([1],{113:function(e,t,a){"use strict";function n(e){a(155)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(157),r=a.n(o),l=a(158),i=a(39),p=n,c=i(r.a,l.a,!1,p,"data-v-2901c84c",null);t.default=c.exports},155:function(e,t,a){var n=a(156);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(95)("3e8ee9e4",n,!0)},156:function(e,t,a){t=e.exports=a(94)(void 0),t.push([e.i,".top[data-v-2901c84c]{padding:10px;background:#1baeff;color:#fff;text-align:center;border-radius:2px}",""])},157:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"backTop",data:function(){return{columnProps:[{prop:"property",label:"属性",width:200},{prop:"explain",label:"说明"},{prop:"type",label:"类型",width:180},{prop:"default",label:"默认值",width:100}],sourceProps:[{property:"total",explain:"总页数",type:"Number",default:"必填"},{property:"isEllipsis",explain:"是否展示总页数",type:"Boolean",default:!0}],columnEvents:[{prop:"eventName",label:"事件名",width:200},{prop:"explain",label:"说明"},{prop:"back",label:"返回值",width:100}],sourceEvents:[{eventName:"currentChange",explain:"页数改变时触发",back:"当前页"}]}}}},158:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("h1",[e._v("Pagination 分页")]),e._v(" "),a("p",[e._v("当数据量较多时，使用分页可以快速进行数据切换。")]),e._v(" "),a("h2",{staticStyle:{"margin-top":"40px"}},[e._v("代码示例")]),e._v(" "),a("h3",[e._v("基础使用")]),e._v(" "),a("lan-row",[a("lan-pagination",{attrs:{total:16}})],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-pagination :total="16"></lan-pagination>\n    ')]),e._v("\n  ")]),e._v(" "),a("h2",[e._v("API")]),e._v(" "),a("h3",[e._v("lan-Pagination props")]),e._v(" "),a("lan-table",{attrs:{column:e.columnProps,tableSource:e.sourceProps,border:!0}}),e._v(" "),a("h3",[e._v("lan-Pagination event")]),e._v(" "),a("lan-table",{attrs:{column:e.columnEvents,tableSource:e.sourceEvents,border:!0}})],1)},o=[],r={render:n,staticRenderFns:o};t.a=r}});