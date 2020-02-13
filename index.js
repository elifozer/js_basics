// let
let name = 'User1';


// Const kullanimi
// Sonradan degistiremezsin
// Re-assign yapmayacaksan const, yapacaksan let kullan
const interestRate = 0.3;
interestRage = 1;


// tum value'lerin default turu undefined
// let ile tanimladiklarimiz dinamik degiskenler, int string vs atayabilirsin
// Primitive/value types:
// string
let newName = 'User1';
// number
let age = 30;
// boolean
let isApproved = true;
// undefined, tipi undefined
let myVar = undefined;
// null, tipi object
let myVar2 = null;


// Object
// person.name veya person['name'] seklinde ulasiyoruz
let person = {
    name: 'pName',
    age: 30
};


// Arrays
// length dinamik, degisebiliyor. yeni eleman ekledikce buyuyor
// icerisinde farkli tiplerden olabilir, string ve int icerebilir mesela
// array'in tipi aslinda object
// array'in isminin sonuna . koyunca property'leri cikiyor
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;

console.log(selectedColors);
console.log(selectedColors.length);


// Functions
// ikinci parametre vermeyince, undefined oluyor
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);

    // Bu sekilde template literal ile de yazilabiliyor ?
    // console.log(`Hello ${name} + ${lastName}`);
}

greet('User1');

function square(num){
    return num * num;
}

let myNum = square(2);
console.log(myNum);