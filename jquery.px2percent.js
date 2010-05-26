/*! JQuery plugin that let you switch from absolute position 
 * and size (top and left) expressed in px to percent (%).
 *
 * By Pierre Ruyssen <pierre@ruyssen.eu>.
 *
 * License: AGPL V3.0.
 * http://www.fsf.org/licensing/licenses/agpl-3.0.html
 */
(function($){

  $.fn.px2percent = function(ref_width, ref_height, zoom_level) {
    /* Switch width, height, top and left css properties
     * of objects to percent (%), if not already.
     * To do so, it uses the given ref_width and ref_height
     * variables (and not the actual sizes of the container).
     *
     * If given, zoom level (in %) will be applied to the ref sizes
     * of the container.
     */
    var x, 
        y,
        position,
        element = $(this);
       
    if(zoom_level) {
      zoom_level /= 100;
      ref_width *= zoom_level;
      ref_height *= zoom_level;
    }

    if(element.css("width").indexOf("px") > -1) {
      // The element size is expressed in px
      element.css({
        width: element.width() / ref_width * 100 + "%",
        height: element.height() / ref_height * 100 + "%"
      });
    }

    if(element.css("top").indexOf("px") > -1) {
      //elements with position in px
      position = element.position();
      element.css({
        left: position.left / ref_width * 100 + "%",
        top: position.top / ref_height * 100 + "%"
      });
    }
    return element;
  };

})(jQuery);

