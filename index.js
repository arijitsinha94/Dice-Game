var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var image1 = "dice" + randomNumber1 + ".png";

var firstImage = "images/" + image1;

var finalFirstImage = document.querySelectorAll("img")[0];

finalFirstImage.setAttribute("src", firstImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image2 = "dice" + randomNumber2 + ".png";

var secondImage = "images/" + image2;

var secondFinalImage = document.querySelectorAll("img")[1];

secondFinalImage.setAttribute("src",secondImage);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Won🏆";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Won🏆";
}
else {
  document.querySelector("h1").innerHTML = "Draw✌";
}
