import { usuarios as usuariosOriginales } from "../data/usuarios.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuarioInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // 1. Cargar usuarios desde LOCALSTORAGE o desde el archivo
    const usuariosLS = JSON.parse(localStorage.getItem("usuarios")) || usuariosOriginales;

    // 2. Buscar usuario
    const usuarioEncontrado = usuariosLS.find(
        (u) => u.usuario === usuarioInput && u.password === passwordInput
    );

    // 3. Validación
    if (!usuarioEncontrado) {
        alert("Usuario o contraseña incorrectos.");
        return;
    }

    // 4. Guardar toda la información del usuario
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));

    // 5. Guardar la base de datos actualizada (si no existía)
    localStorage.setItem("usuarios", JSON.stringify(usuariosLS));

    // 6. Redirigir al perfil
    window.location.href = "./src/pages/perfil.html";
});
