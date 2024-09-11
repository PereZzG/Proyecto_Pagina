function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Inicio de sesión exitoso');
        location.href = 'Gesti.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
}