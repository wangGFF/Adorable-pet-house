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
        //点击地图，获取经纬度坐标
        map.addEventListener("click",function(e){
           alert("经度坐标："+e.point.lng+" &nbsp;纬度坐标："+e.point.lat);
        });
		//设置标注的经纬度
        var marker = new BMap.Marker(new BMap.Point(106.8041297389,26.6487691816),position.point);
		//把标注添加到地图上
        map.addOverlay(marker);
		//定位到贵州师范学院
		map.centerAndZoom(new BMap.Point(106.8041297389,26.6487691816),15);
	}
	function error (errorCode) {
	       alert(errorCode.code+"--"+errorCode.message);
    }
}