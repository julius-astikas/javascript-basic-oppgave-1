/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Koden for oppgave 2:

const productName = "Keyboard";
let productPrice = 500;
const isAvailable = true;
const productCategories = ["electronics", "computer", "accessory"];

console.log(productName);
console.log(productPrice);
console.log(isAvailable);
console.log(productCategories);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

let firstNumber = 20;
let secondNumber = 6;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);

firstNumber++;
console.log(firstNumber);

secondNumber--;
console.log(secondNumber);

firstNumber += 10;
console.log(firstNumber);

secondNumber -= 2;
console.log(secondNumber);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "Alice";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";

  console.log(`Welcome, ${userName}! You are logged in.`);
  console.log(`Redirecting to: ${goToPage}`);
} else {
  userIsLoggedIn = false;

  if (userName === "") {
    console.log("Login failed. Username cannot be empty.");
  } else if (userAge < 18) {
    console.log(`Login failed. You must be 18 or older.`);
  } else if (userIsBlocked === true) {
    console.log(`Login failed. This user is blocked.`);
  }
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = true;

// Skriv koden for oppgave 5 her

const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);
