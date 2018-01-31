/*
  jQuery Peanut360
  Version 1.0.0
*/

(function ( $ ) {
    "use strict";
    function Peanut360(args) {
        if ( args.hideclass ) { this.hideclass = args.hideclass; }
        if ( args.interval ) { this.interval = args.interval; }
        this.$node = args.$node;
        this.$slides = this.$node.find(".p360slide");
        var $currentslide = this.$node.find(".p360slide:not(." +  this.hideclass + ")");
        this.csidx = this.$slides.index($currentslide);
        this.lsidx = this.$slides.length - 1;

        if ( args.nextonclick ) {
            this.$node.on("click", $.proxy(function() {
                if ( !this.intervalid ) {
                  this.shownext();
                }
            }, this));
        }
    }

    Peanut360.prototype = {
        hideclass       : 'd-none',
        $node           : null,
        // We need an array of the slides because we need to cycle between
        // them regardless if they're wrapped individually in <a> or other tags
        $slides         : null,
        csidx           : null,
        lsidx           : null,
        interval        : 200,
        intervalid      : null,

        animate : function() {
            if ( this.intervalid ) {
              this.animate_stop();
            }
            this.intervalid = window.setInterval($.proxy(function() {
              this.shownext();
            }, this), this.interval);
        },

        animate_reverse : function() {
            if ( this.intervalid ) {
              this.animate_stop();
            }
            this.intervalid = window.setInterval($.proxy(function() {
              this.showprevious();
            }, this), this.interval);
        },

        shownext : function() {
          $( (this.$slides)[this.csidx] ).addClass(this.hideclass);
          this.csidx = (this.csidx < this.lsidx) ? this.csidx+1 : 0;
          var $nextslide = $( this.$slides[this.csidx] );
          $nextslide.removeClass(this.hideclass);
        },

        showprevious : function() {
          $( (this.$slides)[this.csidx] ).addClass(this.hideclass);
          this.csidx = (this.csidx > 0) ? this.csidx-1 : this.lsidx;
          var $prevslide = $( this.$slides[this.csidx] );
          $prevslide.removeClass(this.hideclass);
        },

        animate_stop : function() {
          if ( this.intervalid ) {
            window.clearInterval(this.intervalid);
            this.intervalid = null;
          }
        }
    };

    $.fn.peanut360 = function(args) {
      switch(args) {
          default:
            return this.each(function() {
                if (!args) { args = {}; }
                args.$node = $(this);
                var peanut360 = new Peanut360(args);
                $(this).data("peanut360", peanut360);
            });
          case "animate":
              return this.each(function() {
                  $(this).data("peanut360").animate();
              });
          case "animate_reverse":
              return this.each(function() {
                  $(this).data("peanut360").animate_reverse();
              });
          case "animate_stop":
              return this.each(function() {
                  $(this).data("peanut360").animate_stop();
              });
          case "showprevious":
              return this.each(function() {
                  $(this).data("peanut360").animate_stop();
                  $(this).data("peanut360").showprevious();
              });
          case "shownext":
              return this.each(function() {
                  $(this).data("peanut360").animate_stop();
                  $(this).data("peanut360").shownext();
              });
        };
    };
}( jQuery ));
