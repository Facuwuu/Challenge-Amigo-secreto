let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim(); // Captura el nombre y elimina espacios extra

    // Validar si el campo está vacío
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Validar si el amigo ya está en la lista
    if (amigos.includes(amigo)) {
        alert('Este amigo ya está en la lista.');
        return;
    }

    // Agregar el amigo al array
    amigos.push(amigo);
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada

    // Actualizar la lista visualmente
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista anterior

    // Recorrer el array y agregar los amigos como elementos <li>
    amigos.forEach(function(amigo) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
        let amigoSorteado = amigos[indiceAleatorio]; // Obtener el amigo correspondiente

        // Mostrar el amigo sorteado en el HTML
        document.getElementById("resultado").textContent = `Tu amigo secreto es: ${amigoSorteado}`;
    } else {
        // Si no hay amigos, mostrar un mensaje de advertencia
        document.getElementById("resultado").textContent = "No hay amigos para sortear.";
    }
}
