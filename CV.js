// alert("hello");

// NAVBAR

$(".cv-title a").mouseover(function(){
    $(".cv-title a").css("text-decoration-line", "line-through");
})
$(".cv-title a").mouseout(function(){
    $(".cv-title a").css("text-decoration-line", "none");
})
$(".portfolio-title a").mouseover(function(){
    $(".portfolio-title a").css("text-decoration-line", "line-through");
})
$(".portfolio-title a").mouseout(function(){
    $(".portfolio-title a").css("text-decoration-line", "none");
})
// $(".contact-title a").mouseover(function(){
//     $(".contact-title a").css("text-decoration", "line-through");
// })
// $(".contact-title").mouseout(function(){
//     $(".contact-title").css("text-decoration", "none");
// })

// DROPDOWN

$(".dropBtn").mouseover(function(){
    $(".dropBtn").css("font-weight", "500");
    $(".dropbtn-lang").css("text-decoration", "line-through");
});
$(".dropDown").mouseout(function(){
    $(".dropBtn").css("font-weight", "300");
    $(".dropbtn-lang").css("text-decoration", "none");
    $(".dropbtn-arrow").text("▾")
});

$(".dropContent").mouseover(function(){
    $(".dropContent-textVi").css("font-weight", "500");
    $(".dropContent-textVi").css("text-decoration", "line-through");
    $(".dropbtn-arrow").text("▴");
});
$(".dropContent").mouseout(function(){
    $(".dropContent-textVi").css("font-weight", "300");
    $(".dropContent-textVi").css("text-decoration", "none");
});


// BACKTOTOP

$(".backToTop").mouseover(function(){
    $(".backToTop").css("font-weight", "500");
    $(".backToTop").css("text-decoration", "line-through");
});
$(".backToTop").mouseout(function(){
    $(".backToTop").css("font-weight", "300");
    $(".backToTop").css("text-decoration", "none");
});




