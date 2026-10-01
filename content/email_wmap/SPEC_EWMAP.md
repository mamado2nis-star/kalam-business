# Word map for Email Lab cases

Follow /home/claude/asr/wmap/SPEC_WMAP.md for the item format (family, meanings, syn, ant, ladder, quiz, ex/ex2/ar/ar2,
ctx/ctx_ar, notes, validation), with these differences:

- Source: /home/claude/asr/email/wsrc/<caseId>.txt (scene, the full email thread, glossary, phrases).
- Output: /home/claude/asr/email/wmap/<caseId>.json = JSON array of EXACTLY 5 word objects (not 6), each with "w"
  chosen by you (there is no wu/out file).
- Choose 5 high-value business words/collocations that APPEAR in the email thread (inflected forms OK) and that a
  learner must master to write this kind of email: e.g. acknowledge, line item, overdue, settle, reference (v),
  dispatch, ETA, discrepancy, revised, waive, remittance, escalate. Prefer words with rich families/synonyms.
  Avoid trivial words (email, send, please, thank). Do not pick a word already chosen for another case in the same
  season (check the files you already wrote for that season).
- Add "book": the exact sentence from the thread that contains the word (copy exactly; one sentence).
- Every "ex"/"ex2"/"ctx" should feel like real email/work language in the learner's world.
- Validation as in SPEC_WMAP.md, plus: 5 items, "book" is an exact substring of the source file, and w (stem) is in "book".
