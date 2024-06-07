//let persona3 = new persona('Carla','Ponce'); //Error: persona is not defined

class Persona { //Clase padre

    static contadorPersonas = 0; //Atributo estático
    //email = 'Valor default email'; //Atributo no estático

    static get MAX_OBJ(){ // Este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el máximo de objetos permitidos')
        }
        
        //console.log('Se incrementa el contador: '+Persona.contadorPersonas);
    }

    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    nombreCompleto() {
        return this.idPersona +' '+this.nombre+' '+ this.apellido;
    }
    //Sobreescribiendo al metodo clase padre (Objet)
    toString() { //regresa un string
        //se aplica el polimorfismo. (multiples formas en tiempo de ejecucion)
       //el metodo que se ejecuta depende si una referencia padre o hija
       return this.nombreCompleto();
   }

   static saludar(){
        console.log("Saludos desde este método static.");
   }

   static saludar2(persona){
    console.log(persona.nombre+' '+persona.apellido);
   }

}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this.departamento = departamento;
    }

    getDepartamento() {
        return this.departamento;
    }

    setDepartamento(departamento) {
        this.departamento = departamento;
    }

    nombreCompleto() {
       
        return super.nombreCompleto() + ' ' + this.departamento;
    }

  //Sobreescribiendo al metodo clase padre (Objet)
    toString() { //regresa un string
         //se aplica el polimorfismo. (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si una referencia padre o hija
        return this.nombreCompleto();
    }
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString 
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); no se utiliza desde el objeto

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
// console.log(Persona.email); No puede acceder desde la clase

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10; //No se puede modificar, ni alterar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());

let persona5 = new Persona('Liliana', 'Paz')
console.log(persona5.toString());