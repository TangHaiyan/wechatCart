$(function(){
   //$('.container').click(function(){
   $('.layer').css("width","10%").css("height","5%");
   $('.layer').animate({height:"40%"},100)
   .animate({height:"60%"},200)
   .animate({height:"80%",width:"80%"},500,function(){
   		console.log(1);
   		$('.content').css("display","block");
   		//$('.company').css("transform","translateX(-20px)");
   		$('.company').css("transition","company 500ms ease");
   	});




})

