window.onload=function(){
	//得到所有的page
		var pages = document.querySelectorAll(".page");
		
		//得到窗口的高度
		var windowWidth= document.documentElement.clientWidth;

		//所有page就位
		for(var i = 1 ; i < pages.length ; i++){
			pages[i].style.webkitTransform = "translateX(" + windowWidth + "px)";
		}

		//监听就是给document对象
		document.addEventListener("touchstart", touchstartHandler, false);
		document.addEventListener("touchmove", touchmoveHandler, false);
		document.addEventListener("touchend", touchendHandler, false);


		//开始滑动的手指位置
		var startX;
		//滑动的距离
		var distanceX;

		//三个相关的page
		var idx = 0;
		var prev = NaN;
		var next = 1;

		//函数截流
		lock = true;

		// 触摸开始
		function touchstartHandler(event){
			//开始值 
			startX = event.touches[0].clientX;
			console.log(startX)

			//去掉所有的过渡
			pages[idx].style.transition = "none";
			!isNaN(next) && (pages[next].style.transition = "none");
			!isNaN(prev) && (pages[prev].style.transition = "none");

			pages[idx].style.zIndex = 888;
			!isNaN(next) && (pages[next].style.zIndex = 999);
			!isNaN(prev) && (pages[prev].style.zIndex = 999);
		}

		// 触摸移动
		function touchmoveHandler(event){
			//y是手指的位置减去误差
			distanceX = event.touches[0].clientX - startX;
console.log(distanceX)
			//到头了
			if(idx == 0 && distanceX > 0){
				return;
			}else if(idx == 2 && distanceX < 0){
				return;
			}


			if(distanceX < 0){
				//滑动的时候改变transform：
				// pages[idx].style.webkitTransform = "scale(" + (1 - Math.abs(distanceY) / windowHeight) + ")";
				!isNaN(next) && (pages[next].style.webkitTransform = "scale(1) translateX(" + (windowWidth + distanceX) + "px)");
			}else if(distanceX > 0){
				// pages[idx].style.webkitTransform = "scale(" + (1 - Math.abs(distanceY) / windowHeight) + ")";
				!isNaN(prev) && (pages[prev].style.webkitTransform = "scale(1) translateX(" + (-windowWidth + distanceX) + "px)");
			}
		}

		// 触摸结束
		function touchendHandler(event){
			//到头了
			if(idx == 0 && distanceX > 0){
				return;
			}else if(idx == 2 && distanceX < 0){
				return;
			}

			//根据distanceY来确定是否滑动成功
			if(distanceX< -windowWidth / 4){
				//向上滑动成功
				console.log("↑")

				//先改变信号量
				prev = idx;
				idx = next;
				next++;
				if(next > 2){
					idx = 2;
					next = NaN;
				}

				console.log(prev,idx,next)

				//加上过渡
				!isNaN(prev) && (pages[prev].style.transition = "all 0.4s ease 0s");
				pages[idx].style.transition = "all 0.4s ease 0s";

				//最终的位置
				pages[prev].style.webkitTransform = "scale(0)";
				pages[idx].style.webkitTransform = "translateY(0px)";

			}else if(distanceX > windowWidth / 4){
				console.log("↓")

				//先改变信号量
				next = idx;
				idx = prev;
				prev--;
				if(prev < 0){
					idx = 0;
					prev = NaN;
				}

				console.log(prev,idx,next)

				//加上过渡
				!isNaN(next) && (pages[next].style.transition = "all 0.4s ease 0s");
				pages[idx].style.transition = "all 0.4s ease 0s";

				//最终的位置
				pages[next].style.webkitTransform = "scale(0)";
				pages[idx].style.webkitTransform = "translateY(0px)";
			}else{
				pages[idx].style.transition = "all 0.4s ease 0s";
				!isNaN(prev) && (pages[prev].style.transition = "all 0.4s ease 0s");
				!isNaN(next) && (pages[next].style.transition = "all 0.4s ease 0s");
				 

				pages[idx].style.webkitTransform = "scale(1)";
				!isNaN(prev) && (pages[prev].style.webkitTransform = "translateX(" + -windowWidth + "px)");
				!isNaN(next) && (pages[next].style.webkitTransform = "translateX(" + windowWidth + "px)");
				 
			}


			inAnimate[idx]();
		}


		//入场动画
		var inAnimate = [function(){},function(){},function(){},function(){},function(){},function(){}];
}