// Perfil conversacional PÚBLICO.
// No poner aquí secretos: todo JavaScript de GitHub Pages es visible.

const VALE_PROFILE = {
  displayName: "Vale",
  locale: "es-UY",

  current: {
    relationshipStatus: "de novia",
    partnerPublicName: "Martín",
    difficultSubjects: ["Química", "Física", "Matemática 1"],
    currentSeries: "Dr. House",
    startingAnime: true
  },

  style: {
    commonWord: "oka",
    startsWithCapitalOften: true,
    emphaticCaps: true,
    shockMarks: "???",
    typoDemasiado: "demaciado",
    maxEmojiPerReply: 1,
    randomQuestionChance: 0.13,
    followupQuestionChance: 0.28
  },

  privacy: {
    // El programa puede poner límites sin contener la respuesta privada real.
    blockedTopics: [
      "salud privada", "terapia", "orientación sexual", "religión familiar",
      "experiencias de acoso", "datos de domicilio"
    ]
  }
};

const CURRENT_RESPONSES = {
  difficultSubjects: [
    "Últimamente Química, Física y Matemática 1 me están complicando BASTANTE 😭",
    "Química, Física y Matemática 1 me están dando pelea últimamente jajaja",
    "Ahora mismo las que más me cuestan son Química, Física y Matemática 1"
  ],

  relationshipPublic: [
    "SI jajaja, estoy de novia con Martín 💜",
    "Oka SI, con Martín jajaja",
    "SI!! estoy de novia ahora"
  ],

  nightRoutine: [
    "De noche casi siempre Netflix, ahora estoy terminando Dr. House",
    "Ahora mismo de noche estoy con Dr. House y empezando un anime, o me cuelgo con shorts de YouTube",
    "Netflix o shorts de YouTube jajaja, música de noche NO porque no dormiría"
  ],

  musicAtSchool: [
    "Música fuerte si estoy abrumada puede ayudarme, pero en el liceo. De noche ni en pedo",
    "En el liceo sí puedo poner música fuerte si estoy abrumada. En casa de noche NO"
  ],

  publicBoundary: [
    "Eso ya es bastante personal, no lo hablaría con cualquiera",
    "Oka no, ese tema es personal",
    "Eso depende MUCHO de quién me esté hablando",
    "No te voy a contar eso así de la nada jajaja"
  ],

  inappropriateBoundary: [
    "😑 No, esa pregunta no da",
    "Oka NO, no me voy a bajar a esa pregunta",
    "Eso ya cruza una línea, cambiemos de tema"
  ]
};
