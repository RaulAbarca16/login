function ingresarDatos() {
    const departamento = document.getElementById("departamento").value;
    const provincia = document.getElementById("provincia").value;
    const distrito = document.getElementById("distrito").value;
    const nodos = document.getElementById("nodos").value;
    const ticket = document.getElementById("ticket").value;

    if (!ticket) {
        alert("Por favor ingresa el ticket.");
        return;
    }

    const tabla = document.getElementById("tabla-registros").getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow();

    const celdaTicket = nuevaFila.insertCell(0);
    celdaTicket.textContent = ticket;

    const celdaUbicacion = nuevaFila.insertCell(1);
    celdaUbicacion.textContent = `${departamento} / ${provincia} / ${distrito}`;

    const celdaClientes = nuevaFila.insertCell(2);
    celdaClientes.textContent = nodos;

    const celdaDescargar = nuevaFila.insertCell(3);
    const botonDescargar = document.createElement("button");
    botonDescargar.textContent = "Descargar";
    botonDescargar.onclick = function () {
        alert("Función de descarga no implementada.");
    };
    celdaDescargar.appendChild(botonDescargar);

    document.getElementById("departamento").value = "";
    document.getElementById("provincia").value = "";
    document.getElementById("distrito").value = "";
    document.getElementById("nodos").value = "";
    document.getElementById("ticket").value = "";
}

