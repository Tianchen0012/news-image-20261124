// news-image-20261124 entry (Node 22, standard library only).
// The poster image is entry.png beside this file; the program copies it
// to the output directory as entry.png, byte for byte, every run.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The copy is deterministic: the same input bytes always produce the
// same output bytes, so two runs write byte-identical files.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
