// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// import carList from './date/car.js'

// function carTamplate({ name, img, price, description }) {
//     const item = document.createElement('li');
//     const title = document.createElement('h2');
//     title.textContent = name;
//     const picture = document.createElement('img');
//     picture.src = img;
//     picture.alt = name;
//     picture.classList.add('item-img');
//     const dscr = document.createElement('p');
//     dscr.textContent = description;
//     const priceEl = document.createElement('p');
//     priceEl.textContent = price;
//     item.append(picture, title, priceEl, dscr);
//     return item;
// }

// const elements = carList.map(carTamplate);

// const markup = document.querySelector('.js-goods'); markup.append(...elements);
// ======================================
// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА, І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА Е

const price = document.querySelector('#price');
const form = document.querySelector('.form');
const quant = document.querySelector('#quantity');
const amount = document.querySelector('.amount');
const final = document.querySelector('.text-right');
function calk(e) {
    e.preventDefault()
    const currentPrice = price.value;
    const currentQuantity = quant.value;
    const sum = currentPrice * currentQuantity;
    console.log(sum);
    amount.textContent = currentQuantity;
    final.textContent = sum;
}
form.addEventListener('submit', calk)
function amountText() {
    const currentQuantity = quant.value;
    amount.textContent = currentQuantity;
}
form.addEventListener('input', amountText);

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ
const div = document.querySelector('.container');

const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};
div.style.backgroundColor = randomRgbColor()

ЗАДАЧА 3
3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
 <ul class="js-list"></ul>

const instruments = [{
  id: 1,
  img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
  name: "Молоток",
  price: 150
},
{
  id: 2,
  img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
  name: "Перфоратор",
  price: 3000
},{
  id: 3,
  img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
  name: "Рівень",
  price: 2000
}]


3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

ЗАДАЧА 4
ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found
const people1 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
},
{
  name: 'Eva',
  know: ["Alex", "Jhon"],
},
{
  name: 'Jhon',
  know: [],
}]

const people2 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Jhon',
  know: ["Eva"],
},
{
  name: 'Eva',
  know: [],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
}]

const people3 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Jhon',
  know: [],
},
{
  name: 'Eva',
  know: ["Alex", "Jhon"],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
}]

    
