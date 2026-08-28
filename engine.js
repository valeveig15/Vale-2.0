function customAnswer(kind, text) {
  switch (kind) {
    case "hard_subjects":
      return pick(CURRENT_RESPONSES.difficultSubjects, chatState.recentReplies);

    case "relationship":
      // Los apodos privados no se usan delante de terceros.
      if (chatState.declaredRole === "martin") {
        return pick([
          "SI 💜 jajaja, obvio",
          "Oka TÚ sabés perfectamente la respuesta jajaja",
          "SI, y estoy muy feliz con vos 💜"
        ], chatState.recentReplies);
      }
      return pick(CURRENT_RESPONSES.relationshipPublic, chatState.recentReplies);

    case "night":
      return pick(CURRENT_RESPONSES.nightRoutine, chatState.recentReplies);

    case "night_or_doing":
      if (new Date().getHours() >= 21 || new Date().getHours() < 5) {
        return pick(CURRENT_RESPONSES.nightRoutine, chatState.recentReplies);
      }
      return answerFrom("saludos","queHaces");

    case "mate_drink":
      return pick([
        "Ahh MATE de tomar jajaja, oka",
        "Oka pensé que hablabas de matemática por un segundo 😭",
        "Mate de tomar, sí sí jajaja"
      ], chatState.recentReplies);

    case "mate_ambiguous":
      return pick([
        "Mate de matemática o mate de tomar???",
        "Oka espera, con mate decís matemática o el mate???",
        "Mate cuál de los dos jajaja???"
      ], chatState.recentReplies);

    case "career":
      return pick(bank("mega3","sobre_ingienieriaBiomedicaDetallado"), chatState.recentReplies);

    case "spain":
      return pick(bank("mega3","sobre_espanaDetallado"), chatState.recentReplies);

    case "simulation_identity":
      return pick([
        "Soy una simulación de chat hecha para responder con el estilo de Vale",
        "No soy la Vale real jajaja, soy el simulador",
        "Soy el simulador de Vale, no la persona real"
      ], chatState.recentReplies);
  }
  return "";
}

function maybeIdentityStep(text) {
  const detected = detectName(text);
  if (detected) {
    setDeclaredIdentity(detected);
    return pick([
      `Oka ${detected} jajaja`,
      `Ahh ${detected}, oka`,
      `${detected}!! oka jajaja`
    ], chatState.recentReplies);
  }

  // La UI ya saludó. No volver a saludar: primero averiguar quién escribe.
  if (chatState.turn <= 2 && !chatState.userName && chatState.declaredRole === "unknown") {
    if (exact(text, "hola","holaa","holaaa","hey","buenas","que onda","qué onda")) {
      return pick([
        "Oka pero quién sos??? jajaja",
        "Jajaja quién sos???",
        "Espera, quién sos???"
      ], chatState.recentReplies);
    }
  }
  return null;
}

function maybeRandomQuestion(reply) {
  if (chatState.randomQuestionCooldown > 0) {
    chatState.randomQuestionCooldown--;
    return reply;
  }
  if (chance(VALE_PROFILE.style.randomQuestionChance) && chatState.turn > 3) {
    const q = answerFrom("filosofia","preguntasRandom");
    if (q) {
      chatState.randomQuestionCooldown = 4 + Math.floor(Math.random()*4);
      return reply + "\n" + q;
    }
  }
  return reply;
}

function getResponse(input) {
  const text = String(input || "").trim();
  chatState.turn++;

  const boundary = boundaryFor(text);
  if (boundary) {
    const styled = styleReply(boundary);
    remember("user", text, {intent:"boundary"});
    remember("vale", styled, {intent:"boundary"});
    rememberReply(styled);
    return styled;
  }

  const identityReply = maybeIdentityStep(text);
  if (identityReply) {
    const styled = styleReply(identityReply);
    remember("user", text, {intent:"identity"});
    remember("vale", styled, {intent:"identity"});
    rememberReply(styled);
    return styled;
  }

  const match = matchIntent(text);
  let reply = "";

  if (match) {
    chatState.lastIntent = match.name;
    chatState.lastTopic = match.topic;

    if (match.custom) reply = customAnswer(match.custom, text);
    else if (match.bank) reply = answerFrom(match.bank[0], match.bank[1]);
  }

  if (!reply) {
    // Si el mensaje es corto y existe un tema previo, algunas continuaciones
    // se interpretan dentro de ese tema en lugar de empezar desde cero.
    if (tokens(text).length <= 4 && chatState.lastTopic && !text.endsWith("?")) {
      if (chatState.lastTopic === "violin") reply = answerFrom("personalidad","violinSeguimiento");
      else if (chatState.lastTopic === "anime") reply = answerFrom("personalidad","anime");
      else if (chatState.lastTopic === "liceo") reply = answerFrom("vida","liceoSeguimiento");
      else if (chatState.lastTopic === "relacion") reply = answerFrom("vida","relacionPreguntas");
    }
  }

  if (!reply) reply = fallbackReply(text);

  // Sarcasmo para preguntas obviamente absurdas, sin convertir todo en sarcasmo.
  if (contains(text, "obvio","es una estupidez","es una boludez") && chance(0.65)) {
    reply = "😑 " + reply;
  }

  reply = styleReply(reply, {
    shock: contains(text, "no puede ser","wtf","increible","increíble")
  });

  reply = maybeRandomQuestion(reply);

  remember("user", text, {intent:match?.name || "fallback"});
  remember("vale", reply, {intent:match?.name || "fallback"});
  rememberReply(reply);
  return reply;
}
