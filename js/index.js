//for player1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImgSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource);

/*switch(randomNumber1){
    case 1: document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
        break;
    case 2: document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
        break;
    case 3: document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
        break;
    case 4: document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
        break;
    case 5: document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
        break;
    case 6: document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
}*/

//for player2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

/*switch(randomNumber2){
    case 1: document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
        break;
    case 2: document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
        break;
    case 3: document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
        break;
    case 4: document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
        break;
    case 5: document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
        break;
    case 6: document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");
}*/

//decide the winner

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw";
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}