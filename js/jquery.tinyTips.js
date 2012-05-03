/***********************************************************/
/*                    TinyTips Plugin                      */
/*                      Version: 1.3                       */
/*                      Mike Merritt                       */
/*         https://github.com/mikemerritt/TinyTips         */
/***********************************************************/

(function($) {
  $.fn.tinyTips = function(options) {
    
    var defaults = {
      content: 'title'
    };
    
    var options = $.extend(defaults, options);
    var markup = '<div id="tinytip"></div>';
    $('body').append(markup);
    $('#tinytip').hide();

    $(this).on("mouseover", function() {

      var pos = $(this).position();

      var target = {
        y: pos.top,
        x: pos.left,
        w: $(this).outerWidth(),
        h: $(this).outerHeight()
      };

      console.log(target);

    });
  }
})(jQuery);