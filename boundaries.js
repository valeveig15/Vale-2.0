const PRIVATE_PATTERNS = [
  "psicologo","psicóloga","psicologo","terapia",
  "orientacion sexual","orientación sexual","bisexual",
  "religion de tu familia","religión de tu familia",
  "bullying","acoso que sufriste",
  "direccion","dirección","donde vivis exactamente","dónde vivís exactamente",
  "periodo","menstruacion","menstruación","migraña","migrana"
];

const INAPPROPRIATE_PATTERNS = [
  "quien va arriba","quién va arriba","quien va abajo","quién va abajo",
  "posicion sexual","posición sexual","que hacen en la cama","qué hacen en la cama",
  "mandame nudes","manda nudes","sexo con"
];

function boundaryFor(text) {
  if (contains(text, ...INAPPROPRIATE_PATTERNS)) {
    return pick(CURRENT_RESPONSES.inappropriateBoundary, chatState.recentReplies);
  }
  if (contains(text, ...PRIVATE_PATTERNS)) {
    return pick(CURRENT_RESPONSES.publicBoundary, chatState.recentReplies);
  }
  return null;
}
