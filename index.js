const body = document.querySelector('body');
const users = [
  {
    name: 'Olga',
    age: 12
  },
  {
    name: 'Misha',
    age: 25
  },
  {
    name: 'Petya',
    age: 45
  },
  {
    name: 'Masha',
    age: 18
  },
];

users.forEach(({name, age}) => {
  const p = document.createElement('p');

  p.innerText = `Name ${name}, age ${age}`;

  p.onclick = () => {
    p.remove()
  }

  body.appendChild(p);
});
