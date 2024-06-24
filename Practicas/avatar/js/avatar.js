function seleccionarPersonajeJugador(){ 
    let personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');
    let spanPersonajeJugador= document.getElementById('personaje-jugador');
    let spanPersonajeEnemigo= document.getElementById('personaje-enemigo');
    const personajeEnemigo = ["Zuko", "Katara", "Aang", "Toph"]


    // Verificar si se seleccionó un personaje
    if(personajeSeleccionado) {
        spanPersonajeJugador.innerHTML = personajeSeleccionado.id;
        spanPersonajeEnemigo.innerHTML = personajeEnemigo[Math.floor(Math.random() * personajeEnemigo.length)];

    } else {
        alert('Por favor selecciona un personaje');
    }
}

let botonPersonajeJugador = document.getElementById('boton-personaje');

botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);