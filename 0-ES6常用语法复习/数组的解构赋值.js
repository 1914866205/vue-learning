// 数组解构赋值
let [player1, player2, player3] = ["curry", "james", "kobe"]
console.log(player2)  //james

//规则模式匹配，嵌套数组解构赋值
let [player4, [[player5], player6]] = ["curry", [["james"], "kobe"]]
console.log(player5) //james


//非规则模式匹配，嵌套数组解构赋值
let [player7, [[player8], player9]] = ["curry", [["james", "jordan"], "kobe"]]
console.log(player7)  //curry
console.log(player8)  //james
console.log(player9) //kobe

//数组解构数组赋值
let [player10, ...other] = ["curry", "james", "kobe"]
console.log(player10)   //curry
console.log(other)      //["james","kobe"]


//数组解构，默认值设置
let [player11, player12 = "me"] = ["curry"]
console.log(player11)   //curry
console.log(player12)   //me