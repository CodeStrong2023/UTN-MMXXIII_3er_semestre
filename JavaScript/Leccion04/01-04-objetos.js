let x = 10; //variable tipo primitiva
console.log(x.length);

// Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculas a mayúsculas.
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //metodo o funcion de JavaScript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){ //Este es el método get
        return "El nombre es: " + this.nombre + ", Edad " + this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); //debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '53462572345';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto')
console.log(persona['apellido']); //accedemos como si fuera un arreglo
console.log('Usamos un ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Betancud'; //Cambiamos dinamicamente el valor de un objeto
delete persona.apellida; //eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Numero 1: la mas sencilla: concatenar cada valor de cada propiedad
console.log(persona.nombre+', '+persona.apellido);

//Numero 2: A traves de un ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: La funcion Objecto.values()
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log("Comenzamos a utilizar el método get");
console.log(persona.nombreEdad);

console.log("Comenzamos con el método get para idiomas");
persona.lang = "en";
console.log(persona.lang);

function Persona3(nombre,apellido,email){ //Contructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona3("Leo","Lopez","Lopezl@gmail.com");
padre.nombre = "Luis"; //Modificamos el nombre
padre.telefono = "5492618282821"; //Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos la función
//console.log(madre.telefono); //La propiedad no esta definida
let madre = new Persona3("Laura", "Contrera", "Contreral@gmail.com");
console.log(madre);

console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//Caso objeto 1
let miObjeto = new Object(); //Esta es una opción formal
//Caso objeto 2
let miObjeto2 = {}; //Esta opción es breve y recomendada

//Caso string 1
let miCadena1 = new String("Hola"); //Sintaxis formal

//Caso string 2
let miCadena2 = "Hola" //Esta es la sintaxis simplificada y recomendada

//Caso con números 1
let miNumero = new Number(1); //Es formal no recomendable
//Caso con números 2
let miNumero2 = 1; //Sintaxis recomendada

//Caso boolean 1
let miArreglo1 = new Array(); //Formal
//Caso boolean 2
let miArreglo2 = []; //Sintaxis recomendada

//Caso function 1
let miFuncion1 = new Function(); //Todo despues de new es considerado objeto
//Caso funtion 2
let miFuncion2 = ()=>{}; //Notación simplificada y recomendada

//Uso del prototype
Persona3.prototype.telefono = "2618383832";
console.log(padre);
console.log(madre.telefono);
madre.telefono = "5492618282821";
console.log(madre.telefono);

//Uso de call
let Persona4 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto2: function(titulo, telefono){
        return titulo + ": " + this.nombre + " " + this.apellido + " " + telefono;
        //return this.nombre + " " + this.apellido;
    }

}

let Persona5 = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(Persona4.nombreCompleto2("Lic.", "5492618484845"))
console.log(Persona4.nombreCompleto2.call(Persona5, "Ing.", "5492618585856"))

//Método aplly
let arreglo = ["Ing.", "5492618686865"]
console.log(Persona4.nombreCompleto2.apply(Persona5, arreglo));

