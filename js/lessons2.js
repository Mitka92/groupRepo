// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

//const styles = ['Джаз', 'Блюз']
//styles.push('Рок-н-ролл');
//styles.splice(1, 1, 'Классика');
//styles.shift();
//styles.unshift('Рэп', 'Регги');

//console.log(styles);

//ЗАДАЧА 2
//використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
//повідомлення у форматі < індекс елемента > та < значення елемента >.
//Номерація для кожного елемента масива['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

//let user = ['Mango', 'Poly', 'Ajax'];
//for (let i = 0; i < user.length; i += 1) {
//    console.log(`${i} ${user[i]}`);
//};

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)

// function findSmallestNumber(numbers) {
//   let result = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < result) {
//       result = numbers[i];
//     }
//   }
//   return result;
// }

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// ЗАДАЧА 4
// Провірте, чи являється рядок полідромом

// const str = "ротатор"; //true
// const newString = "Hello"; //false
// const newStr = str.split("").reverse().join("");
// console.log(str === newStr);
// const newString2 = newString.split("").reverse().join("");
// console.log(newString === newString2);

// function isPolindrome(string) {
//   const newStr = string.split("").reverse().join("");
//   console.log(string === newStr);
// }
// isPolindrome(str);
// isPolindrome(newString);

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// function calculateAverage(...args) {
//     let result = 0;
//     for (let i = 0; i < args.length; i++) {
//         result += args[i];
        
//     }
//     return result / args.length;
// }

// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// capitalize('the quick brown fox')// 'The Quick Brown Fox '
// function capitalize(string) {
//     const newStr = string.split(' ');
//     // console.log(newStr);
//     const wordArr = [];
//     for (const item of newStr) {
//         let firstLetter = item[0].toUpperCase();
//         // console.log(firstLetter);
//         let lastLetters = item.slice(1);
//         // console.log(lastLetters);
//         let newWord = `${firstLetter}${lastLetters}`;
//         // console.log(newWord);
//         wordArr.push(newWord);
//         // console.log(wordArr);
//     }
//     console.log(wordArr.join(' '));
// }

// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(course) {
//     if (courses.includes(course)) {
//         console.log('Ви маєте такий курс');
//         return;
//     }
//         courses.push(course);
// }

// function removeCourse(remCourse) {
//     const index = courses.indexOf(remCourse);
//     if (index === -1) {
//         return "Курс не знайдений"
//     }
//     courses.splice(index, 1);
// }

// function updateCourse(oldName, newName) {
//     const index = courses.indexOf(oldName);
//     courses.splice(index, 1, newName);
// }

// console.log(addCourse("Express")); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'У вас уже є такий курс'
// console.log(removeCourse("React")); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс з таким іменем не найдено'
// console.log(updateCourse("Express", "NestJS")); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);