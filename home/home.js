
if (localStorage.getItem('users') === null) {
    window.location = '../auth/auth.html';
} else {
    window.location = '/home/home.html';
}