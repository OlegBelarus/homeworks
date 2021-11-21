// 1. Дан массив с элементами [2, 3, 4, 5].
//С помощью цикла for найдите произведение элементов этого массива.

const arrFirst = [2, 3, 4, 5];
let result = 1;

for (let i = 0; i < arrFirst.length; i++) {
    result *= arrFirst[i];
}

console.log(result);

// 2. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10.
//С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
//Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

const arrSecond = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arrSecond.length; i++) {
    if (arrSecond[i] === 4) {
        console.log('Есть!');
        break;
    }
}

// 3. Дан массив arr. Найдите среднее арифметическое его элементов.
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const arrThird = [12, 15, 20, 25, 59, 79]
let resultOne = 0;

for (let i = 0; i < arrThird.length; i++) {
    resultOne += arrThird[i] / arrThird.length;
}

console.log(resultOne);

//4. Вывести все чётные элемента массива в консоль с пометкой «even» и нечётные с пометкой «odd». 
//Массив произвольный. P.S. Остаток от деления находится при помощи оператора “%”. Например console.log(6 % 2); // 0

const arr = [1, 23, 31, 40, 55, 66, 789, 856, 978, 1001]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i], 'even');
    } else {
        console.log(arr[i], 'odd');
    }
}
