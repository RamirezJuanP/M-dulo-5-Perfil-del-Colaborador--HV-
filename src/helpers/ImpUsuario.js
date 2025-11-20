import { usuarios } from "../data/usuarios";

function cargarDatosIniciales() {
    if (!localStorage.getItem("usuarios")) {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

cargarDatosIniciales();