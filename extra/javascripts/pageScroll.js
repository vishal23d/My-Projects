/* PAGE SCROLL - single page design
 * 
 * Copyright 2016
 * 
 */	
	
	
	var map_attr ,
		menuTop ,
		winWidth = $(window).width() ,
		desk_id = $('#desk_menu') ,
		mobile_id = $('#mobile_menu') ,
		thisPaten ,
		map_count = 0 ;//,
		//move = [];
			
	$("ul.mobile-display li a.home-menu, .logo img").on("click", function(){
		toStart(600);
	});
	
	function toStart(t_time)
	{
		$('html,body').animate({
			scrollTop : 0
		}, t_time);
	}
	
	/*$(window).load(function(){
		pageScroll();
	});*/
	
	function pageScroll(par1, par2, duration, block1)
	{
		if(winWidth > 750)
		{
			map_attr = document.querySelectorAll("ul.blue a[data-id]");
			map_query = "ul.blue li a";
			map_parent = "ul.blue li";
			if(par1)
			{
				menuTop = desk_id.innerHeight() + par1;
			}
			else
			{
				menuTop = desk_id.innerHeight();
			}
			
		}
		else
		{
			map_attr = document.querySelectorAll("ul.mobile-display a[data-id]");
			map_query = ".hidden-menus ul li a";
			map_parent = ".hidden-menus ul li";
			if(par2)
			{
				menuTop = mobile_id.innerHeight();
			}
			else{
				menuTop = 2* mobile_id.innerHeight();
			}
		}
		map_count = map_attr.length;
		setTimeout("runaway(map_attr)",500);
		thisPaten = "dmlzaGFsMjNk";
		$(window).scroll(function(){
			s_Height = $(window).scrollTop();
			if(winWidth > 750)
			{
				check_Add(desk_id);
			}
			else
			{
				check_Add(mobile_id);
			}
			
			function check_Add(pass_id)
			{
				(duration == 0) ? a_duration=duration : a_duration = 800;
				var t_Height;
				(block1) ?  t_Height = $("."+block1).innerHeight() : t_Height = pass_id.innerHeight();
				//console.log(t_Height, block1);
				
				if(s_Height >= t_Height)
				{
					pass_id.addClass('fixed-menu');
				}
				else{
					pass_id.removeClass('fixed-menu');
				}
			}
			
			var var_height = s_Height;
			for(var i=0;i < map_count; i++)
			{
				//console.log(var_height);
				//console.log(move[i].map_scroll);
				if(var_height >= move[i].map_scroll)
				{
					$(map_parent).removeClass("active");
					$("a[data-id="+move[i].label+"]").parent().addClass("active");
				}
			}
		});
		
		$(map_query).on("click", function(event){
			$(".hidden-menus").hide("slow");
			var pass = $(this);
			eventMapping($(this));
		});
		
		function eventMapping($this)
		{
			//$this = $(this);
			//console.log($this);
			$(map_parent).removeClass("active");
			$this.parent().addClass("active");
			$data_id = $this.attr("data-id");
			for(var i=0;i < map_count; i++)
			{
				var scrollTo = move[i].map_scroll;
				if($data_id == move[i].label )
				{
					$('html,body').animate({
						scrollTop : scrollTo
					}, 500);
				}
			}
		}
	}
	
	/*$(".hidden-menus ul li a").on("click", function(event){
		$(".hidden-menus").hide("slow");
		var pass = $(this);
		eventMapping(pass);
	});*/
	
	function runaway(map_data)
	{
		window.move = [];
		move.length = 0;
		//console.log(map_data);
		//var menuTop = $(".header-block").innerHeight();
		//console.log(menuTop);
		for(var i=0;i < map_count; i++)
		{
			map_val = map_data[i].getAttribute("data-id");
			//console.log(map_val);
			map_top = $("#"+map_val).offset().top;
			//console.log(map_top);
			map_top = map_top.toFixed(0) - menuTop;
			//console.log(map_top);
			move.push({label : map_val , map_scroll : map_top });
		}
	}
	
	function scroll_fix(param)
	{
		var old = $("."+param).css("padding-top");
		old = parseInt(old);
		var newTop = old + menuTop;
		$("."+param).css("padding-top",newTop);
	}
