webpackJsonp([12],{109:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(145),s=l.n(a),n=l(146),r=l(39),o=r(s.a,n.a,!1,null,null,null);t.default=o.exports},145:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"messageBox",data:function(){this.$createElement;return{visible:!1,columnProps:[{prop:"property",label:"属性",width:200},{prop:"explain",label:"说明",render:function(e,t){var l=t.tr;return"type"===l.property?e("span",null,["消息弹框类型 ",e("code",null,["warning"])," ",e("code",null,["error"])," ",e("code",null,["success"])]):e("span",null,[l.explain])}},{prop:"type",label:"类型",width:180},{prop:"default",label:"默认值",width:100}],sourceMessageBox:[{property:"title",explain:"消息弹框标题，可通过slot配置",type:"String | Number",default:"-"},{property:"message",explain:"消息弹框内容，可通过slot配置",type:"String | Number",default:"-"},{property:"type",type:"String",default:"-"},{property:"closeWindow",explain:"点击消息弹框区域之外是否关闭",type:"Boolean",default:"true"}],columnEvents:[{prop:"eventName",label:"事件名",width:200},{prop:"explain",label:"说明"},{prop:"back",label:"返回值",width:100}],sourceEvents:[{eventName:"confirm",explain:"点击确认按钮或点击消息弹框区域之外关闭时触发",back:"-"}]}}}},146:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("article",[l("h1",[e._v("MessageBox 消息弹框")]),e._v(" "),l("p",[e._v("类似于模态框的信息反馈组件，居中显示。有三种提示状态可选择。")]),e._v(" "),l("h2",{staticStyle:{"margin-top":"40px"}},[e._v("代码示例")]),e._v(" "),l("h3",[e._v("基础使用")]),e._v(" "),l("lan-button",{attrs:{classType:"primary"},on:{click:function(t){e.visible=!0}}},[e._v("点击打开messageBox")]),e._v(" "),e.visible?l("lan-message-box",{attrs:{type:"success"},on:{confirm:function(t){e.visible=!1}}},[l("template",{slot:"title"},[e._v("这是messageBox的标题")]),e._v(" "),l("span",[e._v("这是messageBox的内容")])],2):e._e(),e._v(" "),l("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),l("code",{staticClass:"html"},[e._v('\n      <lan-button classType="primary" @click="visible = true">点击打开messageBox</lan-button>\n      <lan-message-box v-if="visible" type="success" @confirm="visible = false">\n        <template slot="title">这是messageBox的标题</template>\n        <span>这是messageBox的内容</span>\n      </lan-message-box>\n    ')]),e._v("\n  ")]),e._v(" "),l("h2",[e._v("API")]),e._v(" "),l("h3",[e._v("lan-messageBox props")]),e._v(" "),l("lan-table",{attrs:{column:e.columnProps,tableSource:e.sourceMessageBox,border:!0}}),e._v(" "),l("h3",[e._v("lan-messageBox event")]),e._v(" "),l("lan-table",{attrs:{column:e.columnEvents,tableSource:e.sourceEvents,border:!0}})],1)},s=[],n={render:a,staticRenderFns:s};t.a=n}});