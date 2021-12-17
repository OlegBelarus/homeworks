// number 1

const array = [
    {
        name: 'Vasya',
        age: 22
    },
    {
        name: 'Marina',
        age: 27
    }
];

const propertyValue = (array, key) => {
    const newArr = [];

    array.map ( (item) => {
        item[key];
    });
};

console.log(propertyValue(array, 'age'));


// // number 2

// const arr = [1, 9, 10, 8, 9, 22, 9, 96];


// const removeItem = (arr, num) => {

//     const newArr = arr.filter(item => item !== num);

//     return newArr;
// };

// console.log(removeItem(arr, 8));

//number 3

// const arr = ['cherry', 'sun', 'room', 'ok'];

// const newArr = arr.reduce( (acc, item) => {

//     return acc + item.length + ' ';
// }, []);

//     console.log(newArr);

//number 4
