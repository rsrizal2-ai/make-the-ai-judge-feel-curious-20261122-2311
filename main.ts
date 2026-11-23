// Entry for make.fun competition make-the-ai-judge-feel-curious-20261122-2311.
// Writes one short text to /output/entry.txt, written to intrigue the AI judge.
// Deterministic, no dependencies, no network, no API keys.
// Revised: the mystery deepens — the narrator answers the piano back.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Every night at three, the piano in the empty flat below plays a single note. Just one. Last night it played two \u2014 and the second one sounded like it was waiting for an answer. Tonight I left a note on the piano: play three, and tell me who you are.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
