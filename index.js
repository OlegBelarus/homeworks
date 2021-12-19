// // number 1

// const users = [
//     {
//         name: 'Vasya',
//         age: 22
//     },
//     {
//         name: 'Marina',
//         age: 27
//     }
// ];

// const propertyValue = (x, y) => x.map(item => item[y]);

// console.log(propertyValue(users, 'name'));


// // number 2

// const arr = [1, 9, 10, 8, 9, 22, 9, 96];


// const removeItem = (arr, num) => {

//     const newArr = arr.filter(item => item !== num);

//     return newArr;
// };

// console.log(removeItem(arr, 8));

// // number 3

// const arr = ['cherry', 'sun', 'room', 'ok'];

// const newArr = arr.reduce( (acc, item) => {
//     // const prevVal = acc;

//     // prevVal.push(item.length);

//     return [...acc, item.length];
// }, []);

//     console.log(newArr);

// number 4

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = array => {

//     return array.reduce( (acc, item, idx) => {

//         if (idx === 0) {
//             return [item];
//         }

//         return [...acc, item + acc[idx - 1]];
//     }, []);
// };

// console.log(currentSums(numbers));