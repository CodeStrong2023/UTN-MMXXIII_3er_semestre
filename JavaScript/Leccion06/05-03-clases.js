
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
}





let persona1 = new persona('Martin', 'Perez');
console.log(persona1.nombre);
persona1.nombre='Juan Carlos';
console.log(persona1.nombre);

let persona2 = new persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre='Maria Laura';
console.log(persona2.nombre);

let empleado1 = new empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);  
console.log(empleado1.nombre);
