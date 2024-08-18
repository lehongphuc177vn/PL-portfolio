// alert("hi");

// NAVBAR

$(".cv-title a").mouseover(function(){
    $(".cv-title a").css("text-decoration-line", "line-through");
});
$(".cv-title a").mouseout(function(){
    $(".cv-title a").css("text-decoration-line", "none");
});
$(".portfolio-title a").mouseover(function(){
    $(".portfolio-title a").css("text-decoration-line", "line-through");
});
$(".portfolio-title a").mouseout(function(){
    $(".portfolio-title a").css("text-decoration-line", "none");
});
// $(".contact-title a").mouseover(function(){
//     $(".contact-title a").css("text-decoration", "line-through");
// })
// $(".contact-title").mouseout(function(){
//     $(".contact-title a").css("text-decoration", "none");
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


// DROPDOWN SIDEBAR

// var sideBarDropDown = document.getElementsByClassName("sideBar-text");
// var i;
// for (i = 0; i < sideBarDropDown.length; i++){
//     sideBarDropDown[i].addEventListener("mouseover").function() {
//          this.classList.toggle("active");
//         var sideBarDropDownContent = this.nextElementSibling;
//         if(sideBarDropDownContent.style.display === "block"){
//             sideBarDropDownContent.style.display = "none";
//         } else {
//             sideBarDropDownContent.style.display = "block";
//         }  
//     }

// }



// SIDEBAR
// $(".active-sideBar ").mouseover(function(){
//     $(".active-sideBar").css("font-weight", "500");
//     $(".active-sideBar").css("text-decoration", "line-through");
// });
// $(".active-sideBar").mouseout(function(){
//     $(".active-sideBar").css("font-weight", "500");
//     $(".active-sideBar").css("text-decoration", "none");
// });

// $(".slot").mouseover(function(){
//     $(".slot").css("font-weight", "500");
//     $(".slot").css("text-decoration", "line-through");
// });
// $(".slot").mouseout(function(){
//     $(".slot").css("font-weight", "300");
//     $(".slot").css("text-decoration", "none");
// });
    

// $(".mobile").mouseover(function(){
//     $(".mobile").css("font-weight", "500");
//     $(".mobile").css("text-decoration", "line-through");
// });
// $(".mobile").mouseout(function(){
//     $(".mobile").css("font-weight", "300");
//     $(".mobile").css("text-decoration", "none");
// });

// $(".personal").mouseover(function(){
//     $(".personal").css("font-weight", "500");
//     $(".personal").css("text-decoration", "line-through");
// });
// $(".personal").mouseout(function(){
//     $(".personal").css("font-weight", "300");
//     $(".personal").css("text-decoration", "none");
    
// });

// $(".else").mouseover(function(){
//     $(".else").css("font-weight", "500");
//     $(".else").css("text-decoration", "line-through");
// });
// $(".else").mouseout(function(){
//     $(".else").css("font-weight", "300");
//     $(".else").css("text-decoration", "none");
// });

// BACKTOTOP

$(".backToTop").mouseover(function(){
    $(".backToTop").css("font-weight", "500");
    $(".backToTop").css("text-decoration", "line-through");
});
$(".backToTop").mouseout(function(){
    $(".backToTop").css("font-weight", "300");
    $(".backToTop").css("text-decoration", "none");
});


// MODAL
    var modal = document.getElementById("myModal");
    var imgs = document.getElementsByClassName("personalImgs");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

for (var i = 0; i < imgs.length; i++){
    var img = imgs[i];    
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
};};

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}




    var modal2 = document.getElementById("myModal2");
    var imgs2 = document.getElementsByClassName("personalImgs2");
    var modalImg2 = document.getElementById("img02");
    var captionText2 = document.getElementById("caption2");

for (var i = 0; i < imgs2.length; i++){
    var img2 = imgs2[i];    
    img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
};};

var span = document.getElementsByClassName("close2")[0];
span.onclick = function(){
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal2) {
    modal2.style.display = "none";
    }
}

//RESPONSIVE MENU

function myFunction(){
    var popup = document.getElementById("text-Popup");
    popup.classList.toggle("show");
 
}

var toggleBack = document.getElementById("nav-container-menu-icon");
toggleBack.addEventListener("click", function(){
    if(toggleBack.innerHTML === "≡"){
        toggleBack.innerHTML = "⨉";
    } else {
        toggleBack.innerHTML = "≡"
    }
}
);

