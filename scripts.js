$(document).ready(function () {
    $("#myButton").click(function () {
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: "puppies",
            tagmode: "any",
            format: "json"
        }, function (data) {
            $.each(data.items, function (i, item) {
                var img = $("<img/>");
                img.attr('width', '200px');
                img.attr('height', '150px');
                img.attr("src", item.media.m).appendTo("#divImages");
                if (i == 9) return false;
            });
        });
    });

    $("#myButton2").click(function myButton2() {
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: "kitten",
            tagmode: "any",
            format: "json"
        }, function (data) {
            $.each(data.items, function (i, item) {
                var img = $("<img/>");
                img.attr('width', '200px');
                img.attr('height', '150px');
                img.attr("src", item.media.m).appendTo("#divImages2");
                if (i == 9) return false;
            });
        });
        console.log('This is working!');
    });

    $("#myButton3").click(function myButton3() {
        var x = prompt('What animal would you like to see?')
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: x,
            tagmode: "any",
            format: "json"
        }, function (data) {
            $.each(data.items, function (i, item) {
                var img = $("<img/>");
                img.attr('width', '200px');
                img.attr('height', '150px');
                img.attr("src", item.media.m).appendTo("#divImages3");
                if (i == 9) return false;
            });
        });
    });
});


