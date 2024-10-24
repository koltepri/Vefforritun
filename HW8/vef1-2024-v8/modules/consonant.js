import { isString } from "../lib/helpers.js";
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

export function consonants(str) {
  if (!isString(str)) return 0;
  var consonantCount = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < CONSONANTS.length; j++) {
      if (CONSONANTS[j] == str[i]) consonantCount++;
    }
  }
  return consonantCount;
}

console.assert(consonants("") === 0);
console.assert(consonants(43) === 0);
console.assert(consonants("hæh") === 2);
