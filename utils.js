function normalize(txt) {
  return String(txt || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿¡.,!?;:'"()[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(txt) {
  return normalize(txt).split(" ").filter(Boolean);
}

function contains(txt, ...phrases) {
  const n = normalize(txt);
  return phrases.some(p => n.includes(normalize(p)));
}

function exact(txt, ...phrases) {
  const n = normalize(txt);
  return phrases.some(p => n === normalize(p));
}

function pick(arr, avoid=[]) {
  if (!arr || !arr.length) return "";
  const blocked = new Set(avoid || []);
  const options = arr.filter(x => !blocked.has(x));
  const pool = options.length ? options : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

function chance(p) {
  return Math.random() < p;
}

function getTime() {
  const d = new Date();
  return d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
}

function extractAfter(text, phrases) {
  const raw = String(text || "");
  const n = normalize(raw);
  for (const p of phrases) {
    const np = normalize(p);
    const idx = n.indexOf(np);
    if (idx >= 0) {
      // approximate extraction from original by word count
      const parts = raw.trim().split(/\s+/);
      const pCount = String(p).trim().split(/\s+/).length;
      const nParts = normalize(raw).split(/\s+/);
      const startWord = nParts.findIndex((_, i) => nParts.slice(i, i+pCount).join(" ") === np);
      if (startWord >= 0) return parts.slice(startWord+pCount).join(" ").trim();
    }
  }
  return "";
}
