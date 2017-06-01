
//Parallax
//////////////////////////////////////////////
function parallax() {
	//(function($) {
		$.fn.parallaxSlider = function(options) {
			var opts = $.extend({}, $.fn.parallaxSlider.defaults, options);
			return this.each(function() {
				var $pxs_container 	= $(this),
				o = $.meta ? $.extend({}, opts, $pxs_container.data()) : opts;

				//GLOBAL PARALLAX VARIABLES

				//the main slider
				var $pxs_slider		= $('.pxs_slider',$pxs_container),
				
				//the elements in the slider
				$elems			= $pxs_slider.children(),
				
				//total number of elements
				total_elems		= $elems.length,
				
				//the bg images
				$pxs_bg1		= $('.pxs_bg1',$pxs_container),
				$pxs_bg2		= $('.pxs_bg2',$pxs_container),
				$pxs_bg3		= $('.pxs_bg3',$pxs_container),
				$pxs_bg         = $('.pxs_bg',$pxs_container),
				
				//current slide
				current			= 0,
	
				//the loading image
				$pxs_loading	= $('.pxs_loading',$pxs_container),
				$pxs_slider_wrapper = $('.pxs_slider_wrapper',$pxs_container);


				//first preload and hide all the images
				var loaded		= 0,
				$images		= $('.pxs_slider_wrapper').find('IMG');
				
				$pxs_bg.hide();
				$pxs_slider_wrapper.hide();
				
				var initLoad = true;
				
				//Start cycle for each image slide
				$images.each(function(){
					var $img	= $(this);
					$('<img/>').load(function(){
						++loaded;
						$img.data('top', $img.css('top'));
						$img.data('left', $img.css('left'));
						$img.data('position', $img.css('position'));
						$img.data('float', $img.css('float'));
						$img.data('display', $img.css('display'));
						
						if(loaded == total_elems){
							$pxs_loading.hide();
							$pxs_bg.show();
							$pxs_slider_wrapper.show();

							//one images width (assuming all images have the same sizes)
							var one_image_w		= $pxs_slider.find('img:first').width();
							
							//Hide slider copy images unless first slide
							$('.pxs_slider li div img').hide();
							$('.pxs_slider li div#slide0 img').show();
							$('#slide0').show();
							$('#slide0').css('opacity', '1');
						
							// init call to fade slide0 in.
							if (initLoad) {
								initLoad = false;
								$('#slide0').css('opacity','0');
								$('#slide0').stop(true, true).animate({opacity: 1, filter:''}, 1000);
								bounce($('#butterfly0'));
								activateSliderTitle(0);
							}
							
							//Slider starts here
							$( "#slider" ).slider({
								value:1,
								min: 1,
								max: 8,
								step: 1,
								animate: 'slow',
								change: function( event, ui ) {
									
									lastSlide = value;
									value = ui.value - 1;
									
									//first hide
									$('#slide' +value).css('opacity','0');
									$('#slide' +lastSlide).stop().fadeOut(100, "linear");
								//	$('#slide' +lastSlide).animate({opacity: 0, filter:''}, 1000);
									
									// pass value to current object and do animation routine
									current = value;
									
									slide(current,
									$pxs_slider,
									$pxs_bg3,
									$pxs_bg2,
									$pxs_bg1,
									o.speed,
									o.easing,
									o.easingBg);
									
									//setTimeout(showCont, 1000);
								}
								
							});
							
						}
					}).attr('src',$img.attr('src'));
				});



			});
		};
		
		var lastSlide, value = 0;
		
		//Show function
		function showCont() {
			var coP = ('#slide' +value);
			var oldP = ('#slide' +lastSlide);
			
			activateSliderTitle(value);
			
			
			if ( parseInt($(coP).css('opacity')) == 0 ) {
				$(coP).fadeIn();
			//	$('#slide' +value).css('display','inline');
				$(coP).animate({opacity: 1, filter:''}, 100);
			//	$(coP).find("img").wrap('div.ui-effects-wrapper');
				$("div.ui-effects-wrapper").css('left','inherit');
			}

		/*	if (value != lastSlide){
			//	$(oldP).find("img").unwrap("div.ui-effects-wrapper");
				//$(oldP img).css();
				
			function animationStop(){
						var el = $(oldP).children("img"); 

						if (el.parent().is( ".ui-effects-wrapper" )) {
							
						
							el.parent().stop(true, true).replaceWith(el);

						} el.stop(true, true);

					} 
				
			}*/
			
			showCopy();	
		//	animationStop();
		}
		
		//Show elements - name and how
		function showCopy() {
			if ( value === 0 )	{
				showItem('co0', 'top');
				showItem('dust0');
				showItem('p0', 'left');
			} else if ( value === 1 ) {
				showItem('p1', 'right');
				showItem('dust1'); glitter($('#dust1'));
				showItem('co1', 'top');
				showItem('markerspace', 'bottom');
				showItem('markerdumbo', 'bottom');
				showItem('markerma', 'bottom');
				showItem('markerb', 'bottom');
				showItem('markertower', 'bottom');
			} else if ( value === 2 ) {
				showItem('p2', 'right');
				showItem('dust2'); glitter($('#dust2'));
				showItem('co2', 'top');
				showItem('map1', 'map1');
				showItem('map2', 'map2');
				showItem('map3', 'map3');
				
			} else if ( value === 3 ) {
				showItem('p3', 'right');
				showItem('dust3'); glitter($('#dust3'));
				showItem('co3', 'top');
				showItem('cloud1', 'float');
				showItem('cloud2', 'float');
			} else if ( value === 4 ) {
				showItem('p4', 'right');
				showItem('dust4'); glitter($('#dust4'));
				showItem('co4', 'top');
			} else if ( value === 5 ) {
				showItem('p5', 'right');
				showItem('dust5'); glitter($('#dust5'));
				showItem('co5', 'bottom');
				showItem('stargoof', 'top');
				showItem('starbelle', 'top');
				showItem('stardumbo', 'top');
				showItem('starteapot', 'top');
				showItem('startower', 'top');
				showItem('starback', 'top');
			} else if ( value === 6 ) {
				showItem('p6', 'right');
				showItem('dust6'); glitter($('#dust6'));
				showItem('co6', 'top');
				showItem('rankmad', 'bottom');
				showItem('rank2fam', 'bottom');
				showItem('rank5fam', 'bottom');
				showItem('rank18fam', 'bottom');
			} else if ( value === 7 ) {
				showItem('p7', 'right');
				showItem('dust7'); glitter($('#dust7'));
				showItem('co7', 'top');
				showItem('ex7', 'bounce');
			} 
		}
		
		//ANIMATION FOR COPY & EXTRA ELEMENTS
		//Show function - name and how animations
		function showItem(name, how) {
			var item = $('#slide' +value).find('#'+name);
			
			restoreCSS(item, 1);
						
			if ( item.css('display') === 'block' ) return;
			
			switch (how) {
				case 'top': 
					item.show("drop", { direction:"up" }, 1000);
					break;
				case 'bottom': 
					item.show("drop", { direction:"down" }, 1000);
					break;
				case 'right':
						item.show("drop", { direction:"right" }, 1000);
					break;
				case 'left':
						item.show("drop", { direction:"left" }, 1000);
					break;
				case 'float':
						// show("drop"...) doesn't transition images in properly in IE7, so just showing it.
						if ($.browser.msie && parseInt($.browser.version, 10) < 9){
							item.show();
						} else {
							item.show("drop", { direction:"right" }, 5000);
						}
					break;
				case 'bounce':
						if ($.browser.msie && parseInt($.browser.version, 10) < 9){
							item.show();
						} else {
							item.show("bounce",{distance:40}, 800);
						}
					break;
				case 'map1':
						item.delay(400).fadeIn(800);
					break;
				case 'map2':
						item.delay(400).show("drop", { direction:"left" }, 800);
					break;
				case 'map3':
						item.delay(400).show("drop", { direction:"left" }, 1000);
					break;
						
				default: 
					item.show();
					break;
			}
		}
		
	function restoreCSS(item, op) {
			item.css({
						'top': item.data('top'), 
						'left': item.data('left'),
						'position': item.data('position'),
						'float': item.data('float'),
						'display': item.data('display'),
						'opacity': op, 
						'filter':''});
		} 
	
		function glitter(obj) {
			obj.animate({
				opacity: 0.75
			}, 1000, function() {
				obj.animate({
					opacity: 1
				}, 1000, function() {
					glitter(obj);
				}) 
			}); 
		} 
	

		function bounce(obj) {
			obj.animate({
				top: "+=10"
			}, 1000, function() {
				obj.animate({
					top: "-=10"
				}, 1000, function() {
					bounce(obj);
				}) 
			}); 
		} 
		
		//the current windows width
		var w_w	= 1200; //can set to browser width to make all elements adjust to fit browser - currently fixed on 1200

		var slide = function(current,
		//function slide(current, 
		$pxs_slider,
		$pxs_bg3,
		$pxs_bg2,
		$pxs_bg1,
		speed,
		easing,
		easingBg){
			
			var slide_to	= parseInt(-w_w * current);
			$pxs_slider.stop().animate({
				left	: slide_to + 'px'
			},speed, easing);
			//nothing currently on bg3
			$pxs_bg3.stop().animate({
				left	: slide_to/1.5 + 'px'
			},speed, easingBg);
			$pxs_bg2.stop().animate({
				left	: slide_to/2 + 'px'
			},speed, easingBg);
			$pxs_bg1.stop().animate({
				left	: slide_to/4 + 'px'
			},speed, easingBg, showCont);				
			
		}
		
		$('.slideLink').click(function(event) {
			event.preventDefault();
			var currSlide = parseInt($(this).attr('href'));
			if (value != (currSlide-1)) {
				$('#slider').slider('value', currSlide);
			}
		});
		
		function activateSliderTitle(i) {
			$('#slider-title').find('a').css('color', '#acacac');
			$('#slider-title').find('li:eq('+i+') a').css('color', '#818181');
			
		}
		
/*		function removeStyle(){ 
		$('.ui-effects-wrapper').removeAttr('style');  
		$('.pxs_slider div').removeClass('ui-effects-wrapper');
		$('.pxs_slider div div').unwrap();
		$('.ui-effects-wrapper').remove() 
			}
*/

		$.fn.parallaxSlider.defaults = {
			speed			: 2000,//speed of each slide animation
			easing			: 'jswing',//easing effect for the front slide animation
			easingBg		: 'jswing',//easing effect for the background parallax layers animation
			circular		: true//circular slider
		};
		//easeInOutExpo,easeInBack
		
		
	//})(jQuery);

	$(function() {
		var $pxs_container	= $('#pxs_container');
		$pxs_container.parallaxSlider();
	});
     
}

//////////////////////////////////////////////




//Ready
//////////////////////////////////////////////
$(window).load(function(){
	parallax(); //Parallax
});

//////////////////////////////////////////////



//Plugins
//////////////////////////////////////////////

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

//////////////////////////////////////////////
