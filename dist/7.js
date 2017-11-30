webpackJsonp([7],{107:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(141),l=a.n(t),r=a(142),o=a(39),d=o(l.a,r.a,!1,null,null,null);n.default=d.exports},141:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"select",data:function(){this.$createElement;return{baseColumn:[{prop:"id",label:"序号",width:100,align:"center"},{prop:"date",label:"日期",width:100},{prop:"name",label:"姓名",width:120},{prop:"address",label:"地址",width:300}],baseSource:[{id:0,date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:1,date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:2,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:3,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{id:4,date:"2016-05-25",name:"王小虎",address:"上海市普陀区金沙江路 1520 弄"},{id:5,date:"2016-07-25",name:"王小二",address:"上海市普陀区金沙江路 1520 弄"}],sortColumn:[{prop:"id",label:"序号",width:100,align:"center",sortable:!0},{prop:"date",label:"日期",width:100},{prop:"name",label:"姓名",width:120},{prop:"address",label:"地址",width:300}],customColumn:[{prop:"id",label:"序号",width:150,align:"center",render:function(e,n){return e("lan-button",{attrs:{classType:"primary"}},[n.tr[n.td.prop]])}},{prop:"date",label:"日期",width:100},{prop:"name",label:"姓名",width:120},{prop:"address",label:"地址",width:300}],columnProps:[{prop:"property",label:"属性",width:200},{prop:"explain",label:"说明"},{prop:"type",label:"类型",width:180},{prop:"default",label:"默认值",width:100}],sourcetable:[{property:"column",explain:"表格列设置，详见后文",type:"Array",default:"-"},{property:"tableSource",explain:"表格数据源，与column.prop对应",type:"Array",default:"-"},{property:"border",explain:"表格是否带边框",type:"Boolean",default:"false"},{property:"stripe",explain:"表格是否带斑马纹",type:"Boolean",default:"false"},{property:"height",explain:"表格高度，超出显示滚动条",type:"Number",default:"-"}],sourceColumn:[{property:"prop",explain:"对应列内容的字段名",type:"String",default:"-"},{property:"label",explain:"对应列标题",type:"String",default:"-"},{property:"align",explain:"对应列的对齐方式",type:"String",default:"left"},{property:"width",explain:"对应列的宽度",type:"Number",default:"-"},{property:"sortable",explain:"对应列是否排序",type:"Boolean",default:"false"},{property:"render",explain:"自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 tr、td 和 index，分别指当前行数据，当前列数据，当前行索引",type:"Function",default:"-"}]}}}},142:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("article",[a("h1",[e._v("Table 表格")]),e._v(" "),a("p",[e._v("主要用于展示大量结构化数据")]),e._v(" "),a("p",[e._v("支持排序、自定义操作等复杂功能。")]),e._v(" "),a("h2",{staticStyle:{"margin-top":"40px"}},[e._v("代码示例")]),e._v(" "),a("h3",[e._v("基础使用")]),e._v(" "),a("lan-table",{attrs:{column:e.baseColumn,tableSource:e.baseSource}}),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v("\n      <lan-table :column=\"baseColumn\" :tableSource=\"baseSource\"></lan-table>\n      <script>\n        export default {\n          data() {\n            return {\n              baseColumn: [{\n                prop: \"id\",\n                label: \"序号\",\n                width: 100,\n                align: 'center'\n              }, {\n                prop: \"date\",\n                label: \"日期\",\n                width: 100\n              }, {\n                prop: \"name\",\n                label: \"姓名\",\n                width: 120\n              }, {\n                prop: \"address\",\n                label: \"地址\",\n                width: 300\n              }],\n              baseSource: [{\n                id: 0,\n                date: '2016-05-02',\n                name: '王小虎',\n                address: '上海市普陀区金沙江路 1518 弄',\n              }, {\n                id: 1,\n                date: '2016-05-04',\n                name: '王小虎',\n                address: '上海市普陀区金沙江路 1517 弄'\n              }, {\n                id: 2,\n                date: '2016-05-01',\n                name: '王小虎',\n                address: '上海市普陀区金沙江路 1519 弄'\n              }, {\n                id: 3,\n                date: '2016-05-03',\n                name: '王小虎',\n                address: '上海市普陀区金沙江路 1516 弄'\n              }, {\n                id: 4,\n                date: '2016-05-25',\n                name: '王小虎',\n                address: '上海市普陀区金沙江路 1520 弄'\n              }, {\n                id: 5,\n                date: '2016-07-25',\n                name: '王小二',\n                address: '上海市普陀区金沙江路 1520 弄'\n              }],\n            }\n          }\n        }\n      <\/script>\n    ")]),e._v("\n  ")]),e._v(" "),a("h3",[e._v("带边框的Table")]),e._v(" "),a("lan-table",{attrs:{column:e.baseColumn,tableSource:e.baseSource,border:!0}}),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-table :column="baseColumn" :tableSource="baseSource" :border="true"></lan-table>\n    ')]),e._v("\n  ")]),e._v(" "),a("h3",[e._v("带斑马纹的Table")]),e._v(" "),a("lan-table",{attrs:{column:e.baseColumn,tableSource:e.baseSource,stripe:!0}}),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-table :column="baseColumn" :tableSource="baseSource" :stripe="true"></lan-table>\n    ')]),e._v("\n  ")]),e._v(" "),a("h3",[e._v("高度固定的Table")]),e._v(" "),a("lan-table",{attrs:{column:e.baseColumn,tableSource:e.baseSource,height:200}}),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-table :column="baseColumn" :tableSource="baseSource" :height="200"></lan-table>\n    ')]),e._v("\n  ")]),e._v(" "),a("h3",[e._v("带排序的Table")]),e._v(" "),a("lan-table",{attrs:{column:e.sortColumn,tableSource:e.baseSource}}),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-table :column="sortColumn" :tableSource="baseSource"></lan-table>\n      <script>\n        export default {\n          data() {\n            return {\n              sortColumn: [{\n                prop: "id",\n                label: "序号",\n                width: 100,\n                align: \'center\',\n                sortable: true\n              }, {\n                prop: "date",\n                label: "日期",\n                width: 100\n              }, {\n                prop: "name",\n                label: "姓名",\n                width: 120\n              }, {\n                prop: "address",\n                label: "地址",\n                width: 300\n              }]\n            }\n          }\n        }\n      <\/script>\n    ')]),e._v("\n  ")]),e._v(" "),a("h3",[e._v("自定义Table")]),e._v(" "),a("lan-table",{attrs:{column:e.customColumn,tableSource:e.baseSource}}),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v('\n      <lan-table :column="sortColumn" :tableSource="baseSource"></lan-table>\n      <script>\n        export default {\n          data() {\n            return {\n              customColumn: [{\n                prop: "id",\n                label: "序号",\n                width: 150,\n                align: \'center\',\n                render: (h, params) => {\n                  const tr = params.tr;\n                  const td = params.td;\n                  return (\n                    <lan-button classType="primary">\n                      {tr[td.prop]}\n                    </lan-button>\n                  )\n                }\n              }, {\n                prop: "date",\n                label: "日期",\n                width: 100\n              }, {\n                prop: "name",\n                label: "姓名",\n                width: 120\n              }, {\n                prop: "address",\n                label: "地址",\n                width: 300\n              }]\n            }\n          }\n        }\n      <\/script>\n    ')]),e._v("\n  ")]),e._v(" "),a("h2",[e._v("API")]),e._v(" "),a("h3",[e._v("lan-table props")]),e._v(" "),a("lan-table",{attrs:{column:e.columnProps,tableSource:e.sourcetable,border:!0}}),e._v(" "),a("h3",[e._v("lan-table column")]),e._v(" "),a("p",[e._v("列描述数据对象，是 columns 中的一项")]),e._v(" "),a("lan-table",{attrs:{column:e.columnProps,tableSource:e.sourceColumn,border:!0}})],1)},l=[],r={render:t,staticRenderFns:l};n.a=r}});