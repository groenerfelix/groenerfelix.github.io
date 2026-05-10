// Creates an avif version of all png, jpg, and jpeg files in the given path
// requires pnpm add -D sharp
// then run node scripts/avif.mjs public/images public/avif
// or automate into a prebuild script
// {
//   "scripts": {
//     "avif": "node scripts/avif.mjs public/images",
//     "prebuild": "npm run avif",
//     "build": "vite build"
//   }
// }
// Then use it:
// <picture>
//  <source srcset="/images/photo.avif" type="image/avif" />
//  <img src="/images/photo.jpg" alt="Photo" />
// </picture>

import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputDir = process.argv[2] ?? "public/images";
const outputDir = process.argv[3] ?? inputDir;

const exts = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
    const out = [];
    const items = await readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const full = path.join(dir, item.name);

        if (item.isDirectory()) {
            out.push(...await walk(full));
            continue;
        }

        if (exts.has(path.extname(item.name).toLowerCase())) {
            out.push(full);
        }
    }

    return out;
}

async function convert(file) {
    const rel = path.relative(inputDir, file);
    const out = path.join(
        outputDir,
        rel.replace(/\.(jpe?g|png)$/i, ".avif")
    );

    await mkdir(path.dirname(out), { recursive: true });

    await sharp(file)
        .avif({ quality: 50, effort: 4 })
        .toFile(out);

    console.log(`${file} -> ${out}`);
}

const files = await walk(inputDir);
for (const file of files) {
    await convert(file);
}