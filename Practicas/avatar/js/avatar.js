//reglas
const reglas = document.getElementById('reglas');

//boton de personaje
const botonPersonajeJugador = document.getElementById('boton-personaje');

//enemigos
const personajeEnemigo = ["Zuko", "Katara", "Aang", "Toph"]

//ataques
const ataques = ["Puño", "Patada", "Barrida"];

//span de personajes
const spanPersonajeJugador = document.getElementById('personaje-jugador');
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo');

//botones de golpes
const botonPunio = document.getElementById('boton-punio');
const botonPatada = document.getElementById('boton-patada');
const botonBarrida = document.getElementById('boton-barrida');

//mensajes 
const seccionMensaje = document.getElementById('mensajes');

//   inicia el juego
const iniciarJuego = () => {
    //evento personaje
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
    //eventos golpes
    botonPunio.addEventListener('click', () => ataque('Puño'));
    botonPatada.addEventListener('click', () => ataque('Patada'));
    botonBarrida.addEventListener('click', () => ataque('Barrida'));
    //renderizar reglas
    renderizarReglas();
}

//selecciona personaje
const seleccionarPersonajeJugador = () => {
    const personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');
    // Verificar si se seleccionó un personaje
    if (personajeSeleccionado) {
        spanPersonajeJugador.innerHTML = personajeSeleccionado.id;
        spanPersonajeEnemigo.innerHTML = personajeEnemigo[Math.floor(Math.random() * personajeEnemigo.length)];
    } else {
        alert('Por favor selecciona un personaje');
    }
}

// imprime y realiza ataques
const ataque = (ataque) => {
    let ataqueEnemigo = AtaqueAleatorio();

    crearMensaje(ataque, ataqueEnemigo)
}

// creacion de mensaje de batalla, ataques y resultado.
const crearMensaje = (ataque, ataqueEnemigo) => {
    let parrafo = document.createElement('p')
    let resultado = combate(ataque, ataqueEnemigo)
    parrafo.innerHTML = `Tu personaje atacó con ${ataque}  el personaje del enemigo atacó con ${ataqueEnemigo}  - ${resultado}`
    seccionMensaje.appendChild(parrafo)
}
//ataque aleatorio
const AtaqueAleatorio = () => {
    return ataques[Math.floor(Math.random() * ataques.length)];
}
//combate
const combate = (ataque, ataqueEnemigo) => {
    const winCase = {
        "Puño": "Barrida",
        "Patada": "Puño",
        "Barrida": "Patada"
    }
    if (winCase[ataque] === ataqueEnemigo) {
        return "Ganaste 🎉 "
    } else if (winCase[ataqueEnemigo] === ataque) {
        return "Perdiste"
    } else {
        return "Empate"
    }
}
//rederizar reglas
const renderizarReglas = () => {
    reglas.innerHTML = `
        <h2>Reglas del juego</h2>
        <ul>
            <li>Selecciona un personaje</li>
            <li>Cada personaje tiene 3 vidas</li>
            <li>Selecciona un ataque</li>
            <li>Espera el resultado</li>
            <li>El personaje que gane 3 veces gana la partida</li>
        </ul>
        <h2> Reglas batalla</h2>
        <ul>
            <li>Puño gana a Barrida</li>
            <li>Patada gana a Puño</li>
            <li>Barrida gana a Patada</li>
        </ul>
    `
}

//eventos seleccion personaje
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

//reiniciar juego
const reiniciar = () => { location.reload(); }

//iniciar juego al cargar la pagina
window.addEventListener('load', iniciarJuego);

// reglas de juego, seleccionar personaje, vidas y que gana a que cosa. 