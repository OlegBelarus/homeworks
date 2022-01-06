const btn = document.getElementById('btn');

btn.onclick = () => {
  window.location = localStorage.getItem('users') ?
    'home/home.html' : 'auth/auth.html';
};
