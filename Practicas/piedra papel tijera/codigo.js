const jugada = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const reiniciar =() => { location.reload();}

const eleccion = (jugada) => {
    if (jugada == 1) {
        return "Piedra 🥌";
    } else if (jugada == 2) {
        return "Papel 🗞";
    } else if (jugada == 3) {
        return "Tijera ✂️";
    } else {
        return "Opcion no valida";
    }
}





// 1 piedra, 2 papel 3 tijeta
let jugador = 0;
let pc = jugada(1, 3);
let triunfos = 0;
let perdidas = 0;
console.log(pc);

while (triunfos < 3 && perdidas < 3) {
    pc = jugada(1, 3);
    jugador = parseInt(prompt("1. Piedra, 2. Papel, 3. Tijera"));

    //elecciones
     alert( "Jugador Eligio" + eleccion(jugador));

    //PC ELIGIO
    alert("PC eligio: " + eleccion(pc));
    eleccion(pc);



    // Combatte
    if (jugador == pc) {
        alert("Empate");
    } else if (jugador == 1 && pc == 3) {
        alert("Ganaste");
        triunfos++; 
    } else if (jugador == 2 && pc == 1) {
        alert("Ganaste");
        triunfos++;
    } else if (jugador == 3 && pc == 2) {
        alert("Ganaste");
        triunfos++;
    } else {
        alert("Elegiste Perder");
        perdidas++;
    }
}



    alert("Ganaste: " + triunfos + " veces." + " Perdidas: " + perdidas + " veces.");
