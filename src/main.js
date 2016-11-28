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