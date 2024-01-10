//TEXT
$("div h1").text("Today Shakib Al Hasan become Member of the Parliament");
//BOLD WITH HTML
$("div h1").html(
  "Alhamdulillah.Today Shakib Al Hasan become Member of the Parliament"
);
//APPEND MEANS ADDING SOMTHING AFTER PREVIOUS ONE
$("#para").append(" append");
//PREPEND MEANS ADDING SOMTHING BEFORE PREVIOUS ONE
$("#para").prepend("prepend ");
//I CAN ADD ANY ELEMENT AFTER ANY ELEMENT BY before
var mypara0 = $("<p></p>").text("0 no para");
$("div h1").after(mypara0);
//I CAN ADD ANY ELEMENT BEFORE ANY ELEMENT by after
var myh1 = $("<h1></h1>").text("ki koro");
$("#h1").before(myh1);
