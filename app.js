// Typing element
const typingElement = document.getElementById("typing");
let typingInterval = null;

function typeMessage(text) {
  if (typeof text !== "string") return;
  if (typingInterval) clearInterval(typingInterval);

  typingElement.textContent = "";
  let i = 0;

  typingInterval = setInterval(() => {
    typingElement.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typingInterval);
      typingInterval = null;
    }
  }, 100);
}

// Initial message
typeMessage("Do you love me as much as I love you?");

// Buttons
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const music = new Audio("assets/birthday-music.mp3");

// Birthday greetings
const birthdayMessages = [
  "Happy Birthday, my Cutiepie! 🎂💖",
  "May your day be as lovely as you are! 🥰",
  "I’m so lucky to have you! 💕",
  "Today is all about you, my love! 🎉",
  "Love you forever 💖 My Quasoooo!"
];

// No button messages
const noMessages = [
  "Are you sure? 😢",
  "For real?? 😭",
  "So you don't love me anymore? 💔",
  "Try again… I’ll wait 🥺",
  "That hurts 😔",
  "Please think again 💖",
  "Don't do this to me 😭",
  "Last chance… 😳",
  "You sure sure?? 😩",
  "I know you love me 😏",
  "Stop playing 😭",
  "You're joking right? 😅",
  "Be honest... 🥺",
  "Say YES already 💖"
];

// Yes click
yesBtn.addEventListener("click", () => {
  music.play();
  yesBtn.style.boxShadow = "0 0 30px 10px #ff69b4";
  startConfetti();
  for (let i = 0; i < 50; i++) createHeart();

  const randomText = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
  typeMessage(randomText);

  document.getElementById("button-container").style.display = "none";
  launchBalloons(10);
  createStars(50);
});

// No click
noBtn.addEventListener("mousedown", () => {
  const randX = Math.floor(Math.random() * 200) - 100;
  const randY = Math.floor(Math.random() * 60) - 30;
  noBtn.style.position = "relative";
  noBtn.style.left = randX + "px";
  noBtn.style.top = randY + "px";

  let style = window.getComputedStyle(noBtn);
  let currentSize = parseInt(style.fontSize);
  if(currentSize > 0){
    noBtn.style.fontSize = currentSize - 4 + "px";
  }
  if(currentSize <= 4){
    noBtn.style.display = "none";
  }

  const randomText = noMessages[Math.floor(Math.random() * noMessages.length)];
  typeMessage(randomText);

  shakeScreen();
});

// Shake screen
function shakeScreen(){
  const container = document.querySelector(".container");
  let i=0;
  const interval = setInterval(()=>{
    const x=(Math.random()*10-5);
    const y=(Math.random()*10-5);
    container.style.transform=`translate(${x}px,${y}px)`;
    i++;
    if(i>10){
      clearInterval(interval);
      container.style.transform="translate(0,0)";
    }
  },20);
}

// Balloons
function launchBalloons(amount){
  const balloonContainer = document.getElementById("balloon-container");
  for(let i=0;i<amount;i++){
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.backgroundColor=`hsl(${Math.random()*360},80%,70%)`;
    balloon.style.left=Math.random()*90+'%';
    balloon.style.animationDuration=(6+Math.random()*4)+'s';
    balloonContainer.appendChild(balloon);

    setTimeout(()=>balloon.remove(),8000);
  }
}

// Stars
function createStars(amount){
  const stars = document.getElementById("stars");
  for(let i=0;i<amount;i++){
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top=Math.random()*100+'%';
    star.style.left=Math.random()*100+'%';
    stars.appendChild(star);
    setTimeout(()=>star.remove(),10000);
  }
}