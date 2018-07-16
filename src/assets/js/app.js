var sliderClass = document.getElementsByClassName("slider");

    console.log(sliderClass);

$(document).ready(function () {
    var sliderClass = document.getElementsByClassName("slider");

    console.log(sliderClass);
    $("#slider").responsiveSlides({
      auto: true,
      speed: 500,
      namespace: "callbacks",
      pager: true,
    });
});




$( window ).load(function() {
    $("document").ready(function () {
        var sliderClass = document.getElementsByClassName("slider");
    
        console.log(sliderClass);
        $("#slider").responsiveSlides({
          auto: true,
          speed: 500,
          namespace: "callbacks",
          pager: true,
        });
    });
});

$.when($.ready).then(function(){
    $("#slider").responsiveSlides({
        auto: true,
        speed: 500,
        namespace: "callbacks",
        pager: true,
    });
})