/***********************************************************/
/*                    TinyTips Plugin                      */
/*                      Version: 1.3                       */
/*                      Mike Merritt                       */
/*         https://github.com/mikemerritt/TinyTips         */
/***********************************************************/

(function($) {
	$.fn.tinyTips = function(options) {
		
		var defaults = {
			content: 'tt',
			position: 'top',
			spacing: 8,
			transition: 'fade',
			arrow: true
		};
		
		options = $.extend(defaults, options);
		var markup = '<div id="tinytip"><div class="arrow"></div></div>';
		var tip;

		// Calculates where to put the tip to keep it from extending off screen. 
		calcPos = function(side, target, tip) {

			var finalPos = {
				x: 0,
				y: 0,
				fPos: '',
			};

			var posCheck = {
				top: true,
				bottom: true,
				left: true,
				right: true
			}

			var pos = {
				top: {
					x: target.x-(tip.outerWidth()/2)+(target.w/2),
					y: target.y-options.spacing
				},
				right: {
					x: target.x+target.w+options.spacing,
					y: target.y+(tip.outerHeight()/2)+(target.h/2)
				},
				bottom: {
					x: target.x-(tip.outerWidth()/2)+(target.w/2),
					y: target.y+tip.outerHeight()+target.h+options.spacing
				},
				left: {
					x: target.x-tip.outerWidth()-options.spacing,
					y: target.y+(tip.outerHeight()/2)+(target.h/2)
				}
			};

			if (pos.top.y-tip.outerHeight() < $(window).scrollTop()) {
				posCheck.top = false;
			}

			if (pos.bottom.y+tip.outerHeight() > $(window).height()+$(window).scrollTop()) {
				posCheck.bottom = false;
			}
			
			if (pos.left.x < 0) {
				posCheck.left = false;
			}

			if (pos.right.x+tip.outerWidth() < $(window).width) {
				posCheck.right = false;
			}

			if (side === 'top' || side ==='bottom') {
				if (pos.top.x < 0) {
					posCheck.top = false;
					posCheck.bottom = false;
				} else if (pos.top.x+tip.outerWidth() > $(window).width()) {
					posCheck.top = false;
					posCheck.bottom = false;
				}
			}

			if (posCheck[side] === true) {
				finalPos.x = pos[side].x;
				finalPos.y = pos[side].y;
				finalPos.fPos = side;
				return finalPos;
			} else {
				for(var s in posCheck) {
					if (posCheck[s] === true) {
						finalPos.x = pos[s].x;
						finalPos.y = pos[s].y;
						finalPos.fPos = s;
						break;
					}
				}
				return finalPos;
			}

		}

		$(this).on("mouseover", function() {

			$('body').prepend(markup);
			tip = $('#tinytip');
			tip.hide()

			tip.css({top: 0, left: 0});
			tip.append($(this).attr('tt'));

			target.

			var pos = $(this).position();

			var target = {
				y: pos.top,
				x: pos.left,
				w: $(this).outerWidth(),
				h: $(this).outerHeight()
			};

			var ttPos = calcPos(options.position, target, tip);

			var tt = {
				x: ttPos.x,
				y: ttPos.y,
				w: tip.outerWidth(),
				h: tip.outerHeight(),
				arX: ttPos.arX,
				arY: ttPos.arY,
				fPos: ttPos.fPos
			}

			if (options.arrow === true) {
				finalSpacing = options.arrow+6;

				if (options.position === 'top') {
					$('#tinytip .arrow').css({
						border: 'solid',  
						content: '', 
						display: 'block', 
						position: 'absolute', 
						zIndex: 101, 
						borderColor: 'rgba(0, 0, 0, 0.8) transparent', 
						borderWidth: '6px 6px 0 6px', 
						bottom: '-6px',
						left: '50%'
					});
				}
			} else {
				finalSpacing = options.arrow;
				$('#tinytip .arrow').remove();
			}

			// Animate tip
			if (options.position === 'top') {
				tip.show().css({opacity: 0, top: tt.y-tt.h+options.spacing+'px', left: tt.x+'px'});
			} else if (options.position === 'bottom') {
				tip.show().css({opacity: 0, top: tt.y-tt.h-options.spacing+'px', left: tt.x+'px'});
			} else if (options.position === 'left') {
				tip.show().css({opacity: 0, top: tt.y-tt.h+'px', left: tt.x+options.spacing+'px'});
			} else if (options.position === 'right') {
				tip.show().css({opacity: 0, top: tt.y-tt.h+'px', left: tt.x-options.spacing+'px'});
			}
			
			tip.animate({top: tt.y-tt.h, left: tt.x, opacity: 1});

		});

		$(this).on("mouseout", function() {
			tip.stop().hide();
			tip.text("");
			tip.remove();

		});
	};
})(jQuery);