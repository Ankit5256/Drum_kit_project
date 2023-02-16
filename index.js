var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML= this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    switch (buttonInnerHTML) {
      case "w":
          var tom1= new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
      case "a":
          var tom2= new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;
      case "s":
          var tom3= new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;
      case "d":
          var tom4= new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;
      case "j":
          var snare= new Audio("sounds/snare.mp3");
          snare.play();
        break;
      case "k":
          var crash= new Audio("sounds/crash.mp3");
          crash.play();
        break;
      case "l":
          var kick_bass= new Audio("sounds/kick-bass.mp3");
          kick_bass.play();
        break;


    }
  });
}
$(document).keypress(function(event){
 buttonAnimation(event.key);
 switch (event.key) {
  case "w":
      var tm1= new Audio("sounds/tom-1.mp3");
      tm1.play();
    break;
  case "a":
      var tm2= new Audio("sounds/tom-2.mp3");
      tm2.play();
    break;
  case "s":
      var tm3= new Audio("sounds/tom-3.mp3");
      tm3.play();
    break;
  case "d":
      var tm4= new Audio("sounds/tom-4.mp3");
      tm4.play();
    break;
  case "j":
      var snar= new Audio("sounds/snare.mp3");
      snar.play();
    break;
  case "k":
      var cras= new Audio("sounds/crash.mp3");
      cras.play();
    break;
  case "l":
      var kick_bas= new Audio("sounds/kick-bass.mp3");
      kick_bas.play();
    break;


}
});


function buttonAnimation(currkey){
 var activeButton = document.querySelector("."+currkey);
 activeButton.classList.add("pressed");
 setTimeout(function(){
   activeButton.classList.remove("pressed");
 },100);
}
