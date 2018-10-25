// $(document).ready(function(){

// })


$(function(){

	var current=0;

	var t=setInterval(function(){
		$('.next').trigger('click')
	},4000)
	

	$('.point span').on('click',function(){
		current=$('.point span').index($(this))
		show(current);
		setTime()
	})

	function show(num){
		$('.container3 img').eq(num).addClass('show').siblings().removeClass('show');
		$('.point span').eq(num).addClass('active').siblings().removeClass('active');
	}

	$('.container3 .prev').on('click',function(){
		if(current>0){
			current--;
			show(current)
		}
		else{
			current=4;
			show(current)
		}
		setTime()
	})
	$('.container3 .next').on('click',function(){
		if(current<4){
			current++;
			show(current)
		}
		else{
			current=0;
			show(current)
		}
		setTime()
	})

	function setTime(){
		clearInterval(t);
		t=setInterval(function(){
		$('.next').trigger('click')},4000)
	}

	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>800)
		{
			$('.hide').show();
		}else
		{
			$('.hide').hide();
		}
	})


	$('.hide').click(function(){
		$('html').animate({scrollTop: 0}, 300);
	})

	// $('.hide').hover(function(){console.log(1)},function(){console.log(2)})
	$('.container2 .search-text').focus(function(){
		$('.container2 .select').show()
		$('.container2 .search-words').hide()
		$('.container2 .search-text, .bnt').css({'border-color':'red'})
		// $('.container2 .search-text').css({'border-bottom':'none'})

	})
	$('.container2 .search-text').blur(function(){
		$('.container2 .select').hide()
		$('.container2 .search-words').show()
		$('.container2 .search-text, .bnt').css({'border-color':'#e0e0e0'})
	})
	$('#container .nav li').eq(8).hover(function(){
			$('#container .app').show()
		},function(){
			$('#container .app').hide()
		})
	$('.product').hover(
		function(){
			$(this).find('.hover').stop().slideDown(300)
		},function(){
			$(this).find('.hover').stop().slideUp(300)
		})

	$('.container2 li').hover(
		function(){
			var i=$('.container2 li').index($(this));
			$('.hide-box').empty();
			if(i==0)
			{
				$('.wrap-1').clone().appendTo('.hide-box').show();
			}else if(i==1)
			{
				$('.wrap-2').clone().appendTo('.hide-box').show();
			}
			else if(i==2)
			{
				$('.wrap-3').clone().appendTo('.hide-box').show();
			}else if(i==3)
			{

			}
			else if(i==4)
			{

			}
			else if(i==5)
			{

			}
			else if(i==6)
			{
				
			}
			else if(i==7)
			{
				
			}
			else if(i==8)
			{
				return false;
			}else if(9)
			{
				return false;
			}

			// switch(i){
			// 	case 1:
			// 	$('.wrap-1').clone().appendTo('.hide-box').show();
			// 	break;
			// 	case 2:

			// 	case 3:

			// 	case 4:

				
			// }

			$('.container2 .hide-box').stop().slideDown(300)
		},function(){
			$('.container2 .hide-box').stop().slideUp(300)
		})



			$('#container .nav1 li').eq(3).hover(
				function(){
					$('#container .nav1 li').eq(3).css({'background':'#fff'});
					$('#container .nav1 li:eq(3) img' ).attr('src','images/c.png');
					$('#container .nav1 li:eq(3) a').css({'color':'red'});
					$('#container .cart-menu').stop().slideDown(300)},
				
				function(){
					$('#container .nav1 li').eq(3).css({'background':'#424242','color':'#454545'});
					$('#container .nav1 li:eq(3) img' ).attr('src','images/shoppingcar.png');
					$('#container .nav1 li:eq(3) a').css({'color':'#b0b0b0'});
					$('#container .cart-menu').stop().slideUp(300);
					
				})
		
			$('.container3 .item-left').hover(function(){
					$(this).find('.container3 .box-right').show();
					// $('.container3 .box-right').show()
			},function(){
					$(this).find('.container3 .box-right').hide()
					// $('.container3 .box-right').hide()
			})
})


		
	