setInterval(() => {
const h = document.createElement("div");
h.innerHTML = "❤️";
h.style.position = "fixed";
h.style.left = Math.random() * 100 + "vw";
h.style.top = "-10px";
h.style.fontSize = "20px";
h.style.animation = "fall 5s linear";
document.body.appendChild(h);
setTimeout(() => h.remove(), 5000);
}, 300);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
to {
transform: translateY(110vh);
opacity: 0;
}
}`;
document.head.appendChild(style);
