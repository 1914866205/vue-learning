// 通过构造函数创建数组
// var players = new Array();
// let players = new Array(20);   //length为20的数组
// let players = new Array("curry", "james", "kobe");  //创建带有三个初始化项的数组
// //关键字new可以被省略
// let players = Array();
// let players = Array(20);
// let players = Array(20).fill(0);  //创建并填充一个20项初始值都为0的数组
// let players = Array("curry", "james", "kobe");

// 通过字面量创建数组(推荐)
// let players = [];
// let players = ["curry", "james", "kobe"];    //创建带有三个初始化项的数组  

// 通过Array.of()函数
// let players = Array.of("curry", "james", "kobe")
// console.log(players);  //["curry", "james", "kobe"]

// 数组的length属性不是只读的，可以修改
// let players = ["curry", "james", "kobe"];
// //原始长度是3，将数组长度修改为2，相当于删除了末尾的一项。因此可以使用该属性完成数组末尾数据删除功能
// players.length = 2;
// console.log(players[2])   //数组下标是2（第三项，0开始），打印结果是undefined

// 超过数组长度赋值的影响
// let players = ["curry", "james", "kobe"];    //创建带有3个初始化项的数组  
// players[7] = "jordan";   //设置数组中第8项
// console.log(players.length);    //输出结果为8
// console.log(players[5])         //undefined

// 检测一个数组的类型
// console.log(Array.isArray(players))      //true，ES5方法，推荐使用
// console.log(players instanceof Array)   //true，多个js前端框架共用环境下可能有问题

// 数组转字符串
// let players = ["curry", "james", "kobe"]; //创建带有三个初始化项的数组
// console.log(players.toString());   //curry,james,kobe。默认使用逗号分隔
// console.log(players.toLocaleString());   //curry,james,kobe
// console.log(players.join("&"));   //curry&james&kobe,如果想自定义分隔符号使用join


// 基本数据类型排序
// let values = [1, 2, 5, 10, 19]
// values.reverse()  //数组倒序方法
// console.log(values.toString()) //数组倒序：19,10,5,2,1
// values.sort()   //数组排序方法
// console.log(values.toString()) //数组正向排序：1,10,19,2,5

// 自定义比较规则，即：自定义比较函数
// let values = [1, 2, 5, 10, 19]
// function compare(value1, value2) {   //定义比较规则的函数
//   return value1 - value2  //返回值三种可能，0，大于0，小于0
// }
// values.sort(compare)     //使用比较规则
// console.log(values.toString()) //排序结果：1,2,5,10,19

// 比较对象
// let players = [{ name: "james", age: 36 },
// { name: "curry", age: 31 },
// { name: "kobe", age: 39 }]
// function comparePlayer(player1, player2) {
//   return player1.age - player2.age
// }
// players.sort(comparePlayer)
// console.log(players)

// 数组的合并与剪切
// let players = ["curry", "james", "kobe"];
// let players2 = players.concat("jordan", ["拉里伯德", "魔术师"])
// console.log(players2)  //["curry", "james", "kobe", "jordan", "拉里伯德", "魔术师"]

// slice可以剪切一个数组的元素成为一个新的数组
//数组下标从0开始
//从第2项开始剪切到最后，["james", "kobe", "jordan", "拉里伯德", "魔术师"]
// console.log(players2.slice(1))
//从第2项开始剪切到第5项，不包含第5项。  ["james", "kobe", "jordan"]
// console.log(players2.slice(1, 4)) 


// 数组元素删除、插入、替换
// let players = ["curry", "james", "kobe"];
// //从下标为0的项开始，删除一项。
// players.splice(0, 1)
// console.log(players)  // ["james", "kobe"]
// //从下标为1的项开始，删除0项，插入2项。相当于插入操作
// players.splice(1, 0, "jordan", "魔术师")
// console.log(players) //["james", "jordan", "魔术师", "kobe"]
// //从下标为1的项开始，删除1项，插入1项。相当于替换操作
// players.splice(1, 1, "杜兰特")
// console.log(players) //["james", "杜兰特", "魔术师", "kobe"]

// 数组成员的查找
// let players = ["curry", "james", "kobe", "james", "curry"];
// //这两个方法在找不到数据时，返回-1
// console.log(players.indexOf("james"))    //1,从数组头部查找数据返回下标位置
// console.log(players.lastIndexOf("james"))  //3,从数组末尾查找数据返回下标位置
// //查找符合条件的第一个数组成员,找不到返回undefined
// let findOne = players.find(function (value, index, arr) {
//   return value.includes("cu")
// })
// console.log(findOne)   //curry,curry包含cu
// //查找符合条件的第一个数组成员下标，找不到返回-1
// let findOneIndex = players.findIndex(function (value, index, arr) {
//   return value.includes("cu")
// })
// console.log(findOneIndex)   //0,curry包含cu，第一个元素下标是0

// 上文的find可以简写为:
// let findOne = players.find((value, index, arr) => value.includes("cu"))
// let findOne = players.find((value) => value.includes("cu")) //只传第一个参数

// for-in与for-of遍历数组
// let players = ["curry", "james", "kobe"];
// for (index in players) {
//   console.log(index + ":" + players[index])
// }
// for (player in players) {
//   console.log(player)
// }

// 遍历数组keys()、values()和entries()
// let players = ["curry", "james", "kobe"];
// for (let index of players.keys()) {
//   console.log(index) //打印是0,1,2
// }
// for (let elem of players.values()) {
//   console.log(elem)   //打印是"curry","james","kobe"
// }
// for (let [index, elem] of players.entries()) {
//   console.log(index, elem)   //打印如下
// }

// (重点)数组迭代判定
// let players = [{ name: "james", age: 36 },
// { name: "curry", age: 31 },
// { name: "kobe", age: 39 }]
// //every方法，判断是否数组每一个对象的年龄都大于30
// let isGt30 = players.every(function (value, index, arr) {
//   return value.age > 30
// })
// console.log(isGt30)  //true
// //some方法，判断是否数组中有至少一个对象的名字包含cu
// let isContainCu = players.some(function (value, index, arr) {
//   return value.name.includes("cu")
// })
// console.log(isContainCu)  //true

// ES6箭头函数的简写形式如下
// let isGt30 = players.every((value) => value.age > 30)
// let isContainCu = players.some((value) => value.name.includes("cu"))

// (重点)数组成员的迭代处理
// let players = [{ name: "james", age: 36, champions: 3 },
// { name: "curry", age: 31, champions: 3 },
// { name: "kobe", age: 39, champions: 5 }]

// players.forEach(function (value, index, array) {
//   //这个方法没有返回值，可以在这里执行一些操作，比如渲染一个table
//   console.log(`<tr>${value.name}</tr>`)  //这里使用了ES6语法，避免字符串拼接
// })

// (重点)数组的过滤与归并计算
//过滤数组中所有年龄大于30的球员，返回值也是一个数组
// let ageGt30Players = players.filter(function (value, index, array) {
//   return value.age > 30
// })
// console.log(ageGt30Players) //数组所有球员年龄都大于30，所以ageGt30Players = players
// //将数组的中所有人的年龄都减小5岁
// let young5Plauers = ageGt30Players.map(function (value, index, array) {
//   return { name: value.name, age: value.age - 5, champions: value.champions }
// })
// console.log(young5Plauers)  //球员对象的年龄变为31,26,34
// //计算数组中球员，总冠军的数量
// let championsNums = young5Plauers.reduce(function (prev, value, index, array) {
//   return prev + value.champions
// }, 0)
// console.log(championsNums)  //11,三位球员的总冠军数量

// Array.from()的用法
// let playersObje = { '0': "curry", '1': "james", '2': "kobe", length: 3 };
// let players = Array.from(playersObje);
// console.log(players)   //["curry", "james", "kobe"]

// let playersSet = new Set(['curry', 'james', 'curry'])
// players = Array.from(playersSet);
// console.log(players) //["curry", "james"],Set可以去重

// copyWithIn()的用法
//输出结果为[3, 4, 2, 3, 4]
// console.log([0, 1, 2, 3, 4].copyWithin(0, 3, 5))