// Obtener usuario logueado
const user = JSON.parse(localStorage.getItem("usuarioLogueado"));


document.getElementById("nombreCompleto").textContent = user.nombreCompleto;
document.getElementById("cargo").textContent = user.cargo;

document.getElementById("cedula").textContent = user.cedula;
document.getElementById("fechaNacimiento").textContent = user.fechaNacimiento;
document.getElementById("sexo").textContent = user.sexo;
document.getElementById("estadoCivil").textContent = user.estadoCivil;


document.getElementById("email").textContent = user.email;
document.getElementById("telefono").textContent = user.telefono;
document.getElementById("direccion").textContent = user.direccion;


document.getElementById("perfilProfesional").textContent = user.perfilProfesional;



const expContainer = document.getElementById("experienciaLaboral");

user.experienciaLaboral.forEach(exp => {
    const div = document.createElement("div");
    div.classList.add("bloque-experiencia");

    div.innerHTML = `
        <h3>${exp.empresa}</h3>
        <p><strong>Cargo:</strong> ${exp.cargo}</p>
        <p><strong>Fechas:</strong> ${exp.fecha}</p>
        <p>${exp.descripcion}</p>
        <hr>
    `;

    expContainer.appendChild(div);
});



const formContainer = document.getElementById("formacionAcademica");

user.formacionAcademica.forEach(edu => {
    const div = document.createElement("div");
    div.classList.add("bloque-academico");

    div.innerHTML = `
        <p>
            <strong>${edu.institucion}</strong> — ${edu.titulo}
            <span>(${edu.año})</span>
        </p>
    `;

    formContainer.appendChild(div);
});
