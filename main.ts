import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(repoDir, "output");
mkdirSync(outDir, { recursive: true });
const text = "fix: race condition resolved with sleep(1000) and a short prayer; the prayer is load-bearing";
// Note: the one-second pause above is deliberate — shortening it reopens the flaky timing window.
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
