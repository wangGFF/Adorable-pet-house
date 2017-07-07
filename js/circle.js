		  var dataArry = [];
          function fun(data_all){
          	dataArry = data_all.data.list;
          	createCell(dataArry)
          }

          function $(id){
          		return document.getElementById(id);
          }

          var content_box = $('content_box');
          function createCell(dataArry){
          	content_box.innerHTML = "";
          	for (var i = 0; i < dataArry.length; i++) {
          		//创建顶部
          		var top_box = document.createElement("div");
          		top_box.className = "top_box";
          		content_box.appendChild(top_box);

                //创建头部左侧图标
                var top_img_box = document.createElement("div");
                top_img_box.className = "top_img_box";
                top_box.appendChild(top_img_box)
                var top_img = document.createElement("img");
      			top_img.className = "top_img";
      			top_img.src ="img/"+ dataArry[i].m_small_img;
      			top_img_box.appendChild(top_img);
      			//创建头部word
      			var wordbox1 = document.createElement("div");
                wordbox1.className = "wordbox1";
                wordbox1.innerHTML="fred";
                top_box.appendChild(wordbox1);

                var wordbox1_i = document.createElement("div");
                wordbox1_i.className = "wordbox1_i";
                top_box.appendChild(wordbox1_i);

                var wordbox1_i_img = document.createElement("img");
                wordbox1_i_img.className = "wordbox1_i_img";
                wordbox1_i_img.src ="img/"+ dataArry[i].m_qiqiu_img;
      			wordbox1_i.appendChild(wordbox1_i_img); 

                var wordbox2 = document.createElement("div");
                wordbox2.className = "wordbox2";
                wordbox2.innerHTML="萌宠星球";
                top_box.appendChild(wordbox2);

                var wordbox2_i = document.createElement("div");
                wordbox2_i.className = "wordbox2_i";
                top_box.appendChild(wordbox2_i);
				var wordbox2_i_img = document.createElement("img");
                wordbox2_i_img.className = "wordbox2_i_img";
                wordbox2_i_img.src ="img/"+ dataArry[i].m_shijian_img;
      			wordbox2_i.appendChild(wordbox2_i_img); 

      			var wordbox3 = document.createElement("div");
                wordbox3.className = "wordbox3";
                wordbox3.innerHTML="6天前";
                top_box.appendChild(wordbox3);

                var wordbox4 = document.createElement("div");
                wordbox4.className = "wordbox4";
                wordbox4.innerHTML="+关注";
                top_box.appendChild(wordbox4);

                //创建中间部分
                var middle_box = document.createElement("div");
          		middle_box.className = "middle_box";
          		content_box.appendChild(middle_box);

          		var middle_box_img = document.createElement("img");
                middle_box_img.className = "middle_box_img";
                middle_box_img.src ="img/"+ dataArry[i].m_big_img;
      			middle_box.appendChild(middle_box_img); 

				var m_bottom_box = document.createElement("div");
          		m_bottom_box.className = "m_bottom_box";
          		m_bottom_box.innerHTML=dataArry[i].m_title;
          		middle_box.appendChild(m_bottom_box);
                //创建底部
          		var bottom_box = document.createElement("div");
          		bottom_box.className = "bottom_box";
          		content_box.appendChild(bottom_box);

          		var b_share1_box = document.createElement("div");
          		b_share1_box.className = "b_share1_box";
          		bottom_box.appendChild(b_share1_box);

          		var b_share1_box_img = document.createElement("img");
                b_share1_box_img.className = "b_share1_box_img";
                b_share1_box_img.src ="img/"+ dataArry[i].share_img;
      			b_share1_box.appendChild(b_share1_box_img); 

      			var b_share2_box = document.createElement("div");
          		b_share2_box.className = "b_share2_box";
          		b_share2_box.innerHTML=dataArry[i].m_num;
          		bottom_box.appendChild(b_share2_box);

          		var b_share3_box = document.createElement("div");
          		b_share3_box.className = "b_share3_box";
          		bottom_box.appendChild(b_share3_box);

          		var b_share3_box_img = document.createElement("img");
                b_share3_box_img.className = "b_share3_box_img";
                b_share3_box_img.src ="img/"+ dataArry[i].comments_img;
      			b_share3_box.appendChild(b_share3_box_img); 

      			var b_share4_box = document.createElement("div");
          		b_share4_box.className = "b_share4_box";
          		b_share4_box.innerHTML=dataArry[i].m_num;
          		bottom_box.appendChild(b_share4_box);

          		var b_share5_box = document.createElement("div");
          		b_share5_box.className = "b_share5_box";
          		bottom_box.appendChild(b_share5_box);

          		var b_share5_box_img = document.createElement("img");
                b_share5_box_img.className = "b_share5_box_img";
                b_share5_box_img.src ="img/"+ dataArry[i].praise_img;
      			b_share5_box.appendChild(b_share5_box_img); 

      			var b_share6_box = document.createElement("div");
          		b_share6_box.className = "b_share6_box";
          		b_share6_box.innerHTML=dataArry[i].m_num;
          		bottom_box.appendChild(b_share6_box);           
          	}
          }

          window.onload=function(){
	         var b_share1_box = document.getElementsByClassName("b_share1_box");
	         // console.log(b_share1_box)
	         for (var i = 0; i < b_share1_box.length; i++) {
	         	b_share1_box[i].onclick = function(){
	         	    var toshare_box = document.createElement("div");
	          		toshare_box.className = "toshare_box";
	          		app.appendChild(toshare_box);

	          	var mengban_box = document.getElementsByClassName('mengban_box');
			         console.log(mengban_box[0])
			         mengban_box.onclick=function(){
			         console.log('1')
			         mengban_box.style.disaply = 'none';
	         }

	          		var mengban_box = document.createElement("div");
	          		mengban_box.className = "mengban_box";
	          		app.appendChild(mengban_box);

	          		var toshare1_box = document.createElement("div");
	          		toshare1_box.className = "toshare1_box";
	          		toshare1_box.innerHTML = "&nbsp&nbsp&nbsp&nbsp分享到"
	          		toshare_box.appendChild(toshare1_box);

                    var imgs = ["img/fenxiang-tu2@2x.png","img/quanzi-icon-pengyouquan@2x.png","img/quanzi-icon-QQ@2x.png","img/quanzi-icon-QQkongjian@2x.png","img/quanzi-icon-weibo@2x.png","img/fuzhilianjie@2x.png"]
                    var words = ["微信","朋友圈","QQ","QQ空间","微博","复制链接"]
                    for (var i = 0; i < 6; i++) {
                    	var toshare_box_li = document.createElement("li");
		                toshare_box_li.className = "toshare_box_li";
		      			toshare_box.appendChild(toshare_box_li);

		      			var toshare_img = document.createElement("img");
		                toshare_img.className = "toshare_img";
		                toshare_img.src =imgs[i];
		      			toshare_box_li.appendChild(toshare_img);

		      			var li_box = document.createElement("div");
		          		li_box.className = "li_box_box";
		          		li_box.innerHTML=words[i];
		          		toshare_box_li.appendChild(li_box);
                    }
	          		 
	             }
	         }
	         var quanzi= document.getElementById('quanzi');	         
                  quanzi.onclick = function(){
                	window.location.reload();
                }
            
         }
         