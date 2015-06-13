$(document).delay(2000).ready(function(){
	$('.maindiv').css({"opacity":"0"});
	
	setTimeout(function(){$('.maindiv').animate({"opacity":"1"},1000);},500);
		
	$(".container").delay(2000).fadeOut(1500,function(){
		window.location.href='default1.html';
	});
	


	var but1_1=$("#one_1");
	var but2_1=$("#two_1");
	var but3_1=$("#three_1");
	var but4_1=$("#four_1");

	var but1_2=$("#one_2");
	var but2_2=$("#two_2");
	var but3_2=$("#three_2");
	var but4_2=$("#four_2");

	var but1_3=$("#one_3");
	var but2_3=$("#two_3");
	var but3_3=$("#three_3");

	var div1_1=$("#krishna");
	var div2_1=$("#hobbies");
	var div3_1=$("#myld");
	var div4_1=$("#goals");

	var div1_2=$("#father");
	var div2_2=$("#mother");
	var div3_2=$("#brother");

	var div1_3=$("#school");
	var div2_3=$("#besties");
	var div3_3=$("#ott");

	var list = $("ul li");
	var title=$("span");
	var line=$("#line");
	var line2=$('#line_myfamily');
	var line3=$('#line_friends');
	var img=$('.matter img')

	/*The code for myself page*/

	but1_1.click(function(){
		div1_1.slideDown(500);
		div2_1.fadeOut(700);
		div3_1.fadeOut(700);
		div4_1.fadeOut(700);
		list.css("background-color","#0372ac");
		title.css("color","#0372ac");
		line.css("background-color","#0372ac")
		list.hover(
		
		function(){
			$(this).css({"color": "#0372ac","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#0372ac"})
		}

		);
		});

	but2_1.click(function(){
		div1_1.fadeOut(700);
		div2_1.slideDown(500);
		div3_1.fadeOut(700);
		div4_1.fadeOut(700);
		list.css("background-color","#E64848");
		title.css("color","#E64848");
		line.css("background-color","#E64848")
		list.hover(
		function(){
			$(this).css({"color": "#E64848","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#E64848"})
		}

		);	
		
	});



	but3_1.click(function(){
		div1_1.fadeOut(700);
		div2_1.fadeOut(700);
		div3_1.slideDown(500);
		div4_1.fadeOut(700);
		list.css("background-color","#FF7519");
		title.css("color","#FF7519");
		line.css("background-color","#FF7519")
		list.hover(
		function(){
			$(this).css({"color": "#FF7519","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#FF7519"})
		}

		);
	});

	but4_1.click(function(){
		div1_1.fadeOut(700);
		div2_1.fadeOut(700);
		div3_1.fadeOut(700);
		div4_1.slideDown(500);
		list.css("background-color","#555591");
		title.css("color","#555591");
		line.css("background-color","#555591")
		list.hover(
		function(){
			$(this).css({"color": "#555591","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#555591"})
		});
	});


	/*The code for Myfamily Page*/

	but1_2.click(function(){
		div1_2.slideDown(500);
		div2_2.fadeOut(700);
		div3_2.fadeOut(700);
		list.css("background-color","#0372ac");
		title.css("color","#0372ac");
		line2.css("background-color","#0372ac");
		img.css("-webkit-box-shadow","0px -3px 20px 3px rgb(31,132,156)");
		list.hover(
		
		function(){
			$(this).css({"color": "#0372ac","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#0372ac"})
		}

		);
		});

	but2_2.click(function(){
		div1_2.fadeOut(700);
		div2_2.slideDown(500);
		div3_2.fadeOut(700);
		list.css("background-color","#E64848");
		title.css("color","#E64848");
		line2.css("background-color","#E64848");
		list.hover(
		function(){
			$(this).css({"color": "#E64848","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#E64848"})
		}

		);
		img.css("-webkit-box-shadow","0px -3px 20px 3px #E64848");	
		
	});



	but3_2.click(function(){
		div1_2.fadeOut(700);
		div2_2.fadeOut(700);
		div3_2.slideDown(500);
		list.css("background-color","#FF7519");
		title.css("color","#FF7519");
		line2.css("background-color","#FF7519");
		img.css("-webkit-box-shadow","0px -3px 20px 3px #FF7519");
		list.hover(
		function(){
			$(this).css({"color": "#FF7519","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#FF7519"})
		}

		);
	});

	but4_2.click(function(){
		$("*").animate({height:'0px',width:'0px',opacity:'0'},1500,function(){
			window.location.href="default.html"
		});
		
	});

	

	/*The code for myfriends page*/

	but1_3.click(function(){
		div1_3.slideDown(500);
		div2_3.fadeOut(700);
		div3_3.fadeOut(700);
		list.css("background-color","#0372ac");
		title.css("color","#0372ac");
		line3.css("background-color","#0372ac")
		list.hover(
		
		function(){
			$(this).css({"color": "#0372ac","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#0372ac"})
		}

		);
		});

	but2_3.click(function(){
		div1_3.fadeOut(700);
		div2_3.slideDown(500);
		div3_3.fadeOut(700);
		list.css("background-color","#E64848");
		title.css("color","#E64848");
		line3.css("background-color","#E64848")
		list.hover(
		function(){
			$(this).css({"color": "#E64848","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#E64848"})
		}

		);	
		
	});



	but3_3.click(function(){
		div1_3.fadeOut(700);
		div2_3.fadeOut(700);
		div3_3.slideDown(500);
		list.css("background-color","#FF7519");
		title.css("color","#FF7519");
		line3.css("background-color","#FF7519")
		list.hover(
		function(){
			$(this).css({"color": "#FF7519","background-color": "white"});
		},function(){
			$(this).css({"color":"white","background-color":"#FF7519"})
		}

		);
	});

	
	/* Code for slide down of Profile */


	var popup=$("#popup");
	$(".kaluvas,.nonkaluvas").click(function(){
		var id=$(this).attr('id');
		var name= '#'+id+'pro';
		var reqdiv=$(name);
		popup.append(reqdiv);
		var nameicon=$(this);
		reqdiv.slideToggle("slow",function(){
			var id=$(this).attr('id');
			var name= '#'+id+'pro';
			var reqdiv=$(name);
			var display=$(this).css("display");
			if(display=="block"){
				var iconclass=nameicon.attr('class');
				if(iconclass.match("^kaluvas")){
					nameicon.css({"-webkit-box-shadow":"0px 0px 28px 5px white","opacity":"1"});
				}
				else
				{
					nameicon.css({"-webkit-box-shadow":"0px 0px 28px 5px black","opacity":"1"});	
				}
			}

			else{
				var iconclass=nameicon.attr('class');
				if(iconclass.match("^kaluvas")){
					nameicon.css({"-webkit-box-shadow":"0px 0px 10px 2px white","opacity":"0.7"})
				}
				else
				{
					nameicon.css({"-webkit-box-shadow":"0px 0px 10px 3px black","opacity":"0.7"})
				}
			}
	});	

	})

});

