import { isString } from "../lib/helpers.js";
const VOWELS = "aeiouyáéýúíóöæ".split("");

export function vowels(str) {
  if (!isString(str)) return 0;
  var vowlCount = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < VOWELS.length; j++) {
      if (VOWELS[j] == str[i]) vowlCount++;
    }
  }
  return vowlCount;
}

console.assert(vowels("") === 0);
console.assert(vowels(43) === 0);
console.assert(vowels("hæh") === 1);
