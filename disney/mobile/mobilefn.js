
//Slider
//////////////////////////////////////////////

function slider(){
	var value = 0,
//	loading = $('.loading'),
	$slider_wrapper = $('.slider_wrapper');
	
	$('#p0').css('opacity','1');
	
		//Slider starts here
		$( "#slider" ).slider({
			value:1,
			min: 1,
			max: 8,
			step: 1,
			animate: 'slow',
			change: function( event, ui ) {
			
			lastSlide = ui.value;
			value = ui.value - 1;
			
			$('#p' +value).css('opacity','0');
			$('#p' +lastSlide).css('opacity','0');
			$('.pop-map').css('opacity','0');
			$('#p0').css('opacity','1');
			
		//	$('#slide' +lastSlide).stop().fadeOut(100, "linear");
			
			slideIt();
			activateSliderTitle(value);
			showCont();
			
			
			}
			
		});
		
		//Move to each slide
		function slideIt(){
			var slide_to = parseInt(-1200 * value);
			
			$slider_wrapper.stop().animate({
				left	: slide_to + 'px'
			},500);
		
		}
		
		//Attach slide a tags to link
			$('.slideLink').click(function(event) {
				event.preventDefault();
				var currSlide = parseInt($(this).attr('href'));
				if (currSlide != (currSlide-1)) {
					$('#slider').slider('value', currSlide);
				}
			});
		
		//Change a link text color
		function activateSliderTitle(i) {
			$('#slider-title').find('a').css('color', '#acacac');
			$('#slider-title').find('li:eq('+i+') a').css('color', '#818181');
		}
		
		
		
			//Show function
			function showCont() {
					var coP = ('#slider' +value);
					
					if (value) {
						$('#p' +value).css('opacity','1');
					}
					
					if (value == 2) {
						$('.pop-map').delay(800).animate({opacity: 1, filter:''}, 1500);
					}

					if ( parseInt($(coP).css('opacity')) == 0 ) {
						$(coP).animate({opacity: 1, filter:''}, 2000);
					}

					showCopy();	
				}

				//Show elements - name and how
				function showCopy() {
					if ( value === 0 )	{
						showItem('p0', 'right');
					} else if ( value === 1 ) {
						showItem('p1', 'right');
					} else if ( value === 2 ) {
						showItem('p2', 'right');
						showItem('map1', 'map1');
						showItem('map2', 'map2');
						showItem('map3', 'map3');
					} else if ( value === 3 ) {
						showItem('p3', 'right');
					} else if ( value === 4 ) {
						showItem('p4', 'right');
					} else if ( value === 5 ) {
						showItem('p5', 'right');
					} else if ( value === 6 ) {
						showItem('p6', 'right');
					} else if ( value === 7 ) {
						showItem('p7', 'right');
					} 
				}

				//Show function - name and how animations
				function showItem(name, how) {
					var item = $('#' +name);
				
				//	if ( item.css('display') === 'block' ) return;

					switch (how) {
						case 'right':
						item.show("drop", { direction:"right" }, 1000);
							break;
						case 'map1':
								item.delay(800).fadeIn(800);
							break;
						case 'map2':
								item.delay(800).show("drop", { direction:"left" }, 800);
							break;
						case 'map3':
								item.delay(800).show("drop", { direction:"left" }, 1000);
							break;
						default: 
							item.show();
							break;
					}
				}
		

	
	//MOBILE SWIPE
		$("#parallax").touchwipe({
			wipeLeft: function() {
				var currSlide = value+1;
				if (currSlide < 8) {
					$('#slider').slider('value', currSlide+1);
				}
			},
			wipeRight: function() { 
			 	var currSlide = value+1;
				if (currSlide > 1) {
					$('#slider').slider('value', currSlide-1);
				}
			},
			 preventDefaultEvents: true
		});
	
}


//////////////////////////////////////////////




//Ready
//////////////////////////////////////////////
$(window).load(function(){
	slider();
});

//////////////////////////////////////////////


