$(function(){
	var timers;
	var num=1;
	var gtime;
	var scrTop;
	var sn=0;
	//导航栏搜索按钮点击搜索
	$('.findimg').click(function(){
		$('.navfinds').show()
		$('.findimg').hide()
	})
	$('.close').click(function(){
		$('.navfinds').hide()
		$('.findimg').show()
	})
	//导航栏左侧点击更多
	$('.navtw-close').click(function(){
		$('.daohl-more').hide()
		$('.navtw-close').hide()
		$('.navtw-more').show()
	})
	$('.navtw-more').click(function(){
		$('.daohl-more').show()
		$('.navtw-close').show()
		$('.navtw-more').hide()
	})
	//导航栏搜索
	$('.user-find').click(function(){
		$('.us-search').show();
		$('.user-find').hide();
		$('.find-close').show();
	})
	$('.find-close').click(function(){
		$('.us-search').hide();
		$('.user-find').show();
		$('.find-close').hide();
	})
	//用户登录
	$('.user-resert').click(function(){
		$('.userinfos').show();
		$('.user-resert').hide();
		$('.resert-close').show();
	})
	$('.resert-close').click(function(){
		$('.userinfos').hide();
		$('.user-resert').show();
		$('.resert-close').hide();
	})
	//护肤产品
	$(window).scroll(function(){
		scrTop=$(window).scrollTop();
			if(scrTop>=1000){
				function fun(){
					$('.mdimg').animate({width:'10%'},2000).css('opacity','1');
					//左侧
					$('.leftimg1').delay(1000).animate({left:'30%'},1000).css('opacity','1');
					$('.leftimg2').delay(1100).animate({left:'27.5%'},900).css('opacity','1');
					$('.leftimg3').delay(1200).animate({left:'25%'},900).css('opacity','1');
					$('.leftimg4').delay(1300).animate({left:'22%'},900).css('opacity','1');
					$('.leftimg5').delay(1400).animate({left:'19%'},900).css('opacity','1');
					$('.leftimg6').delay(1500).animate({left:'16%'},900).css('opacity','1');
					$('.leftimg7').delay(1600).animate({left:'13%'},900).css('opacity','1');
					$('.leftimg8').delay(1700).animate({left:'10%'},900).css('opacity','1');
					//右侧
					$('.rightimg1').delay(1000).animate({right:'30%'},1000).css('opacity','1');
					$('.rightimg2').delay(1100).animate({right:'27.5%'},900).css('opacity','1');
					$('.rightimg3').delay(1200).animate({right:'25%'},900).css('opacity','1');
					$('.rightimg4').delay(1300).animate({right:'22%'},900).css('opacity','1');
					$('.rightimg5').delay(1400).animate({right:'19%'},900).css('opacity','1');
					$('.rightimg6').delay(1500).animate({right:'16%'},900).css('opacity','1');
					$('.rightimg7').delay(1600).animate({right:'13%'},900).css('opacity','1');
					$('.rightimg8').delay(1700).animate({right:'10%'},900).css('opacity','1');
				}
				fun()
			}
				//返回顶部
				if(scrTop>1400){
					$('.tb-box').show();
				}else{
					$('.tb-box').hide();
				}
				if(scrTop>800){
					$('.goback').show();
				}else{
					$('.goback').hide();
				}
		})
			$('.goback').click(function(){
				gtime=setInterval(function(){
					window.scrollBy(0,-20);
					if(scrTop<=0){
						clearInterval(gtime);
					}
				},5)
			})
		var time=setInterval(fun,2000)
		function fun(){
			sn++;
			if(sn>=$('.mdbox>div').length){
				sn=0;
			}
			$('.mdbox>div').eq(sn).css('opacity','1').siblings().css('opacity','0');
		}
			
})