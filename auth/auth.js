const btn_auth = document.getElementById('btn_auth');
const inp_first= document.getElementById('inp_first');
const inp_last = document.getElementById('inp_last');

btn_auth.onclick = () => {
    const users = {
        firstName: inp_first.value,
        lastName: inp_last.value
    };

    inp_first.value = '';
    inp_last.value = '';
    inp_first.focus();
    inp_first.focus();

    localStorage.setItem('users', JSON.stringify(users));

  window.location = '/home/home.html';
};
