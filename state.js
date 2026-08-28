const chatState = {
  greeted: true, // la interfaz ya abre con un saludo de Vale
  turn: 0,
  userName: null,
  declaredRole: "unknown", // unknown | martin | friend | other
  lastTopic: null,
  lastIntent: null,
  pending: null,
  history: [],
  recentReplies: [],
  ellipsisRecently: false,
  randomQuestionCooldown: 0
};

function remember(role, text, meta={}) {
  chatState.history.push({ role, text, meta });
  if (chatState.history.length > 40) chatState.history.shift();
}

function rememberReply(text) {
  chatState.recentReplies.push(text);
  if (chatState.recentReplies.length > 8) chatState.recentReplies.shift();
}

function setDeclaredIdentity(name) {
  if (!name) return;
  chatState.userName = name;
  const n = normalize(name);
  if (["martin","savi","pizza"].includes(n)) chatState.declaredRole = "martin";
  else chatState.declaredRole = "other";
}
