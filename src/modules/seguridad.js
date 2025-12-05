// ================================
// PROTECCIÓN DE SESIÓN
// ================================
const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

if (!usuarioLogueado) {
    window.location.href = "../Registro/login.html";
}


// ================================
// CARGAR LISTA DE USUARIOS
// ================================
const usuariosLS = JSON.parse(localStorage.getItem("usuarios")) || [];


// ================================
// OBTENER REFERENCIAS DEL FORM
// ================================
const formSeguridad = document.getElementById("formSeguridad");

const passActual = document.getElementById("pass_actual");
const passNueva = document.getElementById("pass_nueva");
const passConfirmar = document.getElementById("pass_confirmar");

const errorActual = document.getElementById("error_actual");
const errorNueva = document.getElementById("error_nueva");
const errorConfirmar = document.getElementById("error_confirmar");


// ================================
// FUNCIÓN PARA LIMPIAR ERRORES
// ================================
function limpiarErrores() {
    errorActual.textContent = "";
    errorNueva.textContent = "";
    errorConfirmar.textContent = "";
}


// ================================
// EVENTO SUBMIT DEL FORMULARIO
// ================================
formSeguridad.addEventListener("submit", (e) => {
    e.preventDefault();
    limpiarErrores();

    let valido = true;

    // 1. VALIDAR CONTRASEÑA ACTUAL
    if (passActual.value.trim() !== usuarioLogueado.password) {
        errorActual.textContent = "La contraseña actual es incorrecta.";
        valido = false;
    }

    // 2. VALIDAR QUE LA NUEVA SEA DIFERENTE
    if (passNueva.value.trim() === usuarioLogueado.password) {
        errorNueva.textContent = "La nueva contraseña no puede ser igual a la actual.";
        valido = false;
    }

    // 3. VALIDAR QUE NO ESTÉ VACÍA
    if (passNueva.value.trim().length < 4) {
        errorNueva.textContent = "La nueva contraseña debe tener al menos 4 caracteres.";
        valido = false;
    }

    // 4. VALIDAR CONFIRMACIÓN
    if (passNueva.value.trim() !== passConfirmar.value.trim()) {
        errorConfirmar.textContent = "Las contraseñas no coinciden.";
        valido = false;
    }

    if (!valido) return;

    // ================================
    // ACTUALIZAR CONTRASEÑA EN usuarioLogueado
    // ================================
    usuarioLogueado.password = passNueva.value.trim();
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));


    // ================================
    // ACTUALIZAR CONTRASEÑA EN LA LISTA DE USUARIOS
    // ================================
    const index = usuariosLS.findIndex(u => u.id === usuarioLogueado.id);
    if (index !== -1) {
        usuariosLS[index].password = passNueva.value.trim();
    }

    localStorage.setItem("usuarios", JSON.stringify(usuariosLS));


    // ================================
    // MENSAJE DE ÉXITO
    // ================================
    Swal.fire({
        icon: "success",
        title: "Contraseña actualizada",
        text: "Tu contraseña se cambió correctamente.",
        confirmButtonText: "Aceptar"
    }).then(() => {
        window.location.href = "./perfil.html";
    });

});
