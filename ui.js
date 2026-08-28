const messagesEl = document.getElementById("messages");
const typingEl = document.getElementById("typing");
const statusEl = document.getElementById("status");
const inputEl = document.getElementById("msg-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, role) {
  const parts = String(text).split("\n").filter(x => x.trim());
  for (const part of parts) {
    const wrap = document.createElement("div");
    wrap.className = "bubble-wrap " + role;

    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const span = document.createElement("span");
    span.textContent = part.trim();
    bubble.appendChild(span);

    const time = document.createElement("div");
    time.className = "time";
    time.textContent = getTime();
    bubble.appendChild(time);

    wrap.appendChild(bubble);
    messagesEl.insertBefore(wrap, typingEl);
  }
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function sendMessage() {
  const text = inputEl.value.trim();
  if (!text) return;

  inputEl.value = "";
  inputEl.style.height = "auto";
  addMessage(text, "user");

  typingEl.classList.add("show");
  statusEl.textContent = "escribiendo...";
  statusEl.className = "header-status typing";

  const reply = getResponse(text);
  const delay = 350 + Math.random() * 850;

  setTimeout(() => {
    typingEl.classList.remove("show");
    statusEl.textContent = "en línea";
    statusEl.className = "header-status";
    addMessage(reply, "vale");
  }, delay);
}

sendBtn.addEventListener("click", sendMessage);
inputEl.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
inputEl.addEventListener("input", () => {
  inputEl.style.height = "auto";
  inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + "px";
});

window.sendMessage = sendMessage;
