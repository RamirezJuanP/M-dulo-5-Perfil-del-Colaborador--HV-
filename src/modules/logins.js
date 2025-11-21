import { usuarios } from "../data/usuarios.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuarioInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // 1. Buscar usuario
    const usuarioEncontrado = usuarios.find(
        (u) => u.usuario === usuarioInput && u.password === passwordInput
    );

    // 2. Validación
    if (!usuarioEncontrado) {
        alert("Usuario o contraseña incorrectos.");
        return;
    }

    // 3. Guardar ID en localStorage
    localStorage.setItem("usuarioIdActivo", usuarioEncontrado.id);

    // 4. Redirigir al perfil
    window.location.href = "./src/pages/perfil.html";
});
