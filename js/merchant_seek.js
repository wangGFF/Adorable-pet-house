window.onload = function (){
		var getlocation = new BMap.Geolocation();
		if(getlocation){
			getlocation.getCurrentPosition(success,error);
		}else{
			alert('你的设备不支持定位功能');
		}
		function success(position){
			//得到百度地图， 并且显示在allmap中
			var map = new BMap.Map("map");               
			//添加比例尺控件
			map.addControl(new BMap.ScaleControl());                    
			//添加素略图控件
			map.addControl(new BMap.OverviewMapControl());  
			//创建缩放平移控件
			map.addControl(new BMap.NavigationControl()); 
			//地图类型控件
			map.addControl(new BMap.MapTypeControl());
			var local = new BMap.LocalSearch(map, {
	                 renderOptions: {map: map, panel: "results"}
	              });
            map.centerAndZoom(new BMap.Point(106.8041297389,26.6487691816),15);
            //获取搜索按钮和输入框
	        var seek = document.getElementById('seek');
	        var merchant = document.getElementsByName('merchant')[0];
	        console.log(merchant);
	        seek.addEventListener('click',function (){
	        	local.search(merchant.value);
	        });
	        //点击回车键等价于点击登录按钮
			window.onkeydown = function (event){
					var e=event||window.event||arguments.callee.callee.arguments[0];
					var zhi=e.keyCode;
					if(zhi==13)
					local.search(merchant.value);
				}
		}
		function error (errorCode) {
		       alert(errorCode.code+"--"+errorCode.message);
	    }
}