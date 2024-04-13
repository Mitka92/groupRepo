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

const price1 = Number(prompt("Введіть ціну товару1"));
const price2 = +prompt("Введіть ціну товару2");
const price3 = +prompt("Введіть ціну товару3");
const totalPrice = price1 + price2 + price3;
console.log(totalPrice);