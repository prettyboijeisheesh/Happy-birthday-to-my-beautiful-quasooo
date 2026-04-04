function startConfetti() {
  const colors = ["#ffb6c1", "#ff69b4", "#add8e6", "#fff0f5", "#ffe4e1"];
  const count = 100;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.opacity = 1;
    confetti.style.borderRadius = "50%";
    confetti.style.pointerEvents = "none";
    confetti.style.transition = "all 3s linear";

    document.body.appendChild(confetti);

    // Animate falling
    setTimeout(() => {
      confetti.style.top = window.innerHeight + "px";
      confetti.style.left = (parseFloat(confetti.style.left) + (Math.random() * 100 - 50)) + "px";
      confetti.style.opacity = 0;
    }, 10);

    // Remove after animation
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}