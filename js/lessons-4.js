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
div.style.backgroundColor = randomRgbColor ()

    
