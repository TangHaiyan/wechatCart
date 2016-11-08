$(function(){
   //dom加载完成后使用加载动画
   $('.layer').css("width","10%").css("height","5%");
   $('.layer').animate({height:"40%"},100)
   .animate({height:"60%"},200)
   .animate({height:"80%",width:"80%"},500,function(){
   		$('.content').css("display","block");
   		$('.footer').slideDown("slow");
   	});

   $("p").focus(function(e){
   	//$(this).
   	e.preventDefault();
   	$(this).css("outline","none");

   })




})

