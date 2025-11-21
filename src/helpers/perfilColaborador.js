// PROTECCIÓN: no permitir acceso sin login
const usuarioIdActivo = localStorage.getItem("usuarioIdActivo");

if (!usuarioIdActivo) {
    alert("Debes iniciar sesión para acceder a esta página.");
    window.location.href = "../../index.html"; // AJUSTA la ruta según tu estructura
}

import { usuarios } from "../data/usuarios.js";

// Convertir ID guardado a número
const id = parseInt(usuarioIdActivo, 10);

// Buscar usuario con ese ID
const usuario = usuarios.find(u => u.id === id);

if (!usuario) {
    console.error("No hay datos del usuario en localStorage.");
} else {
    // ======== Encabezado ========
    document.getElementById("nombreCompleto").textContent = usuario.nombreCompleto;
    document.getElementById("cargo").textContent = usuario.cargo;

    // ======== Datos Personales ========
    document.getElementById("nombreCompletoDetalle").textContent = usuario.nombreCompleto;
    document.getElementById("fechaNacimiento").textContent = usuario.fechaNacimiento;
    document.getElementById("cedula").textContent = usuario.cedula;
    document.getElementById("sexo").textContent = usuario.sexo;
    document.getElementById("estadoCivil").textContent = usuario.estadoCivil;
    document.getElementById("direccion").textContent = usuario.direccion;
    document.getElementById("telefono").textContent = usuario.telefono;
    document.getElementById("email").textContent = usuario.email;

    // ======== Perfil Profesional ========
    document.getElementById("perfilProfesional").textContent = usuario.perfilProfesional;

    // ======== Experiencia Laboral ========
    const expContainer = document.getElementById("experienciaLaboral");
    expContainer.innerHTML = usuario.experienciaLaboral
        .map(exp => `
            <strong>${exp.cargo}</strong><br>
            ${exp.empresa}<br>
            ${exp.fecha}<br>
            ${exp.descripcion}<br><br>
        `)
        .join("");

    // ======== Formación Académica ========
    const formContainer = document.getElementById("formacionAcademica");
    formContainer.innerHTML = `
        <ul class="lis">
            ${usuario.formacionAcademica
                .map(f => `<li><strong>${f.institucion}</strong> — ${f.titulo} - ${f.año}</li>`)
                .join("")}
        </ul>
    `;
}
