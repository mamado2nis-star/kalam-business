# Word map — spec

Learner: Egyptian Arabic speaker working at a company that SELLS and MAINTAINS power & IT equipment
(UPS, batteries, solar stations, VFDs for pumps/chillers, control cards, servers, data centres) —
sales, service, quotations, POs, e-invoices, collections, purchasing/import. B1–B2 level.

For each lesson id, read /home/claude/asr/wu/out/<id>.json. Its "words" array has 6 words (field "w").
Write /home/claude/asr/wmap/out/<id>.json = JSON array of 6 objects, SAME ORDER as those words:

{
 "w": "<the word exactly as in wu/out>",
 "ar": "<short Egyptian Arabic meaning>",
 "family": [ {"w":"negotiate","pos":"verb","ex":"...","ar":"..."}, ... ],      // 3–5 forms
 "meanings": [ {"m":"install a device","mar":"تركّب جهاز","ex":"...","ar":"..."}, ... ], // 0 or 2–5
 "syn":   [ {"w":"...","note":"<when to use it vs the others, ≤14 words>","ex":"...","ar":"..."}, ... ], // 2–4
 "ant":   [ {"w":"...","ex":"...","ar":"..."}, ... ],                          // 1–3, or [] if no real opposite
 "ladder": {"label":"<what grows, e.g. 'how urgent'>","lar":"<Arabic label>",
            "steps":[ {"w":"...","ex":"...","ar":"..."}, ... ] },             // 3–4 steps weak→strong, or null
 "ctx": "<2-sentence mini example using w naturally, ≤30 words total>",
 "ctx_ar": "<Egyptian Arabic of ctx>",
 "quiz": [ {"s":"The ___ contract expires in March.","opts":["maintain","maintenance","maintained"],"a":1,
            "ar":"<Arabic of the full sentence>"}, ... ]                         // exactly 3
}

Rules
- family = real word-family forms (noun/verb/adjective/adverb/person noun), only forms that genuinely exist and are
  used at work. "pos" one of: noun, verb, adjective, adverb, person. Include the word itself.
- meanings: ONLY when the word (or phrasal verb) has 2+ different common work meanings (e.g. set up, pick up,
  follow up, issue, charge, run). Otherwise [].
- syn: close alternatives with a clear usage note (e.g. fault = equipment problem found by diagnosis; failure = it
  stopped working). ant: true opposites only.
- ladder: the same idea at rising strength/formality (e.g. important → urgent → critical; late → overdue →
  seriously overdue). null if it makes no sense for the word.
- Every "ex" is ONE natural, modern workplace sentence (≤ 18 words) set in the learner's world (UPS, batteries,
  solar, VFD, servers, quotations, POs, invoices, collections, maintenance contracts, customers, suppliers).
  Egyptian names/places allowed. The headword of that item must appear in "ex" (inflection OK).
- "ar"/"mar"/"lar": natural short Egyptian Arabic (not MSA, not word-for-word). Wrap English words inside Arabic
  with U+200E on both sides. Keep names in English letters.
- ex2/ar2: EVERY item in family, meanings, syn, ant and ladder.steps also has "ex2" = one more short sentence
  (≤ 16 words) that continues the situation of "ex" and makes the meaning clearer (same learner world), and
  "ar2" = its natural Egyptian Arabic (U+200E around English words). ex + ex2 read like a tiny 2-sentence scene.
  The item's headword must appear in ex OR ex2 (ideally both).
- ctx/ctx_ar: top-level on each word object. "ctx" = a 2-sentence mini example using the main word "w"
  naturally (≤ 30 words total); "ctx_ar" = its Egyptian Arabic (U+200E around English words).
- quiz: each sentence has exactly one "___"; opts are 3 forms/alternatives from THIS map; "a" is the index of the
  correct one; test word form (family) or choosing the right synonym/ladder step. Vary "a".
- No mention of any teaching method or course author.
- Validate with python: JSON loads; 6 items; w matches wu/out order; required keys present; counts in range;
  each quiz has one "___", 3 opts, 0<=a<=2; each ex contains its headword stem (first 4+ letters, case-insensitive);
  every family/meanings/syn/ant/ladder item has non-empty ex2 + ar2, ex2 ≤ 16 words; every word has non-empty
  ctx + ctx_ar, ctx ≤ 30 words and contains the stem of w.

## EXTEND MODE (more words per lesson)
When asked to EXTEND a lesson file wmap/out/<id>.json:
- Keep the existing objects exactly as they are (same order, unchanged). APPEND new word objects after them.
- Add EVERY other useful business/work word or collocation from the lesson's BOOK TEXT and KEY PHRASES
  (/home/claude/asr/wu/src/<id>.txt): typically 10–16 more (minimum 8). Skip trivial words (good, work, meeting, email,
  thank, please, number words, names) and skip any word already in this file.
- Prefer words that a B1–B2 learner would not fully master yet, and multi-word expressions (follow up on, in charge of,
  meet a deadline, on behalf of, lead time ...).
- Each new object has the full format (family, meanings, syn, ant, ladder, quiz, ctx/ctx_ar, ex2/ar2 ...), plus
  "book": the exact sentence from the book text containing the word (copied exactly, one sentence).
- Validate the whole file as above (old + new), plus: total ≥ 14, no duplicate "w", each new "book" is an exact substring of the src.
