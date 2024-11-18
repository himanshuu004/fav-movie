let favouriteMovie = "Spider Man";
let guess = prompt("Guess My Favourite Movie - ");

while((guess!="Spider Man")&&(guess!="QUITE")){
  guess=prompt("Wrong Guess! TRY AGAIN...");
}

if(guess==favouriteMovie){
  alert("RIGHT GUESS");
}
else if(guess=="QUITE"){
  console.log("YOU QUITE");
}