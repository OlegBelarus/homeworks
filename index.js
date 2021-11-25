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
//......которая удаляет повторяющиеся

const arr = [1, 0, 1, 2, 2, 10, 4, 9, 4, 5, 5];

const countIdentic = arr => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                result++;          // кол-во повторяющихся элементов
                // arr.splice(i, 1); // удаляет повторяющиеся элементы
            }
        }
    }
    return result;
}

console.log(countIdentic(arr));

// Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.

const firstArr = [25, 6, 15, 3, 9, 12, 36, 5];

const removeItem = (arr, num) => {
    arr.splice(num, 1);
    return arr;
}

console.log(removeItem(firstArr, 1));
