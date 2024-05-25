// ЗАДАЧА 1 
// Створіть карточки товару з масиву використовуючи createElement

import carList from './date/car.js'

function carTamplate({ name, img, price, description }) {
    const item = document.createElement('li');
    const title = document.createElement('h2');
    title.textContent = name;
    const picture = document.createElement('img');
    picture.src = img;
    picture.alt = name;
    picture.classList.add('item-img');
    const dscr = document.createElement('p');
    dscr.textContent = description;
    const priceEl = document.createElement('p');
    priceEl.textContent = price;
    item.append(picture, title, priceEl, dscr);
    return item;
}

const elements = carList.map(carTamplate);

const markup = document.querySelector('.js-goods'); markup.append(...elements);