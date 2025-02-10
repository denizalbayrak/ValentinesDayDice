randomGenerator();
function randomGenerator() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", "./assets/dices/dice"+randomNumber1 +".png");
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var image1 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", "./assets/dices/dice"+randomNumber2 +".png");
    
    var text = document.querySelector("h1").innerHTML;
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "Lover 1 wins!";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML = "Lover 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "It's a tie!";
    }
 }

 function createHeart() {
    const heart = document.createElement("img");
    heart.classList.add("heart");
    heart.src = "./assets/hearth.png";
  
    heart.style.left = Math.random() * 100 + "vw"; // Genişlik rastgele
    heart.style.animationDuration = Math.random() * 3 + 5 + "s"; // 5-8 saniye arasında düşme süresi
    heart.style.width = Math.random() * 30 + 5 + "px"; // arasında rastgele büyüklük
  
    document.querySelector(".hearts-container").appendChild(heart);
  

    setTimeout(() => {
      heart.remove();
    }, duration * 800);// Kalp animasyon süresi kadar sonra kaldırıldı
  }
  
  setInterval(createHeart, 500);
  