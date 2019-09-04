(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{330:function(t,_,v){"use strict";v.r(_);var a=v(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"协议升级模块设计文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协议升级模块设计文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 协议升级模块设计文档")]),t._v(" "),v("h2",{attrs:{id:"一、总体描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、总体描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、总体描述")]),t._v(" "),v("h3",{attrs:{id:"_1-1-模块概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-模块概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 模块概述")]),t._v(" "),v("h4",{attrs:{id:"_1-1-1-为什么要有《协议升级》模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-为什么要有《协议升级》模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1.1 为什么要有《协议升级》模块")]),t._v(" "),v("p",[t._v("​\t不同的协议版本支持的交易类型、消息类型不同，为了管理区块链网络的版本，需要提供完善的版本管理功能。")]),t._v(" "),v("h4",{attrs:{id:"_1-1-2-《协议升级》要做什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-《协议升级》要做什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1.2 《协议升级》要做什么")]),t._v(" "),v("ul",[v("li",[t._v("解析区块头中的版本信息，进行动态统计、升级、回退")]),t._v(" "),v("li",[t._v("为其他模块提供版本支持的交易类型、消息类型、版本信息查询服务")])]),t._v(" "),v("h4",{attrs:{id:"_1-1-3-《协议升级》在系统中的定位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-《协议升级》在系统中的定位","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1.3 《协议升级》在系统中的定位")]),t._v(" "),v("p",[t._v("协议升级是底层模块之一，以下分功能讨论模块依赖情况")]),t._v(" "),v("p",[t._v("依赖")]),t._v(" "),v("ul",[v("li",[t._v("区块管理模块-初始化本地协议版本信息")])]),t._v(" "),v("p",[t._v("被依赖")]),t._v(" "),v("ul",[v("li",[t._v("所有关心消息处理、交易处理的模块")])]),t._v(" "),v("h3",{attrs:{id:"_1-2-架构图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-架构图","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 架构图")]),t._v(" "),v("p",[t._v("​\t补充图片")]),t._v(" "),v("h2",{attrs:{id:"二、功能设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、功能设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、功能设计")]),t._v(" "),v("h3",{attrs:{id:"_2-1-功能架构图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-功能架构图","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 功能架构图")]),t._v(" "),v("p",[t._v("​\t补充图片")]),t._v(" "),v("h3",{attrs:{id:"_2-2-模块服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-模块服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 模块服务")]),t._v(" "),v("h4",{attrs:{id:"_2-2-1-获取当前主网版本信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-获取当前主网版本信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.1 获取当前主网版本信息")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("接口说明")]),t._v(" "),v("p",[t._v("根据链ID查询DB得到主网版本信息")])]),t._v(" "),v("li",[v("p",[t._v("请求示例")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n  "cmd": "currentMainnetVersion",\n  "minVersion":"1.1",\n  "params": ["888"]\n}\n')])])])]),t._v(" "),v("li",[v("p",[t._v("请求参数说明")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("index")]),t._v(" "),v("th",[t._v("parameter")]),t._v(" "),v("th",[t._v("required")]),t._v(" "),v("th",[t._v("type")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("chainId")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("Long")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("链ID")])])])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("返回示例")]),t._v(" "),v("p",[t._v("Failed")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "version": 1.2,\n    "code": 1,\n    "msg": "error message",\n    "result": {}\n}\n')])])]),v("p",[t._v("Success")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "version": 1.2,\n    "code": 0,\n    "result": {\n        "chainId": "888",\n        "versionInfo": {\n            "major": "1",\n            "minor": "1",\n            "percent": "80",//固定值\n            "slice": "100",//固定值\n            "waitCount": "240"//固定值\n        }\n    }\n}\n')])])])]),t._v(" "),v("li",[v("p",[t._v("返回字段说明")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("parameter")]),t._v(" "),v("th",[t._v("type")]),t._v(" "),v("th",[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("chainId")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("链ID")])]),t._v(" "),v("tr",[v("td",[t._v("major")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("主版本号")])]),t._v(" "),v("tr",[v("td",[t._v("minor")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("次版本号")])]),t._v(" "),v("tr",[v("td",[t._v("percent")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("有效比例")])]),t._v(" "),v("tr",[v("td",[t._v("slice")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("最小统计片断长度")])]),t._v(" "),v("tr",[v("td",[t._v("waitCount")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("连续确认次数")])])])]),t._v(" "),v("h4",{attrs:{id:"_2-2-2-获取当前本地版本信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-获取当前本地版本信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.2 获取当前本地版本信息")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("接口说明")]),t._v(" "),v("p",[t._v("根据链ID查询DB得到本地版本信息")])]),t._v(" "),v("li",[v("p",[t._v("请求示例")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n  "cmd": "currentLocalVersion",\n  "minVersion":"1.1",\n  "params": ["888"]\n}\n')])])])]),t._v(" "),v("li",[v("p",[t._v("请求参数说明")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("index")]),t._v(" "),v("th",[t._v("parameter")]),t._v(" "),v("th",[t._v("required")]),t._v(" "),v("th",[t._v("type")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("chainId")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("Long")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("链ID")])])])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("返回示例")]),t._v(" "),v("p",[t._v("Failed")]),t._v(" "),v("pre",[v("code",[t._v('```\n{\n    "version": 1.2,\n    "code":1,\n    "msg" :"xxxxxxxxxxxxxxxxxx",\n    "result":{}\n}\n```\n')])]),t._v(" "),v("p",[t._v("Success")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "version": 1.2,\n    "code": 0,\n    "result": {\n        "chainId": "888",\n        "versionInfo": {\n            "major": "1",\n            "minor": "1",\n            "percent": "80",\n            "slice": "100",\n            "waitCount": "240"\n        }\n    }\n}\n')])])])]),t._v(" "),v("li",[v("p",[t._v("返回字段说明")]),t._v(" "),v("p",[t._v("参考2.2.1")]),t._v(" "),v("h4",{attrs:{id:"_2-2-3-根据区块高度获取版本统计信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-根据区块高度获取版本统计信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2.3 根据区块高度获取版本统计信息")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("接口说明")]),t._v(" "),v("p",[t._v("根据链ID查询DB得到本地版本信息")])]),t._v(" "),v("li",[v("p",[t._v("请求示例")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n  "cmd": "statisticsInfo",\n  "minVersion":"1.1",\n  "params": ["888", "888"]\n}\n')])])])]),t._v(" "),v("li",[v("p",[t._v("请求参数说明")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("index")]),t._v(" "),v("th",[t._v("parameter")]),t._v(" "),v("th",[t._v("required")]),t._v(" "),v("th",[t._v("type")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("chainId")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("Long")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("链ID")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("height")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("Long")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("区块高度")])])])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("返回示例")]),t._v(" "),v("p",[t._v("Failed")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('  {\n      "version": 1.2,\n      "code":1,\n      "msg" :"xxxxxxxxxxxxxxxxxx",\n      "result":{}\n  }\n')])])]),v("p",[t._v("Success")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n    "version": 1.2,\n    "code": 0,\n    "result": {\n        "chainId": "888",\n        "statisticsInfo": {\n            "major": "1",\n            "minor": "1",\n            "percent": "80",\n            "slice": "100",\n            "count": "240"\n        }\n    }\n}\n')])])])]),t._v(" "),v("li",[v("p",[t._v("返回字段说明")]),t._v(" "),v("p",[t._v("参考2.2.1")])])])])]),t._v(" "),v("h3",{attrs:{id:"_2-3-模块内部功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-模块内部功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 模块内部功能")]),t._v(" "),v("h4",{attrs:{id:"_2-3-1-模块启动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-模块启动","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.1 模块启动")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("功能说明:")]),t._v(" "),v("p",[t._v("启动协议升级模块")])]),t._v(" "),v("li",[v("p",[t._v("流程描述")]),t._v(" "),v("p",[t._v("补充图片")]),t._v(" "),v("p",[t._v("1.RPC服务初始化")]),t._v(" "),v("p",[t._v("2.初始化通用数据库")]),t._v(" "),v("p",[t._v("3.加载配置信息")]),t._v(" "),v("p",[t._v("4.初始化各链数据库")]),t._v(" "),v("p",[t._v("5.等待依赖模块就绪")])]),t._v(" "),v("li",[v("p",[t._v("依赖服务")]),t._v(" "),v("p",[t._v("工具模块、内核模块")])])]),t._v(" "),v("h4",{attrs:{id:"_2-3-2-版本升级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-版本升级","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.2 版本升级")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("功能说明:")]),t._v(" "),v("p",[t._v("每保存一个区块或者回滚一个区块时，都会读取区块头中的版本号，动态统计版本比例信息，决定是否进行协议升级。主版本号不允许跨版本升级，次版本号允许跨版本升级")])]),t._v(" "),v("li",[v("p",[t._v("流程描述")]),t._v(" "),v("p",[t._v("每100个区块为一个统计区间，统计区块头中版本号的分布比例，并且保存到数据库(key=height, value=版本信息，连续确认次数等等)")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("版本占比大于某个阈值(必须大于50%)时，就能确定该统计区间内的版本号，当连续260个统计区间内的占比最大版本号保持连续时，主网执行协议升级。")])]),t._v(" "),v("li",[v("p",[t._v("如果没有版本号占比大于阈值，沿用当前生效版本号作为当前区间的版本号")])]),t._v(" "),v("li",[v("p",[t._v("如果中途有统计区间版本号波动，则重新开始统计")])])]),t._v(" "),v("p",[t._v("模拟几种场景：")]),t._v(" "),v("p",[t._v("waitCount(连续确认次数)")]),t._v(" "),v("ol",[v("li",[v("h5",{attrs:{id:"正常升级-中途统计没有波动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正常升级-中途统计没有波动","aria-hidden":"true"}},[t._v("#")]),t._v(" 正常升级(中途统计没有波动)")]),t._v(" "),v("p",[t._v("起始区块高度1000，协议版本号=1.0")]),t._v(" "),v("p",[t._v("1001-1100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=1")]),t._v(" "),v("p",[t._v("1101-1200高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=2")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("27001-27100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=260")]),t._v(" "),v("p",[t._v("从27101区块开始新协议生效")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"正常升级-中途统计有波动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正常升级-中途统计有波动","aria-hidden":"true"}},[t._v("#")]),t._v(" 正常升级(中途统计有波动)")]),t._v(" "),v("p",[t._v("起始区块高度1000，协议版本号=1.0")]),t._v(" "),v("p",[t._v("1001-1100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=1")]),t._v(" "),v("p",[t._v("1101-1200高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=2")]),t._v(" "),v("p",[t._v("1201-1300高度区间内的区块统计，占比80%的区块协议版本号=1.0，waitCount=0")]),t._v(" "),v("p",[t._v("1301-1400高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=1")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("27301-27400高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=260")]),t._v(" "),v("p",[t._v("从27401区块开始新协议生效")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"异常升级-先回滚，中途统计没有波动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异常升级-先回滚，中途统计没有波动","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常升级(先回滚，中途统计没有波动)")]),t._v(" "),v("p",[t._v("主链")]),t._v(" "),v("p",[t._v("起始区块高度1000，协议版本号=1.0")]),t._v(" "),v("p",[t._v("1001-1100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=1")]),t._v(" "),v("p",[t._v("1101-1200高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=2")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("。")]),t._v(" "),v("p",[t._v("27001-27100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=260")]),t._v(" "),v("p",[t._v("从27101区块开始新协议生效")]),t._v(" "),v("p",[t._v("分叉链")]),t._v(" "),v("p",[t._v("起始区块高度1000，协议版本号=1.0，分叉高度1211")]),t._v(" "),v("p",[t._v("1001-1100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=1")]),t._v(" "),v("p",[t._v("1101-1200高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=2")]),t._v(" "),v("p",[t._v("1201-1300高度区间内的区块统计，占比80%的区块协议版本号=1.0，waitCount=0")]),t._v(" "),v("p",[t._v("1301-1400高度区间内的区块统计，占比80%的区块协议版本号=1.0，waitCount=0")]),t._v(" "),v("p",[t._v("分叉链切换第一步")]),t._v(" "),v("p",[t._v("​\t回滚到分叉点")]),t._v(" "),v("p",[t._v("​\t1001-1100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=1")]),t._v(" "),v("p",[t._v("​\t1101-1200高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=2")]),t._v(" "),v("p",[t._v("​\t1201-1211高度区间内的区块统计，区块数量不足100，不统计")]),t._v(" "),v("p",[t._v("​\t添加新的区块")]),t._v(" "),v("p",[t._v("​\t1001-1100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=1")]),t._v(" "),v("p",[t._v("​\t1101-1200高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=2")]),t._v(" "),v("p",[t._v("​\t1201-1300高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=3")]),t._v(" "),v("p",[t._v("​\t。")]),t._v(" "),v("p",[t._v("​\t。")]),t._v(" "),v("p",[t._v("​\t。")]),t._v(" "),v("p",[t._v("​\t27001-27100高度区间内的区块统计，占比80%的区块协议版本号=1.1，waitCount=260")]),t._v(" "),v("p",[t._v("​\t从27101区块开始新协议生效")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"异常升级-先回滚，中途统计有波动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异常升级-先回滚，中途统计有波动","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常升级(先回滚，中途统计有波动)")]),t._v(" "),v("p",[t._v("与第三种情况类似")])])])]),t._v(" "),v("li",[v("p",[t._v("依赖服务")]),t._v(" "),v("p",[t._v("工具模块的数据库工具")])])]),t._v(" "),v("h4",{attrs:{id:"_2-3-3-延迟升级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-延迟升级","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.3 延迟升级")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("功能说明:")]),t._v(" "),v("p",[t._v("为了处理升级过程中发现新协议有BUG的情况")])]),t._v(" "),v("li",[v("p",[t._v("流程描述")]),t._v(" "),v("p",[t._v("​\t假定当前版本号为1.0，待升级版本号1.1，但是1.1版本升级过程中发现了BUG")]),t._v(" "),v("p",[t._v("​\t通过降低新协议1.1比例来重置协议升级过程，使得主网版本持续定留在旧版本1.0，修复新协议1.1BUG后，再重启升级过程。")])]),t._v(" "),v("li",[v("p",[t._v("依赖服务")]),t._v(" "),v("p",[t._v("工具模块的数据库工具")])])]),t._v(" "),v("h4",{attrs:{id:"_2-3-4-版本信息推送"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-版本信息推送","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3.4 版本信息推送")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("功能说明:")]),t._v(" "),v("p",[t._v("每个统计区间的最后一个区块接收完毕时，主动通知各模块当前生效的协议版本信息，主要是通知交易管理模块有效的交易类型及有效的交易验证器，通知网络模块有效的消息类型及消息处理器。")])]),t._v(" "),v("li",[v("p",[t._v("流程描述")])]),t._v(" "),v("li",[v("p",[t._v("依赖服务")]),t._v(" "),v("p",[t._v("工具模块的数据库工具")])])]),t._v(" "),v("h2",{attrs:{id:"三、事件说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、事件说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、事件说明")]),t._v(" "),v("h3",{attrs:{id:"_3-1-发布的事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-发布的事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 发布的事件")]),t._v(" "),v("h4",{attrs:{id:"_3-1-1-协议升级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-协议升级","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1.1 协议升级")]),t._v(" "),v("p",[t._v("说明:协议版本升级，发布该事件")]),t._v(" "),v("p",[t._v('event_topic : "versionUpadte",')]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("data:{\n    chainId\n    major\n    minor\n    height\n}\n")])])]),v("h3",{attrs:{id:"_3-2-订阅的事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-订阅的事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 订阅的事件")]),t._v(" "),v("p",[t._v("​\t略")]),t._v(" "),v("h2",{attrs:{id:"四、协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、协议")]),t._v(" "),v("h3",{attrs:{id:"_4-1-网络通讯协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-网络通讯协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.1 网络通讯协议")]),t._v(" "),v("p",[t._v("​\t略")]),t._v(" "),v("h3",{attrs:{id:"_4-2-消息协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-消息协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.2 消息协议")]),t._v(" "),v("p",[t._v("​\t略")]),t._v(" "),v("h2",{attrs:{id:"五、模块配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、模块配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、模块配置")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('[\n  {\n    "name": "supportTxTypes",\n    "remark": "支持的交易类型",\n    "readOnly": "true",\n    "value": "1,2,3,4,5"\n  },\n  {\n    "name": "supportMessageTypes",\n    "remark": "支持的消息类型",\n    "readOnly": "true",\n    "value": "1,2,3,4,5"\n  }\n]\n')])])]),v("h2",{attrs:{id:"六、java特有的设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、java特有的设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 六、Java特有的设计")]),t._v(" "),v("ul",[v("li",[t._v("BlockHeader对象新增字段")])]),t._v(" "),v("blockquote",[v("table",[v("thead",[v("tr",[v("th",[v("code",[t._v("字段名称")])]),t._v(" "),v("th",[v("code",[t._v("字段类型")])]),t._v(" "),v("th",[v("code",[t._v("说明")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("blockMajor")]),t._v(" "),v("td",[t._v("byte")]),t._v(" "),v("td",[t._v("区块主版本号")])]),t._v(" "),v("tr",[v("td",[t._v("blockMinor")]),t._v(" "),v("td",[t._v("byte")]),t._v(" "),v("td",[t._v("区块次版本号")])]),t._v(" "),v("tr",[v("td",[t._v("mainnetMajor")]),t._v(" "),v("td",[t._v("byte")]),t._v(" "),v("td",[t._v("主网主版本号")])]),t._v(" "),v("tr",[v("td",[t._v("mainnetMinor")]),t._v(" "),v("td",[t._v("byte")]),t._v(" "),v("td",[t._v("主网次版本号")])])])])]),t._v(" "),v("ul",[v("li",[t._v("BlockChainVersion对象设计")])]),t._v(" "),v("blockquote",[v("table",[v("thead",[v("tr",[v("th",[v("code",[t._v("字段名称")])]),t._v(" "),v("th",[v("code",[t._v("字段类型")])]),t._v(" "),v("th",[v("code",[t._v("说明")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("major")]),t._v(" "),v("td",[t._v("byte")]),t._v(" "),v("td",[t._v("主版本号")])]),t._v(" "),v("tr",[v("td",[t._v("minor")]),t._v(" "),v("td",[t._v("byte")]),t._v(" "),v("td",[t._v("次版本号")])])])])]),t._v(" "),v("h2",{attrs:{id:"七、补充内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#七、补充内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 七、补充内容")]),t._v(" "),v("ol",[v("li",[t._v("不同协议版本的消息是否处理由网络模块判断？还是由各个消息的注册模块判断")]),t._v(" "),v("li",[t._v("不同协议版本的交易是否处理由交易模块判断？还是由各个交易的注册模块判断")]),t._v(" "),v("li",[t._v("协议支持的消息类型、交易类型、交易处理器由配置文件初始化？还是由各模块来注册？")]),t._v(" "),v("li",[t._v("是否允许版本回退？由1.1版本回退到1.0-------------------不予许")]),t._v(" "),v("li",[t._v("不支持POW")])])])}],!1,null,null,null);e.options.__file="d_protocol_update.md";_.default=e.exports}}]);