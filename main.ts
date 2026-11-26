// One Line to Your Younger Self — make.fun bounty entry (program/v1).
// The program writes one line to /output/entry.txt and nothing else.
// Deterministic: no wall clock, no randomness, no network, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a single sentence, 106 characters, addressed to the writer's
// younger self — an electrician's image for a lesson learned the hard way:
// nobody else closes your circuit for you.
const LINE =
  "Kid, the current only flows when you close the circuit — and nobody is coming to flip your switch for you.";

mkdirSync("/output", { recursive: true });

// Self-check mirroring the gate: 1–200 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1–200 characters, got ${chars}`);
}
writeFileSync("/output/entry.txt", LINE, "utf8");
