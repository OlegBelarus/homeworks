const btn_auth = document.getElementById('btn_auth');
const inp_log= document.getElementById('inp_log');
const inp_pass = document.getElementById('inp_pass');
const btn_reg = document.getElementById('btn_reg');
const users = [
    {
        login: 'login01',
        password: '123'
    },
    {
        login: 'login02',
        password: '123'
    },
  ];

btn_auth.onclick = () => {
    users.find(({login, password}) => login === inp_log.value && password === inp_pass.value) ?
    window.location = '/home/home.html':
    alert ('Please re-enter your login or password!');
};

btn_reg.onclick = () => {
    const users = {
        inp_log: inp_log.value,
        inp_pass: inp_pass.value
    };
    localStorage.setItem('users', JSON.stringify(users));
    window.location = '/home/home.html';
};
