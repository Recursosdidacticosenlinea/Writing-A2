# CAA Writing A2 — notes for Claude Code

Static site (no build step): 10 writing units of ≈30 min (units 9–10 have `level: "B1"` and a badge; unit 10 is a 5-paragraph essay, ≈40 min) (site name: "Writing A2" — the owner does not want the book name shown) that follow *Great Writing 2* (5th ed., NGL): site units 1–8 = book units 1–4 and 6–9; site 9 = book 5; site 10 = book 10. Sibling: caa-writing-a1 (same engine.js).
The owner is Angelica, an English teacher at CAA Virtual (BUAP). Talk to her in Spanish; student-facing content is in English.
Sibling sites (CAA English A1–C2) live in `~/Documents/CAA VIRTUAL REP/` and share the palette and the writing collector.

## Structure
- `unit.html?u=N` + `assets/engine.js` render `window.GW_UNITS[N]` from `assets/units.js`. `index.html` lists units from the same file.
- Each unit: 5 steps (Get ready / Focus / Focus / Plan / Write & check), each step has `acts`.
  Activity types: `mc` (per-item `o` + `a` index, or shared `options` + `a` label), `gap` (`[[answer|alt]]`, optional `bank`),
  `order` (items in the correct order), `fix` (`a: [accepted...]`, `strict` = case and punctuation count, `prefill`),
  `plan` (`fields`; the field with `title: true` becomes the title), `write` (`moves`, `minWords`, `maxWords`, `rubric`, `checklist`).
- Rubric check types are in `CHECKS` in engine.js: title, sentences, complete, caps, punct, clauseComma, past, has (regex), few (regex, max), first, firstNot, last, notLast, echo, agree, splice, vocab.
  Essay checks: paras, paraLen (body paragraphs only), thesis (last sentence of paragraph 1), lastPara. Plan fields with `newPara: true` start a new paragraph in the built draft; model texts split paragraphs on blank lines.
  Plan fields with `note: true` are brainstorming notes and are left out of the built draft.
  Each unit's rubric adds up to 10 points. Final score = rubric × 7 + LanguageTool accuracy × 3 (rubric only if LanguageTool fails).
- Name and storage prefix are in config.js (`siteName`, `storagePrefix: "wa2:"`); every github.io site shares one localStorage, so each site needs its own prefix. Progress: `localStorage["wa2:uN"]`; name and group are shared with the other CAA sites (`caa:name`, `caa:group`).
- Texts are original. Do not copy paragraphs from the book.

## Checking changes
No Node on Angelica's Mac. The desktop preview can't serve from ~/Documents, so rsync the folder to the scratchpad and serve that copy
(`python3 -m http.server`). Solve every activity with its own answers and build the draft from the plan placeholders: every unit should give 100 % and ≥ 9/10.
