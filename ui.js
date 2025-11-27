// js/ui.js
function showMessage(text, color = "white") {
  const msg = document.createElement("div");
  msg.textContent = text;
  msg.style.color = color;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}
