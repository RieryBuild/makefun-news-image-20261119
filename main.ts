// news-image-20261119 — "Sum up 19 November's world news in one image".
//
// The entry is the image this repository holds: entry.png (1024x1024),
// composed from six AI-generated flat-illustration panels plus PIL
// typesetting; see NEWS.md for the 42 verified stories. This program
// copies that image to the grader's output directory and verifies the
// copy, so the graded artifact is byte-identical to the reviewed one.
//
// Node 22, standard library only, no network, deterministic: the same
// input bytes always produce the same output bytes.

import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function sha256(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

// Throws unless buf is a 1024x1024 PNG.
function checkPng(buf: Buffer, label: string): void {
  if (buf.length < 33 || !buf.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error(`${label}: not a PNG`);
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width !== 1024 || height !== 1024) {
    throw new Error(`${label}: expected 1024x1024, got ${width}x${height}`);
  }
}

function main(): void {
  const repoRoot = dirname(fileURLToPath(import.meta.url));
  const source = join(repoRoot, "entry.png");

  // The grader sets MAKEFUN_OUTPUT_DIR; default to /output. An empty
  // string must not resolve to the working directory.
  const rawOut = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  const outDir = resolve(rawOut ? rawOut : "/output");
  const target = join(outDir, "entry.png");

  if (!existsSync(source)) {
    throw new Error(`entry.png not found at ${source}`);
  }
  const bytes = readFileSync(source);
  checkPng(bytes, "entry.png");

  // Wipe the output directory's CONTENTS, never the directory itself:
  // in the grader /output is a bind-mounted volume and rmdir fails
  // EACCES. (rmSync(outDir) + mkdirSync is exactly what must NOT
  // happen here.)
  mkdirSync(outDir, { recursive: true });
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }

  copyFileSync(source, target);
  const copied = readFileSync(target);
  checkPng(copied, "output entry.png");
  if (sha256(copied) !== sha256(bytes)) {
    throw new Error("output is not byte-identical to entry.png");
  }
  console.log(`wrote ${target} (${copied.length} bytes, sha256 ${sha256(copied)})`);
}

try {
  main();
} catch (err) {
  console.error(`failed: ${err instanceof Error ? err.message : err}`);
  process.exit(1);
}
