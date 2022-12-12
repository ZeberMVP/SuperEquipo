document.querySelector("form").addEventListener("onclick", function (event) {

    event.preventDefault();// parar envío
    const nombre = event.target.nombre.value;
    let validated = true;

    if (nombre.length < 10) {
        alert("Nombre muy corto");
        validated = false;
    }
    // Comprobación final - Todo validado
    if (validated) {
        alert("ÉXITO - Formulario correcto y enviado")
        event.target.submit();
    }
})