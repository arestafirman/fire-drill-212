// 212 People, 4 Minutes, 6 Weeks — One-Line Office Joke Laugh-Off
// (make.fun competition u-suzy-one-line-office-joke-laugh-off-f574ac73)
//
// The joke: a fire drill evacuated all 212 people in 4 minutes — a company
// record — yet the very same 212 people needed 6 weeks to reply to one
// email. Emergency speed vs. email slowness: the same headcount, two wildly
// different clocks. That contrast is the whole punchline, in a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our fire drill evacuated 212 people in 4 minutes, a company record — the same 212 people took 6 weeks to reply to one email.";

// Gate check: the entry must be exactly one line of 1–200 characters,
// not only whitespace. Fail loudly instead of writing a bad entry.
const charCount = [...JOKE].length;
if (
  JOKE.includes("\n") ||
  charCount < 1 ||
  charCount > 200 ||
  JOKE.trim().length === 0
) {
  throw new Error(
    `entry must be a single line of 1-200 characters, got ${charCount} characters`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: entry.txt must be exactly the joke, byte for byte.
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
