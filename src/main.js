import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 异步
import axios from 'axios' 
require('es6-promise').polyfill();

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})


if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    document.body.style.fontFamily="PingFang SC Regular";
} else if (/(Android)/i.test(navigator.userAgent)) {
    document.body.style.fontFamily="NoteSansCJKsc-Regular";
} else {
    document.body.style.fontFamily="Microsoft Yahei";
};

//  访问的接口为本地(当本页面在服务器上面时) 
// axios.post('http://localhost:8282/aoffice_app/api/test', {
//     // firstName: 'Fred'  暂时不提交数据
// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//     console.log(error);
// });