function detectName(text) {
  const s = String(text || "").trim();
  const patterns = [
    /\bme llamo\s+([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{2,24})\b/i,
    /\bmi nombre es\s+([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{2,24})\b/i,
    /\bsoy\s+([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{2,24})\b/i
  ];
  for (const p of patterns) {
    const m = s.match(p);
    if (m) return m[1];
  }
  return null;
}

function disambiguateMate(text) {
  // "mate" debe ser una palabra completa: no confundir con "materia(s)".
  const ts = tokens(text);
  if (!ts.includes("mate")) return null;
  if (contains(text, "matematica","matemática","ejercicio","formula","fórmula","liceo","clase","prueba","parcial","materia")) {
    return "math";
  }
  if (contains(text, "yerba","termo","bombilla","tomar","amargo","dulce","agua caliente")) {
    return "drink";
  }
  return "ambiguous";
}

function looksLikeUnknownOpinionQuestion(text) {
  return contains(text, "que opinas de","qué opinas de","que pensas de","qué pensás de","conoces","conocés");
}

function unknownThingFromQuestion(text) {
  let x = extractAfter(text, ["que opinas de","qué opinas de","que pensas de","qué pensás de","conoces","conocés"]);
  return x.replace(/[?¿!¡.]+$/g, "").trim();
}
