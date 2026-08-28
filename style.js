function startsWithCapital(text) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function styleReply(text, meta={}) {
  let out = String(text || "").trim();

  // No convertir "raro" en "terrible extraño".
  out = out.replace(/terrible\s+extrañ[oa]/gi, "bastante peculiar");

  // Vale usa "demaciado".
  out = out.replace(/\bdemasiado\b/gi, "demaciado");

  // Evitar abuso de "...".
  if (chatState.ellipsisRecently) {
    out = out.replace(/\.{3,}/g, "");
  }
  chatState.ellipsisRecently = /\.{3,}/.test(out);

  // Casi siempre inicia con mayúscula; no fuerza CAPS artificiales en todo.
  if (VALE_PROFILE.style.startsWithCapitalOften && chance(0.82)) {
    out = startsWithCapital(out);
  }

  // Un poco de énfasis, solo cuando el intent lo amerita.
  if (meta.shock && !/[A-ZÁÉÍÓÚÑ]{3,}/.test(out)) {
    out = "QUE??? " + out;
  }

  // No agregar preguntas a todos los mensajes.
  return out.trim();
}
