$(function(){
	//Get the right url to open the photos album page
	function openCategoryPage(clickUrl) {
		var openImageCategroy = clickUrl.attr('class');
		$('.photo-show-container').load(openImageCategroy + '-album-list.html', function(){
			openImagePage();
			photoAblumMasonry();
			goTopStatus();
		});
	}

	//Masonry layout for photos album page
	function photoAblumMasonry() {
		var $container = $('.image-box-wrap');
  		$container.imagesLoaded( function(){
  			$container.masonry({
  				itemSelector: '.image-box',
  				animate: true,
  				isFitWidth: true,
  				isAnimated: true,
  				animationOptions: {
  					duration: 750,
  					easing: 'linear',
  					queue: false
  				}
  			});
  		});
	}

	//Open the photos album list page.
	function openImagePage() {
		$('.image-box a').click(function(){
			$('#toTop').hide();
			var clickLink = $(this).attr('class')+'.html';
			$('.photo-show-container').load(clickLink, function(){
				imageShowFunction();
				goTopStatus();
			});
		});
	}

	//Open the photos list page.
	function imageShowFunction() {
		//Masonry layout for photos page
    	var $gallery = $('.gallery');
    	$gallery.imagesLoaded(function(){
      		$gallery.masonry({
        		itemSelector : 'li',
        		animate: true,
  				isFitWidth: true,
  				isAnimated: true,
  				animationOptions: {
  					duration: 750,
  					easing: 'linear',
  					queue: false
  				}
      		});
    	});
	}

	//Show/Hide Go to Top button function.
	function goTopStatus() {
		var scrollTopDistance = $(window).scrollTop();
		if(scrollTopDistance > 160){
			$('#toTop').fadeIn();
		}else{
			$('#toTop').fadeOut();
		}
	}

	$(window).scroll(function() {
		goTopStatus();
	});

	//Go to top function
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},400);
	});

	//Open the photos category list page.
	$('.photo-category ul li a').click(function(){
		var clickUrl = $(this);
		openCategoryPage(clickUrl);
	});
})