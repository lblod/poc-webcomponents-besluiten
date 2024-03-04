
/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n=r(a.hash);if("#"===n){if(!A.topOnEmptyHash)return;t=document.documentElement}else t=document.querySelector(n);(t=t||"#top"!==n?t:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(t,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});

// Generated by CoffeeScript 1.12.3

/**
@license Sticky-kit v1.1.4 | MIT | Leaf Corcoran 2015 | http://leafo.net
 */

(function() {
  var $, doc, win;

  $ = window.jQuery;

  win = $(window);
  doc = $(document);

  $.fn.stick_in_parent = function(opts) {
    var doc_height, elm, enable_bottoming, fn, i, inner_scrolling, len, manual_spacer, offset_top, outer_width, parent_selector, recalc_every, ref, sticky_class, win_height;
    if (opts == null) {
      opts = {};
    }
    sticky_class = opts.sticky_class, inner_scrolling = opts.inner_scrolling, recalc_every = opts.recalc_every, parent_selector = opts.parent, offset_top = opts.offset_top, manual_spacer = opts.spacer, enable_bottoming = opts.bottoming;
    win_height = win.height();
    doc_height = doc.height();
    if (offset_top == null) {
      offset_top = 0;
    }
    if (parent_selector == null) {
      parent_selector = void 0;
    }
    if (inner_scrolling == null) {
      inner_scrolling = true;
    }
    if (sticky_class == null) {
      sticky_class = "is_stuck";
    }
    if (enable_bottoming == null) {
      enable_bottoming = true;
    }
    outer_width = function(el) {
      var _el, computed, w;
      if (window.getComputedStyle) {
        _el = el[0];
        computed = window.getComputedStyle(el[0]);
        w = parseFloat(computed.getPropertyValue("width")) + parseFloat(computed.getPropertyValue("margin-left")) + parseFloat(computed.getPropertyValue("margin-right"));
        if (computed.getPropertyValue("box-sizing") !== "border-box") {
          w += parseFloat(computed.getPropertyValue("border-left-width")) + parseFloat(computed.getPropertyValue("border-right-width")) + parseFloat(computed.getPropertyValue("padding-left")) + parseFloat(computed.getPropertyValue("padding-right"));
        }
        return w;
      } else {
        return el.outerWidth(true);
      }
    };
    ref = this;
    fn = function(elm, padding_bottom, parent_top, parent_height, top, height, el_float, detached) {
      var bottomed, detach, fixed, last_pos, last_scroll_height, offset, parent, recalc, recalc_and_tick, recalc_counter, spacer, tick;
      if (elm.data("sticky_kit")) {
        return;
      }
      elm.data("sticky_kit", true);
      last_scroll_height = doc_height;
      parent = elm.parent();
      if (parent_selector != null) {
        parent = parent.closest(parent_selector);
      }
      if (!parent.length) {
        throw "failed to find stick parent";
      }
      fixed = false;
      bottomed = false;
      spacer = manual_spacer != null ? manual_spacer && elm.closest(manual_spacer) : $("<div />");
      if (spacer) {
        spacer.css('position', elm.css('position'));
      }
      recalc = function() {
        var border_top, padding_top, restore;
        if (detached) {
          return;
        }
        win_height = win.height();
        doc_height = doc.height();
        last_scroll_height = doc_height;
        border_top = parseInt(parent.css("border-top-width"), 10);
        padding_top = parseInt(parent.css("padding-top"), 10);
        padding_bottom = parseInt(parent.css("padding-bottom"), 10);
        parent_top = parent.offset().top + border_top + padding_top;
        parent_height = parent.height();
        if (fixed) {
          fixed = false;
          bottomed = false;
          if (manual_spacer == null) {
            elm.insertAfter(spacer);
            spacer.detach();
          }
          elm.css({
            position: "",
            top: "",
            width: "",
            bottom: ""
          }).removeClass(sticky_class);
          restore = true;
        }
        top = elm.offset().top - (parseInt(elm.css("margin-top"), 10) || 0) - offset_top;
        height = elm.outerHeight(true);
        el_float = elm.css("float");
        if (spacer) {
          spacer.css({
            width: outer_width(elm),
            height: height,
            display: elm.css("display"),
            "vertical-align": elm.css("vertical-align"),
            "float": el_float
          });
        }
        if (restore) {
          return tick();
        }
      };
      recalc();
      if (height === parent_height) {
        return;
      }
      last_pos = void 0;
      offset = offset_top;
      recalc_counter = recalc_every;
      tick = function() {
        var css, delta, recalced, scroll, will_bottom;
        if (detached) {
          return;
        }
        recalced = false;
        if (recalc_counter != null) {
          recalc_counter -= 1;
          if (recalc_counter <= 0) {
            recalc_counter = recalc_every;
            recalc();
            recalced = true;
          }
        }
        if (!recalced && doc_height !== last_scroll_height) {
          recalc();
          recalced = true;
        }
        scroll = win.scrollTop();
        if (last_pos != null) {
          delta = scroll - last_pos;
        }
        last_pos = scroll;
        if (fixed) {
          if (enable_bottoming) {
            will_bottom = scroll + height + offset > parent_height + parent_top;
            if (bottomed && !will_bottom) {
              bottomed = false;
              elm.css({
                position: "fixed",
                bottom: "",
                top: offset
              }).trigger("sticky_kit:unbottom");
            }
          }
          if (scroll < top) {
            fixed = false;
            offset = offset_top;
            if (manual_spacer == null) {
              if (el_float === "left" || el_float === "right") {
                elm.insertAfter(spacer);
              }
              spacer.detach();
            }
            css = {
              position: "",
              width: "",
              top: ""
            };
            elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");
          }
          if (inner_scrolling) {
            if (height + offset_top > win_height) {
              if (!bottomed) {
                offset -= delta;
                offset = Math.max(win_height - height, offset);
                offset = Math.min(offset_top, offset);
                if (fixed) {
                  elm.css({
                    top: offset + "px"
                  });
                }
              }
            }
          }
        } else {
          if (scroll > top) {
            fixed = true;
            css = {
              position: "fixed",
              top: offset
            };
            css.width = elm.css("box-sizing") === "border-box" ? elm.outerWidth() + "px" : elm.width() + "px";
            elm.css(css).addClass(sticky_class);
            if (manual_spacer == null) {
              elm.after(spacer);
              if (el_float === "left" || el_float === "right") {
                spacer.append(elm);
              }
            }
            elm.trigger("sticky_kit:stick");
          }
        }
        if (fixed && enable_bottoming) {
          if (will_bottom == null) {
            will_bottom = scroll + height + offset > parent_height + parent_top;
          }
          if (!bottomed && will_bottom) {
            bottomed = true;
            if (parent.css("position") === "static") {
              parent.css({
                position: "relative"
              });
            }
            return elm.css({
              position: "absolute",
              bottom: padding_bottom,
              top: "auto"
            }).trigger("sticky_kit:bottom");
          }
        }
      };
      recalc_and_tick = function() {
        recalc();
        return tick();
      };
      detach = function() {
        detached = true;
        win.off("touchmove", tick);
        win.off("scroll", tick);
        win.off("resize", recalc_and_tick);
        $(document.body).off("sticky_kit:recalc", recalc_and_tick);
        elm.off("sticky_kit:detach", detach);
        elm.removeData("sticky_kit");
        elm.css({
          position: "",
          bottom: "",
          top: "",
          width: ""
        });
        parent.position("position", "");
        if (fixed) {
          if (manual_spacer == null) {
            if (el_float === "left" || el_float === "right") {
              elm.insertAfter(spacer);
            }
            spacer.remove();
          }
          return elm.removeClass(sticky_class);
        }
      };
      win.on("touchmove", tick);
      win.on("scroll", tick);
      win.on("resize", recalc_and_tick);
      $(document.body).on("sticky_kit:recalc", recalc_and_tick);
      elm.on("sticky_kit:detach", detach);
      return setTimeout(tick, 0);
    };
    for (i = 0, len = ref.length; i < len; i++) {
      elm = ref[i];
      fn($(elm));
    }
    return this;
  };

}).call(this);

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));
//global functions helpers for frontend
if (!Element.prototype.matches) {
	Element.prototype.matches = 
	Element.prototype.matchesSelector || 
	Element.prototype.mozMatchesSelector ||
	Element.prototype.msMatchesSelector ||
	Element.prototype.oMatchesSelector ||
	Element.prototype.webkitMatchesSelector ||
	function (s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
			i = matches.length;
		while (--i >= 0 && matches.item(i) !== this) { }
		return i > -1;
	};
}
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function (search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
		return this.substring(this_len - search.length, this_len) === search;
	};
}

//gebruikt om de scrollbar width te vinden toepasbaar om een  goeie gridfloatbreakpoint berekening in javascript zie startup

function getScrollbarWidth() {
	return window.innerWidth - document.documentElement.clientWidth;
}

(function ($) {
	$.fn.isBrowserEdge = function () {
		var $this = $(this);
		return typeof CSS !== 'undefined' && CSS.supports("(-ms-ime-align:auto)");
	};
})(jQuery);

function setDataUserAgent() {
	var b = document.documentElement;
	b.className = b.className.replace('no-js', 'js');
	b.setAttribute("data-useragent", navigator.userAgent);
	b.setAttribute("data-platform", navigator.platform);
}

$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};

//-- Check overflow horizontal en vertical
(function ($) {
	$.fn.hasOverflow = function () {
		var $this = $(this);
		return $this[0].scrollHeight > Math.round($this.outerHeight()) ||
			$this[0].scrollWidth > Math.round($this.outerWidth());
	};
})(jQuery);

//--check hasScrollVertical
(function ($) {
	$.fn.hasScrollVertical = function () {
		var $this = $(this);
		return $this[0].scrollHeight > Math.round($this.outerHeight());
	};
})(jQuery);

//--check hasScrollHorizontal
(function ($) {
	$.fn.hasScrollHorizontal = function () {
		var $this = $(this);
		return Math.round($this[0].scrollWidth) > Math.round($this.outerWidth());
	};
})(jQuery);

//-- Verwijder alle klasses met bepaald voorvoegsel
$.fn.removeClassLike = function (name) {
	return this.removeClass(function (index, css) {
		return (css.match(new RegExp('\\b(' + name + '\\S*)\\b', 'g')) || []).join(' ');
	});
};

//-- check items op verschillende rijen op basis van matchHeight plugin js/jquery-match-height-master/jquery.matchHeight.js
function checkRow(container, items) {
	var el = $(container),
		rowCount = 0,
		classPrefix = 'row-';

	$(window).on('load resize', function (e) {
		var elItems = el.find(items);
		//clear
		el.removeClass('has-rows');
		elItems.removeClass('new-row end-row even odd').removeClassLike(classPrefix);

		var rows = $.fn.matchHeight._rows(elItems);
		// console.log(rows);

		//clear
		rowCount = 0;

		if (rows.length > 1) {
			el.addClass('has-rows');
			rows = $.fn.matchHeight._rows(elItems);
		} else {
			el.removeClass('has-rows');
			elItems.removeClassLike(classPrefix);
		}

		$.each(rows, function (i, row) {
			rowCount++;
			if (i % 2 === 0) {
				/* we are even */
				row.addClass('odd');

			} else {
				/* we are odd */
				row.addClass('even');
			}
			row.addClass(classPrefix + rowCount);
			row.first().addClass('new-row');
			row.last().addClass('end-row');
		});
	});
}

//--Check floatcollapse
function checkFloats(container, items, screenWidth) {
	var $this = $(container),
		currentRowStart = 0,
		topPosition = 0,
		currentItems = $this.find(items);
	// console.log(currentItems.length);

	if (screenWidth === undefined || screenWidth === null) {
		screenWidth = gridFloatBreakpoint; //grid float breakpoints: 320, 544, //--480px, 768px, 992px, 1200px
	}
	if (currentItems.length >= 1) {
		$('#inner-wrap, .navbar-default').removeClass('has-hamburger');

		currentItems.each(function (teller) {
			currentElement = $(this);
			topPostion = Math.ceil(currentElement.position().top);
			// if ($(document).width() >= screenWidth) {
			if (currentRowStart !== topPostion) {
				$('#inner-wrap, .navbar-default').addClass('has-hamburger');
			}
			// }
		});
	}
}

//-- accessibility tabben enkel in modal open
disableTabModalShown = function (el) {
	var modal = el,
		focusableChildren = modal.find('a[href], a[data-dismiss], area[href], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]').not(':hidden'),
		numElements = focusableChildren.length,
		currentIndex;

	currentIndex = -1;
	// $(document.activeElement).blur();
	// if (modal.hasClass('header-search')) {
	// 	currentIndex = 1;
	// }
	// } else {
	// 	$(document.activeElement).blur();
	// }
	// if ( $('#search').hasClass('selected')) {
	// 	currentIndex = focusableChildren[currentIndex];
	// } else {
	// 	currentIndex = -1;
	// }
	// console.log(modal);
	// console.log(focusableChildren,numElements);

	var focus = function () {
		var focusableElement = focusableChildren[currentIndex];
		if (focusableElement)
			focusableElement.focus();
	};

	var focusPrevious = function () {
		currentIndex--;
		if (currentIndex < 0)
			currentIndex = numElements - 1;

		focus();
		return false;
	};

	var focusNext = function () {
		currentIndex++;
		if (currentIndex >= numElements)
			currentIndex = 0;

		focus();
		return false;
	};

	$(document).on('keydown', function (e) {
		if (e.keyCode === 9 && e.shiftKey) {
			e.preventDefault();
			focusPrevious();
		}
		else if (e.keyCode === 9) {
			e.preventDefault();
			focusNext();
		}
	});
}

//easing geplukt van jquery easing gebruikt voor de scrollto functie
$.easing.elasout = function (x, t, b, c, d) {
	var s = 1.70158; var p = 0; var a = c;
	if (t === 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
	if (a < Math.abs(c)) { a = c; var s = p / 4; }
	else var s = p / (2 * Math.PI) * Math.asin(c / a);
	return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};

//-- Functions
//-- Check als het een nummer is
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}


//probeersel focus-within
// function checkFocuswithin() {
// 	var $focus = $('.check-focus-within');
// 	if ($focus.length > 0) {
// 		$focus.find('a, button').focus(function() {
// 			$(this).parents('.check-focus-within').removeClass('focus-within')
// 			var className = $(this).attr('class').match(/\S*__link\b/i);
// 			console.log(className);
// 			if (!className) {
// 				$(this).parents('.check-focus-within').addClass('focus-within');
// 			} else {
// 				$(this).parents('.check-focus-within').removeClass('focus-within')
// 			}
// 		});
// 	}	
// }



var Scroller = {
    scrollers: null,
    init: function () {
        var that = this;
        that.scrollers = $("[data-scroller]");
        if (that.scrollers.length > 0) {
            that.checkHorizontalScroll();
            $(window).on('resize', function (e) {
                that.checkHorizontalScroll();
            });
            $(document).on('click', 'button[data-scroll]', function (e) {
                e.preventDefault();
                var btn = $(this);
                that.goTo(btn);           
            });
        }
    },
    checkHorizontalScroll: function () {
        var that = this;
        that.scrollers.each(function (i) {
            var scrollZone = $(this),
                elFade = scrollZone.parents('.' + that.scrollers.attr('data-scroller'));
       
            if (scrollZone.hasScrollHorizontal()) {
                var scrollLeftPos = scrollZone.scrollLeft();

                if (scrollLeftPos > 0) {
                    elFade.addClass('fade-left')
                        .find('.btn-scroll.prev').removeClass('hidden');
                } else {
                    elFade.removeClass('fade-left')
                        .find('.btn-scroll.prev').addClass('hidden');
                }

                if (scrollLeftPos + scrollZone.width() === scrollZone[0].scrollWidth) {
                    elFade.removeClass('fade-right')
                        .find('.btn-scroll.next').addClass('hidden');
                 
                } else {
                    elFade.addClass(' fade-right')
                        .find('.btn-scroll.next').removeClass('hidden');
                }
            } 
        });
    },
    goTo: function (btn) {
        var that = this;
        var scrollzone = btn.parent().find('[data-scroller]');
        var currentScrollPos = scrollzone.scrollLeft();
        var width = scrollzone.innerWidth() / 2 ;
        var scroll = btn.hasClass('prev') ? width : - width; 
  
        scrollzone.stop().animate({
            scrollLeft: currentScrollPos - scroll
        }, {
            duration: 250,
            complete: function () { Scroller.checkHorizontalScroll(); }
        });

   ;
    }  
}

Scroller.init();


var Cookie = {
    set: function (cookiename, noOfDays, value) {

        var c_value = escape(value) + ";Path=/;samesite=lax;";

        if (noOfDays !== null) {

            var exdate = new Date();
            exdate.setDate(exdate.getDate() + parseInt(noOfDays));
            c_value += " expires=" + exdate.toUTCString();
        }
        if (window.location.protocol.indexOf('https') > -1) {
            c_value += ";secure"
        }

    document.cookie = cookiename + "=" + c_value;
    },
    get: function (cookiename) {
        var name = cookiename + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    remove: function (cookiename) {
        document.cookie = cookiename + "=;Path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
};
var listAnchorsItems = null;
var isScrolling = false;
var scrollTimer = null;
var scrollTimerClick = null;

function scrollto() {
    /*
    //:: oldskool deprecated: niet werken op ie, edge :: animate scrolltop geeft een jump met offset
    $(document).on('click', '[data-scrollto]', function (e) {
        e.preventDefault();
        var el = $(this),
            elGoto = $(el.attr('href')),
            top = elGoto.offset().top; //-- base not sticky header

        // if (el.data('scrollto') === "totop") { }
        if (el.data('scrollto') === "az") {
            top = elGoto.offset().top - stickySpacing;
        }

        $("body, html").scrollTop(top);
    });
    */

    //check totop bij het laden
    checkTopposition();

    // Show or hide the sticky footer button
    $window.on('scroll', checkTopposition);

    $(document).on("scroll", onScroll).on('click', 'a[data-scrollto]', function () {
        isScrolling = true;
        // console.log('click', isScrolling);
        var li = $(this).parent();
        $('.side-bar .box__block .list li, .list-anchors li, .side-bar .box__block .nav-az li').not(li).removeClass('active');

        li.addClass('active');

        if (scrollTimerClick !== null)
            clearInterval(scrollTimerClick);

        scrollTimerClick = setTimeout(function () { isScrolling = false; }, 500);
    });

    listAnchorsItems = $('.page-content h2[id]');
    CheckActiveAnchors();  

    //documentation zie: https://github.com/cferdinandi/smooth-scroll
    var scroll = new SmoothScroll('[data-scrollto], a[href*="#"]', {
        emitEvents: true, 
        speed: 500,
        speedAsDuration: true,
        updateURL: false, // Update the URL on scroll = e.preventdefault
        // Easing
        easing: 'EaseIn', // Easing pattern to use
        // header: '[data-scroll-header]',
        offset: function (anchor, toggle) {
            // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            // This example is a function, but you could do something as simple as `offset: 25`
            // console.log(anchor, toggle);
            // console.log(toggle.getAttribute('data-scrollto'));

            if ( toggle.getAttribute('data-scrollto') === 'az' || toggle.getAttribute('data-scrollto') === 'filter' || toggle.getAttribute('href').startsWith('#') ) {
                return stickySpacing;
            } else {
                return 0;
            }
        },
    });

    // Listen for scroll events
    document.addEventListener('scrollStop', logScrollEvent, false);
    document.addEventListener('scrollStart', logScrollEvent, false);
    // document.addEventListener('scrollCancel', logScrollEvent, false);
}

function onScroll(event) {
    checkTopposition();
    // console.log(isScrolling);
    //-- scrollspy check
    if (isScrolling === false) {
        if (scrollTimer !== null)
            clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () { CheckActiveAnchors(); }, 100);
    }
}

// Log scroll events
var logScrollEvent = function (event) {
    // console.log(event.detail.anchor.classList);

    if (event.type === 'scrollStop') {
		event.detail.anchor.removeAttribute('style');
		event.detail.anchor.removeAttribute('tabindex');
		// console.log(event.detail.anchor.classList);
		// console.log('toggle:', event.detail.toggle);
		// console.log('anchor:', event.detail.anchor);
        if (event.detail.anchor.getAttribute('ID') === 'content-main' && $('section.atoz').length > 0) {
			$(event.detail.anchor)
				.find('.page-content')
				.attr('tabindex', -1)
				.trigger('focus')
				.removeAttr('tabindex');
		}
	} else if (event.type === 'scrollStart') {
        isScrolling = true;
        if (scrollTimerClick !== null)
            clearInterval(scrollTimerClick);

        scrollTimerClick = setTimeout(function () { isScrolling = false; }, 600);
    }
};

function CheckActiveAnchors() {
    if (listAnchorsItems.length > 0) {
        var fromTop = $(window).scrollTop();

        listAnchorsItems.each(function () {
            var top = $(this).offset().top - 10;
            var li = $('.side-bar .box__block .list li a[href="#' + $(this).attr('id') + '"]').parent();
            if (fromTop >= top) {

                $('.side-bar .box__block .list li').not(li).removeClass('active');

                li.addClass('active');

            } else {
                li.removeClass('active');
            }
        });
    }
}
//-- Check wanneer totop knop getoond mag worden
function checkTopposition() {
	var totop = $('#totop');

	if (!$('html.no-scroll').length > 0) {
		checkScrollposition(totop);
	}
}

//-- Functionaliteit wanneer totop knop getoond is
function checkScrollposition(elShowhide) {
	var elShowcheck = $('.brand').innerHeight(),
		elFooter = $('#footer');
		footerCheck = $(document).height() - elFooter.innerHeight(),
		totop = $('.toppos');

	if ($(this).scrollTop() > elShowcheck) {
		elShowhide.fadeIn('fast');
		$('.scroll-down').addClass('hidden').hide();
		// icordisBtn.css({
		// 	'top': '-100%'
		// });
	} else {
		elShowhide.fadeOut('fast');
		//icordisBtn.removeAttr('style');
		if ($('body.home').length > 0) {
			$('.scroll-down').removeClass('hidden').show();
		}
	}

	if (Math.round($(window).scrollTop()) + $(window).height() > footerCheck) {
		totop.addClass('animate');
		totop.css({
			bottom: Math.round($(window).scrollTop()) + $(window).height() - footerCheck + 15, // position boven de footer met spacing
			// bottom: elFooter.innerHeight() + 30 / 2, // position boven de footer met spacing
		});
	} else {
		totop.removeAttr('style').removeClass('animate');
	}
	
	// else {
	// if ($(document).width() >= gridFloatBreakpoint) {
	// 	totop.addClass('animate');
		
	// 		totop.removeAttr('style');
	// 	}
	// } else {
	// 	totop.removeAttr('style').removeClass('animate');;
	// }
};



//Hoogte van de banner berekenen
function checkElVh(el, screenWidth) {
	if (el === undefined || el === null) {
		el = $('.header');
	}
	if (screenWidth === undefined || screenWidth === null) {
		screenWidth = gridFloatBreakpoint; //grid float breakpoints: 320, 544, //--480px, 768px, 992px, 1200px
	}

	if ($('body.home').length > 0) {
		$(window).on("load resize", checkBannerheight);
	}

	function checkBannerheight() {
		if ($(document).width() >= screenWidth) {
			el.css({
				'minHeight': $(window).height()
			});
			// $('.header-right').css({
			// 	'top': ( $(window).height() - $('.header-right').innerHeight() ) / 2
			// })

		} else {
			el.removeAttr('style');
			// $('.header-right').removeAttr('style');
		}
	}
}


function setOffcanvasHeaderOffset() {
	var offcanvasHeaderOffset =
		$('.header-main').offset().top +
		$('.header-main').innerHeight() -
		Math.round($(window).scrollTop());

	$('.header-nav-overlay, .header-nav').css({
		top: offcanvasHeaderOffset,
	});
}
var isFooterParallax = false;

//-- Bij minder content footer onderaan de pagina houden
// ! let op isFooterParallax true of false
function footerFixedBottom(el) {
	var elFooter = $('#footer'),
		footerHeight = elFooter.outerHeight(),
		windowHeight = $(window).height(), 
		filterMoved = false;

	// $('#inner-wrap').css({

	if (!el) {
		if ($('#inner-wrap').height() < windowHeight) {
			$('#footer').css({
				'position': 'absolute',
				'bottom': 0,
				'width': '100%'
			});

			if ($('div[data-filter="fixed"]').length > 0) {
				var elf = $('div[data-filter="fixed"]');

				if (!filterMoved) {
					var elReadytomove = elf.detach();
					$('<div/>', {
						class: 'container',
						html: elReadytomove
					}).prependTo(elFooter);
				}
				filterMoved = true;
			}

			$('#inner-wrap').css({
				'minHeight': windowHeight,
				'paddingBottom': footerHeight
			});
			$('.toppos').css({
				'bottom': footerHeight + 30
			});
		} else {
			$('#footer, #inner-wrap').removeAttr('style');
		}
	} else {
		// console.log(windowHeight + "--" + footerHeight);
		if (footerHeight < windowHeight) {
			$('#footer').css({
				'position': 'fixed',
				'bottom': 0,
				'left': 0,
				'width': '100%'
			});
			$('#inner-wrap').css({
				'marginBottom': footerHeight
			});
		} else {
			$('#footer, #inner-wrap').removeAttr('style');
		}
	}
}

var Menu = {
	menuType: null,
	resizeTimer: null,
	dropdownNavMenuWith: 0,
	navContainer: null,
	overlayActive: false,
	
	init: function () {
		var that = this;
		that.navContainer = $('.nav-main');
		that.menuType = $('body').attr('data-menu');
		if (that.menuType === 'dropdown') {
			that.calcMenuWidth();
			that.doDropdown();
			that.checkDropDownSubMenuPosition();
			that.doCheckDropdownOrHamburger();

			$(window).on('resize', function (e) {
				Menu.dowindowResize();
			});

		}
		that.doHamburgerMenu();

		//that.checkActiveState();
	},

	calcMenuWidth: function () {
		var that = this;
		that.navContainer.children('li').each(function () {
			var li = $(this);
			that.dropdownNavMenuWith += Math.ceil(
				li.width() - (li.find('a').width() - li.find('span').width())
			);
		});
		//top menu extra items check
	},

	doCheckDropdownOrHamburger: function () {
		var that = this;
		var availablespace = $('.header__main div:first').width();
		if (that.dropdownNavMenuWith > availablespace) {
			$('.navigation-main, .header').addClass('has-hamburger');
		} else {
			$('.navigation-main, .header').removeClass('has-hamburger');
		}
	},

	doDropdown: function () {
		var that = this;
		$(document)
			.on('mouseenter', 'nav li.dropdown', function () {
				var li = $(this);
				li.addClass('open');

				var a = li.find('a');
				a.attr('aria-expanded', 'true');
			})
			.on('mouseleave', 'nav li.dropdown', function () {
				var li = $(this);
				li.removeClass('open');

				var a = li.find('a');
				a.attr('aria-expanded', 'false');
			});
	},
	checkDropDownSubMenuPosition: function () {
		var windowWidth = $(window).width();
		var dropdownItems = $('nav .dropdown__menu');
		dropdownItems
			.removeClass('dropdown__menu--left')
			.removeClass('dropdown__menu--right')
			.removeClass('dropdown__menu--center');
		dropdownItems.each(function (e) {
			var dropdownMenu = $(this);
			var parentPosition = dropdownMenu.parent().offset().left;
			var dropDownMenuWidth = parentPosition + dropdownMenu.outerWidth();
			if (dropDownMenuWidth > windowWidth) {
				dropdownMenu.addClass(
					dropDownMenuWidth - dropdownMenu.outerWidth() < 0
						? 'dropdown__menu--center'
						: 'dropdown__menu--right'
				);
			} else {
				dropdownMenu.addClass('dropdown__menu--left');
			}
		});
	},
	doHamburgerMenu: function () {
		var that = this;

		var positionElement = $('[data-menu-position]');

		$(window).on('resize', function (e) {
			Menu.setHamburgerMenuPosition(positionElement);
		});

		$(document).on('click', '[data-toggle="offcanvas"]', function () {
			that.setHamburgerMenuPosition(positionElement);
			var HamburgerTriggers = $('[data-toggle="offcanvas"]');

			$('body').toggleClass('active');

			if (that.overlayActive === false) {
				that.overlayActive = true;
				HamburgerTriggers.not('[class*="-overlay"]')
					.attr('aria-expanded', 'true')
					.addClass('is-active');

				$('.header__nav')
					.addClass('is-active')
					.attr('tabindex', -1)
					.focus();

				$('html').addClass('no-scroll');
				disableTabModalShown($('.header__nav'));
				Scroller.checkHorizontalScroll();
			} else {
				that.overlayActive = false;
				HamburgerTriggers.not('[class*="-overlay"]')
					.attr('aria-expanded', 'false')
					.removeClass('is-active');

				$('.header__nav')
					.removeClass('is-active')
					.delay(800)
					.queue(function () {
						$(this).removeAttr('tabindex').dequeue();
						HamburgerTriggers.css('pointer-events', '');
					});

				$('html').removeClass('no-scroll');
				$(document).off('keydown');
			}
		});
	},
	setHamburgerMenuPosition: function (positionElement) {
		if (positionElement.length > 0) {
			var pos = positionElement.attr('data-menu-position');
			if (pos === 'under') {
				var root = document.documentElement;
				if  (!$('.is_stuck').length > 0) {
					var positionTop =
						positionElement.offset().top -
						window.scrollY +
						positionElement.outerHeight(true);
				}  else {
					var positionTop = $('.is_stuck').height();
				}
				document
					// .getElementsByTagName('header')[0]
					.querySelectorAll('header.header')[0]
					.style.setProperty(
						'--overlay-top-position',
						positionTop + 'px'
					);
			}
		}
	},
	dowindowResize: function () {
		var that = this;
		if (that.currentWidth !== $(window).width()) {
			that.currentWidth = $(window).width();
			if (that.resizeTimer != null) {
				clearTimeout(that.resizeTimer);
			}
			that.resizeTimer = setTimeout(function () {
				Menu.doCheckDropdownOrHamburger();
				Menu.checkDropDownSubMenuPosition();
			//	Menu.setMenuPosition();
			}, 20);
		}
	},
	checkActiveState: function () {
		var that = this;
		if ($('.navigation-main li.active').length == 0) {
			var nav = $('.navigation-main');
			$('.breadcrumb__container-wrapper > ol.nav-breadcrumb > li > a').each(function () {
				var el = $(this);
				var url = el
					.attr('href').replace(window.location.protocol + '//' + window.location.hostname, '')
					.toLowerCase();

				var m = nav.find('a[href="' + url + '"]');
				console.log(url, m);
				if (m.length > 0) {
					m.parent().addClass('active');
				}
			});
			var m = that.navContainer.find('a[href="' + window.location.pathname.toLowerCase() + '"]');
			if (m.length > 0) {
				m.parent().addClass('active');
				m.attr('aria-current', 'page');
			}
		}
	},
};

$(document).ready(function () {
	Menu.init();
});

//-- needed html for suggestionsearch ==>  <ul id="suggestionsearch" class="list" style="display:none"></ul>
var searchCounter = 0;
var searchKeyPressTimer = null;
function suggestionsearch(c) {
    var keyword = $('#txtkeyword').val();
    var searchtype = '';
    var allwords = keyword.split(' ');
    var lastsearchterm = allwords[allwords.length - 1];
    if (keyword.length > 2 && lastsearchterm.length > 2) {
        var lang = $('html').attr('lang');
        if (lang === 'nl') { lang = ''; } else {
            lang = '/' + lang;
        }
        $("#txtkeyword").addClass("is-loading");
        $('#suggestionsearch').hide().addClass('invisibility');
        $('#search').removeClass('selected').parents('.header__search').removeClass('focus-within');
        keyword = encodeURI(keyword);
        var dataPost = { q: keyword };
        $.ajax({
            async: true,
            data: dataPost,
            url: lang + '/zoeken/suggestie'
        }).done(function (partialView) {
            if (c === searchCounter) {
                $("#suggestionsearch").html(partialView);
                // if (isOverlay) {
                if (partialView !== '') {
                    if ($("#txtkeyword").is(":focus")) {                        
                        $("#suggestionsearch").show().removeClass('hide').removeClass('invisibility');
                    }
                    $('#search')
						.addClass('selected')
						.parents('.header__search')
						.addClass('focus-within');
                } else {
                    $("#suggestionsearch").hide().addClass('hide').addClass('invisibility');
                    $('#search')
						.removeClass('selected')
						.parents('.header__search')
						.removeClass('focus-within');
                }
                // disableTabModalShown($('.header-search'));
                // }

                $("#txtkeyword").removeClass("is-loading");
            }
        });
    } else {
        $('#suggestionsearch').hide().addClass('hide').addClass('invisibility');
        $('#search')
			.removeClass('selected')
			.parents('.header__search')
			.removeClass('focus-within');
        $("#txtkeyword").removeClass("is-loading");            
    }    
};

//-- Bindings voor suggestionsearch
function BindSearch() {
    //if ( $(document).width() >= gridFloatBreakpoint ) {
    $("#search").on('mouseenter', function () { clearTimeout($("#search").data('hidesuggestionsearch')); }).on('mouseleave', function () {
        var a = setTimeout(function () {
            $('#suggestionsearch').hide().addClass('hide').addClass('invisibility');
            $('#search')
				.removeClass('selected')
				.parents('.header__search')
				.removeClass('focus-within');
        }, 1000); $("#search").data('hidesuggestionsearch', a);
    });

    $('#txtkeyword').on('keypress', function (e) {
        if (e.which === 13) { e.preventDefault(); $('#btnSearch').trigger('click'); }
    })
        .on('keyup',function (e) {
            if (e.which !== 38 && e.which !== 40 && e.which !== 13 && e.which !== 32) {


                searchCounter++;
                if (searchKeyPressTimer !== null) {
                    clearTimeout(searchKeyPressTimer);
                }

                searchKeyPressTimer = setTimeout(function () { suggestionsearch(searchCounter); }, 150);


            } else if (e.which == 40) {
                $('.search-suggestion__list .search-suggestion__item:first a').trigger('focus');
            }
        });
    //}
    $('#txtkeyword').on('focus', function () {
        $('.search__group').addClass('focus');
        if ($('.header__nav').hasClass('is-active')) {
            offcanvasClose($('[data-toggle="offcanvas"]'));
        }
    }).blur(function () {
        $('.search__group')
            .removeClass('focus')
    });

}

$("#txtkeyword").on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 9) {
        if (e.shiftKey) {
            $('#suggestionsearch').hide().addClass('hide').addClass('invisibility');
        }
    }
});

$(document).on('keydown', '#suggestionsearch .search__suggestion-btn', function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 9) {
        if (!e.shiftKey) {
            $('#suggestionsearch').hide().addClass('hide').addClass('invisibility');
            setTimeout(function () { $('#btnSearch').trigger('focus'); }, 1);
        }
    }
});

//-- Unbindings voor suggestionsearch
function UnBindSearch() {
    $("#search").off();
    $('#txtkeyword').off();
    $('#suggestionsearch').hide().addClass('hide').addClass('invisibility');
}

BindSearch();

//-- Classes toevoegen bij headersearch
function initSearchOverlay(el) {
    var headerSearch = $(el),
        elSearchfield = $(el).find('input.txt');

    elSearchfield.on('keyup', function () {
        if ($(this).val().length > 1) {
            if (!headerSearch.hasClass('is-active')) {
                $('[data-toggle="searchbtn"]').addClass('is-active')
                    .attr('aria-expanded', 'true').show();

                headerSearch.addClass('is-active');
                disableTabModalShown(headerSearch);

                $('html').addClass('no-scroll');
                $('.scroll-down').hide();
                isOverlay = true;
            }
        }
    });
}

$('[data-toggle="searchbtn"]').on('click', function () {
    var elSearchbtn = $('[data-toggle="searchbtn"]'),
        headerSearch = $('.header-search');
    elSearchbtn.toggleClass('is-active');
    headerSearch.toggleClass('is-active');
    if (elSearchbtn.hasClass('is-active')) {
        elSearchbtn.attr('aria-expanded', 'true').show();
        disableTabModalShown(headerSearch);
        $('html').addClass('no-scroll');
        $('.scroll-down').hide();
        isOverlay = true;
    } else {
        $('#suggestionsearch').hide().addClass('hide').addClass('invisibility');
        elSearchbtn.attr('aria-expanded', 'false').blur().hide();
        $('html').removeClass('no-scroll');
        $(document).off('keydown');
        $('.scroll-down').removeAttr('style');
        $("#txtkeyword").val('').removeClass("is-loading");
        isOverlay = false;
    }
});

//-- Set Placeholder text on input field / text area field
function initPlaceholder() {
    setSearchPlaceholder();
    // $('input[data-toggle-placeholder="1"],textarea[data-toggle-placeholder="1"]').focus(function () {
    //     $(this).attr('placeholder', '');
    // }).blur(function () {
    //     $(this).attr('placeholder', $(this).attr('title'));
    // });
}

//-- Placeholder tekst veranderen naar andere tekst bij kleinere schermen
function setSearchPlaceholder(screenWidthMax) {
    if (screenWidthMax === undefined || screenWidthMax === null) {
        screenWidthMax = gridFloatBreakpointMax; //grid float breakpoints: 480px, 768px, 992px, 1200px
    }
    var txt = $('#txtkeyword');
    if ($('#searchForm').length > 0) {
        if ($(document).width() <= screenWidthMax) {
            txt.attr('placeholder', txt.attr('data-placeholder-mobile'));
        } else {
            txt.attr('placeholder', txt.attr('title'));
        }
    }
}

$(document).on(
	'keydown',
	'#suggestionsearch > .search-suggestion__list > .search-suggestion__item a',
	function (e) {
		if (e.which === 40 || e.which === 38) {
			e.stopPropagation();
			e.preventDefault();

			var li = $(this).parent();
			var items = $(
				'#suggestionsearch > .search-suggestion__list > .search-suggestion__item'
			);
			var index = items.index(li);

			if (e.which === 40) {
				index += 1;
			} else if (e.which === 38) {
				index -= 1;
			}

			if (index < 0) {
				$('#txtkeyword').trigger('focus');
			} else if (index < items.length) {
				$(
					'#suggestionsearch > .search-suggestion__list > .search-suggestion__item:eq(' +
						index +
						') a'
				).trigger('focus');
			} else {
				$('.search__suggestion-btn').trigger('focus');
				// $('.list-suggestionsearch li:eq(0) a').focus();
			}
		}
	}
);
var Ajaxify = {
    ajaxContainer: null,
    keyTimer: null,
    timer: null,
    refreshTime: 60000,
    lang: '',
    init: function () {
        var that = this;

        var lang = $('html').attr('lang');
        lang = lang === 'nl' ? '' : ('/' + lang);
        that.lang = lang;

        that.ajaxContainer = $('#ajax-container');
        if (that.ajaxContainer.length > 0) {
            $('[data-hide-for-ajax="1"]').addClass('hidden');
            $(document).ready(function () {
                $(this).on('change', 'input[data-do-ajax="1"]', function (e) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    var chk = $(this);

                    var form = chk.closest('form');
                    if (form.attr('id') === 'activefilterform') {

                        $('input[type="checkbox"][name="' + chk.attr('name') + '"][value="' + chk.attr('value') + '"]').prop('checked', false);
                        $('input[type="hidden"][name="' + chk.attr('name') + '"],input[type="text"][name="' + chk.attr('name') + '"]').val('');
                    }
                    that.doRequest(chk);

                }).on('click', '[data-hide-for-ajax="1"]', function (e) {
                    e.preventDefault();
                    that.doRequest($(this));
                }).on('keyup', 'input[type="text"][data-do-ajax-blur="1"]', function (e) {
                    if (that.keyTimer !== null) {
                        clearTimeout(that.keyTimer);
                    }
                    var input = $(this);

                    if (e.keyCode !== 13) {

                        that.keyTimer = setTimeout(function () { that.doRequest(input); }, 350);
                    } else {
                        e.preventDefault();
                        that.doRequest(input);
                    }

                });
                
                that.checkActiveFilters();
            }).on('click', 'button[data-remove-filter]', function (e) {
                e.preventDefault();
                var id = $(this).attr('data-remove-filter');
                var item = $('#' + id);
                if (item.attr('type') === 'input' || item.attr('type') === 'date') {
                    item.val('');
                } else {
                    var isChecked = item.prop('checked');
                    item.prop('checked', !isChecked);
                }

                that.doRequest(item);
            })
        }

        if ($('button[data-load-more-ajax-url]').length > 0) {
            $(document).on('click', 'button[data-load-more-ajax-url]', function (e) {
                e.preventDefault();
                var btn = $(this);
                that.loadMoreAjax(btn);
            });
        }

        setTimeout(function () { that.refreshContactStatus(); }, that.refreshTime);

    },
    loadMoreAjax: function(btn){
        var ajaxContainer = $('#' + btn.attr('data-target'));
        var url = btn.attr('data-load-more-ajax-url') + "&offset=" + ajaxContainer.find('li').length;
        var noOfRecords = parseInt(btn.attr('data-total-records'));
        $.ajax({
            async: true,
            type: 'GET',
            url: url
        }).done(function (partialview) {

            ajaxContainer.append(partialview);

            if (noOfRecords === ajaxContainer.find('li').length) {
                btn.addClass('hidden');
            }
        });
    },
    doRequest: function (input) {

        var that = this;
        that.setLoadingScreen();
        var url = window.location.pathname;
        var form = input.closest('form');

        var arr = form.serializeArray();

        var q = '';

        for (var i = 0; i < arr.length; i++) {
            var p = arr[i];
            if (p.value !== null && p.value !== '' && !p.name.endsWith('_submit') && p.value !== 'on') {
                if (q !== '') { q += '&'; }
                q += p.name + '=' + p.value;
            }
        }
        if (q !== '') { url += '?' + q; }
        window.history.replaceState(null, null, url);

        url += (url.indexOf('?') === -1 ? '?' : '&') + 'ajax=1';

        $.ajax({
            async: true,
            type: 'GET',
            url: url
        }).done(function (partialview) {
            clearTimeout(that.timer);
            that.ajaxContainer.hide();
            that.ajaxContainer.html(partialview);
            that.ajaxContainer.fadeIn();
            that.updateAZ();
            that.checkActiveFilters();
            var datael = document.querySelector('[data-mh]');
            if (datael !== null) {
                // $('.list > li').matchHeight();
                $(datael).matchHeight({ remove: true });
                $.fn.matchHeight._maintainScroll = true;
                $.fn.matchHeight._applyDataApi();
                //console.log("ajaxify update");
            }

            if (typeof Website !== "undefined" && typeof Website.Streetmap !== "undefined" && Website.Streetmap.map !== null) {
                Website.Streetmap.addMarkersFromList();
            }
            stickify('.alertbox-filter', 0, '.page-container', gridFloatBreakpoint);
            footerFixedBottom();
        }).fail(function () {
            that.ajaxContainer.html('<class="alertbox-error">error</div>');
        });

        that.reloadFacet(form, arr, input);

    },
    reloadFacet: function (form, arr, input) {
        var that = this;
        //  update facet navigation 
        var facets = $('.facet-navigation:not([data-facet="' + input.attr('data-facet') + '"]');
        if (facets.length > 0) {

            var q = '';
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                if (p.value !== null && p.value !== '' && !p.name.endsWith('_submit') && p.value !== 'on') {
                    q += '&' + p.name + '=' + p.value;
                }
            }


            facets.each(function () {
                var fieldset = $(this);

                var facetkey = fieldset.attr('data-facet');

                $.ajax({
                    async: true,
                    type: 'GET',
                    url: fieldset.attr('data-facet-ajax-url') + '?fieldname=' + facetkey + q
                }).done(function (json) {
                    for (var i = 0; i < json.length; i++) {
                        var item = json[i];
                        var hasItems = item.noOfItems > 0;
                        var chk = $('.facet-search-item[data-facet="' + facetkey + '"][value="' + item.value + '"]');
                        chk.prop('disabled', !hasItems);
                        var li = chk.parent();
                        if (hasItems) {
                            li.removeClass('is-readonly');
                        } else {
                            li.addClass('is-readonly');
                        }
                        li.find(' span .search-count').html(item.noOfItems);
                    }
                });

            });

        }
    },
    setLoadingScreen: function () {
        var that = this;
        that.ajaxContainer.html('<span class="loading">...</span>');
        //that.timer = setTimeout(function () { that.ajaxContainer.html('<span class="loading">...</span>') }, 500);
    },
    updateAZ: function () {
        var az = $('.nav-az');
        if (az.length > 0) {
            var li = [];
            $('.alphabet-item .keywords').each(function () {
                var l = this.id;
                li.push('<li><a rel="nofollow" href="#' + l + '" data-scrollto="az">' + l.substring(2) + '</a></li>');
            });
            az.html(li.join(''));
        }
    },
    refreshContactStatus: function () {
        var that = this;
        var div = $('div[data-refresh-open-status="1"] ');

        div.each(function () {
            var div = $(this);
            var statusSpan = div.find('span[data-hourid]');
            var hourID = statusSpan.attr('data-hourid');
            $.ajax({
                async: true,
                type: 'GET',
                data: { hourID: hourID },
                url: that.lang + '/contact/status'
            }).done(function (json) {

                statusSpan.attr('class', 'contact__hours-status-box ' + json.cssclass).html('<span>' + json.statusText + '</span>');

                div.find('.txt-hours').html(json.hoursToday);
                $('[data-tomorrow-hourid="' + hourID + '"] .txt-hours').html(json.hoursTomorrow);
            });

        });

        setTimeout(function () { that.refreshContactStatus(); }, that.refreshTime);
    },
    checkActiveFilters: function () {
        var templateTag = $('#header-filter-template');
        if (templateTag.length > 0) {

            var items = $('input[data-do-ajax="1"]:checked,input[type="text"],input[type="date"]');
            var div = $('.header-filters');
            var ul = div.find('.list-filter');
            var hasItems = false;
            if (items !== undefined && items.length > 0) {
                div.removeClass('hidden');
                var html = '';
                var noOfFilters = 0;
                var template = templateTag.html();
                items.each(function () {
                    var i = $(this);
                    if (i.val() !== '') {

                        var id = i.attr('id');
                        var title = $('label[for="' + i.attr('id') + '"]').text();
                        if (i.attr('type') === 'date') {
                            var date = Date.parse(i.val());
                            title = Intl.DateTimeFormat().format(date);
                        } else if (i.attr('type') === 'text') {
                            title = i.val();
                        }
                        html += template.replace('{id}', id).replace("{title}", title);
                        hasItems = true;
                        noOfFilters++;
                    }
                });
                if (noOfFilters > 1) {
                    html += $('#header-filter-template-delete-all').html();
                }

                ul.html(html);
            }

            if (!hasItems) {
                div.addClass('hidden');
                ul.html('');
            }
        }
    }
};

Ajaxify.init();


//-- Stickify functionality toevoeging met combinatie van de plugin js\sticky-kit
function stickify(el, posSpacing, parent, screenWidth, elPosition) {
	var container = $(el);

	if (posSpacing === undefined || posSpacing === null) {
		posSpacing = 0;
	}

	if (parent === undefined || parent === null) {
		parent = container.parent();
	}

	if (screenWidth === undefined || screenWidth === null) {
		screenWidth = gridFloatBreakpoint; //grid float breakpoints: 480px, 768px, 992px, 1200px
	}

	if (elPosition === undefined || elPosition === null) {
		elPosition = 'top';
	}

	checkStickyposition(elPosition);

	$(window).on('resize',function () {
		checkStickyposition(elPosition);
	});

	function checkStickyposition(el) {
		if (el === 'top') {
			if ($(document).width() >= screenWidth) {
				if (!container.siblings('.box-filter').length) {
					container
						.stick_in_parent({
							offset_top: posSpacing,
							parent: parent,
							recalc_every: 1
						})
						.on('sticky_kit:stick', function(e) {
							if ($('.box-anchor-links').length > 0) {
								var el = container.find('.box__block'),
									scroll = $(window).scrollTop();
								el.css({
									maxHeight:
										$(window).height() -
										($(el).offset().top - scroll) -
										posSpacing,
									overflowY: 'auto' //eventueel in commentaar als je styled @pieter
								});
							}
						});
						// .on('sticky_kit:bottom ', function(e) {
						// 	console.log('bottom!', e.target);
						// });
				}
			} else {
				container.trigger("sticky_kit:detach");
			}
		} else {
			// container.on("sticky_kit:unstick ", function() {
			// }
		}
	};
}


/****************
* sticky header *
****************/
function stickyheader() {
	var elHeader = $('.header'),
		headerStickspacer = $('<div/>') // creates a div element
				.attr('id', 'header-stick-spacer') // adds the id
				.addClass('header-stick-spacer'); // add a class
	checkHeaderposition();
	$(window).on('resize scroll', checkHeaderposition);

	function checkHeaderposition() {
		if ($('.widget-vlw-placeholder').length > 0 || $('.vlw').length > 0) {
			var stickyOffset = 43;
		} else {
			var stickyOffset = 0;
		}
		
		var headerOffset = Math.round(elHeader.offset().top - stickyOffset),
			headerCheck = elHeader.innerHeight(),
			scrollPos = Math.round($(window).scrollTop());
		

		// console.log(scrollPos, headerCheck, headerTop);
		// console.log(headerTop, scrollPos);

		if (scrollPos > 0 && scrollPos >= headerOffset) {
			elHeader
				.css({
					position: 'fixed',
					top: stickyOffset,
					left: 0,
					width: '100%',
				})
				.addClass('is_stuck');
			$('.search-top').addClass('in-header');
			if (!$('#header-stick-spacer').length > 0) {
				headerStickspacer.insertAfter(elHeader).css({
					height: headerCheck,
				});
			} else {
				$('#header-stick-spacer').css({
					height: headerCheck,
				});
			}
		} else {
			unstickHeader();
		}

		if ($('#header-stick-spacer').length > 0) {
			var headerStickyspacer = $('#header-stick-spacer').offset().top;
			if (scrollPos <= headerStickyspacer) {
				unstickHeader();
			}
			// console.log('is sticky: ' + headerStickyspacer, scrollPos);
		}
	}

	function unstickHeader() {
		elHeader.removeAttr('style').removeClass('is_stuck');
		$('#header-stick-spacer').remove();
		$('.search-top').removeClass('in-header');
	}
}

var icordis = icordis || {};
icordis.Tabs = {
    init: function () {
        var that = this;

        $('#tablist a').on('click',function (e) {
            e.preventDefault();
            var el = $(this);
            $('#tablist a').attr('aria-selected', 'false').attr('tabindex', -1).parent().removeClass('active');
            el.attr('aria-selected', 'true').attr('tabindex', 0).parent().addClass('active');
            
            $('.tab-item').addClass('hidden');
            $('#' + el.attr('aria-controls')).removeClass('hidden');

            $('#current-active-tab').val(el.attr('id'));
            
            if (el.html().toLowerCase().indexOf('stratenplan') > -1 && typeof (Icordis.StreetmapControl) !== "undefined" && Icordis.StreetmapControl.map !== null) {
                Icordis.StreetmapControl.updateMap();
            }
        });
        
        if (window.location.hash.indexOf('tabs-')>-1) {
            $('a[href="' + window.location.hash + '"]').trigger('click');
        }
    }


}
icordis.Tabs.init();


//-- Tab toegankelijkheid voor de share mogelijkheid 
function boxShareAccessible(el) {
	var elBtn = $(el),
		isClicked = false;

		
	elBtn.on('click',function () {
		var $this = $(this);
		expandSharebox($this);
	});

	function expandSharebox(el) {
		el.parent().toggleClass('is-active');
		if (!isClicked) {
			el.attr('aria-expanded', 'true')
				.next().removeClass('invisibility').find('.list-share > li:last() > a')
				.blur(function () {
					el.attr('aria-expanded', 'false')
						.parent().removeClass('is-active');
					isClicked = false;
				});
			isClicked = true;
		} else {
			el.attr('aria-expanded', 'false');
			isClicked = false;
		}
	}
} 

//jQuery.fn.center = function () {
//    this.css("position", "absolute");
//    this.css("top", ($(window).height() - this.outerHeight()) / 2 + "px");
//    this.css("left", ($(window).width() - this.outerWidth()) / 2 + "px");
//    return this;
//};

//// if ($('.popup-container').length > 0) {
//if ($('[data-popup=1]').length > 0) {
//    // disableTabModalShown($('.popup-container'));
//    disableTabModalShown($('.alertbanner'));
//    $('html').addClass('no-scroll');
//    $('#outer-wrap').attr('aria-hidden', 'true');
//    isOverlay = true;
//}

// $('.popup-overlay, .popup-close,.popup-content a').on('click',function (e) {
$('[data-alertbanner=close], [data-alertbanner=close] a').on('click', function (e) {
	var el = $(this);
	// var container = $('.popup-container,.sticky-container');
	var container = $('.alertbanner');
	container.hide();
	var cookievalue = Cookie.get('Hidepopup');
	var id =
		(typeof cookievalue !== 'undefined' && cookievalue !== ''
			? cookievalue + ';'
			: '') + container.attr('data-id');

	Cookie.set('Hidepopup', container.attr('data-snooze'), id);
//	$('html').removeClass('no-scroll');
//	$('#outer-wrap').removeAttr('aria-hidden');
//	$(document).off('keydown');
	// $('#inner-wrap').attr('tabindex', -1).focus();
//	$('body').children(':first-child').attr('tabindex', -1).trigger('focus');
//	isOverlay = false;
});

/*****************
 * Magnific-Popup *
 *****************/
//readme: dimsemenov.com/plugins/magnific-popup/documentation.html

//Magnific-Popup

$('a[data-popup="imagelist"],[data-popup="oneimage"]:has(span.icon-camera:visible)').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
    }, image: {
        // 	// options for image content type
        titleSrc: function (item) {
            var title = item.el.find('span.title');
            if (title.length > 0) {
                return title.text();
            }
            return '';
        }
    }
});

$('[data-popup="oneimage"]:not(:has(span.icon-camera:visible))').magnificPopup({
    type: 'image',
    disableOn: function () {
     
        var mobile = $('[data-popup="oneimage"] span.icon-camera').is(':visible');
        return !mobile;
    },
    image: {
        // 	// options for image content type
        titleSrc: function (item) {
            var title = item.el.find('span.title');       
            if (title.length > 0) {
                return title.text();
            }
            return '';
        }
    }
    // other options
});

$('[data-popup*="shadowbox"]').magnificPopup({
    type: 'iframe',
    iframe: {
        markup:
            '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: null,
        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
});

var lang = $('html').attr('lang');
if (lang === 'nl') {
    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Sluiten (Esc)', // Alt text on close button
        tLoading: 'Laden...', // Text that is displayed during loading. Can contain %curr% and %total% keys
        gallery: {
            tPrev: 'Vorige (Pijl toets links)', // Alt text on left arrow
            tNext: 'Next (Pijl toets rechts)', // Alt text on right arrow
            tCounter: '%curr% van %total%', // Markup for "1 of 7" counter
        },
    });
} else if (lang === 'fr') {
    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Fermez (Esc)', // Alt text on close button
        tLoading: 'Charge...', // Text that is displayed during loading. Can contain %curr% and %total% keys
        gallery: {
            tPrev: 'précédent (Touche fléchée gauche)', // Alt text on left arrow
            tNext: 'suivante (Touche fléchée droite)', // Alt text on right arrow
            tCounter: '%curr% de %total%', // Markup for "1 of 7" counter
        },
    });
} else if (lang === 'de') {
    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Schließen (Esc)', // Alt text on close button
        tLoading: 'Wird geladen...', // Text that is displayed during loading. Can contain %curr% and %total% keys
        gallery: {
            tPrev: 'Zurück (linke Pfeiltaste)', // Alt text on left arrow
            tNext: 'Weiter (rechte Pfeiltaste)', // Alt text on right arrow
            tCounter: '%curr% von %total%', // Markup for "1 of 7" counter
        },
    });
} else if (lang === 'en') {
    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Close (Esc)', // Alt text on close button
        tLoading: 'Loading...', // Text that is displayed during loading. Can contain %curr% and %total% keys
        gallery: {
            tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
            tNext: 'Next (Right arrow key)', // Alt text on right arrow
            tCounter: '%curr% of %total%', // Markup for "1 of 7" counter
        },
    });
}

var SpeechRecognition = {
    recognition: null,
    init: function () {
        var that = this;
        var hasSpeechRecognition = false;
        if (window.hasOwnProperty('webkitSpeechRecognition')) {
            that.recognition = new webkitSpeechRecognition();
            hasSpeechRecognition = true;

        }
        //else if (window.hasOwnProperty('SpeechRecognition')) {
        //    that.recognition = new speechRecognition();
        //    hasSpeechRecognition = true;
        //}


        if (hasSpeechRecognition) {

            $('#btn-speech-recognition').removeClass('hidden');
            $(document).on('click', '#btn-speech-recognition', function () {
                var btn = $(this);
                that.listen(btn);
            });
        }
    },
    listen: function (btn) {
        var that = this;
        var txt = $('#txtkeyword');
        $('#speech-error-msg').addClass('hidden');
        $('#searchForm').removeClass('speech-error');
        txt.attr('placeholder', txt.attr('data-speak-text'));
        txt.val('');
        btn.prop('disabled', true);
    

        that.recognition.continuous = false;
       that.recognition.interimResults = false;
        var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
        that.recognition.lang = lang == 'nl' ? 'nl-BE' : lang == 'fr' ? 'fr-BE' : 'en-US';
        that.recognition.start();
        that.recognition.onstart  = function () {
            $('#searchForm').addClass('listening');

        }
        that.recognition.onspeechstart = function () {
    
            var text = txt.attr('data-listening-text');
            txt.attr('placeholder', text);
        }
        that.recognition.onresult = function (e) {
           
            if (typeof (e.results) == 'undefined') {           
                that.clearSearch(btn,txt);
                return;
            }

           var transcript = e.results[0][0].transcript.replace(/\./g, '')


            txt.val(transcript);
            that.clearSearch(btn,txt);
            $("#txtkeyword").trigger('focus');
            searchCounter = 0;
            suggestionsearch(0);


        };

        that.recognition.onerror = function (e) {
            console.log(e);
            $('#searchForm').addClass('speech-error');
            $('#speech-error-msg').removeClass('hidden');
            that.recognition.stop();
            that.clearSearch(btn, txt);
        
         
        }

    },
    clearSearch: function (btn,txt) {
        var that = this;
     
        $('#searchForm').removeClass('listening');
        var text = txt.attr('data-tooltip');
        txt.attr('placeholder', text);
        btn.prop('disabled', false);
    }

}
SpeechRecognition.init();
//-- Variables

var $window = $(window),
    gridFloatBreakpoint = 768 - getScrollbarWidth(), // grid float breakpoints: 320, 544, //--480px, 768px, 992px, 1200px
    gridFloatBreakpointMax = gridFloatBreakpoint - 1,
    isOverlay = false,
    stickySpacing = 0;


$(document)
    .ready(function () {
        setHomeSearchTop();
        initPlaceholder(); //www\wwwroot\js\website\shared\search.js

        //get focus class when inside searchfield
        // $('#txtkeyword')
        //     .focus(function () {
        //         $('.search__group').addClass('focus')
        //     })
        //     .blur(function () {
        //         $('.search__group')
		// 			.removeClass('focus')
        //     });


        // grid check van iconen op home op bais van de helper functie checkRow() in js\website\helpers\frontend.js
        if ($('.spotlight').find('.list.icons-big').length > 0) {
            checkRow('.list.icons-big', 'li');
        }
        if ($('.spotlight').find('.list.icons-small').length > 0) {
            checkRow('.list.icons-small', 'li');
        }


        //-- maak box share toegankelijk
        boxShareAccessible('[data-toggle="socialsharebtn"]');
    })
    .on('mouseover', '[data-tooltip]', function () {
        var btn = $(this);
        btn.attr('title', btn.attr('data-tooltip'));
    })
    .on('mouseleave', '[data-tooltip]', function () {
        var btn = $(this);
        btn.removeAttr('title');
    })
    .on('click', 'button[data-toggle-items="1"]', function (e) {
        e.preventDefault();
        var el = $(this);
        if (el.hasClass('active')) {
            el.attr('aria-expanded', 'false');
            el.parent().removeClass('active');
            $('#' + el.attr('data-id') + ' li.tohide').addClass('hidden');
            el.removeClass('active').find('span').html(el.attr('data-show'));
        } else {
            el.parent().addClass('active');
            $('#' + el.attr('data-id') + ' li.tohide').removeClass('hidden');
            el.addClass('active').find('span').html(el.attr('data-hide'));
            el.attr('aria-expanded', 'true');
        }
    })
    .on('click', '[data-toggle-panel]', function (e) {
        e.preventDefault();
        var btn = $(this);
        btn.toggleClass('active');
        var open = btn.hasClass('active');
        btn.attr('aria-expanded', open ? 'true' : 'false');
        var txt = btn.attr('data-toggle-' + (open ? 'hide' : 'show'));
        btn.attr('data-tooltip', txt);
        var panel = $('#' + btn.attr('data-toggle-panel'));
        panel.toggleClass('hidden');
        panel.closest('fieldset').toggleClass('open');
    })
    .on('click', '#btn-toggle-contrast', function (e) {
        var el = $(this);

        var css = $('#skin-stylesheet');
        if (el.hasClass('is-active')) {
            Cookie.remove(css.attr('data-css'));
        } else {
            Cookie.set(css.attr('data-css'), 1000, '1');
        }
        window.location.reload();
    })
    .on('click', '[data-toggle-accordion]', function (e) {
        var btn = $(this);
        var accordion = $('#' + btn.attr('aria-controls'));
        var expanded = btn.attr('aria-expanded') === 'true';

        accordion.toggleClass('hidden');
        btn.attr('aria-expanded', expanded ? 'false' : 'true');
    })
    .on('change', '.checkboxlist-item input[data-parentid]', function () {
        var chk = $(this);
        var id = chk.val();
        var checked = chk.is(':checked');
        var parentid = chk.attr('data-parentid');
        if (parentid == 0) {
            $('.checkboxlist-item input[data-parentid="' + id + '"]').prop(
                'checked',
                checked
            );
        } else if (checked == false) {
            $('.checkboxlist-item input[value="' + parentid + '"]').prop(
                'checked',
                false
            );
        }
    })
    .on('click', 'button.btn-chklist-toggle', function (e) {
        var btn = $(this);
        btn.toggleClass('active');
        var open = btn.hasClass('active');
        btn.attr('aria-expanded', open ? 'true' : 'false');
        var txt = btn.attr('data-toggle-' + (open ? 'hide' : 'show'));
        btn.find('span').html(txt);
        btn.attr('data-tooltip', txt);
        var control = btn.attr('aria-controls');
        var panel = $('#' + control);
        panel.toggleClass('hidden');
        panel.attr('aria-hidden', open ? 'false' : 'true');
    });

$(window).on('resize', function (e) {
    setSearchPlaceholder();
    setHomeSearchTop();
});


function setHomeSearchTop() {
    if ($('body').hasClass('has-headerbanner')){
        var positionTop = $('.header__main').outerHeight(true) + ($('.header__media-container').outerHeight(true) /2);
        //console.log(positionTop);
        //var positionTop = positionElement.offset().top - window.scrollY + positionElement.outerHeight(true) - 1;
        document.getElementsByTagName('header')[0].style.setProperty('--home-header-search-top', positionTop + "px");
    }
}