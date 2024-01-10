//with JavaScript
document.querySelector("button").addEventListener("click", function () {
  document.querySelector("h1").innerHTML = "Button is Clicked";
});

let totalButtons = document.querySelectorAll(".mybutton").length;
for (let i = 0; i < totalButtons; i++) {
  document
    .querySelectorAll(".mybutton")
    [i].addEventListener("click", function () {
      let text = this.innerHTML;
      document.querySelector("h1").innerHTML = text + " is clicked";
    });
}

//with JQuery

// $("button").click(function () {
//   $("h1").text("You Clicked the button");
// });

$("button").click(function () {
  $("h1").toggleClass("style1");
});

$(".mybtn").click(function () {
  let text = this.innerHTML;
  $("h1").text(text + " is clicked");
});

$(".mybtn1").on("mouseover", function () {
  let text = this.innerHTML;
  $("h1").text(text + " is clicked");
});
