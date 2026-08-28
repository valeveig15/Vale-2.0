const BANK = {
  saludos: SALUDOS,
  personalidad: PERSONALIDAD,
  vida: VIDA,
  opiniones: OPINIONES,
  juegos: JUEGOS,
  filosofia: FILOSOFIA,
  conversacion: CONVERSACION,
  mega1: MEGA1,
  mega2: MEGA2,
  mega3: MEGA3
};

const EXPANSIONS = {
  "saludos.saludos": [["mega1","saludos_extra"]],
  "saludos.comoEstas": [["mega1","comoEstas_extra"]],
  "saludos.queHaces": [["mega1","queHaces_extra"]],
  "personalidad.musica": [["mega1","musicaRespuestas_extra"]],
  "personalidad.anime": [["mega1","animeRespuestas_extra"]],
  "personalidad.libro": [["mega1","librosRespuestas_extra"]],
  "personalidad.serie": [["mega1","seriesRespuestas_extra"]],
  "personalidad.seriesEnGeneral": [["mega1","seriesRespuestas_extra"]],
  "personalidad.violin": [["mega1","violinRespuestas_extra"],["mega2","sobre_el_violinDetallado"]],
  "personalidad.escritura": [["mega2","sobre_la_escrituraDetallado"]],
  "personalidad.arcane": [["mega2","sobre_arcaneDetallado"]],
  "personalidad.que_es_gloria": [["mega2","sobre_gloriaDetallado"]],
  "personalidad.drHouse": [["mega2","sobre_drHouseDetallado"]],
  "personalidad.violetEvergarden": [["mega2","sobre_violetEvergardenDetallado"]],
  "personalidad.pokemonFavorito": [["mega2","sobre_psyduckDetallado"]],
  "vida.amigos": [["mega1","amigosRespuestas_extra"]],
  "vida.abuelo": [["mega3","sobre_abueloDetallado"]],
  "vida.pelo": [["mega3","sobre_peloAzulDetallado"]],
  "vida.esgrima": [["mega3","sobre_esgrimaDetallado"]],
  "vida.noche": [["mega3","sobre_pensamientos_nocturnos"]]
};

function bank(category, key) {
  return BANK[category]?.[key] || [];
}

function expandedPool(category, key) {
  let pool = [...bank(category,key)];
  for (const [c,k] of (EXPANSIONS[`${category}.${key}`] || [])) {
    pool = pool.concat(bank(c,k));
  }
  return pool;
}

function answerFrom(category, key) {
  return pick(expandedPool(category, key), chatState.recentReplies);
}
