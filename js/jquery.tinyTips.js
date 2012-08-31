/***********************************************************/
/*                    TinyTips Plugin                      */
/*                      Version: 1.3                       */
/*                      Mike Merritt                       */
/*         https://github.com/mikemerritt/TinyTips         */
/***********************************************************/

(function($) {
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
})(jQuery);