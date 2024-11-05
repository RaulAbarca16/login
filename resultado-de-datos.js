function ingresarDatos() {
    // Obtén los valores de los campos de entrada
    const departamento = document.getElementById("departamento").value;
    const provincia = document.getElementById("provincia").value;
    const distrito = document.getElementById("distrito").value;
    const nodos = document.getElementById("nodos").value;
    const ticket = document.getElementById("ticket").value;

    // Verifica que el ticket tenga un valor antes de añadir la fila
    if (!ticket) {
        alert("Por favor ingresa el ticket.");
        return;
    }

    // Crea una nueva fila y celdas
    const tabla = document.getElementById("tabla-registros").getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow();

    // Celda del Ticket
    const celdaTicket = nuevaFila.insertCell(0);
    celdaTicket.textContent = ticket;

    // Celda de Ubicación (Departamento/Provincia/Distrito)
    const celdaUbicacion = nuevaFila.insertCell(1);
    celdaUbicacion.textContent = `${departamento} / ${provincia} / ${distrito}`;

    // Celda de Número de Clientes
    const celdaClientes = nuevaFila.insertCell(2);
    celdaClientes.textContent = nodos;

    // Celda para el botón de descarga
    const celdaDescargar = nuevaFila.insertCell(3);
    const botonDescargar = document.createElement("button");
    botonDescargar.textContent = "Descargar";
    botonDescargar.onclick = function () {
        alert("Función de descarga no implementada.");
    };
    celdaDescargar.appendChild(botonDescargar);

    // Limpia los campos de entrada después de agregar los datos
    document.getElementById("departamento").value = "";
    document.getElementById("provincia").value = "";
    document.getElementById("distrito").value = "";
    document.getElementById("nodos").value = "";
    document.getElementById("ticket").value = "";
}
