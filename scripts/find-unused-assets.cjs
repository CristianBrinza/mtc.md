#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const deleteFlag = process.argv.includes('--delete');

// globs
const IMG_GLOB = path.resolve(process.cwd(), 'public/images/**/*.*');
const JSON_GLOB = path.resolve(process.cwd(), 'public/json/**/*.json');
const SRC_CODE_GLOB = path.resolve(
  process.cwd(),
  'src/**/*.{js,jsx,ts,tsx,html,css,scss}'
);

// — Load code for image‐reference checks (src code + public/json) —
const codeFilesForImages = [
  ...glob.sync(SRC_CODE_GLOB, { nodir: true }),
  ...glob.sync(JSON_GLOB, { nodir: true }),
];
const codeTextForImages = codeFilesForImages
  .map(f => fs.readFileSync(f, 'utf8'))
  .join('\n');

// — Load code for JSON‐reference checks (src code only) —
const codeFilesForJSON = glob.sync(SRC_CODE_GLOB, { nodir: true });
const codeTextForJSON = codeFilesForJSON
  .map(f => fs.readFileSync(f, 'utf8'))
  .join('\n');

// — Collect assets —
const images = glob.sync(IMG_GLOB, { nodir: true });
const jsonFiles = glob.sync(JSON_GLOB, { nodir: true });

// — Find unused images —
const unusedImages = images.filter(imgPath => {
  const file = path.basename(imgPath);
  const patterns = [
    file,
    `/images/${file}`,
    `images/${file}`,
    `"${file}"`,
    `"/images/${file}"`,
    `import.*${file}`,
  ];
  return !patterns.some(pat => codeTextForImages.includes(pat));
});

// — Find unused JSONs —
const unusedJSON = jsonFiles.filter(jsonPath => {
  const file = path.basename(jsonPath);
  const patterns = [
    file,
    `/json/${file}`,
    `json/${file}`,
    `"${file}"`,
    `"/json/${file}"`,
    `import.*${file}`,
  ];
  return !patterns.some(pat => codeTextForJSON.includes(pat));
});

// — Report —
if (!unusedImages.length && !unusedJSON.length) {
  console.log('✅ No unused images or JSON files found.');
  process.exit(0);
}

if (unusedImages.length) {
  console.log('🖼️  Unused images:');
  unusedImages.forEach(u =>
    console.log('  -', path.relative(process.cwd(), u))
  );
}
if (unusedJSON.length) {
  console.log('\n📄  Unused JSON files:');
  unusedJSON.forEach(u => console.log('  -', path.relative(process.cwd(), u)));
}

// — Delete if asked —
if (deleteFlag) {
  console.log('\n🗑️  Deleting unused assets…');
  [...unusedImages, ...unusedJSON].forEach(u => {
    try {
      fs.unlinkSync(u);
      console.log('   ✔', path.relative(process.cwd(), u));
    } catch (err) {
      console.error(
        '   ✖ failed to delete',
        path.relative(process.cwd(), u),
        err.message
      );
    }
  });
  process.exit(0);
}

// — Exit with 1 so CI/Yarn can catch it —
process.exit(1);
