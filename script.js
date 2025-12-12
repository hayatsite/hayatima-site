// Typing Effect
const text = document.querySelector('.typing');
let i = 0;
const msg = text.textContent;
text.textContent = "";

function type() {
  if (i < msg.length) {
    text.textContent += msg.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}
setTimeout(type, 3500);

// Heart Rain
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💗';
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.animationDuration = (2+Math.random()*3) + 's';
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
}
setInterval(createHeart, 300);

// Surprise messages
const messages = [
  "Gülüşün kalbimin favori sesi 💕",
  "Seninle her şey daha güzel 🌙",
  "Kalbim seni seçti, hep öyle kalacak ❤️",
  "Sen benim en güzel hikayemsin ✨"
];

document.getElementById("surpriseBtn").onclick = () => {
  document.getElementById("surpriseText").textContent =
    messages[Math.floor(Math.random()*messages.length)];
};
