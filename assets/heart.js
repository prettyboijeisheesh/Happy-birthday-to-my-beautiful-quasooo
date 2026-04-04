function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = Math.random() * window.innerHeight + "px";
  heart.style.fontSize = (20 + Math.random() * 30) + "px";
  heart.style.opacity = 1;
  heart.style.pointerEvents = "none";
  heart.style.transition = "all 2s linear";

  document.body.appendChild(heart);

  // Animate heart rising and fading
  setTimeout(() => {
    heart.style.top = (parseFloat(heart.style.top) - 200 - Math.random() * 100) + "px";
    heart.style.opacity = 0;
    heart.style.transform = `rotate(${Math.random()*360}deg)`;
  }, 10);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 2000);
}