// number 3

const arr = ['cherry', 'sun', 'room', 'ok'];

const newArr = arr.reduce( (acc, item) => {

    return acc + item.length + ' ';
}, []);

    console.log(newArr);

//Остальное доделаю на следующий раз