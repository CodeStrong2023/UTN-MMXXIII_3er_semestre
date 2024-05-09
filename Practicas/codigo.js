// 1 será piedra, 2 será papel y 3 será tijera.

function numero_pc(min, max){
    let num_pc = Math.floor(Math.random()*(max-min+1)+min)
    return num_pc
}

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra ✊"
    } else if(jugada == 2){
        resultado = "Papel ✋"
    } else if(jugada = 3){
        resultado = "Tijera ✌"
    }else {
        resultado = "Mal elegido"
    }
    return resultado
}

let max = 3
let min = 1
let pc = 0
let triunfos = 0
let perdidas = 0
//jugador = prompt("Elige : 1 Piedra, 2 Papel, 3 Tijera")
while(triunfos < 3 && perdidas < 3){
    pc = numero_pc(min,max)
    jugador = prompt("Elige : 1 Piedra, 2 Papel, 3 Tijera")


    //alert("Elige jugador"+jugador)

    //Eleccion de la pc
    alert("Pc eligio: "+eleccion(pc))
    alert("Tu eliges: "+eleccion(jugador))

    //Combate
    if(pc == jugador){
    alert("Empate")
    }else if(jugador == 1 && pc == 3){
    alert("GANASTE!!")
    triunfos = triunfos + 1
    }else if(jugador == 2 && pc== 1){
    alert("GANASTE!!")
    triunfos = triunfos + 1
    }else if(jugador == 3 && pc == 2){
        alert("GANASTE!!")
        triunfos = triunfos + 1
    }else{
    alert("Perdiste!")
    perdidas = perdidas + 1
    }

    alert("Ganaste"+triunfos+" veces. Perdiste"+perdidas+" veces.")
}