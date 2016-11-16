// 成功将php输出的数据展示
// axios Ajax
axios.post('./ab.php')
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});
