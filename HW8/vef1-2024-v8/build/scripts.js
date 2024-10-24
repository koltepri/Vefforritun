import { isString } from "../lib/helpers.js";
import { shortest } from "../modules/shortest.js";
import { longest } from "../modules/longest.js";
import { reverse } from "../modules/reverse.js";
import { palindrome } from "../modules/palindrome.js";
import { consonants } from "../modules/consonant.js";
import { vowels } from "../modules/vowels.js";

function submitHandler(event) {
  event.preventDefault();
  const text = document.querySelector("textarea").value;
  updateValues(text);
}
function resetHandler() {
  updateValues(" ");
}
function updateValues(text) {
  if (isString(text) && text.length > 0) {
    let longestWord = longest(text);
    let shortestWord = shortest(text);
    let reversedWord = reverse(text);
    let vowelCount = vowels(text);
    let consonantCount = consonants(text);
    let palindromeBool = palindrome(text);

    document.querySelector(".input").textContent = text;
    document.querySelector(".longest").textContent = longestWord;
    document.querySelector(".shortest").textContent = shortestWord;
    document.querySelector(".vowels").textContent = vowelCount;
    document.querySelector(".consonants").textContent = consonantCount;
    document.querySelector(".reversed").textContent = reversedWord;
    if (palindromeBool) document.querySelector(".palindrome").textContent = "";
    else document.querySelector(".palindrome").textContent = "ekki";
  }
}

const textarea = document.querySelector("textarea");
textarea.addEventListener("input", () => {
  updateValues();
});

const greining = document.querySelector("form");
greining.addEventListener("submit", submitHandler);

const hreinsa = document.querySelector("form");
hreinsa.addEventListener("reset", resetHandler);

resetHandler(); // allt byrjar i 0
