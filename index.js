//1. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. 
//С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'. 
//Решение продублировать с forEach
/////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '';

// for (let i = 0; i < arr.length; i++) {
//     str += '-' + arr[i];
// }

// console.log(str +'-');

/////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '';

// arr.forEach( (item) => {
//     str += '-' + item;
// });

// console.log(str +'-');

/////////////////////////////////////////////////////////////////////////////////////////////////////
//2. Написать функцию createArray(n), которая создаёт массив произвольных чисел от 0 до 9 длиной n. 
//Попробовать так же найти решение от 0 до 10 включительно
/////////////////////////////////////////////////////////////////////////////////////////////////////

const createArray = n => {
    const arr = [];

    for ( i = 0; i < n; i++ ) {
        arr.push(Math.floor(Math.random() * 10 ));
        }
    return arr;
}

console.log(createArray(9));

/////////////////////////////////////////////////////////////////////////////////////////////////////
//3. Создать массив юзеров. Поля (свойства/ключи) на усмотрение. Количество юзеров тоже. Одно из полей будет age. 
//Циклов фор найти среднеарифметическое всех возрастов юзеров. Решение продублировать с forEach
/////////////////////////////////////////////////////////////////////////////////////////////////////

