/***********************************************************/
/*                    TinyTips Plugin                      */
/*                      Version: 1.3                       */
/*                      Mike Merritt                       */
/*         https://github.com/mikemerritt/TinyTips         */
/***********************************************************/

(function($) {
  $.fn.tinyTips = function(options) {
    
    var defaults = {
      content: 'title',
      position: 'top'
    };
    
    var options = $.extend(defaults, options);
    var markup = '<div id="tinytip"></div>';
    $('body').append(markup);
    $('#tinytip').hide();

    $(this).on("mouseover", function() {

      console.log($(this).attr('tt'));

      $('#tinytip').append($(this).attr('tt'));

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
          y: target.y-20,
          x: target.x
        }
      };

    });
  }
})(jQuery);