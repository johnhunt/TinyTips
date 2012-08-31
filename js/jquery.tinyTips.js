/***********************************************************/
/*                    TinyTips Plugin                      */
/*                      Version: 1.3                       */
/*                      Mike Merritt                       */
/*         https://github.com/mikemerritt/TinyTips         */
/***********************************************************/

(function($) {
<<<<<<< HEAD
	$.fn.tinyTips = function(options) {
		
		var defaults = {
			content: 'title',
			position: 'top',
			spacing: 8,
			transition: 'fade'
		};
		
		options = $.extend(defaults, options);
		var markup = '<div id="tinytip"></div>';
		$('body').append(markup);
		var tip = $('#tinytip');
		tip.hide();

		// Calculates where to put the tip to keep it from extending off screen. 
		calcPos = function(side, target, tip) {
				var posX;
				var posY;
				var winW = $(window).width();
				var winH = $(window).height();
				var winS = $(window).scrollTop();
				var finalPos = {
					x: 0,
					y: 0
				};

				// Set X for TOP and BOTTOM
				if (side === 'top' || side === 'bottom') {

					posX = target.x-(tip.outerWidth()/2)+(target.w/2);

					if (posX+tip.outerWidth() > winW) {
						var diffX = posX+tip.outerWidth() - winW;
						finalPos.x = posX-diffX;
					} else if (posX < 0) {
						var diffX = Math.abs(posX);
						finalPos.x = posX+diffX;
					} else {
						finalPos.x = posX;
					}

				}

				// Set Y for LEFT and RIGHT
				if (side === 'left' || side === 'right') {
					finalPos.y = target.y+(tip.outerHeight()/2)+(target.h/2);
				}
				
				// Set Y for TOP
				if (side === 'top') {
					posY = target.y-options.spacing;

					if (posY-tip.outerHeight() < 0+winS) {
						var diffY = posY-tip.outerHeight();
						finalPos.y = target.y+tip.outerHeight()+target.h+options.spacing;
					} else {
						finalPos.y = posY;
					}

				// Set Y for BOTTOM
				} else if (side === 'bottom') {
					posY = target.y+tip.outerHeight()+target.h+options.spacing;

					if (posY+tip.outerHeight() > winH+winS) {
						finalPos.y = target.y-options.spacing; 
					} else {
						finalPos.y = posY;
					}

				// Set X for LEFT
				} else if (side === 'left') {
					posX = target.x-tip.outerWidth()-options.spacing;
					
					if (posX < 0) {
						finalPos.x = target.x+target.w+options.spacing
					} else {
						finalPos.x = posX;
					}

				// Set X for RIGHT
				} else if (side === 'right') {
					posX = target.x+target.w+options.spacing;

					if (posX+tip.outerWidth() > winW) {
						finalPos.x = target.x-tip.outerWidth()-options.spacing;
					} else {
						finalPos.x = posX;
					}

				}

				return finalPos;

			}

		$(this).on("mouseover", function() {

			tip.css({top: 0, left: 0});
			tip.append($(this).attr('tt'));

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
				h: tip.outerHeight()
			}

			// Animate tip
			if (options.position === 'top') {
				tip.show().css({opacity: 0, top: tt.y-tt.h+options.spacing, left: tt.x});
			} else if (options.position === 'bottom') {
				tip.show().css({opacity: 0, top: tt.y-tt.h-options.spacing, left: tt.x});
			} else if (options.position === 'left') {
				tip.show().css({opacity: 0, top: tt.y-tt.h, left: tt.x+options.spacing});
			} else if (options.position === 'right') {
				tip.show().css({opacity: 0, top: tt.y-tt.h, left: tt.x-options.spacing});
			}
			
			tip.animate({top: tt.y-tt.h, left: tt.x, opacity: 1});

		});

		$(this).on("mouseout", function() {
			tip.stop().hide();
			tip.text("");
		});
	};
=======
  $.fn.tinyTips = function(options) {
    
    var settings = $.extend({
      content: 'title',
      position: 'top'
    }, options);

    var markup = '<div id="tinytip"></div>';
    var target = $(this);
    var content = $(this).attr('tt');

    $('body').append(markup);
    var tip = $('#tinytip');
    $('#tinytip').hide();

    $(this).on({
      mouseenter: function() {

        // Inject the markup & content into page and hide it.
        $('body').append(markup);
        var tip = $('#tinytip');
        tip.append($(this).attr('tt')).hide();
  
        var pos = $(this).position();
  
        var target = {
          y: pos.top,
          x: pos.left,
          w: $(this).outerWidth(),
          h: $(this).outerHeight(),
          c: $(this).outerWidth()/2
        };
  
        var tooltip = {
          top: {
            y: target.y,
            x: target.x-tip.outer,
            w: tip.outerWidth(),
            h: tip.outerHeight()
          }
        };
  
        tip.css({
          background: "#000000",
          border: "1px solid #ffffff",
          position: 'absolute',
          zindex: 200,
          top: tooltip.top.y,
          left: tooltip.top.x
        });

        console.log("Target: " + target.x + ", " + target.y);
  
        tip.show();
  
      }, 
      mouseleave: function() {
        tip.hide().html("");
      }
    });
  

  }
>>>>>>> core
})(jQuery);