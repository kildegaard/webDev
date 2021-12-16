"use strict";
// Primer archivito sencillo en TS
let mensaje = 'Hola, este es mi primer TS!';
console.log(mensaje);
let nombre = 'Gus';
mensaje = 'Mi nombre es ${nombre}';
console.log(mensaje);
var gatos;
(function (gatos) {
    gatos[gatos["pepe"] = 0] = "pepe";
    gatos[gatos["coco"] = 1] = "coco";
    gatos[gatos["chuzo"] = 2] = "chuzo";
    gatos[gatos["pulu"] = 3] = "pulu";
})(gatos || (gatos = {}));
var array = [1, 2, 3, 4, 5];
console.log(array[2]);
var otroArray = [1, 2, 3, 4];
console.log(otroArray[0]);
var [x, y, ...etc] = array;
console.log(etc[0]);
console.log(typeof etc, typeof etc[0], typeof array, typeof gatos, typeof gatos.pepe);
let persona = { nombre: 'Gus', edad: 33 };
console.log(persona['nombre']);
console.log(persona.nombre);
let msg = `Hola, soy ${persona.nombre} y tengo ${persona.edad} años`;
console.log(msg);
class Persona {
    constructor(nom, ape) {
        this.añoNac = 1988;
        this.nombre = nom;
        this.apellido = ape;
    }
    toString() {
        return this.nombre + this.apellido;
    }
    edad(añoActual) {
        return añoActual - this.añoNac;
    }
}
let gus = new Persona('Gustavo', 'Kildegaard');
console.log(`Soy ${gus.nombre} ${gus.apellido} y tengo ${gus.edad(2021)} años.`);
