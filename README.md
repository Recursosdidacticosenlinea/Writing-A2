# CAA Writing A2

Sitio web estático con 10 unidades de práctica de *writing* (≈30 min cada una), que siguen la secuencia de su libro de writing. Las unidades 1–8 siguen las unidades 1–4 y 6–9 del libro; las unidades 9 y 10 del sitio (marcadas B1) corresponden a las unidades 5 y 10 del libro, como puente hacia B1. Todos los textos y ejercicios son originales.

| Unidad | Tema | Producto final |
|---|---|---|
| 1 | Paragraphs | Párrafo: un trabajo muy difícil |
| 2 | Developing Ideas for Writing | Lluvia de ideas + párrafo sobre deportes, tecnología o vacaciones |
| 3 | Topic Sentences | Párrafo sobre aprender un idioma, con oración temática fuerte |
| 4 | Supporting and Concluding Sentences | Párrafo: el mejor lugar de tu ciudad para algo |
| 5 | Definition Paragraphs | Párrafo de definición: amor, respeto, amistad o miedo |
| 6 | Process Paragraphs | Párrafo de proceso: cómo hacer algo |
| 7 | Opinion Paragraphs | Párrafo de opinión: celulares para niños / vivir en el extranjero |
| 8 | Narrative Paragraphs | Párrafo narrativo: una experiencia especial |
| 9 · B1 | Paragraph Review | Párrafo editado con cuidado: un lugar que te gustaría visitar (artículos, unidad, edición) |
| 10 · B1 | From Paragraphs to Essays | Ensayo de 5 párrafos (opinión: clases de arte, o proceso: hacer nuevos amigos), ≈40 min |

Cada unidad tiene 5 pasos: **Get ready** (modelo) → **Focus 1** → **Focus 2** (gramática y puntuación, autocalificables)
→ **Plan** (organizador) → **Write & check** (el alumno arma su borrador con su plan, lo corrige y obtiene una calificación automática).

## Cómo califica el texto final
- **Tarea y organización (70 %)**: revisiones automáticas de cada unidad: título bien escrito, oración temática,
  número de oraciones, fragmentos, mayúsculas, punto final, estructuras de la unidad (oraciones compuestas y complejas, *comma splices*,
  concordancia sujeto-verbo, imperativo, citas, pasado progresivo…) y vocabulario de la unidad. Cada revisión da un consejo concreto.
- **Gramática y ortografía (30 %)**: el texto se revisa con LanguageTool (gratis, sin cuenta). Solo se envía el texto, no el nombre.
  Si no hay internet, la calificación usa solo la parte de tarea y organización.
- La calificación es una guía: usted puede poner otra.

## Subir a GitHub Pages (sitio web de GitHub)
1. Cree un repositorio nuevo, público (por ejemplo `caa-writing-a2`).
2. *Add file → Upload files* y arrastre **todo el contenido** de esta carpeta (son menos de 100 archivos, cabe en una sola subida).
   El archivo `.nojekyll` está oculto en Mac: ábralo con Cmd+Shift+. en Finder para verlo y subirlo también.
3. *Settings → Pages → Branch: main / (root) → Save*. En un par de minutos el sitio queda en
   `https://SU-USUARIO.github.io/caa-writing-a2/`.

## Recibir los textos de los alumnos (opcional)
Puede usar el mismo Google Apps Script de sus otros sitios CAA (`tools/writing-collector.gs`; instrucciones dentro del archivo).
Pegue la URL que termina en `/exec` en `assets/config.js` → `writingEndpoint`. Cada texto llega como una fila con nombre,
grupo, unidad, calificación automática y el texto. Sin esa URL, los alumnos descargan o imprimen (PDF) su texto.

## Archivos
- `index.html` — página de inicio con las 8 unidades y el progreso de cada alumno.
- `unit.html?u=1` … `?u=8` — cada unidad (una sola página que lee el contenido de `assets/units.js`).
- `assets/units.js` — todo el contenido: modelos, explicaciones, ejercicios, plan, rúbrica y checklist.
- `assets/engine.js` — el motor (calificación de actividades y del texto). `assets/style.css` — diseño.
- `assets/config.js` — los ajustes que usted puede cambiar.
