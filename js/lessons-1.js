// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
//const name = "Галина";
//const age = 35;
//const hobbi = "Javascript";
//const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobbi}`;
//console.log(message);

//ЗАДАЧА 2
//ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ, ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"
// const names = prompt("Введіть своє ім'я");
// const post = prompt("Введіть вашу пошту");
// const telef = prompt("Введіть ваш телефонний номер");
// const message = `КОРИСТУВАЧ ${names} ВИКОРИСТОВУЄ  ${post} ПОЧТУ І ${telef} ТЕЛЕФОН`;
// console.log(message);

// ЗАДАЧА 3
// ПОТРІБНО ЗАПИТАТИ У МАГАЗИНІ ЦІНУ ЗА КОЖЕН ОКРЕМИЙ ТОВАР,ТА ВИВЕСТИ ПОВІДОМЛЕННЯМ   ЗАГАЛЬНУ ЦІНУ ТОВАРУ

/* const price1 = Number(prompt("Введіть ціну товару1"));
const price2 = +prompt("Введіть ціну товару2");
const price3 = +prompt("Введіть ціну товару3");
const totalPrice = price1 + price2 + price3;
console.log(totalPrice); */

/* ЗАДАЧА 4
ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ: 
"СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ 
"НЕ ЗНАЄТЕ? 12" */

/* const year = 12;
let userMessage = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?"));
if (userMessage === year) {
    console.log("ВІРНО")
} else { console.log("НЕ ЗНАЄТЕ? 12");} */

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const number = prompt("Введіть число");
// // if (number % 2 === 0) {
// //     console.log("парне");
// // } else {console.log("непарне")};
//  const result = number % 2 === 0 ? "парне" : "непарне";
//  console.log(result);
// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ
// const month = Number(prompt("Введіть місяць народження"));
// if (month === 3 || month === 4 || month === 5) {
//   alert("Весна");
// } else if (month === 6 || month === 7 || month === 8) {
//   alert("Літо");
// } else if (month === 9 || month === 10 || month === 11) {
//   alert("Осінь");
// } else if (month === 12 || month === 1 || month === 2) {
//   alert("Зима");
// } else {
//   alert("Не корекетні дані");
// }

// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const description = prompt("Введи тип підписки:").toUpperCase();
// switch (description) {
//     case "ДЕНЬ":
//         alert("1.99");
//         break;
//     case "ТИЖДЕНЬ":
//         alert("5.99");
//         break;
//     case "МІСЯЦЬ":
//         alert("10.99");
//         break;
//     case "РІК":
//         alert("100.99");
//         break;
//     default:
//         alert ("Невірно введений тип підписки!!!");
//         break;
// }

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

const login = prompt("Введіть логін");
const password = prompt("Введіть пароль");

const userLogin = "my login";
const userPassword = "my password";

const result = login === userLogin && password === userPassword ? "Ти молодець" : "Ти не молодець!!!";
alert(result);

// if (login === userLogin && password === userPassword) {
//     alert("Ти молодець");
// } else {
//     alert("Ти не молодець!!!");
// }
