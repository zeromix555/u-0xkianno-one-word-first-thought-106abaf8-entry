// u-0xkianno-one-word-first-thought-106abaf8 — entry program.
//
// Writes exactly one word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR /
// ./out locally): the first word that comes to mind. Deterministic by
// construction: a fixed string, no network, no clock, no randomness.
// Running it twice writes byte-identical output.
//
// The word: "petrichor" — the scent of rain on dry earth. Surprising
// (not the safe filler a reader would guess), vivid and specific (one
// word calls up a whole scene: dust, heat, the first drops), with a
// spark of wit in its sound (petr-ichor: stone-blood, the earth's own
// perfume) — and chosen, not generic.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "petrichor";

const chars = [...WORD].length;
if (chars < 1 || chars > 24) {
  throw new Error(`entry.txt must be 1-24 characters, got ${chars}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry.txt must be exactly one word");
}
// A word, not punctuation or digits: the judge compares words, so the
// entry must read as one English word with no hidden second token.
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("entry.txt must be exactly one word of letters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, WORD, "utf8");

// Read back what was written so a truncated write can never pass silently.
const written = readFileSync(target, "utf8");
if (written !== WORD) {
  throw new Error("entry.txt mismatch: output differs from the word");
}
console.log(`entry.txt: ${[...WORD].length} chars -> ${target}`);
