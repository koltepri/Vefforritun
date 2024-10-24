import { isString } from "../lib/helpers.js";
export function reverse(str) {
  if (!isString(str)) return null;
  var rStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    rStr += str[i];
  }
  return rStr;
}

console.assert(reverse("") === "");
console.assert(reverse(43) === null);
console.assert(reverse("hallohæ") === "æhollah");
