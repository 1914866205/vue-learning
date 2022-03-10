class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 我们期望的执行结果是“aaa---22"，但是实际的执行结果是“undefined---undefined”。
  // 谁调用函数，函数内的this指针就指向谁
  toPrint() {
    let _this = this
    setTimeout(function(){
      console.log(_this.name + "---" + _this.age);
    },1000)
  }

  // 解决方法1：额外定义this指针的替身
  toPrint() {
    let _this = this
    setTimeout(function () {
      console.log(_this.name + "---" + _this.age);
    }, 1000)
  }

  // 解决方法2：使用bind(this)
  toPrint() {
    setTimeout(function () {
      console.log(this.name + "---" + this.age);
    }.bind(this), 1000);
  }


  // 解决方法3：箭头函数
  toPrint() {
    setTimeout(() => {
      console.log(this.name + "---" + this.age);
    }, 1000)
  }

}

let play1 = new Player("aaa", 22)
play1.toPrint()