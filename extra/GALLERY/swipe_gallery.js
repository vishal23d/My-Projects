
var slideIndex, parent, number_li, pagination=[], animateType, animateDirection, direction_value;

function addSlides()
{	
	$(".slideshow").before("<div id='parent-slide' class='col-md-12 col-sm-12 col-xs-12 no-padding'></div>");
	$("#parent-slide").append($(".slideshow")).append("<ul class='slide-navigate'> <li><a class='prev' onclick='plusSlides(-1)'> &#8678 </a></li> <li><a class='next' onclick='plusSlides(1)'> &#8680 </a></li> </ul>").append("<ul class='slide-paginate'> <ul>");
	$(".slideshow li").addClass(animateType+' mySlides');
	number_li = $(".slideshow li").length;
	for(var i=1;i<=number_li;i++)
	{
		var li_index=i-1;
		pagination.push("<li><span class='dot' onclick='currentSlide("+i+")'> </span>");
		$(".slideshow li:eq("+li_index+")").append("<div class='numbertext'>"+i+"/"+number_li+"</div>");
	}
	$("ul.slide-paginate").append(pagination);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");
	  if(n > slides.length)
	  {
	  	slideIndex = 1;
	  }
	      
  	 if(n < 1)
  	 {
   		slideIndex = slides.length;
  	 }
  	
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
      $(".mySlides:eq("+i+")").removeClass('show_active');
  }
  
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].className += " show_active";
  
    
  dots[slideIndex-1].className += " active";
}

function mySlide()
{
	animateType = arguments[0].animate;
	animateDirection = arguments[0].direction;
	if(animateType == "" || animateType == undefined )
	{
		animateType = "fade";
	}
	parent = $(".slideshow").length;
	if(parent>0)
	{	
		addSlides();
		slideIndex = 1;
		showSlides(slideIndex);
	}
}

/*  WORKING
var xtext, ytext;
var touches=[], wwidth, parEl;

wwidth = $(window).width();
if(wwidth < 1025)
{
	parEl = document.getElementsByClassName('slideshow')[0];
	parEl.addEventListener('touchstart', function(e) {doTouch(e);}, false);
	parEl.addEventListener('mousemove', function(e) {doTouch(e);}, false);
}

function doTouch(eve) {
    eve.preventDefault();
    //var touch = eve.touches[0];
	elWidth = $("#parent-slide").width(); //  676
	halfWidth = elWidth / 2; //  338
	
	//clientX = e.touches[0].clientX;
	//alert(clientX);
	offset = $("ul.slideshow").offset().left;	//  595	
	
    xtext = eve.pageX;
    ytext = eve.pageY;
    
    left_target = offset + halfWidth;	// 993
    right_target = offset + elWidth;	// 1271
    //alert("x : "+ xtext+", y : "+ytext); 
    
    if((xtext > offset) && (xtext < left_target))
    {
    	plusSlides(-1);	
    }  
    
     if((xtext > left_target) && (xtext < right_target))
    {
    	plusSlides(1);	
    }  
}
*/

$(document).ready(function(){
		$(".slideshow").on("swipeleft",function(){
			//alert("SWIPED-LEFT!!");
			plusSlides(1);
		});
		
		$(".slideshow").on("swiperight",function(){
			//alert("SWIPED-RIGHT!!");
			plusSlides(-1);
		});
	});



// var msgX, msgY;
// $(document).on('touchstart mousemove', '.mySlides.show_active', function(event){
        // event.stopPropagation();
        // event.preventDefault();
        // if(event.handled !== true) {
			// msgX = event.pageX;
            // alert(msgX);
// 
            // event.handled = true;
        // } else {
            // return false;
        // }
// });



// $(function(){
  // $( "ul.slideshow" ).on( "swiperight", swiperightHandler );
//   
  // function swiperightHandler( event ){
    // //$( event.target ).addClass( "swiperight" );
    // $("a.next").trigger('onclick');
  // }
// });	//mousedown touchmove

//var msgX, msgY, msgX1, msgY1, msgX2, msgY2;

// $(function(){
  // $(".slideshow").bind("mousedown touchstart mouseup",function(event){
	  // msgX = event.pageX;
	  // msgY = event.pageY;
	  // if(msgX<500)
	  // {
	  	// plusSlides(-1);
	  // }
	  // if(msgX>500)
	  // {
	  	// plusSlides(1);
	  // }
	  // console.log("adfs"+ msgX+"aswdfe"+msgY);
  // });
// });

// $(function(){
  // $(".slideshow").bind("touchstart mousedown mousemove",function(event){
	  // msgX1 = event.pageX;
	  // msgY1 = event.pageY;
	  // console.log("1: "+ msgX1+"aswdfe"+msgY1);
  // });
//   
  // $(".slideshow").on("touchend",function(event){
	  // msgX2 = event.pageX;
	  // msgY2 = event.pageY;
	  // console.log("2: "+ msgX2+"aswdfe"+msgY2);
  // });
// });


window.setInterval(function(){
	if(animateDirection == "forward")
	{
		direction_value = 1;
	}
	else if(animateDirection == "reverse")
	{
		direction_value = -1;
	}
	else
	{
		direction_value = 1;
	}
	
	plusSlides(direction_value);
}, 10000);



