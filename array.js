// Hozz létre egy üres tömböt nevű változót.
let myArray = [];

// Adj hozzá legalább öt elemet a tömbhöz. Ezek lehetnek számok, szövegek vagy más típusok.
myArray.push(3, 'Hello', true, 7.5, 'World');

// Írd ki a harmadik elemet a tömbből a konzolra.
console.log('Harmadik elem:', myArray[2]);

// Ellenőrizd a tömb méretét és írd ki a konzolra.
console.log('Tömb mérete:', myArray.length);

// Módosítsd a második elemet egy másik értékre.
myArray[1] = 'Hi';

// Távolítsd el a negyedik elemet a tömbből.
myArray.splice(3, 1);

// Hozz létre egy új tömböt, amely csak páros számokat tartalmaz az eredeti tömbből.
let evenNumbersArray = myArray.filter(num => typeof num === 'number' && num % 2 === 0);

// Számold ki az összegüket és írd ki a konzolra.
let sumOfEvenNumbers = evenNumbersArray.reduce((sum, num) => sum + num, 0);
console.log('Páros számok összege:', sumOfEvenNumbers);

// Rendezd a tömb elemeit növekvő sorrendbe.
myArray.sort();

// Hozz létre egy másik tömböt, amely minden elemét átalakítja szövegként és írd ki a konzolra.
let stringArray = myArray.map(item => String(item));
console.log('Tömb szövegként:', stringArray);
