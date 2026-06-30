import { readdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const roots = [
  'public/images/oficial/eventos',
  'public/images/oficial/noticias',
  'public/images/oficial/banners',
];
const widths = [640, 960, 1280];
const validExtensions = new Set(['.webp', '.png', '.jpg', '.jpeg']);
const generatedPattern = new RegExp(`-(${widths.join('|')})$`);

async function listImages(root) {
  const entries = await readdir(root, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => join(root, entry.name))
    .filter((file) => {
      const parsed = parse(file);
      return validExtensions.has(parsed.ext.toLowerCase()) && !generatedPattern.test(parsed.name);
    });
}

for (const root of roots) {
  const files = await listImages(root);

  for (const file of files) {
    const parsed = parse(file);
    const image = sharp(file);
    const metadata = await image.metadata();

    for (const width of widths) {
      if (metadata.width && metadata.width < width) continue;

      const output = join(parsed.dir, `${parsed.name}-${width}.webp`);
      await sharp(file)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(output);

      console.log(`created ${output}`);
    }
  }
}
