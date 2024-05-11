// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек, який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName(callback) {
//     const userName = prompt("Введіть ім'я");
//     callback(userName);
// }
// function greet(name) {
//     console.log(`Привіт ${name}`);
// };

// letMeSeeYourName(greet);

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// const makeProduct = (name, price, callback) => {
//     const obj = {
//         name,
//         price,
//         id: Date.now(),
//     };
//     callback(obj);
// };

// const showProduct = (product) => console.log(product);


// makeProduct("Холодильник", 10000, showProduct)

const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
{
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
{
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
{
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
];
  
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;

// const scientistsByBorn = scientists.filter(scientist => scientist.born > 1799 && scientist.born < 1900).map(scientist => `${scientist.name} ${scientist.surname}`);
// console.log(scientistsByBorn);

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// const scientistsLife = scientists.reduce((acc, scientist) => acc + (scientist.dead - scientist.born), 0);
// console.log(scientistsLife / scientists.length);

// 3) відсортувати по алфавіту;

// const sorted = scientists.toSorted((a, b) => b.name.localeCompare(a.name));
// console.log(sorted);

//4)відсортувати по кількості прожитих років;

// const younger = scientists.toSorted((a, b) => (a.dead - a.born) - (b.dead - b.born));
// console.log(younger);

// 5)відфільтрувати, хто народився в 15,16,17ст;
// const scientistsByBorn = scientists.filter(scientist => scientist.born > 1399 && scientist.born < 1700).map(scientist => `${scientist.name} ${scientist.surname}`);
// console.log(scientistsByBorn);

// 6)знайти рік народження Albert Einstein;
// const someScientist = scientists.find(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein');
// console.log(someScientist.born);

// ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.

const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
  },
{
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Functions",
      "Conditions",
      "Classes",
      "DOM",
      "Git",
      "GitHub",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Promises",
      "AJAX",
      "Git",
      "GitHub",
    ],
  },
];

const newArrCourse = courses.flatMap(course => course.topics);
console.table(newArrCourse);
const uniqueTopics = newArrCourse.filter((el, index, arr) => arr.indexOf(el) === index);
console.table(uniqueTopics);