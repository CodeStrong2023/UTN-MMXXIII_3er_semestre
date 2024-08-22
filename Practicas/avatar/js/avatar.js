// Elementos de la interfaz
const reglas = document.getElementById('reglas');

// Botón de personaje
const botonPersonajeJugador = document.getElementById('boton-personaje');

// Secciones
const seccionAtaques = document.getElementById('seleccionar-ataque');
const seccionReiniciar = document.getElementById('reiniciar');
const seccionPersonaje = document.getElementById('seleccionar-personaje');

// Mensajes
const seccionMensaje = document.getElementById('mensajes');

// Enemigos
const personajeEnemigo = ["Zuko", "Katara", "Aang", "Toph"];

// Ataques
const ataques = ["Puño", "Patada", "Barrida"];

// Span de personajes
const spanPersonajeJugador = document.getElementById('personaje-jugador');
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo');

// Botones de golpes
const botonPunio = document.getElementById('boton-punio');
const botonPatada = document.getElementById('boton-patada');
const botonBarrida = document.getElementById('boton-barrida');

// Span de vidas
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
let vidasJugador = 3;
let vidasEnemigo = 3;

// Inicia el juego
const iniciarJuego = () => {
    // Evento personaje
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    // Ocultar secciones al inicio
    seccionAtaques.style.display = 'none';
    seccionMensaje.style.display = 'none';
    seccionReiniciar.style.display = 'none';

    // Eventos golpes
    botonPunio.addEventListener('click', () => ataque('Puño'));
    botonPatada.addEventListener('click', () => ataque('Patada'));
    botonBarrida.addEventListener('click', () => ataque('Barrida'));

    // Renderizar reglas
    renderizarReglas();
}

// Selecciona personaje
const seleccionarPersonajeJugador = () => {
    const personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');
    // Verificar si se seleccionó un personaje
    if (personajeSeleccionado) {
        spanPersonajeJugador.innerHTML = personajeSeleccionado.id;
        spanPersonajeEnemigo.innerHTML = personajeEnemigo[Math.floor(Math.random() * personajeEnemigo.length)];
        seccionPersonaje.style.display = 'none';
        seccionAtaques.style.display = 'block';
        seccionMensaje.style.display = 'block';
        seccionReiniciar.style.display = 'block';
    } else {
        alert('Por favor selecciona un personaje');
    }
}

// Crear mensaje final
const crearMensajeFinal = (resultado) => {
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultado;
    seccionMensaje.appendChild(parrafo);
}

// Deshabilitar botones al finalizar juego
const deshabilitarBotones = () => {
    botonPunio.disabled = true;
    botonPatada.disabled = true;
    botonBarrida.disabled = true;
}

// Revisar vidas
const revisarVidas = () => {
    if (vidasJugador === 0) {
        crearMensajeFinal('Perdiste');
        deshabilitarBotones();
    } else if (vidasEnemigo === 0) {
        crearMensajeFinal('Ganaste 🎉');
        deshabilitarBotones();
    }
}

// Imprime y realiza ataques
const ataque = (ataque) => {
    let ataqueEnemigo = AtaqueAleatorio();
    crearMensaje(ataque, ataqueEnemigo);
}

// Creación de mensaje de batalla, ataques y resultado
const crearMensaje = (ataque, ataqueEnemigo) => {
    let parrafo = document.createElement('p');
    let resultado = combate(ataque, ataqueEnemigo);
    parrafo.innerHTML = `Tu personaje atacó con ${ataque}, el personaje del enemigo atacó con ${ataqueEnemigo} - ${resultado}`;
    seccionMensaje.appendChild(parrafo);
    revisarVidas();
}

// Ataque aleatorio
const AtaqueAleatorio = () => {
    return ataques[Math.floor(Math.random() * ataques.length)];
}

// Combate
const combate = (ataque, ataqueEnemigo) => {
    const winCase = {
        "Puño": "Barrida",
        "Patada": "Puño",
        "Barrida": "Patada"
    };
    if (winCase[ataque] === ataqueEnemigo) {
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        return "Ganaste 🎉";
    } else if (winCase[ataqueEnemigo] === ataque) {
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
        return "Perdiste";
    } else {
        return "Empate";
    }
}

// Renderizar reglas
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
    `;
}

// Reiniciar juego
const reiniciar = () => {
    location.reload();
}

// Iniciar juego al cargar la página
window.addEventListener('load', iniciarJuego);
