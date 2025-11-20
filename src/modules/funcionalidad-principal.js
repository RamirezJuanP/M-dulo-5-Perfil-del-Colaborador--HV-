
let boton = document.getElementById("boton-login");

boton.addEventListener("click", iniciarSesion);

function iniciarSesion() {
    const emailIngresado = document.getElementById("email").value;
    const passwordIngresado = document.getElementById("password").value;

    const usuariosLS = JSON.parse(localStorage.getItem("usuarios"));

    const usuarioEncontrado = usuariosLS.find(
        u => u.email === emailIngresado && u.password === passwordIngresado
    );

    if (usuarioEncontrado) {

        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));

        window.location.href = "src/pages/perfil.html";
        
        console.log("hola")

    } else {
        Swal.fire({
            title: "Error",
            text: "Usuario o contraseña incorrectos",
            icon: "error"
        });

        console.log("hola2")
    }
}
