// 1.	Дан массив с элементами [2, 3, 4, 5].
//С помощью цикла for найдите произведение элементов этого массива.

// const arr = [2, 3, 4, 5];
// let result = 1;

// for (let i = 0; i < arr.length; i++) {
//     result *= arr[i];
// }

// console.log(result);

// 2.	Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10.
//С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
//Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

const arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log('Есть!');
        break;
    }
}

