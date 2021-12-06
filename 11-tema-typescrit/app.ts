// Primer archivito sencillo en TS

let mensaje: string = 'Hola, este es mi primer TS!';
console.log(mensaje);

let nombre: string = 'Gus';
mensaje = 'Mi nombre es ${nombre}'
console.log(mensaje);

enum gatos {
    pepe,
    coco,
    chuzo,
    pulu
}

var array: number[] = [1, 2, 3, 4, 5];
console.log(array[2])

var otroArray = [1, 2, 3, 4];
console.log(otroArray[0])

var [x, y, ...etc] = array;
console.log(etc[0]);
console.log(typeof etc, typeof etc[0], typeof array, typeof gatos, typeof gatos.pepe)

let persona = { nombre: 'Gus', edad: 33 };
console.log(persona['nombre']);
console.log(persona.nombre);
let msg = `Hola, soy ${persona.nombre} y tengo ${persona.edad} años`;
console.log(msg);

class Persona {
    // Vamos a ver si me acuerdo cómo es la estructura de una clase en TS
    readonly nombre: string;
    readonly apellido: string;
    private añoNac: number = 1988;

    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }

    public toString(): string {
        return this.nombre + this.apellido;
    }
    public edad(añoActual: number): number {
        return añoActual - this.añoNac;
    }
}

let gus: Persona = new Persona('Gustavo', 'Kildegaard');

console.log(`Soy ${gus.nombre} ${gus.apellido} y tengo ${gus.edad(2021)} años.`);
