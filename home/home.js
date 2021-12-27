setTimeout(() => {
    if (localStorage.getItem('users') === null) {
        window.location = '../auth/auth.html';
    } else {
        window.location = '/home/home.html';
    }
}, 5000);

const btn_clear = document.getElementById('btn_clear');

btn_clear.onclick = () =>{
    localStorage.removeItem('users');
};
