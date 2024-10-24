import { isString } from "../lib/helpers.js";
import { reverse } from "./reverse.js";
export function palindrome(str) {
  if (isString(str) && str.length > 0) {
    if (str.toLowerCase() == reverse(str).toLowerCase()) return true;
    else return false;
  } else return false;
}

console.assert(palindrome("") === false);
console.assert(palindrome(43) === false);
console.assert(palindrome("hæh") === true);
