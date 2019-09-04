(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{302:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"encrypted-message-module-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-message-module-demo","aria-hidden":"true"}},[e._v("#")]),e._v(" Encrypted Message Module Demo")]),e._v(" "),t("h2",{attrs:{id:"functional-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functional-design","aria-hidden":"true"}},[e._v("#")]),e._v(" Functional design")]),e._v(" "),t("p",[e._v("The core business of the module is to directly send and receive text messages between two addresses and the encrypted message content will be stored on the chain and in the node file system.")]),e._v(" "),t("h3",{attrs:{id:"core-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Core functions")]),e._v(" "),t("ol",[t("li",[e._v("Bind the address to a unique messagebox address on the entire blockchain.")]),e._v(" "),t("li",[e._v("Send message to the specified messagebox address.")]),e._v(" "),t("li",[e._v("Receive message.")]),e._v(" "),t("li",[e._v("View the message details.")])]),e._v(" "),t("h3",{attrs:{id:"secondary-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secondary-functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Secondary functions")]),e._v(" "),t("ol",[t("li",[e._v("View the Inbox and Outbox messageing lists.")]),e._v(" "),t("li",[e._v("Pay additional fees for binding messagebox address and sending messages")])]),e._v(" "),t("h2",{attrs:{id:"general-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-design","aria-hidden":"true"}},[e._v("#")]),e._v(" General design")]),e._v(" "),t("h3",{attrs:{id:"binding-messagebox-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-messagebox-address","aria-hidden":"true"}},[e._v("#")]),e._v(" Binding messagebox address")]),e._v(" "),t("p",[e._v("Create the transaction type of applying for messagebox address (type_200) and business data (txData) includes the application address, messagebox address, address public key. When verifying the transaction, it is necessary to verify whether the messagebox address has been occupied, whether the application address has been bound to a messagebox, and whether the account balance of the application address is sufficient to pay the application fee and transaction fee. When the transaction is confirmed, the node will establish links between the application address, messagebox address and public key, and store them in the file system.")]),e._v(" "),t("p",[e._v("There are two functions for binding the messagebox address.")]),e._v(" "),t("ol",[t("li",[e._v("Provide a format that is more easy to memorize and write for human beings than account addresses.")]),e._v(" "),t("li",[e._v("Acquire the public key of the account address through transaction of the account, and asymmetrically encrypt the message content with the public key when sending the message.")])]),e._v(" "),t("h3",{attrs:{id:"sending-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sending-message","aria-hidden":"true"}},[e._v("#")]),e._v(" Sending message")]),e._v(" "),t("p",[e._v("Create the transaction type of sending message (type_201) and business data (txData) includes sender address (not messagebox address), recipient address (not messagebox address), sending time, encrypted message title, encrypted message content, sender's reading permission "),t("code",[e._v("key")]),e._v(" and recipient's reading permission "),t("code",[e._v("key")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"assembling-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assembling-transaction","aria-hidden":"true"}},[e._v("#")]),e._v(" Assembling transaction")]),e._v(" "),t("p",[e._v("The parameters of the message to be sent are sender's account address, account password, recipient's messagebox address, message title and message content. The processing steps are as follows:")]),e._v(" "),t("ol",[t("li",[e._v("Query the recipient's messagebox information through the recipient's messagebox address, and obtain the recipient's account address and public key.")]),e._v(" "),t("li",[e._v("Generate a pair of keys (KEY) for the encrypted message, encrypt the title and content of message with public key, and encrypt KEY's private key with public keys of recipient and sender to obtain their reading permission "),t("code",[e._v("keys")]),e._v(" respectively. When viewing the message content, they need to decrypt the reading permission "),t("code",[e._v("key")]),e._v(" with their own private keys, and then decrypt the message title and content  with the reading permission "),t("code",[e._v("key")]),e._v(". In this way, data can be stored publicly, but only the sender and the recipient can view the content.")])]),e._v(" "),t("h4",{attrs:{id:"verifying-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verifying-transaction","aria-hidden":"true"}},[e._v("#")]),e._v(" Verifying transaction")]),e._v(" "),t("ol",[t("li",[e._v("Verify the messagebox address bound to the sender’s account address")]),e._v(" "),t("li",[e._v("Verify the validity of the recipient’s messagebox address")]),e._v(" "),t("li",[e._v("Verify that the specified amount of assets is transferred to the fee account.")])]),e._v(" "),t("h4",{attrs:{id:"storing-message-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storing-message-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Storing message data")]),e._v(" "),t("p",[e._v("Because it is a demo module, data is not stored in the database but in the file system to avoid unnecessary complexity. message storage mainly involves in the relationship between message, recipient, and sender, as well as message content.")]),e._v(" "),t("ol",[t("li",[e._v("Create two folders, "),t("code",[e._v("sender")]),e._v(" and "),t("code",[e._v("recipient")]),e._v(", to store the relationship between the account address and the transaction hash related to the message. A file is created in the folder with the address as the file name, and each line in the file stores a transaction hash of message related to the account address. "),t("code",[e._v("Sender")]),e._v(" folder stores the relationship between the sender and the message transaction hash, and "),t("code",[e._v("recipient")]),e._v(" folder stores the relationship between the recipient and the message transaction hash.")]),e._v(" "),t("li",[e._v("Create "),t("code",[e._v("message-data")]),e._v(" folder to store messages and use message transaction hash as the file name to create a storage file. which stores hexadecimal string of the byte array of the message content.")])]),e._v(" "),t("h3",{attrs:{id:"reading-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reading-message","aria-hidden":"true"}},[e._v("#")]),e._v(" Reading message")]),e._v(" "),t("h4",{attrs:{id:"decrypt-message-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decrypt-message-information","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("span",{attrs:{id:"Decrypt message information"}},[e._v("Decrypt message information")])]),e._v(" "),t("p",[e._v("The message content is stored after encryption, so decryption is required for reading. The decryption failure throws an exception. The decryption process is as follows:")]),e._v(" "),t("ol",[t("li",[e._v("Get the message content by message hash.")]),e._v(" "),t("li",[e._v("Deserialize the message content. First convert the hexadecimal string to a byte array, and then parse the byte array following the below rules orderly.")])]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("Store the recipient’s account address in variable-length type")]),e._v(" "),t("li",[e._v("Store the sender’s account address in variable-length type")]),e._v(" "),t("li",[e._v("Store the recipient’s reading permission "),t("code",[e._v("key")]),e._v(" in variable-length type")]),e._v(" "),t("li",[e._v("Store the sender’s reading permission "),t("code",[e._v("key")]),e._v(" in variable-length type")]),e._v(" "),t("li",[e._v("Store the message title in variable-length type")]),e._v(" "),t("li",[e._v("Store the message content in variable-length type")]),e._v(" "),t("li",[e._v("Store 64-bit integer timestamp with 4 bytes (milliseconds from January 1, 1970 to the current time)")])])]),e._v(" "),t("ol",[t("li",[e._v("Determine whether the current account is the recipient or the sender by the address, and decrypt the corresponding reading permission "),t("code",[e._v("key")]),e._v(" by the private key.")]),e._v(" "),t("li",[e._v("Decrypt the message title and content with the decrypted reading permission "),t("code",[e._v("key")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"reading-the-inbox-or-outbox-messageing-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reading-the-inbox-or-outbox-messageing-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Reading the Inbox or Outbox messageing list")]),e._v(" "),t("p",[e._v("Find the file with the same name as the account address in the "),t("code",[e._v("sender")]),e._v(" and "),t("code",[e._v("recipient")]),e._v(" folders, read the hash by line, and then use the hash to get the message details through [Decrypt message information] (#Decrypt message information), and finally assemble the list.")]),e._v(" "),t("h3",{attrs:{id:"charging-fees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#charging-fees","aria-hidden":"true"}},[e._v("#")]),e._v(" Charging fees")]),e._v(" "),t("p",[e._v("The fee payment is achieved by verifying that the CoinData of the transaction of binding messagebox and sending message contains the specified amount of assets transferred to the specified black hole address (fee address).")]),e._v(" "),t("h2",{attrs:{id:"detailed-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design","aria-hidden":"true"}},[e._v("#")]),e._v(" Detailed design")]),e._v(" "),t("h3",{attrs:{id:"package-structure-of-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-structure-of-source-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Package structure of source code")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n└── io\n    └── nuls\n        ├── Config.java\n        ├── Constant.java\n        ├── MyModule.java\n        ├── NulsModuleBootstrap.java\n        ├── Utils.java\n        ├──controller\n        │ ├── CreatemessageAddressController.java\n        │ ├── GetmessageController.java\n        │ ├── SendmessageController.java\n        │ ├── core\n        │ │ ├── BaseController.java\n        │ │ ├── NulsResourceConfig.java\n        │ │ ├── Result.java\n        │ │ └── WebServerManager.java\n        │ └── vo\n        │ ├── CreatemessageAddressReq.java\n        │ ├── GetmessageListReq.java\n        │ ├── messageAddressData.java\n        │ ├── messageContentData.java\n        │ ├── SendmessageReq.java\n        │ └── ViewmessageReq.java\n        ├── rpc\n        │ ├── AccountTools.java\n        │ ├── CallRpc.java\n        │ ├── LegderTools.java\n        │ ├── TransactionTools.java\n        │ └── vo\n        │ ├── Account.java\n        │ ├── AccountBalance.java\n        │ └── TxRegisterDetail.java\n        ├── service\n        │ ├── messageAddressService.java\n        │ ├── SendmessageService.java\n        │ └── dto\n        │ ├── messageAddress.java\n        │ └── messageContent.java\n        └── txhander\n            ├── messageAddressProcessor.java\n            ├── SendmessageProcessor.java\n            ├── TransactionDispatcher.java\n            └── TransactionProcessor.java\n")])])]),t("h4",{attrs:{id:"config-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-java","aria-hidden":"true"}},[e._v("#")]),e._v(" Config.java")]),e._v(" "),t("p",[e._v("A configuration file, it reads the external NULS2.0 general configuration into the class through the configuration file system of the nuls-core. In this module, we need chainId (chain ID), assetId (asset ID), and dataPath (data storage path). These three items belong to the global general configuration and can be read directly. In addition, two business configuration items, messageAddressFee (fee of binding messagebox) and sendmessageFee (fee od sending message), are defined and need to be configured in module.ncf.")]),e._v(" "),t("h4",{attrs:{id:"constant-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constant-java","aria-hidden":"true"}},[e._v("#")]),e._v(" Constant.java")]),e._v(" "),t("p",[e._v("A class defining constants, it defines the transaction type pf binding messagebox (200), transaction type pf sending message (201), and the black hole address for fee collection.")]),e._v(" "),t("h4",{attrs:{id:"mymodule-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mymodule-java","aria-hidden":"true"}},[e._v("#")]),e._v(" MyModule.java")]),e._v(" "),t("p",[e._v("A bootstrap class, it declares that the current module depends on three modules, namely,  account, ledger, and transaction. The nuls-core-rpc package will automatically establish a websocket long connection with these 3 modules.\nComplete the module initialization:")]),e._v(" "),t("ol",[t("li",[e._v("Create a folder to store data.")]),e._v(" "),t("li",[e._v("Register the transaction type to the transaction module.")]),e._v(" "),t("li",[e._v("Initialize the Restful WebServer service (the user interface is provided using the HTTP protocol).")])]),e._v(" "),t("h4",{attrs:{id:"controller-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controller-package","aria-hidden":"true"}},[e._v("#")]),e._v(" controller package")]),e._v(" "),t("p",[t("code",[e._v("controller")]),e._v(" package provides user interface")]),e._v(" "),t("h5",{attrs:{id:"createmessageaddresscontroller-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#createmessageaddresscontroller-java","aria-hidden":"true"}},[e._v("#")]),e._v(" CreatemessageAddressController.java")]),e._v(" "),t("p",[e._v("The interface for binding account to messagebox address")]),e._v(" "),t("h5",{attrs:{id:"getmessagecontroller-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getmessagecontroller-java","aria-hidden":"true"}},[e._v("#")]),e._v(" GetmessageController.java")]),e._v(" "),t("p",[e._v("The interface for obtaining messagebox information.")]),e._v(" "),t("h5",{attrs:{id:"sendmessagecontroller-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendmessagecontroller-java","aria-hidden":"true"}},[e._v("#")]),e._v(" SendmessageController.java")]),e._v(" "),t("p",[e._v("The interface for sending message")]),e._v(" "),t("h5",{attrs:{id:"core-and-vo-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-and-vo-package","aria-hidden":"true"}},[e._v("#")]),e._v(" core and vo package")]),e._v(" "),t("p",[e._v("Related to HTTP interface framework and interface protocol.")]),e._v(" "),t("h4",{attrs:{id:"rpc-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpc-package","aria-hidden":"true"}},[e._v("#")]),e._v(" rpc package")]),e._v(" "),t("p",[e._v("Utility class for accessing the RPC interface of other modules.")]),e._v(" "),t("h4",{attrs:{id:"service-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-package","aria-hidden":"true"}},[e._v("#")]),e._v(" service package")]),e._v(" "),t("p",[e._v("Related to data storage logic")]),e._v(" "),t("h5",{attrs:{id:"messageaddressservice-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messageaddressservice-java","aria-hidden":"true"}},[e._v("#")]),e._v(" messageAddressService.java")]),e._v(" "),t("p",[e._v("Service for storing the information of messagebox address bound to the account")]),e._v(" "),t("h5",{attrs:{id:"sendmessageservice-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendmessageservice-java","aria-hidden":"true"}},[e._v("#")]),e._v(" SendmessageService.java")]),e._v(" "),t("p",[e._v("Service for sending message and querying emessage information.")]),e._v(" "),t("h4",{attrs:{id:"dto-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dto-package","aria-hidden":"true"}},[e._v("#")]),e._v(" dto package")]),e._v(" "),t("p",[e._v("Defining data storage objects")]),e._v(" "),t("h4",{attrs:{id:"txhander-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#txhander-package","aria-hidden":"true"}},[e._v("#")]),e._v(" txhander package")]),e._v(" "),t("p",[e._v("Package of transaction callback functions")]),e._v(" "),t("h5",{attrs:{id:"transactiondispatcher-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactiondispatcher-java","aria-hidden":"true"}},[e._v("#")]),e._v(" TransactionDispatcher.java")]),e._v(" "),t("p",[e._v("Defining the RPC interface of the callback function, dispatching transactions to the specific handling class based on the transaction type.")]),e._v(" "),t("h5",{attrs:{id:"messageaddressprocessor-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messageaddressprocessor-java","aria-hidden":"true"}},[e._v("#")]),e._v(" messageAddressProcessor.java")]),e._v(" "),t("p",[e._v("Defining callback functions that handle the transaction of binding messagebox address (type_200).")]),e._v(" "),t("h5",{attrs:{id:"sendmessageprocessor-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendmessageprocessor-java","aria-hidden":"true"}},[e._v("#")]),e._v(" SendmessageProcessor.java")]),e._v(" "),t("p",[e._v("Defining callback functions that handle the transaction of sending message (type_201).")]),e._v(" "),t("h3",{attrs:{id:"user-interface-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-interface-list","aria-hidden":"true"}},[e._v("#")]),e._v(" User interface list")]),e._v(" "),t("p",[e._v("The user interface is provided using HTTP protocol. The "),t("code",[e._v("Content type")]),e._v(" of Request and Response is "),t("code",[e._v("application/json")]),e._v(", and the port is "),t("code",[e._v("9999")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"universal-protocol-of-return"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#universal-protocol-of-return","aria-hidden":"true"}},[e._v("#")]),e._v(" Universal protocol of return")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "success": true, // success status\n    "data": null, //returned data\n    "msg": null // the reason for the failure\n}\n')])])]),t("h4",{attrs:{id:"binding-messagebox-address-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-messagebox-address-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Binding messagebox address")]),e._v(" "),t("h5",{attrs:{id:"access-path-message-createmessageaddress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-path-message-createmessageaddress","aria-hidden":"true"}},[e._v("#")]),e._v(" Access path: /message/createmessageAddress")]),e._v(" "),t("h5",{attrs:{id:"request-mode-post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-mode-post","aria-hidden":"true"}},[e._v("#")]),e._v(" Request mode: POST")]),e._v(" "),t("h5",{attrs:{id:"parameter-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-list","aria-hidden":"true"}},[e._v("#")]),e._v(" parameter list")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("address")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("apply for an account address")])]),e._v(" "),t("tr",[t("td",[e._v("messageAddress")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("apply for a bound messagebox address")])]),e._v(" "),t("tr",[t("td",[e._v("password")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("account password")])])])]),e._v(" "),t("h5",{attrs:{id:"return-in-string-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-in-string-format","aria-hidden":"true"}},[e._v("#")]),e._v(" Return in string format")]),e._v(" "),t("p",[e._v("txHash of the transaction.")]),e._v(" "),t("h4",{attrs:{id:"querying-the-messagebox-address-bound-to-the-specified-account-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#querying-the-messagebox-address-bound-to-the-specified-account-address","aria-hidden":"true"}},[e._v("#")]),e._v(" Querying the messagebox address bound to the specified account address")]),e._v(" "),t("h5",{attrs:{id:"access-path-message-getmessageaddress-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-path-message-getmessageaddress-address","aria-hidden":"true"}},[e._v("#")]),e._v(" Access path: /message/getmessageAddress/{address}")]),e._v(" "),t("h5",{attrs:{id:"request-mode-get"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-mode-get","aria-hidden":"true"}},[e._v("#")]),e._v(" Request mode: GET")]),e._v(" "),t("h5",{attrs:{id:"parameter-list-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-list-2","aria-hidden":"true"}},[e._v("#")]),e._v(" parameter list")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("address")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("account address")])])])]),e._v(" "),t("h5",{attrs:{id:"return-in-string-format-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-in-string-format-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Return in string format")]),e._v(" "),t("p",[e._v("emessage address")]),e._v(" "),t("h4",{attrs:{id:"sending-message-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sending-message-2","aria-hidden":"true"}},[e._v("#")]),e._v(" sending message")]),e._v(" "),t("h5",{attrs:{id:"access-path-message-sendmessage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-path-message-sendmessage","aria-hidden":"true"}},[e._v("#")]),e._v(" Access path: /message/sendmessage")]),e._v(" "),t("h5",{attrs:{id:"request-mode-post-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-mode-post-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Request mode: POST")]),e._v(" "),t("h5",{attrs:{id:"parameter-list-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-list-3","aria-hidden":"true"}},[e._v("#")]),e._v(" parameter list")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("messageAddress")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("recipient’s messagebox address")])]),e._v(" "),t("tr",[t("td",[e._v("senderAddress")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("sender’s account address")])]),e._v(" "),t("tr",[t("td",[e._v("password")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("sender’s account password")])]),e._v(" "),t("tr",[t("td",[e._v("title")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("message title")])]),e._v(" "),t("tr",[t("td",[e._v("content")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("message content")])])])]),e._v(" "),t("h5",{attrs:{id:"return-in-string-format-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-in-string-format-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Return in string format")]),e._v(" "),t("p",[e._v("txHash of the transaction")]),e._v(" "),t("h4",{attrs:{id:"getting-the-specified-message-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-specified-message-details","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting the specified message details")]),e._v(" "),t("h5",{attrs:{id:"access-path-message-viewmessage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-path-message-viewmessage","aria-hidden":"true"}},[e._v("#")]),e._v(" Access path: /message/viewmessage")]),e._v(" "),t("h5",{attrs:{id:"request-mode-post-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-mode-post-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Request mode: POST")]),e._v(" "),t("h5",{attrs:{id:"parameter-list-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-list-4","aria-hidden":"true"}},[e._v("#")]),e._v(" parameter list")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("address")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("account address")])]),e._v(" "),t("tr",[t("td",[e._v("password")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("account password")])]),e._v(" "),t("tr",[t("td",[e._v("hash")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("hash of the message transaction")])])])]),e._v(" "),t("h5",{attrs:{id:"return-as-an-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-as-an-object","aria-hidden":"true"}},[e._v("#")]),e._v(" Return as an object")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("hash")]),e._v(" "),t("td",[e._v("hash of the message transaction")])]),e._v(" "),t("tr",[t("td",[e._v("sendermessageAddress")]),e._v(" "),t("td",[e._v("sender’s messagebox address")])]),e._v(" "),t("tr",[t("td",[e._v("recipientmessageAddress")]),e._v(" "),t("td",[e._v("recipient’s messagebox address")])]),e._v(" "),t("tr",[t("td",[e._v("title")]),e._v(" "),t("td",[e._v("message title")])]),e._v(" "),t("tr",[t("td",[e._v("content")]),e._v(" "),t("td",[e._v("message content")])]),e._v(" "),t("tr",[t("td",[e._v("sender")]),e._v(" "),t("td",[e._v("sender’s account address")])]),e._v(" "),t("tr",[t("td",[e._v("date")]),e._v(" "),t("td",[e._v("date of sending message")])])])]),e._v(" "),t("h4",{attrs:{id:"getting-inbox-and-box-messageing-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-inbox-and-box-messageing-lists","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Inbox and Box messageing lists")]),e._v(" "),t("h5",{attrs:{id:"access-path-message-getsendlist-message-getreceivelist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-path-message-getsendlist-message-getreceivelist","aria-hidden":"true"}},[e._v("#")]),e._v(" Access path: /message/getSendList, /message/getReceiveList")]),e._v(" "),t("h5",{attrs:{id:"request-mode-post-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-mode-post-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Request mode: POST")]),e._v(" "),t("h5",{attrs:{id:"parameter-list-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-list-5","aria-hidden":"true"}},[e._v("#")]),e._v(" parameter list")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("address")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("account address")])]),e._v(" "),t("tr",[t("td",[e._v("password")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("account password")])])])]),e._v(" "),t("h5",{attrs:{id:"return-as-a-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-as-a-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Return as a list")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("hash")]),e._v(" "),t("td",[e._v("hash of the message transaction")])]),e._v(" "),t("tr",[t("td",[e._v("sendermessageAddress")]),e._v(" "),t("td",[e._v("sender’s messagebox address")])]),e._v(" "),t("tr",[t("td",[e._v("recipientmessageAddress")]),e._v(" "),t("td",[e._v("recipient’s messagebox address")])]),e._v(" "),t("tr",[t("td",[e._v("title")]),e._v(" "),t("td",[e._v("message title")])]),e._v(" "),t("tr",[t("td",[e._v("content")]),e._v(" "),t("td",[e._v("message content")])]),e._v(" "),t("tr",[t("td",[e._v("sender")]),e._v(" "),t("td",[e._v("sender’s account address")])]),e._v(" "),t("tr",[t("td",[e._v("date")]),e._v(" "),t("td",[e._v("date of sending message")])])])])])}],!1,null,null,null);r.options.__file="encryptedMessageDesign.md";a.default=r.exports}}]);