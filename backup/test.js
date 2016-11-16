// jQuery交互
$(function(){
	$("#send").click(function(){
		var cont = {
			username:$("input")[0].value,
			age:$("input")[1].value,
			job:$("input")[2].value
		};

		var url = './ab.php';


		$.post(
			// 地址，提交数据，返回数据
			url,cont,function(data){
				var res = eval("(" + data + ")");//转为Object对象
				var str = res.username + res.age + res.job;
				$("#result").html(str);
			}
		);
	});  
}); 