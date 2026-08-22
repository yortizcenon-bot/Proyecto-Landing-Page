// Páginas
const pagWelcome = document.querySelector('.pageInicio')
const pagInicio = document.querySelector('.container')
const pagRegistro = document.querySelector('.containerReg')

// Botones de la página principal
const btnInicio = document.querySelector('.inBtn')
const btnRegistro = document.querySelector('.regBtn')

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
btnInicio.addEventListener('click', mostrarLogin)
btnRegistro.addEventListener('click', mostrarRegistro)

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