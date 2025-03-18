//Creación del arrary que almacena la lista de amigos
let amigos = [];

// Función para agregar amigos al array
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); 
    let nombreAmigo = inputAmigo.value;

    //Validar si el nombre es valido
    if (nombreValido(nombreAmigo)) {
        // Validar si el nombre ya está en la lista
        if (amigos.includes(nombreAmigo)) {
            alert("Este nombre ya fue ingresado");
            return;
        }

        amigos.push(nombreAmigo);
        inputAmigo.value = "";
        inputAmigo.focus();
        actualizarAmigo();        
    }else{
        alert("Ingrese un nombre valido");
        return;
    }
}

// Función para actualizar la lista de amigos
function actualizarAmigo() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Upss, no hay amigos para realizar el sorteo");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.textContent = "El amigo sorteado es: " + amigoSorteado;

    document.querySelector('#listaAmigos').remove();
}

//Función que valida si un nombre esta permitido con expresiones regulares
function nombreValido(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
    return regex.test(nombre);
}