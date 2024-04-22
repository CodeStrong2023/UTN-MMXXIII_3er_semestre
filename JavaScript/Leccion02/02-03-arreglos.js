//const autos = new Array('Ferrari','Renault','BMW'); sintaxis vieja

const autos = ['Ferrari','Renault','BMW'];
console.log(autos);

//recorrer un arreglo
console.log(autos[0]);
console.log(autos[1]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ":" +autos[i]);
}

//modificar un arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

//agregar un elemento al final del arreglo
autos.push('Audi');
console.log(autos);

// tercera forma de agregar teniendo cuidado
autos[6] = 'renault';
console.log(autos);

//preguntar si es un arrayu
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
