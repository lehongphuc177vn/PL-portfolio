// alert("hello");

// PASSWORD (SOURCE PAGE)

document.addEventListener("DOMContentLoaded", function () {
  const PASSWORD = "phle177";
  const KEY = "unlock_until";              // lưu epoch ms
  const TTL_MS = 5 * 60 * 1000;            // 5 phút

  function isUnlocked() {
    const until = Number(localStorage.getItem(KEY) || 0);
    return Date.now() < until;
  }

  function setUnlocked() {
    localStorage.setItem(KEY, String(Date.now() + TTL_MS));
  }

  document.querySelectorAll("a.locked").forEach(a => {
    a.addEventListener("click", function (e) {
      e.preventDefault();

      if (isUnlocked()) {
        window.location.href = this.href;
        return;
      }

      const pass = prompt("Enter password");
      if (pass === PASSWORD) {
        setUnlocked();                     // set unlock trước khi chuyển trang
        window.location.href = this.href;
      } else {
        alert("Wrong password. Please try again.");
      }
    });
  });
});

// PASSWORD

// document.addEventListener("DOMContentLoaded", function () {

//   const PASSWORD = "phle177";

//   document.querySelectorAll(".locked").forEach(link => {
//     link.addEventListener("click", function(e) {
//       e.preventDefault();

//       const pass = prompt("Enter password");
//       if (pass === PASSWORD) {
//         window.location.href = this.href;
//       } else {
//         alert("Wrong password. Please try again.");
//       }
//     });
//   });

// });

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


// BACKTOTOP

$(".backToTop").mouseover(function(){
    $(".backToTop").css("font-weight", "500");
    $(".backToTop").css("text-decoration", "line-through");
});
$(".backToTop").mouseout(function(){
    $(".backToTop").css("font-weight", "300");
    $(".backToTop").css("text-decoration", "none");
});

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



