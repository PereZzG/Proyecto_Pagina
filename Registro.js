const users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (email && name && password) {
        const user = { email, name, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuario registrado con éxito');
        location.href = 'Index.html';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}