// // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// creamos una funcion para agregar un amigo a la lista
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim(); // Captura el nombre y elimina espacios extra

    if (amigo === '') { // me fijo si el campo esta vacio, si lo esta, lanza el mensaje.
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(amigo)) { //con includes verificamos si el amigo esta en la lista, en el caso de que sea true lanzamos el mensaje.
        alert('Este amigo ya está en la lista.');
        return;
    }
    amigos.push(amigo); //usamos el push para agregar mas amigos al array.
    document.getElementById("amigo").value = ""; // limpiamos el campo para agregar mas amigos.

    // Actualizo la lista visualmente llamando a la funcion
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpio la lista anterior

    // recorro el array con el for
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li"); // Creo un nuevo elemento <li>
        nuevoElemento.textContent = amigos[i]; // Asigno el nombre del amigo nuevo agregado
        listaAmigos.appendChild(nuevoElemento); // Agrego el <li> a la lista
    }
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generamos el  índice aleatorio
        let amigoSorteado = amigos[indiceAleatorio]; // Obtenemos el amigo aleatorio

        document.getElementById("resultado").textContent = `Tu amigo secreto es: ${amigoSorteado}`; //mostramos el amigo secreto
    } else {
        // Si no hay amigos nos saltara el mensaje diciendo que no hay
        document.getElementById("resultado").textContent = "No hay amigos para sortear.";
    }
}
