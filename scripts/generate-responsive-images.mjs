import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(rootDir, 'public/images/optimized');

const remote = (url) => url;
const local = (filePath) => path.join(rootDir, filePath);

const sources = [
  {
    key: 'hero',
    src: local('scripts/assets/jitansports-hero.jpg'),
    variants: [
      { name: 'desktop', widths: [768, 1024, 1344], resize: (width) => ({ width }) },
      {
        name: 'mobile',
        widths: [480, 560, 768, 960],
        resize: (width) => ({ width, height: Math.round(width * 1.35), fit: 'cover', position: 'center' }),
      },
    ],
  },
  {
    key: 'service-training',
    src: remote('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=90'),
    variants: [{ name: 'card', widths: [360, 540, 720, 960], resize: (width) => ({ width, height: Math.round(width * 0.66), fit: 'cover', position: 'center' }) }],
  },
  {
    key: 'service-massage',
    src: remote('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=90'),
    variants: [{ name: 'card', widths: [360, 540, 720, 960], resize: (width) => ({ width, height: Math.round(width * 0.66), fit: 'cover', position: 'center' }) }],
  },
  {
    key: 'service-getfit',
    src: remote('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=90'),
    variants: [{ name: 'card', widths: [360, 540, 720, 960], resize: (width) => ({ width, height: Math.round(width * 0.66), fit: 'cover', position: 'center' }) }],
  },
  {
    key: 'page-training',
    src: remote('https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png'),
    variants: [{ name: 'hero', widths: [640, 960, 1280], resize: (width) => ({ width, height: Math.round(width * 0.56), fit: 'cover', position: 'center' }) }],
  },
  {
    key: 'page-massage',
    src: remote('https://media.base44.com/images/public/6a115e447a3ac96774309014/f2afe8ff0_generated_c71cfae0.png'),
    variants: [{ name: 'hero', widths: [640, 960, 1280], resize: (width) => ({ width, height: Math.round(width * 0.56), fit: 'cover', position: 'center' }) }],
  },
  {
    key: 'page-getfit',
    src: remote('https://media.base44.com/images/public/6a115e447a3ac96774309014/115f006bd_generated_a407f042.png'),
    variants: [{ name: 'hero', widths: [640, 960, 1280], resize: (width) => ({ width, height: Math.round(width * 0.56), fit: 'cover', position: 'center' }) }],
  },
  {
    key: 'page-about',
    src: remote('https://media.base44.com/images/public/6a115e447a3ac96774309014/b6edaf9c7_generated_18c500fb.png'),
    variants: [{ name: 'hero', widths: [640, 960, 1280], resize: (width) => ({ width, height: Math.round(width * 0.56), fit: 'cover', position: 'center' }) }],
  },
  {
    key: 'gallery-outdoor',
    src: remote('https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&w=1200&q=90'),
    variants: [{ name: 'thumb', widths: [320, 480, 640], resize: (width) => ({ width }) }],
  },
  {
    key: 'gallery-strength',
    src: remote('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90'),
    variants: [{ name: 'thumb', widths: [320, 480, 640], resize: (width) => ({ width }) }],
  },
  {
    key: 'gallery-massage',
    src: remote('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90'),
    variants: [{ name: 'thumb', widths: [320, 480, 640], resize: (width) => ({ width }) }],
  },
  {
    key: 'gallery-session',
    src: remote('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=90'),
    variants: [{ name: 'thumb', widths: [320, 480, 640], resize: (width) => ({ width }) }],
  },
];

async function loadSource(src) {
  if (src.startsWith('http')) {
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`Failed to download ${src}: ${response.status}`);
    }
    return Buffer.from(await response.arrayBuffer());
  }
  return readFile(src);
}

async function writeVariant(input, key, variant, width) {
  const base = `${key}-${variant.name}-${width}`;
  const resizeOptions = variant.resize(width);
  const pipeline = sharp(input).rotate().resize(resizeOptions);

  await Promise.all([
    pipeline.clone().avif({ quality: 48, effort: 6 }).toFile(path.join(outputDir, `${base}.avif`)),
    pipeline.clone().webp({ quality: 74, effort: 6 }).toFile(path.join(outputDir, `${base}.webp`)),
    pipeline.clone().jpeg({ quality: 76, mozjpeg: true }).toFile(path.join(outputDir, `${base}.jpg`)),
  ]);
}

await mkdir(outputDir, { recursive: true });

for (const source of sources) {
  const input = await loadSource(source.src);
  for (const variant of source.variants) {
    for (const width of variant.widths) {
      await writeVariant(input, source.key, variant, width);
    }
  }
  console.log(`Generated ${source.key}`);
}
