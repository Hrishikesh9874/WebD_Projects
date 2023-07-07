var randomNumber1=Math.floor(Math.random() * 6)+1;

var randomDice1="dice"+randomNumber1+".png";

var randomImgSrc1="images/"+randomDice1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc1);



var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDice2="dice"+randomNumber2+".png";

var randomImgSrc2="images/"+randomDice2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSrc2);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").style.fontSize="6rem";
    document.querySelector('h1').innerHTML="🔥🔥Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").style.fontSize="6rem";
    document.querySelector('h1').innerHTML="Player 2 Wins🔥🔥";
}
else{
    document.querySelector("h1").style.fontSize="6rem";
    document.querySelector('h1').innerHTML="Draw!! Kindly refresh to check result";
}
