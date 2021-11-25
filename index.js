// 1 Есть строка 55639217. переделать её в 5:563:921:7.
//Суть задачи сводится не к изменению конкретной строки из условия,
//а в том чтобы добавлять двоеточие между двумя нечётными числами.

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

const ipAddress = checkNumb('55639217');
console.log(ipAddress);
