
//let persona3 = new persona('Carla','Ponce'); //Error: persona is not defined

class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
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
        return this.nombre + ' ' + this.apellido;
    }

}

class empleado extends persona {
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
        return this.departamento;
    }
}





let persona1 = new persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);

let persona2 = new persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);

let empleado1 = new empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString 
console.log(empleado1.toString());
console.log(persona1.toString());