let estudiantes = [];

function validar() {

    let nombre = document.getElementById("nombre").value;
    let carnet = document.getElementById("carnet").value;
    let fecha = document.getElementById("fecha").value;
    let correo = document.getElementById("correo").value;

    if (nombre == "") {
        alert("Ingrese su nombre");
        return false;
    }

    if (carnet == "") {
        alert("Ingrese su carnet");
        return false;
    }

    if (isNaN(carnet)) {
        alert("El carnet debe contener solamente números");
        return false;
    }

    if (fecha == "") {
        alert("Ingrese su fecha de nacimiento");
        return false;
    }

    let fechaIngresada = new Date(fecha);
    let fechaActual = new Date();

    if (fechaIngresada > fechaActual) {
        alert("La fecha no puede ser mayor a la fecha actual");
        return false;
    }

    if (correo == "") {
        alert("Ingrese su correo");
        return false;
    }

    let estudiante = {
        nombre: nombre,
        carnet: carnet,
        fecha: fecha,
        correo: correo
    };

    estudiantes.push(estudiante);

    alert("Estudiante agregado correctamente");

    mostrarEstudiantes();

    return false;
}


function mostrarEstudiantes() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < estudiantes.length; i++) {

        lista.innerHTML +=
            "<p>" +
            "Nombre: " + estudiantes[i].nombre +
            " | Carnet: " + estudiantes[i].carnet +
            " | Fecha: " + estudiantes[i].fecha +
            " | Correo: " + estudiantes[i].correo +
            "</p>";
    }
}