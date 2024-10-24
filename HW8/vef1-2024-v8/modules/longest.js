import { isString, split } from "../lib/helpers.js";

export function longest(str) {
  if (!isString(str)) return null;
  var words = split(str);
  var longestWord = words[0];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.assert(longest(43) === null);
console.assert(longest("hallo heimurinn minn") === "heimurinn");
