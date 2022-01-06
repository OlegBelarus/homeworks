const btn_clear = document.getElementById('btn_clear');

btn_clear.onclick = () =>{
    localStorage.removeItem('users');

    window.location = localStorage.getItem('users') ?
    'home/home.html' : '/auth/auth.html';
};
