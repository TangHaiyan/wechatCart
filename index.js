$(function(){
   //dom加载完成后使用加载动画
   $('.layer').css("width","10%").css("height","5%");
   $('.layer').animate({height:"40%"},100)
   .animate({height:"60%"},200)
   .animate({height:"80%",width:"80%"},500,function(){
   		$('.content').css("display","block");
   		$('.footer').slideDown("slow");
   	});
   //给输入元素添加事件
   $("p").focus(function(e){
   	//$(this).
   	e.preventDefault();
   	$(this).css("outline","none");

   })
  //给上传图片接口添加事件
  $('#photo').change(function(){
  	var img = document.getElementById('selectPhoto');
    onloadImg(this,img);
  })

  $('#erweima').change(function(){
  	var img = document.getElementById('selectErweima');
    onloadImg(this,img);
  })

  function onloadImg(eventObj,desObj){
  	 if(typeof FileReader =='undefined'){
	    $(".layer").css({'background':'none'})
	    .html('亲,请更新浏览器获得最好体验');
	 }
  	 //要用js对象 兼容到ie10,11
  	 var img = eventObj.files[0];
  	 var src = window.URL.createObjectURL(img);
  	 console.log(window.URL);
  	 desObj.src = src;
  }

	$('.share').click(function(e){
		alert("shared");
		e.preventDefault();
	})

	$('.ido').click(function(e){
		alert("我也做一个1.0");
		e.preventDefault();
	})

	//拨打号码
	$('.tel a').click(function(e){
		var tel = $('.tel p').text();
		var telNum = parseInt(tel);

		if (isNaN(tel)) {
			e.preventDefault();
		}else{
			$(this).attr("href","tel:"+telNum);
			console.log("T"+tel);
	    }
	 })

})

