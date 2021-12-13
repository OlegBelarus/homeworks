//1.Напишите функцию getFirst(array, n), которая возвращает фрагмент массива,
//содержащий первые 'n' элементов массива. Повторить через map

// const array = [50, 60, 1, 9, 17, 3, 21];

// const getFirst = (array, n) => {

//     return array.slice(0, n);
// };

// console.log(getFirst(array, 3));

///////////////////////////////////////////////////////////////////////

// const array = [50, 60, 1, 9, 17, 3, 21];

// const getFirst = (array, n) => {
// const newArr = [];

//     array.map( (item, idx) => {
//       if (idx < n) {
//         newArr.push(item);
//       }
//     });

//     return newArr;
// };

// console.log(getFirst(array, 4));


//2. Напишите функцию getLast(array, n), которая возвращает фрагмент массива,
//содержащий последние 'n' элементов массива. Повторить через map

// const array = [17, 15, 22, 21, 1, 7, 9];

// function getLast(array, n) {

//     return array.slice(Math.max(array.length - n, 0));
// };

// console.log(getLast(array, 2));

///////////////////////////////////////////////////////////////////////

// const array = [17, 15, 22, 21, 1, 7, 9];

// const getLast = (array, n) => {
// const newArr = [];

//   array.map( (item, idx) => {
//     if (idx >= array.length - n ) {
//       newArr.push(item) + array.slice(Math.max(array.length - n, 0));
//     }
//   });

//   return newArr;
// };

// console.log(getLast(array, 5));

//3.Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len элементов value.

// const arrayFilled = (len, value) => {
//   const arr = [];

//   for (let i = 0; i < len; i++) {
//     arr.push(value);
//   }

//   return arr;
// }

// console.log(arrayFilled(9, 5));

//4.Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len,
//заполненный целыми числами, где каждое число больше предыдущего на единицу.

// const generateNumbers = (start, len) => {
//   const arr = [];

//   for (let i = 0; i < len; i++) {
//     arr.push(start++);
//   }

//     return arr;

// }
// console.log(generateNumbers(1, 5));

//5.Перед вами переменная, содержащая строку. Напишите код, создающий массив,
//который будет состоять из первых букв слов строки str.
//"Каждый охотник желает знать, где сидит фазан." => [‘K’, ‘о’, ‘ж’, ‘з’, ‘г’, ‘с’, ‘ф’]

// const str = "Каждый охотник желает знать, где сидит фазан.";
// let arr = str.split(' ');
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i][0]);
// }

// console.log(result);
