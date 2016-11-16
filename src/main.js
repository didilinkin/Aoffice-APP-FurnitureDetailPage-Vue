import Vue from 'vue'
import App from './App.vue'
// import store from './vuex/store'
import axios from 'axios' // 异步
require('es6-promise').polyfill();

new Vue({
    el: '#app',
    render: h => h(App),
    data: {
        msg: '升降舒适办公椅'
    }
})
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    document.body.style.fontFamily="PingFang SC Regular";
} else if (/(Android)/i.test(navigator.userAgent)) {
    document.body.style.fontFamily="NoteSansCJKsc-Regular";
} else {
    document.body.style.fontFamily="Microsoft Yahei";
};

function getData(){
      var d = document;
      var account = d.getElementById('account').value;
      console.log(account);
      var password = d.getElementById('password').value;
      axios.post('/register.php',{
       firstName:'cdd',
       password:'123456'
      })
   .then(function (response) {
     console.log(response);
     d.getElementsByClassName('h3')[0].innerHTML = response.data;
   })
   .catch(function (error) {
     console.log(error);
   });
 }

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
    console.log(error);
});