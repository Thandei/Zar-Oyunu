 document.querySelector("#custom-button").addEventListener("click", function() {
     var randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);

     var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
     var dice1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

     var dice2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

     var dice1Number = document.querySelector(".img1").getAttribute("src").slice(11, 12);

     var dice2Number = document.querySelector(".img2").getAttribute("src").slice(11, 12);

     if (dice1Number > dice2Number) {
         document.querySelector(".container h1").innerHTML = "Player 1 Won !"
     } else if (dice2Number > dice1Number) {
         document.querySelector(".container h1").innerHTML = "Player 2 Won !"
     } else {
         document.querySelector(".container h1").innerHTML = "Draw !"
     }


 })