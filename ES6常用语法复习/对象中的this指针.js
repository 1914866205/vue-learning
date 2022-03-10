// 对象中的this指针
class Player{
  // 定义构造函数
  constructor (name,age){
    this.name = name;
    this.age = age;
  }
  toPrint() {
    console.log(this.name + "----" + this.age);
  }
}

var player1 = new Player('aaa',22);
player1.toPrint();