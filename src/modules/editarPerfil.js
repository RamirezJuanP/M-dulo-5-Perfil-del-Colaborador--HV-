// =========================
// 🔒 PROTECCIÓN DE SESIÓN
// =========================
const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
if (!usuarioLogueado) {
    Swal.fire("Acceso denegado", "Debes iniciar sesión", "error");
    window.location.href = "../Registro/login.html";
}


// =========================
// OBTENER LISTA DE USUARIOS DESDE LOCALSTORAGE
// =========================
const usuariosLS = JSON.parse(localStorage.getItem("usuarios")) || [];


// =========================
// OBTENER USUARIO ACTUAL DESDE LA LISTA
// =========================
const usuario = usuariosLS.find(u => u.id === usuarioLogueado.id);

if (!usuario) {
    Swal.fire("Error", "No se encontró el usuario en la base de datos", "error");
    window.location.href = "./perfil.html";
}


// =========================
// PRELLENAR FORMULARIO
// =========================
document.getElementById("edit_nombreCompleto").value = usuario.nombreCompleto;
document.getElementById("edit_fechaNacimiento").value = usuario.fechaNacimiento;
document.getElementById("edit_cedula").value = usuario.cedula;
document.getElementById("edit_sexo").value = usuario.sexo;
document.getElementById("edit_estadoCivil").value = usuario.estadoCivil;
document.getElementById("edit_direccion").value = usuario.direccion;
document.getElementById("edit_telefono").value = usuario.telefono;
document.getElementById("edit_email").value = usuario.email;

document.getElementById("edit_cargo").value = usuario.cargo;
document.getElementById("edit_perfilProfesional").value = usuario.perfilProfesional;

// Experiencia laboral
document.getElementById("edit_exp_empresa").value = usuario.experienciaLaboral[0].empresa;
document.getElementById("edit_exp_cargo").value = usuario.experienciaLaboral[0].cargo;
document.getElementById("edit_exp_fecha").value = usuario.experienciaLaboral[0].fecha;
document.getElementById("edit_exp_descripcion").value = usuario.experienciaLaboral[0].descripcion;

// Formación académica
document.getElementById("edit_f1_institucion").value = usuario.formacionAcademica[0].institucion;
document.getElementById("edit_f1_titulo").value = usuario.formacionAcademica[0].titulo;
document.getElementById("edit_f1_anio").value = usuario.formacionAcademica[0].año;

document.getElementById("edit_f2_institucion").value = usuario.formacionAcademica[1].institucion;
document.getElementById("edit_f2_titulo").value = usuario.formacionAcademica[1].titulo;
document.getElementById("edit_f2_anio").value = usuario.formacionAcademica[1].año;


// =========================
// GUARDAR CAMBIOS
// =========================
document.getElementById("formEditarPerfil").addEventListener("submit", (e) => {
    e.preventDefault();

    // Actualizamos usuario
    usuario.nombreCompleto = document.getElementById("edit_nombreCompleto").value;
    usuario.fechaNacimiento = document.getElementById("edit_fechaNacimiento").value;
    usuario.cedula = document.getElementById("edit_cedula").value;
    usuario.sexo = document.getElementById("edit_sexo").value;
    usuario.estadoCivil = document.getElementById("edit_estadoCivil").value;
    usuario.direccion = document.getElementById("edit_direccion").value;
    usuario.telefono = document.getElementById("edit_telefono").value;
    usuario.email = document.getElementById("edit_email").value;

    usuario.cargo = document.getElementById("edit_cargo").value;
    usuario.perfilProfesional = document.getElementById("edit_perfilProfesional").value;

    usuario.experienciaLaboral[0].empresa = document.getElementById("edit_exp_empresa").value;
    usuario.experienciaLaboral[0].cargo = document.getElementById("edit_exp_cargo").value;
    usuario.experienciaLaboral[0].fecha = document.getElementById("edit_exp_fecha").value;
    usuario.experienciaLaboral[0].descripcion = document.getElementById("edit_exp_descripcion").value;

    usuario.formacionAcademica[0].institucion = document.getElementById("edit_f1_institucion").value;
    usuario.formacionAcademica[0].titulo = document.getElementById("edit_f1_titulo").value;
    usuario.formacionAcademica[0].año = document.getElementById("edit_f1_anio").value;

    usuario.formacionAcademica[1].institucion = document.getElementById("edit_f2_institucion").value;
    usuario.formacionAcademica[1].titulo = document.getElementById("edit_f2_titulo").value;
    usuario.formacionAcademica[1].año = document.getElementById("edit_f2_anio").value;


    // =========================
    // ACTUALIZAR usuarioLogueado
    // =========================
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

    // =========================
    // ACTUALIZAR LISTA DE USUARIOS
    // =========================
    const index = usuariosLS.findIndex(u => u.id === usuario.id);
    usuariosLS[index] = usuario;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLS));


    // =========================
    // FEEDBACK AL USUARIO
    // =========================
    Swal.fire({
        icon: "success",
        title: "¡Perfil actualizado!",
        text: "Los cambios fueron guardados correctamente.",
        confirmButtonText: "Aceptar"
    }).then(() => {
        window.location.href = "./perfil.html";
    });
});
