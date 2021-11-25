// Есть строка 55639217. переделать её в 5:563:921:7.
// Суть задачи сводится не к изменению конкретной строки из условия,
// а в том чтобы добавлять двоеточие между двумя нечётными числами.

const checkNumb = string => {
    const str = string;
    const numbStr = str.split('');
    const newNumbStr = [];

    for (let i = 0; i < numbStr.length; i++) {
        newNumbStr.push(numbStr[i]);

        if (numbStr[i] % 2 && numbStr[i + 1] % 2) {
            newNumbStr.push(':');
        }
    }
    return newNumbStr.join('');
}

const ipAddress = checkNumb('556996639217');
console.log(ipAddress);

//Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.

const arr = [2, 2, 3, 5, 11, 10, 11, 10, 69, 69];

const countIdentic = arr => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                result++;
                arr.splice(i, 1);
            }
        }
    }
    return result;
}

console.log(countIdentic(arr));

