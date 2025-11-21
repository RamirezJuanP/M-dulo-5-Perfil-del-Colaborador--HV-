
// PROTECCIÓN: Evitar acceder sin haber iniciado sesión

const usuarioIdActivo = localStorage.getItem("usuarioIdActivo");

if (!usuarioIdActivo) {
    alert("Debes iniciar sesión para acceder a esta página.");
    window.location.href = "../Registro/login.html";
}


// Importar base de datos de usuarios

import { usuarios } from "../data/usuarios.js";

// Obtener el usuario actual
const id = parseInt(usuarioIdActivo, 10);
const usuario = usuarios.find(u => u.id === id);

// Validación de existencia
if (!usuario) {
    alert("Error: No se encontró información del usuario.");
    window.location.href = "./perfil.html";
}

//PRE-LLENADO DEL FORMULARIO

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

// Experiencia laboral (primer registro)
document.getElementById("edit_exp_empresa").value = usuario.experienciaLaboral[0].empresa;
document.getElementById("edit_exp_cargo").value = usuario.experienciaLaboral[0].cargo;
document.getElementById("edit_exp_fecha").value = usuario.experienciaLaboral[0].fecha;
document.getElementById("edit_exp_descripcion").value = usuario.experienciaLaboral[0].descripcion;

// Formación académica (primer y segundo ítem)
document.getElementById("edit_f1_institucion").value = usuario.formacionAcademica[0].institucion;
document.getElementById("edit_f1_titulo").value = usuario.formacionAcademica[0].titulo;
document.getElementById("edit_f1_anio").value = usuario.formacionAcademica[0].año;

document.getElementById("edit_f2_institucion").value = usuario.formacionAcademica[1].institucion;
document.getElementById("edit_f2_titulo").value = usuario.formacionAcademica[1].titulo;
document.getElementById("edit_f2_anio").value = usuario.formacionAcademica[1].año;



// GUARDAR CAMBIOS

document.getElementById("formEditarPerfil").addEventListener("submit", (e) => {
    e.preventDefault();

    // Actualizar datos del usuario
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

    // Guardar usuario actualizado en localStorage
    localStorage.setItem("usuarioIdActivo", usuario.id);
    localStorage.setItem("usuarioEditado", JSON.stringify(usuario));

    // Almacenar también el nuevo usuario en el array (opcional)
    const index = usuarios.findIndex(u => u.id === usuario.id);
    usuarios[index] = usuario;

    // Mostrar mensaje
    Swal.fire({
        icon: "success",
        title: "Perfil actualizado",
        text: "Los cambios se han guardado correctamente",
        confirmButtonText: "Aceptar"
    }).then(() => {
        window.location.href = "./perfil.html";
    });
});
