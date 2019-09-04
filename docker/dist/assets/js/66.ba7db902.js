(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{358:function(t,e,_){"use strict";_.r(e);var v=_(0),a=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"多重签名账户"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多重签名账户","aria-hidden":"true"}},[t._v("#")]),t._v(" 多重签名账户")]),t._v(" "),_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),_("p",[t._v("多重签名账户，是相对于单签名账户来讲的，我们日常使用的普通账户地址就是单签名账户在创建交易时需要用我们账户私钥签名，来保证我们的交易是安全的不被串改的。多重签名账户地址是有由多个普通账户的公钥，经过一定的计算生成的。在创建交易时，需要由创建这个多签账户的多个公钥所对应的私钥来签名，才能保证多签账户交易的安全。")]),t._v(" "),_("p",[t._v("在生成多签账户时是由N个普通地址的公钥，来生成一个需要M个签名才能创建合法交易的多签账户，N≥M。因此这个账户一般是需要多个人来签名，并且达到最小签名数(M)才能动用账户的token。")]),t._v(" "),_("h2",{attrs:{id:"功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),_("p",[t._v("在NULS2.0中多重签名账户可以做一些与普通账户相同的操作：")]),t._v(" "),_("ul",[_("li",[t._v("创建多签转账交易，包含多资产转账")]),t._v(" "),_("li",[t._v("为多签账户设置别名")]),t._v(" "),_("li",[t._v("创建共识节点")]),t._v(" "),_("li",[t._v("参与共识")])]),t._v(" "),_("h2",{attrs:{id:"使用方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),_("p",[t._v("我们会介绍多重签名账户各个功能的使用方式，可能会遇到的问题，以及开发者们在组装多签交易时需要注意的问题。开发者在阅读本文之前可能需要用户对NULS2.0普通交易有一定的了解。本文包含部分接口说明，更完整的说明请参考模块说明文档。")]),t._v(" "),_("p",[_("strong",[t._v("生成多重签名账户")])]),t._v(" "),_("p",[t._v("多重签名账户是由多个普通地址生成的，目的是为了满足让多人控制一个账户的资产交易的功能场景。因此在创建多签账户时，既不会生成公钥也不会生成私钥，而是生成的多签账户信息包含产生这个账户时所有参与人的公钥、最小签名数，多签账户地址等信息。"),_("br"),t._v("\n值得注意的是参与人公钥列表是一个具有兼容性的字符串列表参数，该列表里面可以传入参与创建的普通账户公钥的字符串或者账户地址的字符串，且可以混合传入，例如有A、B、C三个普通账户，需要创建多重签名账户，那么公钥列表可以如下:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("pubKeys = [A账户的公钥，B账户的地址，C账户的公钥]\n")])])]),_("p",[t._v("注意")]),t._v(" "),_("ul",[_("li",[t._v("如果要传入账户地址，那么需要该地址账户存在于调用接口的节点中，传公钥字符串没有此限制。")]),t._v(" "),_("li",[t._v("pubKeys公钥列表中各个公钥的传入顺序，不会对最终生成的账户产生影响。")]),t._v(" "),_("li",[t._v("公钥字符串可以调用账户模块的接口"),_("code",[t._v("ac_getPubKey")]),t._v("得到。")])]),t._v(" "),_("p",[_("strong",[t._v("创建多签转账交易")])]),t._v(" "),_("p",[t._v("在NULS2.0中多重签名地址转账交易，与普通地址转账交易的协议是一致的，具有相同的交易类型（type值）。但是多签转账交易仍然具有特殊性，组装和验证交易的规则与普通交易有一定的区别，需要注意的有：")]),t._v(" "),_("ul",[_("li",[t._v("交易from中不能混合多个不同的地址，多签转账交易如果组装了多个from，那么所有from中的地址都只能是同一个多签地址，from中的资产可以是不同的，交易to中没有该限制。")]),t._v(" "),_("li",[t._v("组装新交易的时候可以签名也可以不签名。")]),t._v(" "),_("li",[t._v("签名后达到最小签名数则自动发送广播交易。")]),t._v(" "),_("li",[t._v("无需对已达最小签名数的交易继续签名，那只会增大交易数据，不会为交易验证以及安全性带来更多的便利。")])]),t._v(" "),_("p",[_("strong",[t._v("签名")])]),t._v(" "),_("p",[t._v("多签交易组装完成后，一般还需要将交易数据交给各个多签账户控制者单独为交易进行签名，以致满足多签账户最小签名数，最终得到完整合法的交易数据。NULS2.0的多签交易签名接口，每次执行完签名后会自动验证交易是否达到最小签名数，来决定是否发送并广播交易，无需用户自己单独广播交易。")]),t._v(" "),_("ul",[_("li",[t._v("多人签名时，下一个签名者只需要得到返回值中的tx的值即可。")])]),t._v(" "),_("p",[_("strong",[t._v("设置别名")]),t._v("、"),_("strong",[t._v("创建节点")]),t._v("、"),_("strong",[t._v("委托")]),t._v("、"),_("strong",[t._v("退出委托")]),t._v("、"),_("strong",[t._v("停止节点")]),t._v("的交易与普通账户的交易基本一致，只是签名方式不同而已。")]),t._v(" "),_("h2",{attrs:{id:"接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),_("h3",{attrs:{id:"ac-createmultisignaccount"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ac-createmultisignaccount","aria-hidden":"true"}},[t._v("#")]),t._v(" ac_createMultiSignAccount")]),t._v(" "),_("p",[t._v("创建多签账户/create a multi sign account")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("是否非空")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("链id")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("pubKeys")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("list<string>")]),t._v(" "),_("td",[t._v("公钥集合(任意普通地址的公钥或存在于当前节点中的普通账户地址)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("minSigns")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("最小签名数")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])]),t._v(" "),_("p",[t._v("返回值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("address")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("多签账户地址")])])])]),t._v(" "),_("h3",{attrs:{id:"ac-createmultisigntransfer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ac-createmultisigntransfer","aria-hidden":"true"}},[t._v("#")]),t._v(" ac_createMultiSignTransfer")]),t._v(" "),_("p",[t._v("创建多签地址转账交易/create multi sign transfer")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("是否非空")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("链id")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("inputs")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("list")]),t._v(" "),_("td",[t._v("交易支付方数据")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        address")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        assetsChainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),_("td",[t._v("资产的链ID")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        assetsId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),_("td",[t._v("资产ID")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        amount")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("biginteger")]),t._v(" "),_("td",[t._v("数量")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("outputs")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("list")]),t._v(" "),_("td",[t._v("交易接受方数据")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        address")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        assetsChainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),_("td",[t._v("资产的链ID")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        assetsId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),_("td",[t._v("资产ID")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        amount")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("biginteger")]),t._v(" "),_("td",[t._v("数量")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("        lockTime")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("long")]),t._v(" "),_("td",[t._v("解锁时间, -1为一直锁定, 0为不锁定(默认)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("remark")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易备注")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("signAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("第一个签名账户地址(不填则只创建交易不签名)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("signPassword")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("第一个签名账户密码(不填则只创建交易不签名)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),_("p",[t._v("返回值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tx")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("完整交易序列化字符串,如果交易没达到最小签名数可继续签名")])]),t._v(" "),_("tr",[_("td",[t._v("txHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易hash")])]),t._v(" "),_("tr",[_("td",[t._v("completed")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),_("td",[t._v("true:交易已完成(已广播),false:交易没完成,没有达到最小签名数")])])])]),t._v(" "),_("h3",{attrs:{id:"ac-signmultisigntransaction"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ac-signmultisigntransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" ac_signMultiSignTransaction")]),t._v(" "),_("p",[t._v("多签交易签名/sign MultiSign Transaction")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("是否非空")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("链id")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("tx")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易数据字符串")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("signAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("signPassword")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户密码")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])]),t._v(" "),_("p",[t._v("返回值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tx")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("完整交易序列化字符串,如果交易没达到最小签名数可继续签名")])]),t._v(" "),_("tr",[_("td",[t._v("txHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易hash")])]),t._v(" "),_("tr",[_("td",[t._v("completed")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),_("td",[t._v("true:交易已完成(已广播),false:交易没完成,没有达到最小签名数")])])])]),t._v(" "),_("h3",{attrs:{id:"ac-setmultisignalias"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ac-setmultisignalias","aria-hidden":"true"}},[t._v("#")]),t._v(" ac_setMultiSignAlias")]),t._v(" "),_("p",[t._v("设置别名/set the alias of multi sign account")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("是否非空")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("链id")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("address")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("多签账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("alias")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("别名")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("signAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("第一个签名账户地址(不填则只创建交易不签名)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("signPassword")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("第一个签名账户密码(不填则只创建交易不签名)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),_("p",[t._v("返回值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tx")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("完整交易序列化字符串,如果交易没达到最小签名数可继续签名")])]),t._v(" "),_("tr",[_("td",[t._v("txHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易hash")])]),t._v(" "),_("tr",[_("td",[t._v("completed")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),_("td",[t._v("true:交易已完成(已广播),false:交易没完成,没有达到最小签名数")])])])]),t._v(" "),_("h3",{attrs:{id:"cs-createmultiagent"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cs-createmultiagent","aria-hidden":"true"}},[t._v("#")]),t._v(" cs_createMultiAgent")]),t._v(" "),_("p",[t._v("多签账户创建节点/Multi-Sign Account create agent transaction")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("是否非空")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("链id")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("agentAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("节点地址(多签地址)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("packingAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("节点出块地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("rewardAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("奖励地址,默认节点地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("commissionRate")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("佣金比例")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("deposit")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("抵押金额")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("password")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户密码")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("signAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])]),t._v(" "),_("p",[t._v("返回值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tx")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("完整交易序列化字符串,如果交易没达到最小签名数可继续签名")])]),t._v(" "),_("tr",[_("td",[t._v("txHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易hash")])]),t._v(" "),_("tr",[_("td",[t._v("completed")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),_("td",[t._v("true:交易已完成(已广播),false:交易没完成,没有达到最小签名数")])])])]),t._v(" "),_("h3",{attrs:{id:"cs-multideposit"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cs-multideposit","aria-hidden":"true"}},[t._v("#")]),t._v(" cs_multiDeposit")]),t._v(" "),_("p",[t._v("多签账户委托共识/Multi-Sign Account deposit agent transaction")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("是否非空")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("链id")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("address")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("多签账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("agentHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("节点HASH")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("deposit")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("委托金额")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("password")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户密码")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("signAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])]),t._v(" "),_("p",[t._v("返回值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tx")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("完整交易序列化字符串,如果交易没达到最小签名数可继续签名")])]),t._v(" "),_("tr",[_("td",[t._v("txHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易hash")])]),t._v(" "),_("tr",[_("td",[t._v("completed")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),_("td",[t._v("true:交易已完成(已广播),false:交易没完成,没有达到最小签名数")])])])]),t._v(" "),_("h3",{attrs:{id:"cs-multiwithdraw"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cs-multiwithdraw","aria-hidden":"true"}},[t._v("#")]),t._v(" cs_multiWithdraw")]),t._v(" "),_("p",[t._v("多签账户退出共识/Multi-Sign Account withdraw deposit agent transaction")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("是否非空")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("链id")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("address")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("多签账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("txHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("加入共识交易HASH")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("password")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户密码")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("signAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])]),t._v(" "),_("p",[t._v("返回值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tx")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("完整交易序列化字符串,如果交易没达到最小签名数可继续签名")])]),t._v(" "),_("tr",[_("td",[t._v("txHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易hash")])]),t._v(" "),_("tr",[_("td",[t._v("completed")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),_("td",[t._v("true:交易已完成(已广播),false:交易没完成,没有达到最小签名数")])])])]),t._v(" "),_("h3",{attrs:{id:"cs-stopmultiagent"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cs-stopmultiagent","aria-hidden":"true"}},[t._v("#")]),t._v(" cs_stopMultiAgent")]),t._v(" "),_("p",[t._v("多签账户注销节点/Multi-Sign Account stop agent")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")]),t._v(" "),_("th",[t._v("参数描述")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("是否非空")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chainId")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),_("td",[t._v("链id")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("address")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("节点地址(多签地址)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("password")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户密码")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("signAddress")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("签名账户地址")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])]),t._v(" "),_("p",[t._v("返回值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段名")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字段类型")]),t._v(" "),_("th",[t._v("参数描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tx")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("完整交易序列化字符串,如果交易没达到最小签名数可继续签名")])]),t._v(" "),_("tr",[_("td",[t._v("txHash")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),_("td",[t._v("交易hash")])]),t._v(" "),_("tr",[_("td",[t._v("completed")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),_("td",[t._v("true:交易已完成(已广播),false:交易没完成,没有达到最小签名数")])])])])])}],!1,null,null,null);a.options.__file="multi_sign_account.md";e.default=a.exports}}]);