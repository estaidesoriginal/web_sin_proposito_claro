// Referencias a elementos
const btnToggleForm = document.getElementById('btn-toggle-form');
const loginForm = document.getElementById('login-form');
const registroForm = document.getElementById('registro-form');

// Regex de validación
const emailRegex = /^[^\s@]+@((duoc\.cl)|(profesor\.duoc\.cl)|(gmail\.com))$/;
const passwordRegex = /^(?=.*\d).{4,10}$/;

// Alternar formularios
btnToggleForm.addEventListener('click', () => {
    if (loginForm.style.display !== 'none') {
        loginForm.style.display = 'none';
        registroForm.style.display = 'block';
        btnToggleForm.textContent = 'Iniciar Sesión';
    } else {
        loginForm.style.display = 'block';
        registroForm.style.display = 'none';
        btnToggleForm.textContent = 'Registrarse';
    }
});

// Registro de usuario
registroForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email-registro').value.trim();
    const password = document.getElementById('password-registro').value;

    if (nombre === '' || nombre.length > 100) {
        alert('Ingresa un nombre válido (máx 100 caracteres).');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Ingresa un correo válido (@duoc.cl, @profesor.duoc.cl o @gmail.com).');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('Contraseña inválida. Debe tener entre 4 y 10 caracteres e incluir al menos un número.');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some(u => u.email === email)) {
        alert('Este correo ya está registrado.');
        return;
    }

    usuarios.push({ nombre, email, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    registroForm.reset();
    
    if (usuario) {
    alert(`Bienvenido ${usuario.nombre}! Has iniciado sesión correctamente.`);
    loginForm.reset();
    // Guardar usuario actual
    localStorage.setItem('usuarioActual', JSON.stringify(usuario));
    // Redirigir a home
    window.location.href = 'home.html';
} else {
    alert('Correo o contraseña incorrectos. Verifica tus datos.');
}


    // Volver al login automáticamente
    loginForm.style.display = 'block';
    registroForm.style.display = 'none';
    btnToggleForm.textContent = 'Registrarse';
});

// Inicio de sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        alert(`Bienvenido ${usuario.nombre}! Has iniciado sesión correctamente.`);
        loginForm.reset();
        window.location.href = 'home.html';
    } else {
        alert('Correo o contraseña incorrectos. Verifica tus datos.');
    }
});



