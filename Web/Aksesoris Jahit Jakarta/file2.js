$(document).ready(function(){
    $("h1").click(function(){
        $(this).css("color", "#ff0000");
    })
});

// function klik (){
//     console.log("hellow");
// }

// $(".").on("click", klik())

function AboutUs(){
    $(".about-section > .about-heading").show()
};

$(".main-nav > li > #about-us").on("click",() => {
    AboutUs()
});

