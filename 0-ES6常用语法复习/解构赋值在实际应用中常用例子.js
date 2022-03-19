// 对象解构赋值，在函数参数上的应用
function add([{ name: name1, age: age1 }, { name: name2, age: age2 }]) {
  return age1 + age2
}

console.log(add([{ name: "james", age: 35 }, { name: "curry", age: 31 }]));  // 66

// 利用变量解构进行数据交换
let a = 2;
let b = 3;
[a, b] = [b, a];
console.log(a + "-----" + b);  // 3-----2

// ES6的一种新数据类型 map
let map1 = new Map();
map1.set("p1", "curry");
map1.set("p2", "james");

// 遍历 map 数据结构的 key和value
for (let [key, value] of map1) {
  console.log(`$[key]----$[value]`);
  console.log(key + "-----" + value);
}