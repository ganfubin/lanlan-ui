webpackJsonp([4],{114:function(e,t,a){"use strict";function n(e){a(159)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(161),r=a.n(o),l=a(162),p=a(39),c=n,i=p(r.a,l.a,!1,c,"data-v-c084588e",null);t.default=i.exports},159:function(e,t,a){var n=a(160);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(95)("365fb97b",n,!0)},160:function(e,t,a){t=e.exports=a(94)(void 0),t.push([e.i,".top[data-v-c084588e]{padding:10px;background:#1baeff;color:#fff;text-align:center;border-radius:2px}",""])},161:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"backTop",data:function(){return{columnProps:[{prop:"property",label:"属性",width:200},{prop:"explain",label:"说明"},{prop:"type",label:"类型",width:180},{prop:"default",label:"默认值",width:100}],sourceProps:[{property:"height",explain:"页面滚动高度达到该值时显示",type:"Number",default:400},{property:"bottom",explain:"组件距离底部的距离",type:"Number",default:30},{property:"right",explain:"组件距离右部的距离",type:"Number",default:30},{property:"duration",explain:"滚动动画持续时间",type:"Number",default:1e3}],columnEvents:[{prop:"eventName",label:"事件名",width:200},{prop:"explain",label:"说明"},{prop:"back",label:"返回值",width:100}],sourceEvents:[{eventName:"click",explain:"点击时触发",back:"-"}]}}}},162:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("h1",[e._v("BackTop 返回顶部")]),e._v(" "),a("p",[e._v("当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。")]),e._v(" "),a("h2",{staticStyle:{"margin-top":"40px"}},[e._v("代码示例")]),e._v(" "),a("h3",[e._v("基础使用")]),e._v(" "),a("lan-row",[a("lan-back-top")],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v("\n      <lan-back-top></lan-back-top>\n    ")]),e._v("\n  ")]),e._v(" "),a("h3",[e._v("自定义样式")]),e._v(" "),a("lan-row",[a("lan-back-top",{attrs:{bottom:150}},[a("div",{staticClass:"top"},[e._v("返回顶端")])])],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-back-top :bottom="150">\n        <div class="top">返回顶端</div>\n      </lan-back-top>\n      <style scoped>\n        .top{\n          padding: 10px;\n          background: #1BAEFF;\n          color: #fff;\n          text-align: center;\n          border-radius: 2px;\n        }\n      </style>\n    ')]),e._v("\n  ")]),e._v(" "),a("h2",[e._v("API")]),e._v(" "),a("h3",[e._v("lan-backTop props")]),e._v(" "),a("lan-table",{attrs:{column:e.columnProps,tableSource:e.sourceProps,border:!0}}),e._v(" "),a("h3",[e._v("lan-backTop event")]),e._v(" "),a("lan-table",{attrs:{column:e.columnEvents,tableSource:e.sourceEvents,border:!0}})],1)},o=[],r={render:n,staticRenderFns:o};t.a=r}});