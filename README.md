# jQueryPeanut360

360-degrees image animator/slider which doesn't get in your way.

## Key features

This is a small jQuery plugin for creating 360-degreems image sliders. It doesn't try to do more than it needs to, but it instead exposes the methods which allow you to do anything you want.

These are the key points behind this plugin:

 - It just analyzes your img tags and show/hides them when necessary
 - It doesn't modify the DOM
 - It doesn't care if you wrap one or more of your images in another tag (such as and <a> to view a zoom)
 - It doesn't force you to use any provided UI or button, you just use your own
 - It doesn't even care if elements are are images, you can use whatever you want
 - It just needs jQuery to work

## Usage

### DWIM

This demo uses Bootstrap 4 classes, but you can use whatever you want.

```html
<!-- Set all images as hidden with a class (d-none in this example)
     except the one you want to start with -->
<div id="demo360" class="col-12">
  <!-- Add the class p360slide to your images -->
  <img src="1.jpg" class="p360slide img-fluid d-none">
  <a download href="2.jpg"><!-- We don't care about other tags, they just work -->
    <img src="2.jpg" class="p360slide img-fluid d-none">
  </a>
  <img src="3.jpg" class="p360slide img-fluid d-none">
</div>

<div class="col-12 text-center">
  <input id="prev_button" type="button" class="btn btn-default" value="&laquo;">
  <input id="start_button" type="button" class="btn btn-primary" value="Start">
  <input id="start_reverse_button" type="button" class="btn btn-primary" value="Start (reverse)">
  <input id="stop_button" type="button" class="btn btn-warning" value="Stop">
  <input id="next_button" type="button" class="btn btn-default" value="&raquo;">
</div>

<script type="text/javascript" src="jquery.peanut360.js"></script>
<script type="text/javascript">
$(function() {
    // Initialize with no params if you use "d-none" as class for hiding
    $("#demo360").peanut360();

    // Initialize with params if needed
    $("#demo360").peanut360({
        hideclass : 'd-none',     // Change name of the class which hides elements
        interval  : 100           // Faster or slower animation (milliseconds)
    });

    // !! Bind buttons to actions //
    // Start animation
    $("#start_button").on("click", function() { $("#demo360").peanut360("animate") });
    // Start animation (in reverse)
    $("#start_reverse_button").on("click", function() { $("#demo360").peanut360("animate_reverse") });
    // Stop animation
    $("#stop_button").on("click", function() { $("#demo360").peanut360("animate_stop") });
    // Go to previous slide
    $("#prev_button").on("click", function() { $("#demo360").peanut360("showprevious") });
    // Go to next slide
    $("#next_button").on("click", function() { $("#demo360").peanut360("shownext") });

    // Just autostart it page loading if you wish
    // TODO: only do that when we're sure images are loaded
    $("#demo360").peanut360("animate");
})
</script>
```

## ToDo

 - Properly check that all images are loaded (and maybe provide the user a callback)
 - Handle mobile swipe events to turn slides (which should also handle mouse slide events)
 - Fix "blinking" effect in Firefox which has unknown (to me) reason
 
## License

MIT License

## Copyright

Copyright (c) 2018 Michele Beltrame - mb@italpro.net
