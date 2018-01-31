# jQueryPeanut360

360-degrees image animator/slider which doesn't get in your way.

## Key features

This is a small jQuery plugin for creating 360-degreems image sliders. It doesn't try to do more than it needs to, but it instead exposes the methods which allow you to do anything you want.

These are the key points behind this plugin:

 - It just analyzes your img tags and show/hides them when necessary
 - It doesn't modify the DOM
 - It doesn't care if you wrap one or more of your images in another tag (such as and <a> to view a zoom)
 - It doesn't force you to use any provided UI or button, you just use your own
 - It just needs jQuery to work

## Usage

### DWIM

This demo uses Bootstrap 4 classes, but you can use whatever you want.

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

    <script type="text/javascript" src="jquery.peanut360.js"></script>
    <script type="text/javascript">
    $(function() {
        // Initialize with no params if you use "d-none" as class for hiding
        $("#maserin360").peanut360();

        $("#start_button").on("click", function() { $("#maserin360").peanut360("animate") });
        $("#start_reverse_button").on("click", function() { $("#maserin360").peanut360("animate_reverse") });
        $("#stop_button").on("click", function() { $("#maserin360").peanut360("animate_stop") });
        $("#prev_button").on("click", function() { $("#maserin360").peanut360("showprevious") });
        $("#next_button").on("click", function() { $("#maserin360").peanut360("shownext") });
    })
    </script>

## ToDo

 - Handle mobile swipe events to turn slides

## License

MIT License

## Copyright

Copyright (c) 2018 Michele Beltrame - mb@italpro.net
