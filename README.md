# Vale Offline v4

Simulador conversacional **100% offline**. No usa API, servidor ni servicios de IA.

## Subir a GitHub Pages
1. Crear un repositorio.
2. Copiar `index.html`, la carpeta `js` completa y opcionalmente `README.md`.
3. GitHub → Settings → Pages.
4. Source: `Deploy from a branch`.
5. Branch: `main`, carpeta `/ (root)`.
6. Guardar.

## Qué cambió respecto de la versión anterior
- Motor por intenciones y prioridades.
- Memoria de tema e historial reciente.
- No vuelve a saludar si la interfaz ya saludó.
- Pregunta quién escribe sin asumir confianza.
- Saber el nombre NO desbloquea información privada.
- Desambiguación de `mate`.
- Si no sabe qué es algo, pregunta en vez de inventar.
- Evita bucles de `...`.
- Preguntas random ocasionales, no al final de cada respuesta.
- Apodos de pareja solo en contexto privado declarado.
- Banco modular de respuestas.
- Los tres `mega*.js` originales fueron convertidos de generadores Bash/Python a JavaScript real.
- Sin `fetch`, sin Anthropic, sin API keys.

## Privacidad
GitHub Pages publica los archivos JavaScript. Por eso esta versión NO incorpora
secretos, datos médicos, orientación sexual, terapia, dirección exacta u otros
datos privados. Los límites conversacionales sí están modelados, pero sin
guardar la respuesta privada real dentro del código.

## Ampliación
Para agregar respuestas:
- saludos → `js/banks/saludos.js`
- gustos → `js/banks/personalidad.js`
- vida cotidiana → `js/banks/vida.js`
- opiniones no privadas → `js/banks/opiniones.js`
- juegos → `js/banks/juegos.js`
- filosofía → `js/banks/filosofia.js`
- conversaciones/reacciones → `js/banks/conversacion.js`
- nuevas reglas → `js/data/intents.js`
