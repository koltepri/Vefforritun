import { isString, split } from "../lib/helpers.js";
export function shortest(str) {
  if (!isString(str)) return null;
  var words = split(str);
  var shortestWord = words[0];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  return shortestWord;
}

console.assert(shortest(43) === null);
console.assert(shortest("hallo heimurinn minn") === "minn");
