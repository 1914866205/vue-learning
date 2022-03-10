let { age: age, name: name } = { name: "james", age: 35 }

// 对象的解构赋值，变量名对上即可，顺序不重要
// 简写形式： let {age,name} = {name:"james",age:35}
console.log(name + "-----" + age);  //james----35


// 对象方法的解构
let { sqrt, sin, cos } = Math
console.log(sqrt(4));  // 2

// 字符串的解构赋值
let [a1, a2, a3] = "curry"
console.log(a1);  //c
console.log(a2);  //u
console.log(a3);  //r