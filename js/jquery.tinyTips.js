/***********************************************************/
/*                    TinyTips Plugin                      */
/*                       ersion: 1.3                       */
/*                      Mike Merritt                       */
/*         https://github.com/mikemerritt/TinyTips         */
/***********************************************************/

(function($) {
	$.fn.tinyTips = function(options) {
		
		var defaults = {
			content: 'title',
			position: 'top'
		};
		
		options = $.extend(defaults, options);
		var markup = '<div id="tinytip"></div>';
		$('body').append(markup);
		var tip = $('#tinytip');
		tip.hide();

		$(this).on("mouseover", function() {

			tip.append($(this).attr('tt'));

			var pos = $(this).position();

			var target = {
				y: pos.top,
				x: pos.left,
				w: $(this).outerWidth(),
				h: $(this).outerHeight()
			};

			var tt = {
				top: {
					y: target.y-5,
					x: target.x-(tip.outerWidth()/2)+(target.w/2)
				},
				bot: {
					y: target.y+tip.outerHeight()+target.h+5,
					x: target.x-(tip.outerWidth()/2)+(target.w/2)
				},
				w: tip.outerWidth(),
				h: tip.outerHeight()
			};

			tip.show();
			tip.css({top: tt.top.y-tt.h, left: tt.top.x});

		});

		$(this).on("mouseout", function() {
			tip.hide();
			tip.text("");
		});
	};
})(jQuery);