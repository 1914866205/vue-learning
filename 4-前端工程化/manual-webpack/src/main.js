let players = require("./js/player");
require("./css/common.css");
require("./css/lessdemo.less");

console.log(players);

let baz = new Set([1, 2, 3]);
console.log(baz);

import Vue from "vue";
import App from "./vue/App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// new Vue({
//   el: '#app',
//   template:'<DemoCpn/>',
//   components:{
//     DemoCpn
//   }
// })
