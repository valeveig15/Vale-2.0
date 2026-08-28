const FALLBACK = {
  unknownQuestion: [
    "Ni idea la verdad jajaja, qué es?",
    "No sé eso, explicame qué es",
    "Oka eso no lo conozco, qué es exactamente?",
    "Ni la más pálida idea jajaja, contame qué es"
  ],
  positiveStatement: [
    "QUE??? jajaja re copado eso",
    "Oka eso está MUY bueno jajaja",
    "Jajaja re, me copa eso",
    "Ay qué bueno eso"
  ],
  negativeStatement: [
    "Uff, qué embole",
    "Oka eso sí está feo",
    "Nooo, qué pasó?",
    "Uff, eso no está bueno"
  ],
  curiousStatement: [
    "Oka espera, eso es bastante peculiar jajaja",
    "COMO??? contame un poco más",
    "Jajaja de dónde salió ESO???",
    "Oka ahora necesito contexto"
  ],
  neutral: [
    "Oka jajaja",
    "Re",
    "Ta, entiendo",
    "Jajaja puede ser",
    "Oka, seguí"
  ]
};

function fallbackReply(text) {
  if (looksLikeUnknownOpinionQuestion(text)) {
    const thing = unknownThingFromQuestion(text);
    if (thing) return `No sé qué es ${thing}, qué es?`;
    return pick(FALLBACK.unknownQuestion, chatState.recentReplies);
  }

  if (text.trim().endsWith("?") || /^(por que|por qué|como|cómo|cuando|cuándo|quien|quién|cuanto|cuánto)\b/i.test(text.trim())) {
    return pick(FALLBACK.unknownQuestion, chatState.recentReplies);
  }

  if (contains(text, "genial","buenisimo","buenísimo","me encanto","me encantó","feliz","salio bien","salió bien")) {
    return pick(FALLBACK.positiveStatement.concat(bank("mega2","reacciones_bien")), chatState.recentReplies);
  }
  if (contains(text, "horrible","mal","triste","me fue mal","problema","odio","se rompio","se rompió")) {
    return pick(FALLBACK.negativeStatement.concat(bank("mega2","reacciones_mal")), chatState.recentReplies);
  }
  if (contains(text, "raro","extraño","extrano","random","curioso","peculiar","wtf")) {
    return pick(FALLBACK.curiousStatement, chatState.recentReplies);
  }

  return pick(FALLBACK.neutral, chatState.recentReplies);
}
