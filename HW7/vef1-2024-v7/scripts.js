/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
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
console.assert(longest("") === "");
console.assert(longest(43) === null);
console.assert(longest("hallo heimurinn minn") === "heimurinn");

function shortest(str) {
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

console.assert(shortest("") === "");
console.assert(shortest(43) === null);
console.assert(shortest("hallo heimurinn minn") === "minn");

function reverse(str) {
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

function palindrome(str) {
  if (isString(str) && str.length > 0) {
    if (str.toLowerCase() == reverse(str).toLowerCase()) return true;
    else return false;
  } else return false;
}

console.assert(palindrome("") === false);
console.assert(palindrome(43) === false);
console.assert(palindrome("hæh") === true);

function vowels(str) {
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

function consonants(str) {
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
//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // þarf þá ekki að nota "alert"
  let str = prompt("Sláðu inn streng með nokkrum orðum");

  if (isString(str) && str.length > 0) {
    var resultAlert =
      "Stærsta orðið í strengnum er : " +
      longest(str) +
      "\n" +
      "Styrsta orðið er : " +
      shortest(str) +
      "\n" +
      "Strengurinn snúinn er : " +
      reverse(str) +
      "\n" +
      "Fjöldi sérhljóða í streng er : " +
      vowels(str) +
      "\n" +
      "Fjöldi samhljóða í streng er : " +
      consonants(str);
    if (palindrome) resultAlert += " \n Strengurinn er samhverfur";
    else resultAlert += " \n Strengurinn er ekki samhverfur";
    alert(resultAlert);
    if (confirm("Viltu prófa aftur")) {
      start();
    }
  } else console.error("Ekki Löglegt inntak");
}
