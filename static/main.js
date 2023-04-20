$(document).ready(function(){


    var imgw = $(".sing").width();
    console.log(imgw);
    $(".sing").css("height", imgw/2 );



    $(window).resize(function(){
        var imgw = $(".sing").width();
        console.log(imgw);
        $(".sing").css("height", imgw/2 );
    })

    $(".sing").hover(function(){
        $(this).toggleClass("fullsize")
    }) 
})