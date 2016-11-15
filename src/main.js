import Vue from 'vue'
import App from './App.vue'

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
