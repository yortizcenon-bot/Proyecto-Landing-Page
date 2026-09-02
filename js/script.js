function mostrarOcultarMenu() {
    const menu = document.getElementById("offcanvasMenu");
    const overlay = document.getElementById("navOverlay");
    const icon = document.getElementById("menuIcon");

    menu.classList.toggle("open");
    overlay.classList.toggle("active");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
}

function seleccionar() {
    const menu = document.getElementById("offcanvasMenu");
    const overlay = document.getElementById("navOverlay");
    const icon = document.getElementById("menuIcon");

    menu.classList.remove("open");
    overlay.classList.remove("active");

    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
}


// Páginas
const pagWelcome = document.querySelector('.pageInicio')
const pagInicio = document.querySelector('.container')
const pagRegistro = document.querySelector('.containerReg')

// Botones de la página principal
const btnInicio = document.querySelectorAll('.inBtn')
const btnRegistro = document.querySelectorAll('.regBtn')

// Mostrar la página de inicio de sesión
function mostrarLogin() {
    pagWelcome.style.display = 'none'
    pagRegistro.style.display = 'none'
    pagInicio.style.display = 'flex'
}

// Mostrar la página de bienvenida
function mostrarWelcome() {
    pagInicio.style.display = 'none'
    pagRegistro.style.display = 'none'
    pagWelcome.style.display = 'flex'
}

// Mostrar la página de registro
function mostrarRegistro() {
    pagWelcome.style.display = 'none'
    pagInicio.style.display = 'none'
    pagRegistro.style.display = 'flex'
}

// Botones de la página principal
btnInicio.forEach((btn) => {
    btn.addEventListener('click', mostrarLogin)
})

btnRegistro.forEach((btn) => {
    btn.addEventListener('click', mostrarRegistro)
})

// Botón de registro desde la página de inicio de sesión
const btnReg = document.querySelector('.registrarBtn')

function ingresarRegistro() {
    pagInicio.style.display = 'none'
    pagRegistro.style.display = 'flex'
}

btnReg.addEventListener('click', ingresarRegistro)

// Botón para regresar a bienvenida desde inicio de sesión
const btnRegWlm = document.querySelector('.iconI')

btnRegWlm.addEventListener('click', mostrarWelcome)

// Botón para ingresar desde la página de registro
const btnIni = document.querySelector('.ingresarBtn')

function ingresarInicio() {
    pagRegistro.style.display = 'none'
    pagInicio.style.display = 'flex'
}

btnIni.addEventListener('click', ingresarInicio)

// Botón para regresar a bienvenida desde registro
const btnIniWlm = document.querySelector('.iconR')

btnIniWlm.addEventListener('click', mostrarWelcome)