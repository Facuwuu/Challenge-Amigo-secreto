let amigos = [];


function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim(); 

    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Este amigo ya está en la lista.');
        return;
    }

    amigos.push(amigo);
    document.getElementById("amigo").value = ""; 

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    amigos.forEach(function(amigo) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
        let amigoSorteado = amigos[indiceAleatorio];

        document.getElementById("resultado").textContent = `Tu amigo secreto es: ${amigoSorteado}`;
    } else {
        document.getElementById("resultado").textContent = "No hay amigos para sortear.";
    }
}
