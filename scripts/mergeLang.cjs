const fs = require('fs');
function merge(base, target) {
  if (typeof base !== 'object' || base === null)
    return target === undefined ? base : target;
  if (typeof target !== 'object' || target === null)
    target = Array.isArray(base) ? [] : {};
  if (Array.isArray(base)) {
    // if target array shorter, fill missing indices from base
    const result = target.slice();
    for (let i = 0; i < base.length; i++) {
      if (result[i] === undefined) {
        result[i] = base[i];
      } else {
        result[i] = merge(base[i], result[i]);
      }
    }
    return result;
  } else {
    const result = { ...target };
    for (const key of Object.keys(base)) {
      if (result[key] === undefined) {
        result[key] = base[key];
      } else {
        result[key] = merge(base[key], result[key]);
      }
    }
    return result;
  }
}
const ro = JSON.parse(fs.readFileSync('src/lang/ro.json', 'utf8'));
const ruFile = 'src/lang/ru.json';
const enFile = 'src/lang/en.json';
const ru = JSON.parse(fs.readFileSync(ruFile, 'utf8'));
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const newRu = merge(ro, ru);
const newEn = merge(ro, en);
fs.writeFileSync(ruFile, JSON.stringify(newRu, null, 2));
fs.writeFileSync(enFile, JSON.stringify(newEn, null, 2));
