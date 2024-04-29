miFuncion(8,2);

function miFuncion(a,b){
    return a+b;
}
// llamando la funcion
miFuncion(5,4)

let resultado = miFuncion(6,7);
console.log(resultado);

// Funcion de tipo expresion
let x = function(a,b){return a+b};
resultado = x(5,6);
console.log(resultado);

// Funcion de tipo self e invoking
(function(a,b){
    console.log('Ejecutando la funcion ' + (a+b));
})(3,4);

console.log(typeof miFuncion);

function miFuncion2(a,b){
    console.log(arguments.length);
}

miFuncion2(10,20);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

// Funciones de tipo flecha
const sumarFuncionFlecha = (a,b) => a+b;
resultado = sumar(3,4);
console.log(resultado);

let sumar = function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b + arguments[2];
}
resultado = sumar(3,5,9);
console.log(resultado);

let respuesta = sumarTodo(5,4,13,10,9);
console.log(respuesta)

function sumarTodo(){
    let suma = 0;
    for(let i=0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

//tipòs primitivos
let k = 10; 
function cambiarValor(a){
    a = 20;
}

cambiarValor(k);
console.log(k);

const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}
console.log(persona);

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);
console.log(persona);