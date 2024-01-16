$(".btn1").click(function () {
  $(".div1").hide(3000);
});

$(".btn2").click(function () {
  $(".div2").show(3000);
});

$(".btn3").click(function () {
  $(".div3").show(1000).hide(1000);
});

$(".btn4").click(function () {
  $(".div4").toggle(3000);
});

$(".btn5").click(function () {
  $(".div5").fadeOut(3000);
});

$(".btn6").click(function () {
  $(".div6").fadeIn(3000);
});

$(".btn7").click(function () {
  $(".div7").fadeOut(3000).fadeIn(1000);
});

$(".btn8").click(function () {
  $(".div8").fadeToggle(1000);
});

$(".btn9").click(function () {
  $(".div9").fadeTo(1000);
});

$(".btn10").click(function () {
  $(".div10").slideDown(3000);
});

$(".btn11").click(function () {
  $(".div11").slideUp(1000);
});

$(".btn12").click(function () {
  $(".div12").slideToggle(3000);
});

$(".btn13").click(function () {
  $(".div13").animate(
    {
      color: "white",
      backgroundColor: "yellow",
      height: "500px",
      marginRight: "4rem",
    },
    2000
  );
});
