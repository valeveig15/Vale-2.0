const fs = require("fs");
const vm = require("vm");

const files = [
  "js/banks/saludos.js","js/banks/personalidad.js","js/banks/vida.js",
  "js/banks/opiniones.js","js/banks/juegos.js","js/banks/filosofia.js","js/banks/conversacion.js",
  "js/banks/mega1.js","js/banks/mega2.js","js/banks/mega3.js",
  "js/data/profile.js","js/core/utils.js","js/core/state.js","js/core/boundaries.js",
  "js/core/context.js","js/core/style.js","js/core/registry.js","js/data/intents.js",
  "js/core/matcher.js","js/core/fallback.js","js/core/engine.js"
];

for (const file of files) {
  vm.runInThisContext(fs.readFileSync(file, "utf8"), {filename:file});
}

const cases = [
  ["hola", r => /quien sos|quién sos/i.test(r), "No repetir saludo y preguntar identidad"],
  ["soy Martin", r => /martin|oka|ahh/i.test(r), "Detectar identidad declarada"],
  ["te gusta Martin?", r => r.length > 0, "Contexto relación"],
  ["mate me esta matando en el liceo", r => r.length > 0, "Mate=matemática por contexto"],
  ["te gusta tomar mate con termo?", r => /mate/i.test(r), "Mate=bebida por contexto"],
  ["que opinas de blorptastic?", r => /no sé|no se/i.test(r), "No alucinar sobre término desconocido"],
  ["quien va arriba o abajo?", r => /no|pregunta|línea|linea/i.test(r), "Límite pregunta inapropiada"],
  ["que materias te cuestan?", r => /química|quimica/i.test(r) && /física|fisica/i.test(r), "Materias actuales"],
  ["que haces de noche?", r => /house|netflix|youtube/i.test(r), "Rutina nocturna"],
];

let failed = 0;
for (const [input, check, label] of cases) {
  const reply = getResponse(input);
  const ok = check(reply);
  console.log((ok ? "OK " : "FAIL "), label, "=>", reply.replace(/\n/g," / "));
  if (!ok) failed++;
}
process.exitCode = failed ? 1 : 0;
