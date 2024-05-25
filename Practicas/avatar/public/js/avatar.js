function seleccionarPersonajeJugador(){ 
 
    let personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');
    console.log(personajeSeleccionado.id);

    // Verificar si se seleccionó un personaje
    if(personajeSeleccionado) {
        alert('Seleccionaste a: ' + personajeSeleccionado.id);
    } else {
        alert('Por favor selecciona un personaje');
    }
}

let botonPersonajeJugador = document.getElementById('boton-personaje');

botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);