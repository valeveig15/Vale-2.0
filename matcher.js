function scoreIntent(text, intent) {
  let score = 0;
  if (intent.exact && intent.exact.some(x => exact(text, x))) score += 200;
  if (intent.words) {
    for (const w of intent.words) {
      if (contains(text, w)) score += 25 + normalize(w).length;
    }
  }
  return score + (score ? (intent.p || 0) : 0);
}

function matchIntent(text) {
  const mate = disambiguateMate(text);
  if (mate === "math") {
    return {name:"math", topic:"materias", bank:["vida","mate"], score:999};
  }
  if (mate === "drink") {
    return {name:"mate_drink", topic:"comida", custom:"mate_drink", score:999};
  }
  if (mate === "ambiguous") {
    return {name:"mate_ambiguous", topic:"contexto", custom:"mate_ambiguous", score:999};
  }

  let best = null;
  for (const intent of INTENTS) {
    const score = scoreIntent(text, intent);
    if (score > 0 && (!best || score > best.score)) {
      best = {...intent, score};
    }
  }
  return best;
}
