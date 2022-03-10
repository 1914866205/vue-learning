if (true) {
  var externalVal = "externalVal";
}


function domainTest() {
  var funVal = "funVal";
  console.log(externalVal + "------" + funVal); //正确打印 externalVal 和 funVal
}

domainTest();

if (true) {
  console.log(externalVal);  //正确打印 externalVal
  // console.log(funVal);  // 报错，无法访问到 funVal
}

